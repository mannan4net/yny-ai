import { motion } from "framer-motion";
import { engagementModelsData } from "@/data";

export function EngagementModels() {
  return (
    <section className="py-24 bg-white border-b border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Engagement Models</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {engagementModelsData.map((model, index) => (
            <motion.div
              key={index}
              className="px-6 py-3 border border-border text-primary font-medium hover:bg-muted transition-colors cursor-default"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {model}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}