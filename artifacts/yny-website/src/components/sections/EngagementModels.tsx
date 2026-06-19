import { motion } from "framer-motion";
import { engagementModelsData } from "@/data";

export function EngagementModels() {
  return (
    <section className="py-24 bg-white border-b border-border">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Engagement Models</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {engagementModelsData.map((model, index) => (
            <motion.div
              key={index}
              className="bg-muted border border-border p-8 hover:border-primary transition-colors flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-sm font-bold text-muted-foreground mb-4 opacity-60">
                {(index + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{model.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
