import { Link } from "wouter";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 md:pt-32 md:pb-40 border-b border-border">
      {/* Abstract geometric background with architectural grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
        aria-hidden="true"
      >
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Building Intelligent Enterprise Platforms for the AI Era
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            YnY Platforms combines enterprise architecture, artificial intelligence, and engineering excellence to help organizations modernize systems, accelerate innovation, and build scalable digital products.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              data-testid="link-contact-hero"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/products"
              className="inline-flex items-center justify-center h-14 px-8 bg-white border border-border text-primary font-medium transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              data-testid="link-products-hero"
            >
              Explore Products
            </Link>
          </motion.div>

          <motion.div
            className="pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Trusted by enterprises across healthcare, government, legal, and financial services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
