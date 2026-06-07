"""Create transparent Wenthura logo variants for web use."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public" / "img"


def crop_transparent(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    if bbox:
        return img.crop(bbox)
    return img


def remove_light_bg(img: Image.Image, threshold: int = 248) -> Image.Image:
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if r >= threshold and g >= threshold and b >= threshold:
                pixels[x, y] = (r, g, b, 0)
    return crop_transparent(img)


def extract_white_logo(img: Image.Image, threshold: int = 120) -> Image.Image:
    """Keep bright text and orange accent from LinkedIn banner; remove dark blue bg."""
    img = img.convert("RGBA")
    pixels = img.load()
    w, h = img.size
    min_x, min_y, max_x, max_y = w, h, 0, 0
    found = False
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            brightness = (r + g + b) / 3
            is_orange = r > 180 and g < 140 and b < 80
            if brightness > threshold or is_orange:
                found = True
                min_x, min_y = min(min_x, x), min(min_y, y)
                max_x, max_y = max(max_x, x), max(max_y, y)
            else:
                pixels[x, y] = (r, g, b, 0)
    if found:
        pad = 8
        bbox = (
            max(0, min_x - pad),
            max(0, min_y - pad),
            min(w, max_x + pad + 1),
            min(h, max_y + pad + 1),
        )
        return img.crop(bbox)
    return crop_transparent(img)


def main():
    dark_src = ROOT / "logo-dark.png"
    if not dark_src.exists():
        dark_src = ROOT / "logo.png"

    white_src = ROOT / "Logo - Blue LinkedIn.png"

    if dark_src.exists():
        dark = remove_light_bg(Image.open(dark_src))
        dark.save(ROOT / "logo-dark.png", optimize=True)
        print(f"logo-dark.png  {dark.size}")

    if white_src.exists():
        white = extract_white_logo(Image.open(white_src))
        white.save(ROOT / "logo-white.png", optimize=True)
        print(f"logo-white.png {white.size}")

    if (ROOT / "logo-dark.png").exists():
        dark = Image.open(ROOT / "logo-dark.png")
        dark.save(ROOT / "logo.png", optimize=True)
        dark.save(ROOT.parent / "logo.png", optimize=True)
        print("Updated logo.png with transparent dark version")


if __name__ == "__main__":
    main()
