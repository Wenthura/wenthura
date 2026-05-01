"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  MosaicTileData,
  MosaicTileNetwork,
  MosaicTileSecurity,
  MosaicTilePayment,
  MosaicTileGrowth,
} from "@/components/illustrations";
import type { FC } from "react";

const tiles: { Tile: FC<{ className?: string }>; span: string; speed: number }[] = [
  { Tile: MosaicTileData,     span: "col-span-6 row-span-2 h-[60vh]", speed: 80 },
  { Tile: MosaicTileNetwork,  span: "col-span-3 row-span-1 h-[28vh]", speed: -60 },
  { Tile: MosaicTileSecurity, span: "col-span-3 row-span-1 h-[28vh]", speed: 40 },
  { Tile: MosaicTilePayment,  span: "col-span-3 row-span-1 h-[28vh]", speed: -30 },
  { Tile: MosaicTileGrowth,   span: "col-span-3 row-span-1 h-[28vh]", speed: 60 },
];

function MosaicTileItem({
  Tile,
  span,
  speed,
}: (typeof tiles)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-xl border border-ink-700/50 ${span}`}>
      <motion.div style={{ y }} className="absolute -inset-y-12 inset-x-0">
        <Tile className="h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-50/50 to-transparent" />
    </div>
  );
}

export function Mosaic() {
  return (
    <section className="container-p py-24">
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="eyebrow">In Motion</span>
          <h2 className="section-title max-w-xl">Engineered for scale, crafted with care.</h2>
        </div>
        <p className="max-w-md text-sm text-ink-400">
          From cards in hand to cloud at the edge — our work spans hardware,
          software, and strategy.
        </p>
      </div>

      <div className="grid grid-cols-6 auto-rows-[14vh] gap-4">
        {tiles.map((t, i) => (
          <MosaicTileItem key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
