"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function SaiOfficeCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 }}
      className="w-full mt-12 mb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Poster Design</span>
      </div>
      <div className="w-full border border-border shadow-lg overflow-hidden bg-card">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 p-6">
          <div className="w-full md:w-1/3 aspect-square relative rounded-lg overflow-hidden shadow-inner">
            <Image
              src="/Blue Modern Business Webinar Poster.png"
              alt="SAI Office - Ramco Group"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-2/3">
            <h4 className="text-lg font-semibold text-foreground mb-1">SAI Office</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I participated in creating a poster to invite all staff to an Easyflow training. The training taught SAI Office staff and employees from other Ramco Group companies how to use the new application for setting KPIs.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Design details: created using Canvas on a 1080 × 1080 canvas and styled with the company's main color palette.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
