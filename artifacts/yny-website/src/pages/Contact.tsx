import { useState } from "react";
import { Layout } from "@/components/layout/Layout";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xbdenykq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        const result = await response.json();
        setError(result.error || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <div className="bg-primary text-white py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Discuss your enterprise requirements with our architecture and engineering teams.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Location</h3>
                <p className="text-xl font-medium text-primary">Global / Dubai</p>
              </div>
              
              
              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground">
                  Our team typically responds to all enterprise inquiries within one business day.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <div className="bg-muted p-8 md:p-12 border border-border">
                <h2 className="text-2xl font-bold text-primary mb-8">Send an Inquiry</h2>
                
                {isSuccess ? (
                  <div className="bg-success/10 border border-success p-6 text-success font-medium flex flex-col items-center text-center py-16">
                    <svg className="w-12 h-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Thank you — we'll be in touch within 1 business day.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-destructive/10 border border-destructive p-4 text-destructive text-sm font-medium">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-primary">Name <span className="text-destructive">*</span></label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required 
                          className="w-full h-12 px-4 bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-primary">Email <span className="text-destructive">*</span></label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required 
                          className="w-full h-12 px-4 bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="organization" className="text-sm font-bold text-primary">Organization</label>
                        <input 
                          type="text" 
                          id="organization" 
                          name="organization" 
                          className="w-full h-12 px-4 bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="inquiryType" className="text-sm font-bold text-primary">Inquiry Type</label>
                        <select 
                          id="inquiryType" 
                          name="inquiryType"
                          className="w-full h-12 px-4 bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                        >
                          <option value="Consulting">Consulting</option>
                          <option value="Product Demo">Product Demo</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Career">Career</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-primary">Message <span className="text-destructive">*</span></label>
                      <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={6}
                        className="w-full p-4 bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-y"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="h-14 px-10 bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center w-full md:w-auto"
                      data-testid="button-submit-contact"
                    >
                      {isSubmitting ? "Sending..." : "Send Inquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}