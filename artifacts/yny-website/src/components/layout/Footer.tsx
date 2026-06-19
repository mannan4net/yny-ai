import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
                <span className="text-primary font-bold text-lg">Y</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">YnY</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building Enterprise-Scale Digital Platforms, AI Solutions & Engineering Excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Platforms</h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">PAAI</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">LegalPA</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">AIUniverse</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">SDLC Factory</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/insights" className="text-slate-400 hover:text-white transition-colors text-sm">Insights</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>Dubai, UAE</li>
              <li>Global Operations</li>
              <li><a href="mailto:abdul.mannan.17@gmail.com" className="hover:text-white transition-colors">abdul.mannan.17@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} YnY Platforms. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}