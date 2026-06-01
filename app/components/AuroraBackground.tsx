export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-1/3 left-1/4 h-[60vh] w-[60vh] rounded-full bg-gold/25 blur-[120px] animate-aurora" />
      <div className="absolute top-1/4 -right-1/4 h-[55vh] w-[55vh] rounded-full bg-haze/20 blur-[130px] animate-aurora [animation-delay:-7s]" />
      <div className="absolute -bottom-1/4 left-1/3 h-[50vh] w-[50vh] rounded-full bg-gold-deep/20 blur-[140px] animate-aurora [animation-delay:-14s]" />
    </div>
  );
}
