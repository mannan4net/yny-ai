import { Layout } from "@/components/layout/Layout";
import { productsData } from "@/data";
import { Link } from "wouter";
import { Server, ShieldCheck, CheckCircle2 } from "lucide-react";

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
          <div className="space-y-32">
            {productsData.map((product, index) => (
              <div key={product.id} className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="flex-1 w-full space-y-8">
                  <div>
                    <div className="inline-flex px-3 py-1 bg-muted text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-border">
                      {product.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{product.name}</h2>
                    <p className="text-xl text-muted-foreground font-medium border-l-4 border-primary pl-4 py-1">{product.tagline}</p>
                  </div>
                  
                  <div className="prose prose-slate max-w-none space-y-6 text-primary">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider font-bold text-muted-foreground mb-2">The Business Problem</h3>
                      <p className="leading-relaxed">{product.businessProblem}</p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider font-bold text-muted-foreground mb-2">The Solution</h3>
                      <p className="leading-relaxed">{product.solution}</p>
                    </div>
                  </div>

                  <div className="bg-muted p-6 border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <Server className="w-5 h-5 text-accent" />
                      <h3 className="text-sm font-bold text-primary uppercase tracking-wide">Deployment Model</h3>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{product.deploymentModel}</p>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center h-14 px-10 bg-primary text-white font-bold text-base hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    {product.cta}
                  </Link>
                </div>
                
                <div className="flex-1 w-full bg-white p-8 md:p-10 border border-border shadow-lg shadow-slate-100">
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-bold text-primary">Architecture Highlights</h3>
                    </div>
                    <ul className="space-y-4">
                      {product.architectureHighlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2"></div>
                          <span className="text-sm font-medium text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-lg font-bold text-primary mb-6 pb-4 border-b border-border">Key Capabilities</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                      {product.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-primary">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-10">
                    <h3 className="text-lg font-bold text-primary mb-6 pb-4 border-b border-border">Business Benefits</h3>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-primary/5 rounded flex items-center justify-center shrink-0">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <span className="text-sm font-bold text-primary">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-8 border-t border-border bg-muted -mx-8 -mx-10 px-8 px-10 -mb-8 -mb-10 pb-8 pb-10">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">Target Customers</p>
                    <p className="text-sm text-primary font-medium leading-relaxed">{product.targetCustomers}</p>
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
