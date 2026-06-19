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

        {/* Our Story */}
        <div className="container mx-auto px-6 py-24 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Our Story</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                We're a team of architects, engineers, and visionaries who've spent two decades building systems that work at scale. From India's national health interoperability platform (ABDM) to enterprise AI at the world's largest events, we've seen the patterns that separate systems that last from systems that break.
              </p>
              <p>
                Now we're shipping products built on that foundation — for teams that move fast but can't afford to move wrong.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-muted py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-12 border border-border shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-6 border-b border-border pb-4">Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To build enterprise-grade digital platforms and AI solutions that solve real problems at national and organizational scale.
                </p>
              </div>
              <div className="bg-white p-12 border border-border shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-6 border-b border-border pb-4">Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "Architecture Discipline", desc: "We design before we build. Every system decision is made with long-term maintainability and scalability in mind." },
                { title: "Product Excellence", desc: "We ship platforms that solve real problems, not technology for its own sake." },
                { title: "AI-First Thinking", desc: "We treat AI as a foundational capability, not an add-on feature." },
                { title: "Delivery Rigor", desc: "Commitments are kept. Programs are measured. Results are documented." },
                { title: "Business Impact", desc: "Every architectural and engineering decision is evaluated against the value it delivers to the organization." }
              ].map((value, index) => (
                <div key={index} className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Journey (Timeline) */}
        <div className="py-24 bg-white border-b border-border">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Our Journey</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="space-y-12">
              {[
                { year: "2004", text: "Founded on enterprise architecture principles. Early engagements in government and financial sector digital infrastructure." },
                { year: "2010", text: "Expanded into cloud transformation programs. First national-scale healthcare integration engagements." },
                { year: "2016", text: "Led architectural design for ABDM (Ayushman Bharat Digital Mission) — India's national health interoperability platform." },
                { year: "2020", text: "Launched first AI products. Built semantic search and knowledge retrieval systems for enterprise clients." },
                { year: "2023", text: "Launched PAAI, LegalPA, AIUniverse, and SDLC Factory as standalone commercial platforms." },
                { year: "2025", text: "Expanded global operations. Headquarters in Dubai. Serving clients across MENA, South Asia, and Southeast Asia." }
              ].map((milestone, idx) => (
                <div key={idx} className="flex gap-6 md:gap-8 items-start">
                  <div className="w-24 shrink-0 text-right">
                    <span className="text-xl font-bold text-accent">{milestone.year}</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="absolute -left-5 top-2 w-3 h-3 bg-primary rounded-full hidden md:block border-2 border-white ring-1 ring-border"></div>
                    <p className="text-muted-foreground leading-relaxed">{milestone.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Expertise */}
        <div className="py-24 bg-muted border-b border-border">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Technology Expertise</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  group: "Architecture & Cloud",
                  items: ["Cloud Architecture", "Distributed Systems", "Microservices", "Enterprise Integration"]
                },
                {
                  group: "AI & Data",
                  items: ["LLMs", "RAG", "Semantic Search", "Vector Databases", "AI/ML Engineering"]
                },
                {
                  group: "Engineering",
                  items: ["DevOps", "Platform Engineering", "CI/CD", "Quality Engineering"]
                },
                {
                  group: "Domain",
                  items: ["Healthcare IT", "Legal Tech", "FinTech", "Government Digital"]
                }
              ].map((cluster, i) => (
                <div key={i} className="bg-white p-8 border border-border shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-6 pb-2 border-b border-border">{cluster.group}</h3>
                  <ul className="space-y-3">
                    {cluster.items.map((item, j) => (
                      <li key={j} className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <Leadership />

        {/* Delivery Philosophy Blockquote */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <blockquote className="text-2xl font-medium text-primary leading-relaxed border-l-4 border-primary pl-8 text-left italic">
              "We don't just deliver code — we deliver outcomes. Every engagement starts with architecture, is governed by discipline, and ends with measurable results. We believe that robust architecture enables agility, rather than hindering it."
            </blockquote>
          </div>
        </div>
      </div>
    </Layout>
  );
}
