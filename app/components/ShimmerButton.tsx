import Link from "next/link";
import { ReactNode } from "react";

export default function ShimmerButton({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="relative inline-flex items-center overflow-hidden rounded-full bg-gold-deep px-10 py-4 font-black text-base text-[#0a0a0f] shadow-[0_0_30px_-6px_rgba(200,162,75,0.6)] transition-transform hover:scale-[1.02]"
    >
      <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <span className="relative tracking-wide">{children}</span>
    </Link>
  );
}
