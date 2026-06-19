import { motion } from "framer-motion";

export function WhyYnY() {
  const cards = [
    {
      title: "Architecture-First Approach",
      desc: "Every engagement begins with a structured architectural assessment. We identify systemic risks and constraints before writing a line of code, ensuring every technology investment is sound and scalable."
    },
    {
      title: "Enterprise-Proven Thinking",
      desc: "Our methods are drawn from two decades of delivering complex programs across government, healthcare, financial services, and technology. We know which architectural patterns work under regulatory pressure and at national scale."
    },
    {
      title: "AI-Native Innovation",
      desc: "We build AI into the fabric of platforms rather than bolting it on afterward. Our AI solutions use production-grade RAG architectures, semantic search, and access-controlled knowledge retrieval."
    },
    {
      title: "Business-Driven Delivery",
      desc: "We measure success by outcomes, not outputs. Every milestone is tied to a business objective, and every architecture decision is justified by the value it delivers to the organization."
    },
    {
      title: "Scalable Engineering Practices",
      desc: "Our engineering standards are designed for scale from day one. From CI/CD pipelines to platform engineering and observability, we build delivery practices that compound over time."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-primary">Why Organizations Choose YnY</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Organizations choose YnY because we combine enterprise architecture discipline with product innovation and AI expertise. We build systems that last, scale, and deliver measurable business value.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {cards.map((card, index) => (
              <div key={index} className="p-8 border border-border bg-white shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
