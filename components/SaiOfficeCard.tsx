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
      <div className="w-full border border-border shadow-lg overflow-hidden bg-card">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 p-6">
          <div className="w-full md:w-1/3 h-44 md:h-40 relative rounded-lg overflow-hidden shadow-inner">
            <Image
              src="/sai-office.png"
              alt="SAI Office - Ramco Group"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-2/3">
            <h4 className="text-lg font-semibold text-foreground mb-1">SAI Office</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              its part of re a member of Ramco Group, Sai Office comprises of 5 companies (Office Technologies Ltd, Officemart Ltd, Lino Stationers, and Sai) which mainly focus on IT Accessories, Stationeries, Office Automations, Air Conditioners, Office Furnitures and Leasing of Printers and Photocopiers.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
