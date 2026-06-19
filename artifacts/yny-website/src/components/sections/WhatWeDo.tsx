import { motion } from "framer-motion";

export function WhatWeDo() {
  const pillars = [
    {
      title: "Enterprise Architecture",
      description: "Technology strategy, modernization, governance, cloud transformation, solution architecture.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "AI & Data Platforms",
      description: "Enterprise AI, knowledge systems, semantic search, intelligent automation, RAG solutions.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Product Engineering",
      description: "Platform engineering, DevOps, SDLC acceleration, quality engineering, digital product delivery.",
      icon: (
        <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">What We Do</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 border border-border group hover:border-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 bg-muted inline-flex p-4 rounded-sm">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}