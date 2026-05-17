"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCalendar,
  FiBookOpen,
  FiWifi,
  FiTool,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";

const timelineItems = [
  {
    icon: FiCalendar,
    title: "Beginning of Attachment",
    date: "Week 1",
    description:
      "Started my IT attachment journey at Ramco Group Companies. Orientation and introduction to the IT department and team.",
    color: "bg-blue-500",
  },
  {
    icon: FiBookOpen,
    title: "Learning & Observation",
    date: "Week 2-3",
    description:
      "Observed senior technicians, learned company IT infrastructure, and familiarized with standard procedures.",
    color: "bg-cyan-500",
  },
  {
    icon: FiTool,
    title: "Preventive Maintenance",
    date: "Week 4-5",
    description:
      "Began hands-on maintenance tasks including desktop cleaning, dust removal, and system optimization.",
    color: "bg-teal-500",
  },
  {
    icon: FiWifi,
    title: "Network Troubleshooting",
    date: "Week 6-7",
    description:
      "Assisted in diagnosing network issues, testing cables, and resolving connectivity problems.",
    color: "bg-emerald-500",
  },
  {
    icon: FiUsers,
    title: "Technical Support",
    date: "Week 8-9",
    description:
      "Provided direct support to employees, handled 3CX phone issues, and performed cable management.",
    color: "bg-green-500",
  },
  {
    icon: FiAward,
    title: "Skills Development",
    date: "Week 10-11",
    description:
      "Refined technical skills, gained confidence in troubleshooting, and worked independently on tasks.",
    color: "bg-lime-500",
  },
  {
    icon: FiCheckCircle,
    title: "End of Attachment",
    date: "Week 12",
    description:
      "Successfully completed attachment with comprehensive IT support experience and practical skills.",
    color: "bg-primary",
  },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="timeline"
      className="py-20 lg:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Slightly different background for this section only */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            My Journey
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Attachment Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A chronological journey through my IT internship experience at Ramco
            Group Companies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 origin-top sm:-translate-x-1/2"
          />

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
                className={`relative flex items-start gap-4 sm:gap-8 ${
                  index % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse sm:text-right"
                }`}
              >
                {/* Content */}
                <div className="flex-1 ml-12 sm:ml-0">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-card rounded-xl p-5 sm:p-6 border border-border shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 !== 0 ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.8 + index * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className={`absolute left-0 sm:left-1/2 sm:-translate-x-1/2 z-10 p-3 ${item.color} rounded-full shadow-lg ring-4 ring-background`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden sm:block flex-1" />
              </motion.div>
            ))}
          </div>

          {/* End star */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 2, type: "spring" }}
            className="absolute left-4 sm:left-1/2 -bottom-4 sm:-translate-x-1/2 p-3 bg-primary rounded-full shadow-lg ring-4 ring-background"
          >
            <FiStar className="w-6 h-6 text-primary-foreground" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
