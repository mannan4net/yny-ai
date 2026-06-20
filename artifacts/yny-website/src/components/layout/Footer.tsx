import { Link } from "wouter";
import { Linkedin } from "lucide-react";
import logoSrc from "/yny-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white flex items-center justify-center rounded-sm overflow-hidden p-1">
                <img src={logoSrc} alt="YnY Platforms" className="h-8 w-8 object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">YnY</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Building Enterprise-Scale Digital Platforms, AI Solutions & Engineering Excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-4">
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">PAAI</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">LegalPA</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">AIUniverse</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-white transition-colors text-sm">SDLC Factory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors text-sm">Enterprise Architecture</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors text-sm">Cloud Modernization</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors text-sm">AI Consulting</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors text-sm">Platform Engineering</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Industries</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Healthcare</li>
              <li>Government</li>
              <li>Legal</li>
              <li>Banking & FinTech</li>
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
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} YnY Platforms. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span className="hidden md:inline-block">Dubai, UAE</span>
            <span className="hidden md:inline-block">·</span>
            <span className="hidden md:inline-block">Global Operations</span>
            <span className="hidden md:inline-block">·</span>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-white transition-colors ml-4 border-l border-slate-700 pl-4">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
