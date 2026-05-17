"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiWifi,
  FiServer,
  FiActivity,
  FiLink,
  FiCheckCircle,
  FiAlertTriangle,
  FiRefreshCw,
} from "react-icons/fi";
import Image from "next/image";

const networkSteps = [
  {
    icon: FiAlertTriangle,
    title: "Issue Identification",
    description: "Internet connectivity problems detected across network",
  },
  {
    icon: FiActivity,
    title: "Diagnostics",
    description: "Testing Ethernet ports and verifying cable connectivity",
  },
  {
    icon: FiServer,
    title: "Server Check",
    description: "Diagnosing possible server-side connection issues",
  },
  {
    icon: FiRefreshCw,
    title: "Resolution",
    description: "Restoring internet services and verifying connectivity",
  },
];

const troubleshootingDetails = [
  "Tested multiple Ethernet ports",
  "Verified cable connectivity",
  "Diagnosed possible server-side connection issues",
  "Performed network troubleshooting procedures",
  "Checked cable termination and switch connectivity",
  "Tested different network paths",
  "Assisted in restoring internet services",
];

export default function NetworkingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="networking" className="py-20 lg:py-32" ref={ref}>
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
            Section 2
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Network & Internet Troubleshooting
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Internet/server troubleshooting, network cable testing, domain
            troubleshooting, and connection diagnostics.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {networkSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-card rounded-xl p-6 border border-border shadow-lg group"
            >
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>

              <step.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>

              {/* Connector line */}
              {index < networkSteps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 origin-left"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image with animated elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl group">
              <Image
                src="/network-analy.jpeg"
                alt="Network Troubleshooting"
                width={600}
                height={400}
                className="object-cover w-full h-80 lg:h-96 transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay with animated network lines */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Animated connection lines */}
                <svg className="w-full h-full absolute inset-0">
                  <motion.line
                    x1="20%"
                    y1="30%"
                    x2="80%"
                    y2="30%"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary/50"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
                  />
                  <motion.line
                    x1="50%"
                    y1="20%"
                    x2="50%"
                    y2="80%"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary/50"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, repeatType: "loop", repeatDelay: 2 }}
                  />
                </svg>

                {/* Floating network icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-4 left-4 p-3 bg-card/90 backdrop-blur-sm rounded-lg border border-border shadow-lg"
                >
                  <FiWifi className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-4 right-4 p-3 bg-card/90 backdrop-blur-sm rounded-lg border border-border shadow-lg"
                >
                  <FiServer className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute top-4 right-4 p-3 bg-card/90 backdrop-blur-sm rounded-lg border border-border shadow-lg"
                >
                  <FiLink className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </div>

            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -right-4 px-4 py-2 bg-card rounded-xl border border-border shadow-lg flex items-center gap-2"
            >
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Connection Restored
              </span>
            </motion.div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <FiActivity className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Network Diagnostics
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Assisted in diagnosing and resolving internet connectivity
                issues within the company network infrastructure. Under the
                guidance of experienced technicians, I learned valuable
                troubleshooting techniques.
              </p>

              {/* Troubleshooting Details */}
              <h4 className="font-semibold text-foreground mb-4">
                Key Activities:
              </h4>
              <ul className="space-y-3 mb-6">
                {troubleshootingDetails.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Network diagram hint */}
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <FiWifi className="w-5 h-5" />
                  <span className="font-semibold">Skills Gained</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Network topology understanding, cable testing techniques, and
                  systematic troubleshooting methodology.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
