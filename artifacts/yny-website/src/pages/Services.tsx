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

        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {servicesData.map((service, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="w-12 h-12 bg-muted border border-border flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                  <div className="w-3 h-3 bg-primary group-hover:bg-white transition-colors"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted py-24 border-t border-border text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Ready to transform your organization?</h2>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-10 bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              Discuss an Engagement
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}