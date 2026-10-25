export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  /** "dark" = su sfondo scuro (ink): usa l'oro pieno. "light" = su sfondo
   * chiaro (bianco/panna/pergamena): usa una variante più scura per il contrasto. */
  tone?: "dark" | "light";
}) {
  const textColor = tone === "light" ? "text-gold-deep" : "text-gold";
  return (
    <div className={`flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase ${textColor} mb-5`}>
      <span className="w-8 h-px bg-gold inline-block" />
      {children}
    </div>
  );
}
