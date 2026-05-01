"use client";

import dynamic from "next/dynamic";

const GlobeScene = dynamic(
  () => import("./GlobeScene").then((m) => m.GlobeScene),
  { ssr: false }
);

export function GlobeSceneLazy() {
  return <GlobeScene />;
}
