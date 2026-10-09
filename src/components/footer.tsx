import { SOCIAL_LINKS } from "@/utils/portfolio-data";

type FooterProps = {
  clockText: string;
};

export function Footer({ clockText }: FooterProps) {
  return (
    <footer className="mt-28 border-t border-white/10 bg-gradient-to-r from-cyan-500/10 via-transparent to-rose-500/10 py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-3xl font-bold text-white">
            Ankush <span className="text-cyan-300">Yadav</span>
          </h3>
          <p className="mt-3 max-w-sm text-gray-400">
            Full Stack Developer focused on clean architecture, immersive UI, and high-performance product delivery.
          </p>
          <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4">
            <p className="text-xs uppercase tracking-widest text-cyan-300">Present Moment</p>
            <p className="mt-2 text-xl font-semibold text-white">{clockText}</p>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Quick Links</h4>
          <div className="grid gap-2">
            {["Home", "About", "Skills", "Projects", "Testimonials", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-gray-300 hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Connect With Me</h4>
          <div className="mb-5 flex gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["8+ Projects", "60+ APIs", "97% Quality"].map((stat) => (
              <div key={stat} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center text-sm text-gray-200">
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
