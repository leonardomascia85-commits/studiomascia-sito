export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-gold mb-5">
      <span className="w-8 h-px bg-gold inline-block" />
      {children}
    </div>
  );
}
