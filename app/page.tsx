export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Confidential AI Made Simple</h1>
          <p>
            Deploy your AI applications with hardware-guaranteed privacy using TEE technology. 
            <br />No code changes required - just pack your code into Docker.
          </p>
          <a href="#learn-more" className="cta-button">
            Get Started
          </a>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section problem-solution" id="learn-more">
        <div className="container">
          <h2 className="section-title">The Confidential AI Revolution</h2>
          <p className="section-subtitle">
            Modern AI needs to process sensitive data while maintaining uncompromising privacy and verifiability. 
            Traditional cloud solutions expose your data and models to providers, creating trust barriers.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#e74c3c' }}>The Challenge</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem' }}>
                <li>✗ Sensitive data exposed during AI inference</li>
                <li>✗ No cryptographic proof of model integrity</li>
                <li>✗ Cloud providers can access your data and weights</li>
                <li>✗ Complex security implementations slow development</li>
                <li>✗ Limited high-performance secure computing options</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#27ae60' }}>The dstack Solution</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.1rem' }}>
                <li>✓ End-to-end encryption with hardware attestation</li>
                <li>✓ Cryptographic chain of trust for verifiable AI</li>
                <li>✓ Data remains encrypted except at computation point</li>
                <li>✓ Zero code changes - just use Docker</li>
                <li>✓ High-performance GPUs (H100/H200/B100) in secure enclaves</li>
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', padding: '2rem', background: '#e8f4fd', borderRadius: '8px' }}>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>TEE: Your Secure AI Accelerator Vault</h4>
            <p style={{ marginBottom: '1rem' }}>
              Trusted Execution Environments (TEE) create hardware-isolated, encrypted computing spaces with cryptographic attestation. 
              Your AI models and data are processed in a secure vault that even cloud providers cannot access. 
              Intel TDX technology provides the hardware root of trust, ensuring your computations remain private and verifiable.
            </p>
            <p style={{ marginBottom: '1rem', fontWeight: '600' }}>
              🚀 <strong>Performance</strong>: Full NVIDIA H100/H200/B100 accelerator support with &lt;5% overhead<br/>
              🔒 <strong>Security</strong>: Hardware-encrypted memory, disabled debugging, cryptographic attestation<br/>
              ✅ <strong>Verifiable</strong>: Real-time proof that your exact code is running unmodified
            </p>
            <a href="#tee-docs" style={{ color: '#3498db', textDecoration: 'none', fontWeight: '600' }}>
              → Learn more about TEE technology
            </a>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose dstack?</h2>
          <p className="section-subtitle">
            Built specifically for AI developers who need security without complexity
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>🚀 Accelerate Development</h3>
              <p>
                Docker support means no code changes required. Package your existing AI applications 
                and deploy them securely in minutes, not weeks.
              </p>
            </div>
            
            <div className="feature-card">
              <h3>🤖 AI Ready Infrastructure</h3>
              <p>
                Purpose-built for AI workloads with full CPU & GPU support including H100, H200, and B100. 
                Optimized for machine learning and agent development.
              </p>
            </div>
            
            <div className="feature-card">
              <h3>🔒 Enterprise Security</h3>
              <p>
                Open source, independently audited by security experts, and equipped with secure services out-of-the-box. 
                Support for seamless migration between servers with maintained security guarantees.
              </p>
              <a href="/res/phala-dstack.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#3498db', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
                → View Security Audit Report
              </a>
            </div>
            
            <div className="feature-card">
              <h3>✅ Verifiable Trust</h3>
              <p>
                Every application comes with a visualized Trust Center that allows users to verify 
                your AI model and code integrity in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Audit Section */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Security Audit Report</h2>
          <p className="section-subtitle">
            Independent security audit by Phala Network's security experts. 
            Review our comprehensive security analysis and recommendations.
          </p>
          
          <div style={{ 
            background: 'white', 
            borderRadius: '12px', 
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e1e5e9'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <h3 style={{ margin: 0, color: '#2c3e50', fontSize: '1.5rem' }}>
                  📋 Phala Network Security Audit
                </h3>
                <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.9rem' }}>
                  Comprehensive security analysis and vulnerability assessment
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <a 
                  href="/res/phala-dstack.pdf" 
                  download 
                  style={{ 
                    background: '#3498db',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                >
                  📥 Download PDF
                </a>
                <a 
                  href="/res/phala-dstack.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'transparent',
                    color: '#3498db',
                    padding: '0.5rem 1rem',
                    border: '1px solid #3498db',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                >
                  🔍 Full Screen
                </a>
              </div>
            </div>
            
            <div style={{ 
              border: '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#f9f9f9',
              minHeight: '600px'
            }}>
              <iframe
                src="/res/phala-dstack.pdf"
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none',
                  display: 'block'
                }}
                title="Security Audit Report"
              />
            </div>
            
            <div style={{ 
              marginTop: '1rem', 
              padding: '1rem',
              background: '#e8f5e8',
              borderRadius: '6px',
              fontSize: '0.9rem'
            }}>
              <p style={{ margin: 0, color: '#2d5e2d' }}>
                <strong>✅ Audit Status:</strong> Completed by Phala Network security team. 
                All critical and high-severity issues have been addressed. 
                Regular security reviews ensure ongoing protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="section trust-section">
        <div className="container">
          <h2 className="section-title">Sponsored by Industry Leaders</h2>
          
          <div className="sponsors-grid">
            <div className="sponsor-card">
              <h4 style={{ marginBottom: '0.5rem' }}>🏛️ Linux Foundation</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Official Linux Foundation Project</p>
            </div>
            
            <div className="sponsor-card">
              <h4 style={{ marginBottom: '0.5rem' }}>⚡ Phala Network</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Leader in Confidential Computing</p>
            </div>
            
            <div className="sponsor-card">
              <h4 style={{ marginBottom: '0.5rem' }}>🎓 Andrew Miller</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>UIUC Professor & Distributed Systems Expert</p>
            </div>
            
            <div className="sponsor-card">
              <h4 style={{ marginBottom: '0.5rem' }}>🧠 Near AI</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>Co-founded by Transformer Inventor</p>
            </div>
            
            <div className="sponsor-card">
              <h4 style={{ marginBottom: '0.5rem' }}>⚡ Flashbots</h4>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>MEV Research & Infrastructure</p>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Trusted By</h3>
            <p style={{ color: '#bdc3c7' }}>[Customer logos and testimonials will be added here]</p>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Why dstack vs Others?</h2>
          
          <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden' }}>
              <thead>
                <tr style={{ background: '#3498db', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Capability</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>dstack</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>AWS/GCP/Azure</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>Tinfoil</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>Others</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Transparency</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#27ae60' }}>✓ Open Source</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#e74c3c' }}>✗ Proprietary</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#e74c3c' }}>✗ Proprietary</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#e74c3c' }}>✗ Proprietary</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee', background: '#f9f9f9' }}>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Control</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#27ae60' }}>✓ Customer Keys</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#e74c3c' }}>✗ Vendor Controlled</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#e74c3c' }}>✗ Vendor Controlled</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#e74c3c' }}>✗ Third-party</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Auditability</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#27ae60' }}>✓ Real-time Attestation</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#f39c12' }}>△ Limited</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#f39c12' }}>△ Limited</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#e74c3c' }}>✗ None</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee', background: '#f9f9f9' }}>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Performance</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#27ae60' }}>✓ &lt;5% Overhead</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#f39c12' }}>△ Varies</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#95a5a6' }}>? Unknown</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#95a5a6' }}>? Unknown</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>AI Focus</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#27ae60' }}>✓ Purpose-built</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#f39c12' }}>△ Generic Cloud</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#27ae60' }}>✓ Inference Only</td>
                  <td style={{ padding: '1rem', textAlign: 'center', color: '#f39c12' }}>△ Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Build Confidential AI?</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Join the future of secure AI development. Get started in minutes, not months.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#get-started" className="cta-button" style={{ background: '#ff6b6b' }}>
              Get Started Free
            </a>
            <a href="#docs" className="cta-button" style={{ background: 'transparent', border: '2px solid white' }}>
              View Documentation
            </a>
            <a href="#demo" className="cta-button" style={{ background: 'transparent', border: '2px solid white' }}>
              Schedule Demo
            </a>
          </div>
          
          <div style={{ marginTop: '3rem', fontSize: '0.9rem', opacity: 0.8 }}>
            <p>Questions? Contact us at: [contact email]</p>
            <p>Join our community: [Discord/Slack link]</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2024 dstack. Built for the future of confidential AI.</p>
          <div style={{ marginTop: '1rem' }}>
            <a href="#docs" style={{ color: '#3498db', margin: '0 1rem', textDecoration: 'none' }}>Documentation</a>
            <a href="#github" style={{ color: '#3498db', margin: '0 1rem', textDecoration: 'none' }}>GitHub</a>
            <a href="#community" style={{ color: '#3498db', margin: '0 1rem', textDecoration: 'none' }}>Community</a>
            <a href="#privacy" style={{ color: '#3498db', margin: '0 1rem', textDecoration: 'none' }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </main>
  )
}