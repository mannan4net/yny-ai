import { motion } from "framer-motion";

export function TrustIndicators() {
  const stats = [
    { value: "20+", label: "Years", desc: "Of Enterprise Experience" },
    { value: "5+", label: "Programs", desc: "National-Scale Programs Delivered" },
    { value: "4", label: "Platforms", desc: "AI & Knowledge Platforms" },
    { value: "3", label: "Areas", desc: "Core Practice Areas" },
    { value: "Global", label: "Operations", desc: "Dubai HQ" }
  ];

  return (
    <section className="bg-primary text-white py-16 border-b border-secondary">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-start border-l border-secondary pl-6 first:border-0 md:first:border-l md:first:pl-6 first:pl-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm font-semibold tracking-wide text-slate-300 uppercase mb-1">{stat.label}</div>
              <div className="text-xs text-slate-400 max-w-[150px] leading-relaxed">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
