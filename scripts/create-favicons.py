"""Generate crisp favicon assets from the square Wenthura logo."""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public" / "img"
PUBLIC = ROOT.parent
NAVY = (13, 27, 62, 255)


def load_square_logo() -> Image.Image:
    for name in ("Logo - White Square.png", "Logo - Blue Square.pub.png", "logo-dark.png"):
        path = ROOT / name
        if not path.exists():
            continue
        img = Image.open(path).convert("RGBA")
        if img.width == img.height:
            return img
    raise FileNotFoundError("No square logo source found in public/img")


def fit_on_square(src: Image.Image, size: int, padding: float = 0.12) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), NAVY)
    inner = int(size * (1 - padding * 2))
    ratio = min(inner / src.width, inner / src.height)
    w, h = max(1, int(src.width * ratio)), max(1, int(src.height * ratio))
    resized = src.resize((w, h), Image.Resampling.LANCZOS)
    x = (size - w) // 2
    y = (size - h) // 2
    canvas.alpha_composite(resized, (x, y))
    return canvas


def save_png(img: Image.Image, path: Path) -> None:
    img.save(path, format="PNG", optimize=True)
    print(f"saved {path.name} {img.size}")


def main() -> None:
    src = load_square_logo()
    sizes = {
        "favicon-512.png": 512,
        "apple-touch-icon.png": 180,
        "favicon-32x32.png": 32,
        "favicon-16x16.png": 16,
    }
    icons = {}
    for filename, size in sizes.items():
        icon = fit_on_square(src, size)
        save_png(icon, ROOT / filename)
        icons[size] = icon
        if filename == "favicon-32x32.png":
            save_png(icon, PUBLIC / "favicon-32x32.png")
        if filename == "apple-touch-icon.png":
            save_png(icon, PUBLIC / "apple-touch-icon.png")

    ico_path = PUBLIC / "favicon.ico"
    icons[32].save(
        ico_path,
        format="ICO",
        sizes=[(16, 16), (32, 32)],
        append_images=[icons[16]],
    )
    print(f"saved {ico_path.name}")

    # Keep legacy logo.png for schema; tab uses square favicons now.
    save_png(icons[32], ROOT / "favicon.png")


if __name__ == "__main__":
    main()
