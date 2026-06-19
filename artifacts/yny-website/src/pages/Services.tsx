import { Layout } from "@/components/layout/Layout";
import { servicesData } from "@/data";
import { Link } from "wouter";

export default function Services() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="bg-primary text-white py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Enterprise Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              From strategic advisory to dedicated engineering teams, we partner with enterprises to execute digital transformation.
            </p>
          </div>
        </div>

        <div className="py-12">
          {servicesData.map((service, index) => (
            <div key={index} className={`py-20 ${index % 2 !== 0 ? 'bg-muted border-y border-border' : 'bg-white'}`}>
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-5">
                    <h2 className="text-3xl font-bold text-primary mb-6">{service.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed border-l-4 border-primary pl-6 py-2">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-7 space-y-10">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider font-bold text-muted-foreground mb-3">The Challenge</h3>
                      <p className="text-primary leading-relaxed">{service.challenges}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm uppercase tracking-wider font-bold text-muted-foreground mb-3">Our Approach</h3>
                      <p className="text-primary leading-relaxed">{service.approach}</p>
                    </div>
                    
                    <div className="bg-white border border-border p-6 shadow-sm">
                      <h3 className="text-sm uppercase tracking-wider font-bold text-primary mb-4 border-b border-border pb-2">Business Outcomes</h3>
                      <ul className="space-y-3">
                        {service.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[hsl(var(--success))] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm font-medium text-primary">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary text-white py-24 text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Ready to transform your organization?</h2>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-16 px-12 bg-white text-primary font-bold text-lg hover:bg-muted transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              Discuss an Engagement
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
