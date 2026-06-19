import { Link } from "wouter";
import { motion } from "framer-motion";
import { productsData } from "@/data";

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-white border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Featured Products</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
          <Link 
            href="/products"
            className="text-primary font-medium hover:underline flex items-center gap-2"
          >
            View All Products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsData.slice(0, 4).map((product, index) => (
            <motion.div 
              key={product.id}
              className="group border border-border p-8 hover:shadow-lg transition-all duration-300 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-primary">{product.name}</h3>
              </div>
              <p className="text-accent font-medium mb-6">{product.tagline}</p>
              
              <div className="mb-6 space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">The Problem</h4>
                  <p className="text-sm text-primary leading-relaxed">{product.businessProblem}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">The Solution</h4>
                  <p className="text-sm text-primary leading-relaxed">{product.solution}</p>
                </div>
              </div>
              
              <Link 
                href="/products" 
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors mt-4"
              >
                {product.cta}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}