import { motion } from "framer-motion";

export function TrustIndicators() {
  const stats = [
    "20+ Years Experience",
    "Enterprise Architecture Leadership",
    "AI & Knowledge Platforms",
    "National Scale Digital Programs",
    "Cloud & Modernization Expertise"
  ];

  return (
    <section className="bg-primary text-white py-12 border-b border-secondary">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-4 opacity-80">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-sm font-medium tracking-wide uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {stat}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}