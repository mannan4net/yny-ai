import { motion } from "framer-motion";
import { Briefcase, Cpu, Code2 } from "lucide-react";

export function WhatWeDo() {
  const pillars = [
    {
      title: "Enterprise Architecture",
      description: "Technology strategy, modernization, governance, cloud transformation, solution architecture.",
      value: "Reduced technical risk. Faster decision-making. Systems built to last.",
      icon: <Briefcase className="w-8 h-8 text-primary" />
    },
    {
      title: "AI Platforms & Knowledge Systems",
      description: "Enterprise AI, knowledge systems, semantic search, intelligent automation, RAG solutions.",
      value: "Faster knowledge retrieval. Better decisions. Measurable AI ROI.",
      icon: <Cpu className="w-8 h-8 text-primary" />
    },
    {
      title: "Engineering Excellence",
      description: "Platform engineering, DevOps, SDLC acceleration, quality engineering, digital product delivery.",
      value: "Shorter delivery cycles. Higher quality. Consistent engineering outcomes.",
      icon: <Code2 className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">What We Do</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <div className="bg-white p-6 border-l-4 border-primary shadow-sm mb-12">
            <h3 className="text-lg font-bold text-primary mb-2">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed">
              YnY Platforms was founded on a simple belief: technology initiatives succeed when architecture, engineering, and business strategy work together. Our team brings decades of experience designing enterprise systems, digital platforms, cloud transformations, and AI-powered solutions across highly regulated industries.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 border border-border group hover:border-primary transition-colors duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 bg-muted inline-flex p-4 rounded-sm">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {pillar.description}
              </p>
              <div className="pt-4 border-t border-border mt-auto">
                <span className="text-sm font-semibold text-success block">Business Value</span>
                <span className="text-sm text-primary font-medium">{pillar.value}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
