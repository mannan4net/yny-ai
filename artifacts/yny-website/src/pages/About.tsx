import { Layout } from "@/components/layout/Layout";
import { Leadership } from "@/components/sections/Leadership";

export default function About() {
  return (
    <Layout>
      <div className="bg-white">
        {/* Header */}
        <div className="bg-primary text-white py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About YnY Platforms</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Architecture discipline. Product excellence. Business impact.
            </p>
          </div>
        </div>

        {/* Our Story & Mission */}
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
                <div className="prose prose-slate max-w-none text-muted-foreground text-lg leading-relaxed space-y-6">
                  <p>
                    We're a team of architects, engineers, and visionaries who've spent two decades building systems that work at scale. From India's national health interoperability platform (ABDM) to enterprise AI at the world's largest events, we've seen the patterns that separate systems that last from systems that break.
                  </p>
                  <p>
                    Now we're shipping products built on that foundation — for teams that move fast but can't afford to move wrong.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary mb-6">Delivery Philosophy</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't just deliver code — we deliver outcomes. Every engagement starts with architecture, is governed by discipline, and ends with measurable results. We believe that robust architecture enables agility, rather than hindering it.
                </p>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-12">
              <div className="bg-muted p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4 border-b border-border pb-4">Mission</h3>
                <p className="text-muted-foreground font-medium">
                  To build enterprise-grade digital platforms and AI solutions that solve real problems at national and organizational scale.
                </p>
              </div>

              <div className="bg-muted p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-4 border-b border-border pb-4">Vision</h3>
                <p className="text-muted-foreground font-medium">
                  To be the trusted architecture and AI partner for organizations leading digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-primary text-white py-24">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Core Values</h2>
              <div className="w-20 h-1 bg-white"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                "Architecture Discipline",
                "Product Excellence",
                "AI-First Thinking",
                "Delivery Rigor",
                "Business Impact"
              ].map((value, index) => (
                <div key={index} className="border-l border-slate-700 pl-6 py-2">
                  <h3 className="text-lg font-bold text-white">{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Expertise */}
        <div className="py-24 container mx-auto px-6 border-b border-border">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Technology Expertise</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              "Cloud Architecture", "Distributed Systems", "AI/ML", "Semantic Search", 
              "RAG", "Enterprise Integration", "DevOps", "Healthcare IT", "Legal Tech"
            ].map((tech, i) => (
              <span key={i} className="px-6 py-3 bg-muted border border-border text-primary font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <Leadership />
      </div>
    </Layout>
  );
}