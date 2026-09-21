import React from 'react';
import { ArrowUpRight, GitBranch, ShieldCheck } from 'lucide-react';

export const StatsWidget: React.FC = () => {
  const commitDays = [
    { day: "M", commits: 60 },
    { day: "T", commits: 85 },
    { day: "W", commits: 70 },
    { day: "T", commits: 95 },
    { day: "F", commits: 120 },
    { day: "S", commits: 40 },
    { day: "S", commits: 55 },
  ];

  return (
    <div className="space-y-4">
      {/* Upper Metrics Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-bg-base/60 border border-border-subtle flex flex-col justify-between">
          <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase">Weekly Activity</span>
          <div className="flex items-baseline gap-1.5 mt-1.5">
            <span className="text-xl font-bold font-display text-text-primary">84 commits</span>
            <span className="inline-flex items-center gap-0.5 text-[9px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">
              <ArrowUpRight className="w-2.5 h-2.5" /> +18%
            </span>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-bg-base/60 border border-border-subtle flex flex-col justify-between">
          <span className="text-[9px] font-mono tracking-widest text-text-muted uppercase">Build Status</span>
          <div className="flex items-center gap-2 mt-2">
            <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
            <span className="text-xs font-semibold font-display text-text-primary">Deploy Success</span>
          </div>
        </div>
      </div>

      {/* Main Bar Chart */}
      <div className="p-3.5 rounded-xl bg-bg-base/60 border border-border-subtle">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5 text-accent-violet" />
            <span className="text-[10px] font-mono text-text-muted font-medium">branch: main</span>
          </div>
          <span className="text-[9px] font-mono text-accent-cyan bg-accent-cyan/10 px-1.5 py-0.5 rounded">active</span>
        </div>
        
        {/* Bars Container */}
        <div className="h-24 flex items-end justify-between gap-1.5 pt-4">
          {commitDays.map((day, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group cursor-pointer">
              {/* Bar */}
              <div 
                style={{ height: `${(day.commits / 120) * 80}%` }}
                className="w-full rounded-t-sm bg-gradient-to-t from-accent-blue/80 to-accent-cyan transition-all duration-500 group-hover:from-accent-cyan group-hover:to-accent-violet group-hover:shadow-[0_0_12px_rgba(56,189,248,0.4)]"
              />
              {/* Day label */}
              <span className="text-[9px] font-mono text-text-muted">{day.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
