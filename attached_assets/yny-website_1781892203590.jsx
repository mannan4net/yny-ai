import React, { useState } from 'react';
import { Menu, X, Moon, Sun, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const YnYWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', product: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Using Formspree - you'll need to replace 'YOUR_FORM_ID' with your actual Formspree form ID
    // Get your form ID at formspree.io - it's free
    const formspreeEndpoint = 'https://formspree.io/f/xbdenykq';
    
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', product: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'who-we-are', label: 'Who we are' },
    { id: 'contact', label: 'Contact' },
  ];

  const products = [
    {
      id: 'legalpa',
      name: 'LegalPA',
      tagline: 'Constitution to courtroom — all laws in one place',
      description: 'Navigate India\'s complex legal framework instantly. From Constitution chapters to case law, access every statute, regulation, and precedent you need. Built for solo practitioners and law firms.',
      features: ['Full legal code navigation', 'Case law search', 'Court filing guidance', 'Real-time updates'],
      cta: 'Request Demo',
    },
    {
      id: 'aiuniverse',
      name: 'AIUniverse',
      tagline: 'Stay informed on what\'s happening in AI',
      description: 'Curated intelligence on AI developments, research, and industry shifts. Get ahead of the curve with daily insights tailored to your interests.',
      features: ['Daily AI briefings', 'Research summaries', 'Tool comparisons', 'Trend analysis'],
      cta: 'Start Free Trial',
    },
    {
      id: 'paai',
      name: 'PAAI',
      tagline: 'Enterprise AI for your unstructured knowledge',
      description: 'Transform scattered documents, emails, and data into actionable intelligence. PAAI uses semantic search and chunk-level access control for enterprise knowledge retrieval.',
      features: ['Semantic search', 'Multi-tenant RBAC', 'Custom integrations', 'Enterprise-grade'],
      cta: 'Request Demo',
    },
    {
      id: 'sdlc-factory',
      name: 'SDLC Factory',
      tagline: 'Build faster with architectural rigor',
      description: 'End-to-end engineering excellence. From architecture to deployment, we optimize your delivery pipeline with proven patterns and expertise.',
      features: ['Process optimization', 'Team scaling', 'Architecture review', 'Performance tuning'],
      cta: 'Consult Now',
    },
  ];

  const team = [
    {
      name: 'Abdul Mannan',
      title: 'Chief Architect',
      initials: 'AM',
      bio: 'Enterprise architect with 20+ years building distributed systems. Led technical architecture for ABDM (India\'s health interoperability platform). Focused on shipping products that solve real problems at scale.',
    },
    {
      name: 'Suheil',
      title: 'Delivery Head',
      initials: 'SH',
      bio: 'Ensures execution excellence across all projects. Brings operational rigor and vendor management expertise.',
    },
    {
      name: 'S T Inam',
      title: 'Senior AI Architect Specialist',
      initials: 'SI',
      bio: 'Deep expertise in AI systems, embeddings, and semantic search. Drives technical innovation across our AI product line.',
    },
    {
      name: 'A Jabi',
      title: 'MD',
      initials: 'AJ',
      bio: 'Strategic leadership and product vision. Ensures our platforms address real market needs.',
    },
    {
      name: 'Harish Dhami',
      title: 'Business Head',
      initials: 'HD',
      bio: 'Drives business strategy and go-to-market. Builds relationships that matter and markets our solutions effectively.',
    },
  ];

  const bgColor = darkMode ? '#1a1a1a' : '#ffffff';
  const textColor = darkMode ? '#ffffff' : '#1a1a1a';
  const secondaryText = darkMode ? '#b3b3b3' : '#666666';
  const accentBg = darkMode ? '#2a2a2a' : '#f5f1eb';
  const navyColor = '#2F4F5E';
  const tealColor = '#5B7C8D';
  const skyBlue = '#CBD9E8';
  const borderColor = darkMode ? '#404040' : '#e0e0e0';

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, minHeight: '100vh', transition: 'all 0.3s ease' }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: darkMode ? '#0a0a0a' : '#ffffff',
        borderBottom: `1px solid ${borderColor}`,
        padding: '0 1rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          {/* Logo */}
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: navyColor, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: navyColor,
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 'bold',
            }}>
              Y
            </div>
            YnY
          </div>

          {/* Desktop Nav */}
          <div style={{ display: 'none', '@media (min-width: 768px)': { display: 'flex' }, gap: '2rem' }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: currentPage === item.id ? navyColor : secondaryText,
                  fontSize: '14px',
                  fontWeight: currentPage === item.id ? '600' : '400',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem 1rem',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: navyColor,
                fontSize: '20px',
              }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: navyColor,
                display: 'flex',
                '@media (min-width: 768px)': { display: 'none' },
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ paddingBottom: '1rem', borderTop: `1px solid ${borderColor}` }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem 0',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  color: currentPage === item.id ? navyColor : secondaryText,
                  fontSize: '14px',
                  textAlign: 'left',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
        {/* Home Page */}
        {currentPage === 'home' && (
          <div>
            {/* Hero */}
            <div style={{ marginBottom: '4rem' }}>
              <h1 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '1rem', lineHeight: '1.2' }}>
                Enterprise-Grade Platforms for Legal, AI & Engineering
              </h1>
              <p style={{ fontSize: '16px', color: secondaryText, maxWidth: '600px', lineHeight: '1.6' }}>
                Platforms for knowledge, intelligence & execution. Backed by 20+ years of enterprise architecture expertise.
              </p>
            </div>

            {/* Product Concept Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {products.map(product => (
                <div
                  key={product.id}
                  style={{
                    backgroundColor: accentBg,
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: `1px solid ${borderColor}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = tealColor;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = borderColor;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={() => setCurrentPage('products')}
                >
                  <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '0.5rem', color: navyColor }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: secondaryText, lineHeight: '1.5' }}>
                    {product.tagline}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentPage('products');
                    }}
                    style={{
                      marginTop: '1rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: tealColor,
                      fontSize: '13px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    Explore <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{
              backgroundColor: navyColor,
              color: '#ffffff',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
            }}>
              <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '1rem' }}>
                Ready to explore our platforms?
              </h2>
              <button
                onClick={() => setCurrentPage('contact')}
                style={{
                  backgroundColor: tealColor,
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Get in touch
              </button>
            </div>
          </div>
        )}

        {/* Products Page */}
        {currentPage === 'products' && (
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '0.5rem' }}>Our Products</h1>
            <p style={{ fontSize: '14px', color: secondaryText, marginBottom: '2rem' }}>
              Each product is designed to solve specific challenges across legal, AI, and engineering domains.
            </p>

            <div style={{ display: 'grid', gap: '2rem' }}>
              {products.map(product => (
                <div
                  key={product.id}
                  style={{
                    backgroundColor: accentBg,
                    padding: '2rem',
                    borderRadius: '8px',
                    border: `1px solid ${borderColor}`,
                  }}
                >
                  <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '0.5rem', color: navyColor }}>
                    {product.name}
                  </h2>
                  <p style={{ fontSize: '13px', color: tealColor, fontWeight: '600', marginBottom: '1rem' }}>
                    {product.tagline}
                  </p>
                  <p style={{ fontSize: '14px', color: secondaryText, lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {product.description}
                  </p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '12px', fontWeight: '600', color: navyColor, marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                      Key Features
                    </h4>
                    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem', listStyle: 'none', padding: 0 }}>
                      {product.features.map(feature => (
                        <li key={feature} style={{ fontSize: '13px', color: secondaryText, display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ width: '4px', height: '4px', backgroundColor: tealColor, borderRadius: '50%' }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setCurrentPage('contact')}
                    style={{
                      backgroundColor: navyColor,
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '600',
                    }}
                  >
                    {product.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Who We Are Page */}
        {currentPage === 'who-we-are' && (
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '1rem' }}>Who we are</h1>
            <p style={{ fontSize: '14px', color: secondaryText, lineHeight: '1.7', marginBottom: '3rem', maxWidth: '700px' }}>
              We're a team of architects, engineers, and visionaries who've spent two decades building systems that work at scale. 
              From India's national health interoperability platform (ABDM) to enterprise AI at the world's largest events, 
              we've seen the patterns that separate systems that last from systems that break. Now we're shipping products 
              built on that foundation—for teams that move fast but can't afford to move wrong.
            </p>

            {/* Team Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {team.map(member => (
                <div
                  key={member.name}
                  style={{
                    backgroundColor: accentBg,
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: `1px solid ${borderColor}`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: tealColor,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: '600',
                      }}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: '600', margin: 0, color: navyColor }}>
                        {member.name}
                      </h3>
                      <p style={{ fontSize: '12px', color: tealColor, margin: 0, fontWeight: '600' }}>
                        {member.title}
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: secondaryText, lineHeight: '1.6', margin: 0 }}>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Page */}
        {currentPage === 'contact' && (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '1rem' }}>Contact us</h1>
            <p style={{ fontSize: '14px', color: secondaryText, marginBottom: '2rem', lineHeight: '1.6' }}>
              Have questions about our platforms or ready to discuss your needs? Get in touch using the form below.
            </p>

            {formSubmitted && (
              <div style={{
                backgroundColor: '#e8f5e9',
                color: '#2e7d32',
                padding: '1rem',
                borderRadius: '6px',
                marginBottom: '1.5rem',
                fontSize: '13px',
                border: '1px solid #c8e6c9',
              }}>
                ✓ Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            <form onSubmit={handleFormSubmit} style={{ marginBottom: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '0.5rem', color: navyColor }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: `1px solid ${borderColor}`,
                    borderRadius: '6px',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
                    color: textColor,
                  }}
                  placeholder="Your name"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '0.5rem', color: navyColor }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: `1px solid ${borderColor}`,
                    borderRadius: '6px',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
                    color: textColor,
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '0.5rem', color: navyColor }}>
                  Product Interest
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleFormChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: `1px solid ${borderColor}`,
                    borderRadius: '6px',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
                    color: textColor,
                  }}
                >
                  <option value="">Select a product</option>
                  <option value="LegalPA">LegalPA</option>
                  <option value="AIUniverse">AIUniverse</option>
                  <option value="PAAI">PAAI</option>
                  <option value="SDLC Factory">SDLC Factory</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '0.5rem', color: navyColor }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: `1px solid ${borderColor}`,
                    borderRadius: '6px',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    backgroundColor: darkMode ? '#2a2a2a' : '#ffffff',
                    color: textColor,
                    minHeight: '100px',
                    fontFamily: 'inherit',
                  }}
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: navyColor,
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 2rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  width: '100%',
                }}
              >
                Send message
              </button>
            </form>

            <div style={{
              backgroundColor: accentBg,
              padding: '1.5rem',
              borderRadius: '8px',
              border: `1px solid ${borderColor}`,
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '1rem', color: navyColor }}>
                Other ways to reach us
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '13px', color: secondaryText }}>
                <Mail size={16} />
                abdul.mannan.17@gmail.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '13px', color: secondaryText }}>
                <MapPin size={16} />
                Global / Dubai
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${borderColor}`,
        padding: '2rem 1rem',
        marginTop: '3rem',
        backgroundColor: darkMode ? '#0a0a0a' : '#f9f9f9',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: secondaryText, margin: 0 }}>
            © 2024 YnY Platforms. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default YnYWebsite;