import { Layout } from "@/components/layout/Layout";
import { insightsData } from "@/data";
import { Link } from "wouter";

export default function Insights() {
  const categories = [
    "All",
    "Enterprise Architecture",
    "Artificial Intelligence",
    "Cloud Engineering",
    "Digital Transformation",
    "Product Engineering",
    "Software Delivery Excellence"
  ];

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <div className="bg-primary text-white py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Insights & Thinking</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Perspectives on architecture, AI, and engineering from our leadership and technical teams.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          {/* Filters */}
          <div className="mb-16 overflow-x-auto pb-4">
            <div className="flex gap-2 min-w-max">
              {categories.map((cat, i) => (
                <button 
                  key={i} 
                  className={`px-5 py-2 text-sm font-medium border transition-colors ${
                    i === 0 
                      ? "bg-primary text-white border-primary" 
                      : "bg-white text-primary border-border hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {insightsData.map((article, i) => (
              <article key={i} className="group border border-border flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="h-48 bg-muted border-b border-border relative overflow-hidden flex items-center justify-center">
                  {/* Abstract placeholder visual */}
                  <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent"></div>
                  <div className="w-16 h-1 bg-primary relative z-10"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider mb-4">
                    {article.category}
                  </span>
                  <h2 className="text-xl font-bold text-primary mb-4 leading-snug group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 flex-grow">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={article.link} 
                    className="inline-flex items-center text-sm font-bold text-primary mt-auto hover:underline"
                  >
                    Read Article
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}