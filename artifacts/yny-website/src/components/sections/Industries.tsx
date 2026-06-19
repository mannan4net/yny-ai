import { motion } from "framer-motion";
import { industriesData } from "@/data";

export function Industries() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Industries We Serve</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 border border-border hover:border-primary hover:shadow-md transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-primary mb-6">{industry.name}</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="pl-4 border-l-4 border-primary">
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Challenges</h4>
                  <p className="text-sm text-primary leading-relaxed">{industry.challenges}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Solutions</h4>
                  <p className="text-sm text-primary leading-relaxed">{industry.solutions}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border mt-6">
                <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Business Value</h4>
                <p className="text-sm font-medium text-[hsl(var(--success))] leading-relaxed">{industry.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
