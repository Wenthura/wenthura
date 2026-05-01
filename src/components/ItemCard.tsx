import Link from "next/link";
import type { Item } from "@/lib/content";
import { getIllustration } from "@/components/illustrations";
import { ArrowUpRight } from "lucide-react";

export function ItemCard({
  item,
  href,
  index,
}: {
  item: Item;
  href?: string;
  index?: number;
}) {
  const Icon = item.icon;
  const content = (
    <div className="card-glass group flex h-full flex-col">
      <div className="relative h-52 w-full overflow-hidden rounded-lg border border-ink-700/50">
        {(() => {
          const Illustration = getIllustration(item.illustrationKey);
          return <Illustration className="absolute inset-0 h-full w-full transition-transform duration-[1.4s] ease-smooth group-hover:scale-105" />;
        })()}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-50/70 via-ink-50/20 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-glow/20 bg-white/90 text-glow shadow-sm">
          <Icon className="h-4 w-4" />
        </div>
        {typeof index === "number" && (
          <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-50/50">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="mt-5">
        <h3 className="display text-2xl text-ink-50">{item.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-ink-400">{item.blurb}</p>
        {href && (
          <span className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.3em] text-glow">
            Learn more
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        )}
      </div>
    </div>
  );
  return href ? <Link href={href}>{content}</Link> : content;
}
