import React from 'react';

interface BrowserMockupProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({ children, title = "localhost:3000", className = "" }) => {
  return (
    <div className={`relative flex flex-col overflow-hidden rounded-2xl bg-bg-card border border-border-subtle shadow-2xl ${className}`}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-4.5 py-3 bg-bg-base/50 border-b border-border-subtle/50 select-none">
        {/* Mac Traffic Lights */}
        <div className="flex items-center gap-1.5 flex-1">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        {/* Window Address Bar */}
        <div className="flex-2 max-w-[180px] sm:max-w-[280px] w-full text-center">
          <div className="px-3.5 py-0.5 rounded-lg bg-bg-base/80 border border-border-subtle/40 text-[10px] sm:text-xs font-mono text-text-muted/80 truncate">
            {title}
          </div>
        </div>
        {/* Empty flex spacer */}
        <div className="flex-1" />
      </div>
      {/* Content area */}
      <div className="flex-1 overflow-hidden bg-bg-card/30 p-4 sm:p-5">
        {children}
      </div>
    </div>
  );
};
