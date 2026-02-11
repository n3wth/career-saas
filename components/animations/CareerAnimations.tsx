import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

/**
 * Career Growth Timeline
 * Shows 30-day progression to success
 */
export function CareerGrowthTimeline() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const milestones = [
    { day: "Day 1", text: "Know Your Worth", icon: "💡", color: "from-indigo-400" },
    { day: "Week 1", text: "Strong Resume", icon: "📄", color: "from-blue-400" },
    { day: "Week 2", text: "Interview Calls", icon: "📞", color: "from-purple-400" },
    { day: "Month 1", text: "Promotion!", icon: "🎉", color: "from-green-400" },
  ];

  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      <motion.div
        className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-green-500"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      {/* Milestones */}
      <div className="flex justify-between relative z-10">
        {milestones.map((milestone, i) => (
          <motion.div
            key={i}
            className="text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5 + i * 0.8, duration: 0.6 }}
          >
            <div className="text-5xl md:text-6xl mb-3">{milestone.icon}</div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-2">
              {milestone.day}
            </div>
            <div className="text-sm md:text-base text-gray-700 font-semibold">
              {milestone.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/**
 * Salary Negotiation Result
 * Animated salary increase reveal
 */
export function SalaryNegotiationResult({
  originalSalary = 120000,
  negotiatedSalary = 158400,
}: {
  originalSalary?: number;
  negotiatedSalary?: number;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const percentIncrease = (
    ((negotiatedSalary - originalSalary) / originalSalary) *
    100
  ).toFixed(0);

  return (
    <div ref={ref} className="text-center space-y-6">
      {/* Original salary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-gray-600">Original Offer</div>
        <div className="text-3xl md:text-4xl font-bold">
          ${originalSalary.toLocaleString()}
        </div>
      </motion.div>

      {/* Arrow up */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <svg className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto">
          <path
            d="M8 16V0m0 0l-4 4m4-4l4 4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* New salary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="text-green-600">Negotiated</div>
        <div className="text-4xl md:text-5xl font-bold text-green-600">
          ${negotiatedSalary.toLocaleString()}
        </div>
      </motion.div>

      {/* Increase percentage */}
      <motion.div
        className="text-2xl md:text-3xl font-bold text-green-600 bg-green-100 py-3 px-6 rounded-lg inline-block"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
      >
        +{percentIncrease}% Increase
      </motion.div>

      {/* Celebration */}
      <motion.div
        className="text-6xl md:text-7xl"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        🎉
      </motion.div>
    </div>
  );
}

/**
 * Job Application Status Flow
 * Shows progression through hiring funnel
 */
export function JobStatusFlow() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const statuses = [
    { label: "Applied", icon: "📤", delay: 0 },
    { label: "Reviewing", icon: "👀", delay: 0.3 },
    { label: "Interview", icon: "💬", delay: 0.6 },
    { label: "Offer", icon: "💼", delay: 0.9 },
  ];

  return (
    <div ref={ref} className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
      {statuses.map((status, i) => (
        <React.Fragment key={i}>
          <motion.div
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold text-lg md:text-2xl shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: status.delay, duration: 0.4 }}
          >
            {status.icon}
          </motion.div>

          {i < statuses.length - 1 && (
            <motion.div
              className="w-4 h-1 md:w-8 md:h-1 bg-indigo-300 rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: status.delay + 0.2, duration: 0.4 }}
              style={{ transformOrigin: "left" }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/**
 * Promotion Progress
 * Shows movement through career levels
 */
export function PromotionProgress() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const levels = [
    { title: "Senior Engineer", level: 1 },
    { title: "Staff Engineer", level: 2 },
    { title: "Principal Engineer", level: 3 },
  ];

  return (
    <div ref={ref} className="space-y-4">
      {levels.map((level, i) => (
        <motion.div
          key={i}
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: i * 0.3, duration: 0.5 }}
        >
          {i < 2 && (
            <motion.div
              className="absolute left-6 top-12 w-1 h-6 bg-gradient-to-b from-green-400 to-transparent"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ delay: i * 0.3 + 0.3, duration: 0.4 }}
              style={{ transformOrigin: "top" }}
            />
          )}

          <div className="flex items-center gap-4">
            <motion.div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                i === 0
                  ? "bg-blue-500"
                  : i === 1
                    ? "bg-purple-500"
                    : "bg-green-500"
              }`}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: i * 0.3, duration: 0.4 }}
            >
              {i + 1}
            </motion.div>
            <div className="flex-1">
              <div className="font-semibold">{level.title}</div>
              <div className="text-sm text-gray-600">
                {i === 0 && "Starting position"}
                {i === 1 && "6 months progress"}
                {i === 2 && "12 months achievement"}
              </div>
            </div>
            {i < 2 && (
              <motion.div
                className="text-2xl"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: i * 0.3 + 0.6, duration: 0.4 }}
              >
                ➜
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Value Proposition Highlight
 * Animated feature list
 */
export function FeatureHighlight({
  features,
}: {
  features: { icon: string; title: string; description: string }[];
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-100 hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
        >
          <div className="text-4xl mb-3">{feature.icon}</div>
          <div className="font-semibold text-lg mb-2">{feature.title}</div>
          <div className="text-sm text-gray-700">{feature.description}</div>
        </motion.div>
      ))}
    </div>
  );
}
