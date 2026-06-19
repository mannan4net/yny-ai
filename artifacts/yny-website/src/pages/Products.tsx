import { Layout } from "@/components/layout/Layout";
import { productsData } from "@/data";
import { Link } from "wouter";

export default function Products() {
  return (
    <Layout>
      <div className="bg-white pb-24 border-b border-border">
        <div className="bg-primary text-white py-24 mb-16">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Products</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Enterprise-grade platforms designed to solve critical business challenges across knowledge management, legal tech, and engineering.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {productsData.map((product, index) => (
              <div key={product.id} className={`flex flex-col lg:flex-row gap-12 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className="inline-flex px-3 py-1 bg-muted text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-border">
                    Featured Platform
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-2">{product.name}</h2>
                  <p className="text-xl text-accent mb-8 font-medium">{product.tagline}</p>
                  
                  <div className="prose prose-slate max-w-none mb-10">
                    <p><strong>The Challenge:</strong> {product.businessProblem}</p>
                    <p><strong>The Solution:</strong> {product.solution}</p>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    {product.cta}
                  </Link>
                </div>
                
                <div className="flex-1 w-full bg-muted p-8 border border-border">
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-primary mb-4 border-b border-border pb-2">Key Capabilities</h3>
                    <ul className="space-y-3">
                      {product.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-success shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-medium text-primary">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-4 border-b border-border pb-2">Business Benefits</h3>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium text-primary">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">Ideal For</p>
                    <p className="text-sm text-primary font-medium">{product.targetCustomers}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}