"use client";

import Image from "next/image";

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
  "/desktop.jpeg",
];

export default function SoftwareInstallationSection() {
  return (
    <section id="software-installation" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Section
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance">
            Software Installation — SAP
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Examples of SAP software installation screenshots and configuration
            captures from deployments.
          </p>
        </div>

        <div className="mt-8">
          <div className="overflow-hidden">
            <div className="marquee" aria-hidden>
              <div className="marquee__inner">
                <div className="marquee__group">
                  {images.map((src, i) => (
                    <div key={`a-${i}`} className="marquee__item">
                      <div className="relative w-64 h-44 rounded-lg overflow-hidden bg-card border border-border">
                        <Image src={src} alt={`SAP install ${i + 1}`} fill className="object-cover" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="marquee__group" aria-hidden>
                  {images.map((src, i) => (
                    <div key={`b-${i}`} className="marquee__item">
                      <div className="relative w-64 h-44 rounded-lg overflow-hidden bg-card border border-border">
                        <Image src={src} alt={`SAP install duplicate ${i + 1}`} fill className="object-cover" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          display: block;
        }

        .marquee__inner {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: scroll 20s linear infinite;
          align-items: center;
        }

        .marquee__group {
          display: flex;
          gap: 1rem;
        }

        .marquee__item {
          flex: 0 0 auto;
        }

        .marquee__inner:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee__inner {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
