"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  FiMonitor,
  FiWifi,
  FiTool,
  FiServer,
  FiCheck,
  FiUsers,
} from "react-icons/fi";

const skills = [
  "Network Troubleshooting",
  "Preventive Maintenance",
  "Hardware Support",
  "Domain Troubleshooting",
  "Cable Management",
  "Technical Diagnostics",
  "End-User Support",
  "System Optimization",
];

const stats = [
  { icon: FiMonitor, value: 50, suffix: "+", label: "Devices Serviced" },
  { icon: FiWifi, value: 30, suffix: "+", label: "Network Issues Solved" },
  { icon: FiTool, value: 40, suffix: "+", label: "Maintenance Tasks" },
  { icon: FiUsers, value: 5, suffix: "", label: "Companies Visited" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView && ref.current) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        if (ref.current) {
          ref.current.textContent = Math.floor(start) + suffix;
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32" ref={ref}>
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
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            IT Intern at Ramco Group
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about technology and dedicated to providing excellent IT
            support and technical assistance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <FiServer className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  My Journey
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                During my attachment at Ramco Group Companies, I had the
                opportunity to work closely with experienced IT professionals
                and gain hands-on experience in various aspects of IT support
                and technical assistance.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                My role involved providing comprehensive IT support across
                multiple branches, troubleshooting network issues, performing
                preventive maintenance on computer systems, and ensuring smooth
                operation of the company&apos;s IT infrastructure.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <FiCheck className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map(({ icon: Icon, value, suffix, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-lg hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
