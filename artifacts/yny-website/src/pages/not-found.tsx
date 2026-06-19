import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-primary text-white p-6 relative overflow-hidden">
      {/* Background elements for depth */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-[400px] h-[400px] bg-accent opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl w-full text-center space-y-10 relative z-10">
        <div className="relative inline-block">
          <h1 className="text-[120px] md:text-[180px] font-bold tracking-tighter text-white/10 leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-1 w-24 bg-white"></div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">System Path Unresolved</h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            The architecture endpoint you are looking for cannot be located within the current domain.
          </p>
        </div>

        <div className="pt-8">
          <Link 
            href="/"
            className="inline-flex items-center justify-center h-14 px-10 bg-white text-primary font-bold text-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            data-testid="link-home-404"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}