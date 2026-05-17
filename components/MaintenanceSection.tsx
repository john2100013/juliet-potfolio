"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiMonitor,
  FiTool,
  FiCpu,
  FiHardDrive,
  FiWind,
  FiSettings,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";
import Image from "next/image";

const activities = [
  {
    id: 1,
    title: "Desktop Preventive Maintenance",
    image: "/desktop.jpeg",
    description:
      "Performed preventive maintenance on desktop computers across various Ramco Group Companies branches.",
    details: [
      "Opening desktop computer cases",
      "Using an electric air blower to remove accumulated dust",
      "Cleaning internal and external hardware components using foam cleaner",
      "Inspecting motherboard and hardware connections",
      "Checking cooling fans and airflow systems",
      "Cleaning RAM slots and power supply vents",
    ],
    additionalInfo: [
      "Optimizing system performance by clearing temporary/cache files",
      "Removing unnecessary startup applications",
      "Running diagnostics checks",
      "Improving device performance and stability",
    ],
    tip: 'Used Windows Run command: %temp% to clear temporary files and improve computer speed.',
    icons: [FiMonitor, FiWind, FiCpu, FiSettings],
  },
  {
    id: 2,
    title: "Laptop Troubleshooting at SAI OFFICE",
    image: "/placeholder-maintenance-2.jpg",
    description:
      "Provided technical support for an employee laptop experiencing network connectivity issues at SAI OFFICE.",
    details: [
      "Identified unauthorized/cracked software installation",
      "Determined the device had been removed from the company domain due to security policy violations",
      "Removed the unauthorized software",
      "Restored proper domain connectivity",
      "Reconfigured network settings",
      "Successfully restored internet access",
    ],
    icons: [FiHardDrive, FiTool, FiZap, FiCheckCircle],
  },
];

const tools = [
  { name: "Air Blower", icon: FiWind },
  { name: "Foam Cleaner", icon: FiTool },
  { name: "Screwdrivers", icon: FiSettings },
  { name: "Diagnostics", icon: FiCpu },
];

export default function MaintenanceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section id="maintenance" className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Section 1
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Preventive Maintenance & Hardware Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desktop cleaning, hardware diagnostics, system optimization, and
            technical troubleshooting.
          </p>
        </motion.div>

        {/* Tools Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tools.map(({ name, icon: Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-md"
            >
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Activity Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              className="perspective-1000"
            >
              <motion.div
                className={`relative w-full transition-transform duration-700 transform-style-3d ${
                  flippedCard === activity.id ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    flippedCard === activity.id ? "rotateY(180deg)" : "rotateY(0)",
                }}
              >
                {/* Front of Card */}
                <div
                  className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden group">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Floating Icons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {activity.icons.map((Icon, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="p-2 bg-card/80 backdrop-blur-sm rounded-lg border border-border"
                        >
                          <Icon className="w-5 h-5 text-primary" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {activity.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2 mb-4">
                      {activity.details.slice(0, 4).map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.9 + i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {activity.tip && (
                      <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                        <p className="text-sm text-primary font-medium">
                          💡 Pro Tip: {activity.tip}
                        </p>
                      </div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        setFlippedCard(
                          flippedCard === activity.id ? null : activity.id
                        )
                      }
                      className="mt-4 w-full py-3 bg-secondary text-secondary-foreground rounded-lg font-medium border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      View More Details
                    </motion.button>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 bg-card rounded-2xl border border-border shadow-xl p-6 overflow-auto"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {activity.title} - Full Details
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {activity.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {activity.additionalInfo && (
                    <>
                      <h4 className="font-semibold text-foreground mb-3">
                        Additional Tasks:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {activity.additionalInfo.map((info, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-foreground"
                          >
                            <FiZap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{info}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFlippedCard(null)}
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium"
                  >
                    Back to Overview
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
