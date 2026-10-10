import Image from "next/image";
import { clients } from "@/lib/clients";

/**
 * "Recent work" card: the client's live-site screenshot on the left, fading
 * into the text on the right (on phones it sits on top and fades down).
 * The screenshot comes from lib/clients.ts by client name, so a client added
 * there with a thumb gets its image here automatically.
 */
export default function ProofCard({
  client,
  body,
  location,
  tag,
  href,
}: {
  client: string;
  body: string;
  location?: string;
  tag?: string;
  href?: string;
}) {
  const thumb = clients.find((c) => c.name === client)?.thumb;

  return (
    <div className="group relative flex flex-col md:flex-row overflow-hidden rounded-2xl border border-zinc-800 bg-[#0d0d0d] hover:border-amber-400/30 transition-colors">
      {thumb && (
        <div className="relative h-40 md:h-auto md:w-[34%] flex-shrink-0 overflow-hidden">
          <Image
            src={thumb}
            alt={`${client} website`}
            fill
            sizes="(min-width: 768px) 360px, 100vw"
            className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
          {/* fade the screenshot into the card */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent from-25% via-[#0d0d0d]/75 via-70% to-[#0d0d0d]" />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
        </div>
      )}
      <div className="relative flex-1 p-7 md:pl-2">
        <div className="mb-1 flex flex-wrap items-center gap-3">
          <p className="text-xl font-bold text-amber-400">{client}</p>
          {tag && (
            <span className="rounded-full border border-amber-400/30 bg-amber-400/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
              {tag}
            </span>
          )}
        </div>
        {location && <p className="text-sm text-zinc-500">{location}</p>}
        <p className="mt-3 text-zinc-400 leading-relaxed">{body}</p>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
          >
            Visit {href.replace(/^https?:\/\//, "")} →
          </a>
        )}
      </div>
    </div>
  );
}
