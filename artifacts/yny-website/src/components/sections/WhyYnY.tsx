import { motion } from "framer-motion";

export function WhyYnY() {
  const points = [
    "Architecture-led thinking",
    "Enterprise scalability",
    "AI-first innovation",
    "Proven delivery practices",
    "Business-driven outcomes"
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Why Organizations Choose YnY</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Organizations choose YnY because we combine enterprise architecture discipline with product innovation and AI expertise. We build systems that last, scale, and deliver measurable business value.
            </p>
            <div className="w-20 h-1 bg-white mb-8"></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-slate-100">{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}