"use client";

import { Compass, Code2, PenTool, Video, TrendingUp, Bot } from "lucide-react";
import { Card, Badge } from "@/components/ui/primitives";
import { AnimatedFeatureIcon } from "@/components/svg/AnimatedIcon";
import { skills } from "@/data/content";

const icons = [Code2, PenTool, Video, TrendingUp, Bot, Compass];

export function SkillGrid() {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {skills.map((s, i) => {
        const Icon = icons[i % icons.length];
        return (
          <Card key={s.name} className="p-5">
            <AnimatedFeatureIcon gradient="bg-gradient-to-br from-brand-500 to-accent-500">
              <Icon className="h-6 w-6" strokeWidth={2.2} />
            </AnimatedFeatureIcon>
            <h3 className="mt-3 font-extrabold">{s.name} <span className="ltr text-xs font-normal text-slate-400">· {s.en}</span></h3>
            <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{s.detail}</p>
            <p className="mt-2">
              <Badge tone={s.demand.includes("خیلی") ? "brand" : s.demand.includes("انفجار") ? "amber" : "slate"}>
                تقاضا: {s.demand}
              </Badge>
            </p>
          </Card>
        );
      })}
    </div>
  );
}
