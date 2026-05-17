"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiPhone,
  FiLink2,
  FiCheckCircle,
  FiAlertCircle,
  FiTool,
  FiBox,
  FiShield,
} from "react-icons/fi";
import Image from "next/image";

const activities = [
  {
    id: 1,
    title: "3CX Extension Phone Repair",
    image: "/3cx.jpeg",
    icon: FiPhone,
    problem: "Faulty 3CX extension phone connection issue",
    solution:
      "Diagnosed and repaired a faulty 3CX extension phone connection issue. Troubleshooting revealed that the Ethernet cable connected to the phone was worn out and causing communication failure.",
    actions: [
      "Tested network connectivity",
      "Replaced damaged Ethernet cable",
      "Verified VoIP communication",
      "Restored extension functionality",
    ],
  },
  {
    id: 2,
    title: "Cable Coiling Issue Resolution",
    image: "/placeholder-cable-coil.jpg",
    icon: FiLink2,
    problem: "Excessive cable coiling affecting signal stability",
    solution:
      "Resolved another 3CX connectivity issue caused by excessive cable coiling which affected signal stability and cable organization.",
    actions: [
      "Reorganizing cable routing",
      "Straightening Ethernet cables",
      "Improving cable management",
      "Enhancing workspace safety and network reliability",
    ],
  },
  {
    id: 3,
    title: "Structured Cable Management",
    image: "/cable.jpeg",
    icon: FiBox,
    problem: "Exposed cables creating safety hazards",
    solution:
      "Performed structured cable management to improve workplace safety and infrastructure organization.",
    actions: [
      "Organized exposed cables into protective tubing",
      "Reduced cable clutter",
      "Prevented accidental cable damage",
      "Improved office safety standards",
      "Enhanced overall network organization",
      "Maintained cleaner workstation environments",
    ],
  },
];

export default function CablesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cables" className="py-20 lg:py-32" ref={ref}>
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
            Section 3
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            3CX Support & Cable Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3CX phone troubleshooting, Ethernet cable replacement, cable
            straightening, and workspace cable safety.
          </p>
        </motion.div>

        {/* Key Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {[
            { icon: FiPhone, label: "3CX VoIP" },
            { icon: FiLink2, label: "Cable Testing" },
            { icon: FiTool, label: "Repairs" },
            { icon: FiShield, label: "Safety" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border shadow-md"
            >
              <item.icon className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Activity Cards */}
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-6 lg:gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-2xl overflow-hidden border border-border shadow-xl group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={600}
                  height={350}
                  className="object-cover w-full h-64 lg:h-80 transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Icon badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  className="absolute top-4 left-4 p-3 bg-card/90 backdrop-blur-sm rounded-xl border border-border shadow-lg"
                >
                  <activity.icon className="w-6 h-6 text-primary" />
                </motion.div>

                {/* Animated line effect */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.line
                    x1="10%"
                    y1="50%"
                    x2="90%"
                    y2="50%"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="text-primary/30"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{
                      delay: 1 + index * 0.2,
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 3,
                    }}
                  />
                </svg>
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <activity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {activity.title}
                    </h3>
                  </div>

                  {/* Problem */}
                  <div className="flex items-start gap-2 mb-4 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                    <FiAlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-destructive">
                        Issue:
                      </span>
                      <p className="text-sm text-destructive/80">
                        {activity.problem}
                      </p>
                    </div>
                  </div>

                  {/* Solution */}
                  <p className="text-muted-foreground mb-4">{activity.solution}</p>

                  {/* Actions */}
                  <h4 className="font-semibold text-foreground mb-3">
                    Actions Performed:
                  </h4>
                  <ul className="space-y-2">
                    {activity.actions.map((action, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.9 + i * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <FiCheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{action}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
