export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-display text-xl font-extrabold tracking-tight">
        <span className="text-gradient-blue">MD</span>
        <span className="text-brand-magenta">.</span>
        <span className="text-gradient-blue">IA</span>
      </span>
    </div>
  );
}
