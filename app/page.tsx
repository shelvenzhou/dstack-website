export default function Home() {
	return (
		<main>
			{/* Hero Section */}
			<section className="hero">
				<div className="container">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginBottom: "2rem",
						}}
					>
						<img
							src="/res/01 Dstack _Horizontal_primary.svg"
							alt="dstack Logo"
							style={{ height: "60px" }}
						/>
					</div>
					<div style={{ textAlign: "center", marginBottom: "1rem" }}>
						<span
							style={{
								background: "#3498db",
								color: "white",
								padding: "0.5rem 1rem",
								borderRadius: "20px",
								fontSize: "0.9rem",
								fontWeight: "600",
							}}
						>
							🏛️ Linux Foundation Project
						</span>
					</div>
					<h1>Open-Source Confidential Computing</h1>
					<p>
						Deploy secure applications with hardware-guaranteed privacy using
						TEE technology.
						<br />
						Built for confidential AI, private cloud compute, and secure data
						processing.
					</p>
					<div
						style={{
							display: "flex",
							gap: "2rem",
							justifyContent: "center",
							alignItems: "flex-start",
							flexWrap: "wrap",
							marginTop: "2rem",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "0.75rem",
							}}
						>
							<a
								href="https://github.com/Dstack-TEE/dstack"
								target="_blank"
								rel="noopener noreferrer"
								className="cta-button"
							>
								View on GitHub
							</a>
							<div
								style={{
									display: "flex",
									gap: "0.5rem",
									justifyContent: "center",
								}}
							>
								<img
									src="https://img.shields.io/github/stars/dstack-tee/dstack?style=flat-square&logo=github"
									alt="GitHub Stars"
									style={{ height: "20px" }}
								/>
								<img
									src="https://img.shields.io/github/license/dstack-tee/dstack?style=flat-square"
									alt="License"
									style={{ height: "20px" }}
								/>
							</div>
						</div>
						<a
							href="https://cloud.phala.network/"
							target="_blank"
							rel="noopener noreferrer"
							className="cta-button"
							style={{
								background: "transparent",
								border: "2px solid white",
								color: "white",
							}}
						>
							Don't own a TEE yet?
						</a>
					</div>
				</div>
			</section>

			{/* Key Features Section */}
			<section className="section">
				<div className="container">
					<h2 className="section-title">Why Choose dstack?</h2>
					<p className="section-subtitle">
						Open-source confidential computing platform for developers who need
						security without complexity
					</p>

					<div className="features-grid">
						<div className="feature-card">
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									marginBottom: "1rem",
								}}
							>
								<h3 style={{ margin: 0 }}>🚀 Developer Friendly</h3>
								<img
									src="https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png"
									alt="Docker"
									style={{
										height: "28px",
										objectFit: "contain",
										filter: "brightness(0)",
										flexShrink: 0,
									}}
								/>
							</div>
							<p>
								<strong>Docker support</strong> means no code changes required.
								Package your existing applications and deploy them securely in
								minutes, not weeks.
							</p>
						</div>

						<div className="feature-card">
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									marginBottom: "1rem",
								}}
							>
								<h3 style={{ margin: 0 }}>🤖 Confidential AI Ready</h3>
								<img
									src="https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo.png"
									alt="NVIDIA"
									style={{
										height: "28px",
										objectFit: "contain",
										flexShrink: 0,
									}}
								/>
							</div>
							<p>
								Purpose-built for confidential AI with{" "}
								<strong>TEE GPU support</strong>. Run private AI models on
								NVIDIA H100, H200, and B100 GPUs with hardware-guaranteed
								confidentiality and cryptographic attestation.
							</p>
						</div>

						<div className="feature-card">
							<h3>🔒 Enterprise Security</h3>
							<p>
								Open source, independently audited by security experts, and
								equipped with secure services out-of-the-box. Support for
								seamless migration between servers with maintained security
								guarantees.
							</p>
						</div>

						<div className="feature-card">
							<h3>✅ Verifiable Computing</h3>
							<p>
								Every application comes with cryptographic attestation and a
								Trust Center that allows users to verify your code integrity and
								execution environment in real-time.
							</p>
						</div>
					</div>

					<div style={{ textAlign: "center", marginTop: "3rem" }}>
						<a
							href="https://github.com/Dstack-TEE/dstack"
							target="_blank"
							rel="noopener noreferrer"
							className="cta-button"
							style={{
								background: "#3498db",
								color: "white",
							}}
						>
							Get Started with dstack
						</a>
					</div>
				</div>
			</section>

			{/* Developer Friendly Section */}
			<section className="section" style={{ background: "#ffffff" }}>
				<div className="container">
					<h2 className="section-title">Simple Deploy Process</h2>
					<p className="section-subtitle">
						Deploy confidential applications with just a few clicks - no complex
						setup required
					</p>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "3rem",
							flexWrap: "wrap",
							marginTop: "3rem",
						}}
					>
						<div style={{ flex: "1", minWidth: "300px" }}>
							<img
								src="/res/deploy-cvm.png"
								alt="Deploy CVM Process"
								style={{
									width: "100%",
									height: "auto",
									borderRadius: "12px",
									boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
									border: "1px solid #e1e5e9",
								}}
							/>
						</div>
						<div style={{ flex: "1", minWidth: "300px" }}>
							<h3
								style={{
									fontSize: "1.8rem",
									marginBottom: "1.5rem",
									color: "#2c3e50",
								}}
							>
								🚀 Three Steps to Confidential Computing
							</h3>
							<div style={{ marginBottom: "2rem" }}>
								<div
									style={{
										display: "flex",
										alignItems: "flex-start",
										marginBottom: "1.5rem",
									}}
								>
									<div
										style={{
											background: "#3498db",
											color: "white",
											borderRadius: "50%",
											width: "32px",
											height: "32px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontWeight: "bold",
											marginRight: "1rem",
											flexShrink: 0,
										}}
									>
										1
									</div>
									<div>
										<h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>
											Paste Docker Compose
										</h4>
										<p
											style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}
										>
											Copy your existing docker-compose.yml file - no
											modifications needed
										</p>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										alignItems: "flex-start",
										marginBottom: "1.5rem",
									}}
								>
									<div
										style={{
											background: "#3498db",
											color: "white",
											borderRadius: "50%",
											width: "32px",
											height: "32px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontWeight: "bold",
											marginRight: "1rem",
											flexShrink: 0,
										}}
									>
										2
									</div>
									<div>
										<h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>
											Click Deploy
										</h4>
										<p
											style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}
										>
											Select your TEE hardware and deployment options
										</p>
									</div>
								</div>
								<div style={{ display: "flex", alignItems: "flex-start" }}>
									<div
										style={{
											background: "#3498db",
											color: "white",
											borderRadius: "50%",
											width: "32px",
											height: "32px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontWeight: "bold",
											marginRight: "1rem",
											flexShrink: 0,
										}}
									>
										3
									</div>
									<div>
										<h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>
											Application Launched
										</h4>
										<p
											style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}
										>
											Your app runs with hardware-guaranteed confidentiality
										</p>
									</div>
								</div>
							</div>
							<a
								href="https://cloud.phala.network/"
								target="_blank"
								rel="noopener noreferrer"
								className="cta-button"
								style={{
									background: "#3498db",
									color: "white",
									display: "inline-block",
								}}
							>
								Try Now →
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Verifiable Computing Section */}
			<section className="section" style={{ background: "#f8f9fa" }}>
				<div className="container">
					<h2 className="section-title">
						Trust Center - Complete Transparency
					</h2>
					<p className="section-subtitle">
						Every deployed application comes with a comprehensive Trust Center
						for full verification
					</p>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "3rem",
							flexWrap: "wrap",
							marginTop: "3rem",
						}}
					>
						<div style={{ flex: "1", minWidth: "300px" }}>
							<h3
								style={{
									fontSize: "1.8rem",
									marginBottom: "1.5rem",
									color: "#2c3e50",
								}}
							>
								🔍 Examine Everything
							</h3>
							<div style={{ marginBottom: "2rem" }}>
								<div
									style={{
										display: "flex",
										alignItems: "flex-start",
										marginBottom: "1.5rem",
									}}
								>
									<div
										style={{
											background: "#9b59b6",
											color: "white",
											borderRadius: "8px",
											padding: "0.5rem",
											marginRight: "1rem",
											flexShrink: 0,
										}}
									>
										📋
									</div>
									<div>
										<h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>
											Source Code Verification
										</h4>
										<p
											style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}
										>
											Review the exact source code running in your TEE
											environment
										</p>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										alignItems: "flex-start",
										marginBottom: "1.5rem",
									}}
								>
									<div
										style={{
											background: "#e74c3c",
											color: "white",
											borderRadius: "8px",
											padding: "0.5rem",
											marginRight: "1rem",
											flexShrink: 0,
										}}
									>
										🔧
									</div>
									<div>
										<h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>
											Hardware Information
										</h4>
										<p
											style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}
										>
											Detailed specs of the TEE hardware running your
											application
										</p>
									</div>
								</div>
								<div
									style={{
										display: "flex",
										alignItems: "flex-start",
										marginBottom: "1.5rem",
									}}
								>
									<div
										style={{
											background: "#f39c12",
											color: "white",
											borderRadius: "8px",
											padding: "0.5rem",
											marginRight: "1rem",
											flexShrink: 0,
										}}
									>
										🌐
									</div>
									<div>
										<h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>
											Network Configuration
										</h4>
										<p
											style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}
										>
											Complete network topology and security settings
										</p>
									</div>
								</div>
								<div style={{ display: "flex", alignItems: "flex-start" }}>
									<div
										style={{
											background: "#27ae60",
											color: "white",
											borderRadius: "8px",
											padding: "0.5rem",
											marginRight: "1rem",
											flexShrink: 0,
										}}
									>
										✅
									</div>
									<div>
										<h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>
											Attestation Report
										</h4>
										<p
											style={{ margin: 0, color: "#666", fontSize: "0.95rem" }}
										>
											Cryptographic proof of execution environment integrity
										</p>
									</div>
								</div>
							</div>
							<a
								href="https://tee-visualization.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="cta-button"
								style={{
									background: "#9b59b6",
									color: "white",
									display: "inline-block",
								}}
							>
								Learn More →
							</a>
						</div>
						<div style={{ flex: "1", minWidth: "300px" }}>
							<img
								src="/res/trust-center.png"
								alt="Trust Center Interface"
								style={{
									width: "100%",
									height: "auto",
									borderRadius: "12px",
									boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
									border: "1px solid #e1e5e9",
								}}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Security Audit Section */}
			<section className="section" style={{ background: "#f8f9fa" }}>
				<div className="container">
					<h2 className="section-title">Security Audit Report</h2>
					<p className="section-subtitle">
						Independent security audit by zkSecurity team. Review our
						comprehensive security analysis and recommendations.
					</p>

					<div
						style={{
							background: "white",
							borderRadius: "12px",
							padding: "2rem",
							boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
							border: "1px solid #e1e5e9",
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: "1.5rem",
								flexWrap: "wrap",
								gap: "1rem",
							}}
						>
							<div>
								<h3 style={{ margin: 0, color: "#2c3e50", fontSize: "1.5rem" }}>
									📋 zkSecurity Team Audit
								</h3>
								<p
									style={{
										margin: "0.5rem 0 0 0",
										color: "#666",
										fontSize: "0.9rem",
									}}
								>
									Comprehensive security analysis and vulnerability assessment
								</p>
							</div>
							<div
								style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
							>
								<a
									href="/res/phala-dstack.pdf"
									download
									style={{
										background: "#3498db",
										color: "white",
										padding: "0.5rem 1rem",
										borderRadius: "4px",
										textDecoration: "none",
										fontSize: "0.9rem",
										fontWeight: "600",
									}}
								>
									📥 Download PDF
								</a>
								<a
									href="/res/phala-dstack.pdf"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										background: "transparent",
										color: "#3498db",
										padding: "0.5rem 1rem",
										border: "1px solid #3498db",
										borderRadius: "4px",
										textDecoration: "none",
										fontSize: "0.9rem",
										fontWeight: "600",
									}}
								>
									🔍 Full Screen
								</a>
							</div>
						</div>

						<div
							style={{
								border: "1px solid #ddd",
								borderRadius: "8px",
								overflow: "hidden",
								background: "#f9f9f9",
								minHeight: "600px",
							}}
						>
							<iframe
								src="/res/phala-dstack.pdf"
								style={{
									width: "100%",
									height: "600px",
									border: "none",
									display: "block",
								}}
								title="Security Audit Report"
							/>
						</div>

						<div
							style={{
								marginTop: "1rem",
								padding: "1rem",
								background: "#e8f5e8",
								borderRadius: "6px",
								fontSize: "0.9rem",
							}}
						>
							<p style={{ margin: 0, color: "#2d5e2d" }}>
								<strong>✅ Audit Status:</strong> Completed by zkSecurity team.
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
							<h4 style={{ marginBottom: "0.5rem" }}>⚡ Phala Network</h4>
							<p style={{ fontSize: "0.9rem", color: "#666" }}>
								Leader in Confidential Computing
							</p>
						</div>

						<div className="sponsor-card">
							<h4 style={{ marginBottom: "0.5rem" }}>🧠 Near AI</h4>
							<p style={{ fontSize: "0.9rem", color: "#666" }}>
								Co-founded by Transformer Inventor
							</p>
						</div>

						<div className="sponsor-card">
							<h4 style={{ marginBottom: "0.5rem" }}>⚡ Flashbots</h4>
							<p style={{ fontSize: "0.9rem", color: "#666" }}>
								MEV Research & Infrastructure
							</p>
						</div>
					</div>

					<div style={{ marginTop: "3rem", textAlign: "center" }}>
						<h3 style={{ marginBottom: "1rem" }}>Trusted By</h3>
						<p style={{ color: "#bdc3c7" }}>
							[Customer logos and testimonials will be added here]
						</p>
					</div>

					<div style={{ textAlign: "center", marginTop: "2rem" }}>
						<a
							href="https://t.me/+RF-yUoDduWAzZTUx"
							target="_blank"
							rel="noopener noreferrer"
							className="cta-button"
							style={{
								background: "#9b59b6",
								color: "white",
							}}
						>
							Join Our Community
						</a>
					</div>
				</div>
			</section>

			{/* Competitive Advantage */}
			<section className="section" style={{ background: "#f8f9fa" }}>
				<div className="container">
					<h2 className="section-title">dstack vs Others</h2>

					<div style={{ overflowX: "auto", marginTop: "2rem" }}>
						<table
							style={{
								width: "100%",
								borderCollapse: "collapse",
								background: "white",
								borderRadius: "8px",
								overflow: "hidden",
							}}
						>
							<thead>
								<tr style={{ background: "#3498db", color: "white" }}>
									<th style={{ padding: "1rem", textAlign: "left" }}>
										Capability
									</th>
									<th style={{ padding: "1rem", textAlign: "center" }}>
										dstack
									</th>
									<th style={{ padding: "1rem", textAlign: "center" }}>
										AWS/GCP/Azure
									</th>
									<th style={{ padding: "1rem", textAlign: "center" }}>
										ConfidentialContainers
									</th>
									<th style={{ padding: "1rem", textAlign: "center" }}>
										Others
									</th>
								</tr>
							</thead>
							<tbody>
								<tr style={{ borderBottom: "1px solid #eee" }}>
									<td style={{ padding: "1rem", fontWeight: "600" }}>
										Transparency
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#27ae60",
										}}
									>
										✓ Open Source
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#e74c3c",
										}}
									>
										✗ Proprietary
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#27ae60",
										}}
									>
										✓ Open Source
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#e74c3c",
										}}
									>
										✗ Proprietary
									</td>
								</tr>
								<tr
									style={{
										borderBottom: "1px solid #eee",
										background: "#f9f9f9",
									}}
								>
									<td style={{ padding: "1rem", fontWeight: "600" }}>
										Control
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#27ae60",
										}}
									>
										✓ Code Controlled
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#e74c3c",
										}}
									>
										✗ Vendor Controlled
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#e74c3c",
										}}
									>
										✗ Developer Controlled
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#e74c3c",
										}}
									>
										✗ Third-party
									</td>
								</tr>
								<tr style={{ borderBottom: "1px solid #eee" }}>
									<td style={{ padding: "1rem", fontWeight: "600" }}>
										Auditability
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#27ae60",
										}}
									>
										✓ Audited by zkSecurity
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#f39c12",
										}}
									>
										△ Limited
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#e74c3c",
										}}
									>
										✗ No audit
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#e74c3c",
										}}
									>
										✗ None
									</td>
								</tr>
								<tr
									style={{
										borderBottom: "1px solid #eee",
										background: "#f9f9f9",
									}}
								>
									<td style={{ padding: "1rem", fontWeight: "600" }}>
										Performance
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#27ae60",
										}}
									>
										✓ &lt;5% Overhead
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#f39c12",
										}}
									>
										△ Varies
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#95a5a6",
										}}
									>
										? Unknown
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#95a5a6",
										}}
									>
										? Unknown
									</td>
								</tr>
								<tr>
									<td style={{ padding: "1rem", fontWeight: "600" }}>
										AI Focus
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#27ae60",
										}}
									>
										✓ Purpose-built
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#f39c12",
										}}
									>
										△ Generic Cloud
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#f39c12",
										}}
									>
										△ Generic
									</td>
									<td
										style={{
											padding: "1rem",
											textAlign: "center",
											color: "#f39c12",
										}}
									>
										△ Limited
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div style={{ textAlign: "center", marginTop: "3rem" }}>
						<a
							href="https://docs.phala.network/dstack/design-documents"
							target="_blank"
							rel="noopener noreferrer"
							className="cta-button"
							style={{
								background: "#27ae60",
								color: "white",
							}}
						>
							🔬 Know More about dstack
						</a>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section
				className="section"
				style={{
					background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
					color: "white",
					textAlign: "center",
				}}
			>
				<div className="container">
					<h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
						Ready for Confidential Computing?
					</h2>
					<p
						style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: 0.9 }}
					>
						Join the open-source community building the future of secure
						computing. Get started with confidential AI and private cloud
						applications.
					</p>

					<div
						style={{
							display: "flex",
							gap: "1rem",
							justifyContent: "center",
							flexWrap: "wrap",
						}}
					>
						<a
							href="https://github.com/Dstack-TEE/dstack"
							target="_blank"
							rel="noopener noreferrer"
							className="cta-button"
							style={{ background: "#ff6b6b" }}
						>
							Explore on GitHub
						</a>
						<a
							href="https://docs.phala.network/dstack/overview"
							target="_blank"
							rel="noopener noreferrer"
							className="cta-button"
							style={{ background: "transparent", border: "2px solid white" }}
						>
							Documentation
						</a>
						<a
							href="https://cloud.phala.network/"
							target="_blank"
							rel="noopener noreferrer"
							className="cta-button"
							style={{ background: "transparent", border: "2px solid white" }}
						>
							Try with TEE Cloud
						</a>
					</div>

					<div style={{ marginTop: "3rem", fontSize: "0.9rem", opacity: 0.8 }}>
						<p>Questions? Contact us at: contact@dstack.org</p>
						<p>
							Join our community:{" "}
							<a
								href="https://t.me/+RF-yUoDduWAzZTUx"
								target="_blank"
								rel="noopener noreferrer"
								style={{ color: "white" }}
							>
								Telegram
							</a>
						</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer>
				<div className="container">
					<p>
						&copy; 2024 dstack. Open-source confidential computing platform.
					</p>
					<div style={{ marginTop: "1rem" }}>
						<a
							href="https://docs.phala.network/dstack/overview"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								color: "#3498db",
								margin: "0 1rem",
								textDecoration: "none",
							}}
						>
							Documentation
						</a>
						<a
							href="https://github.com/Dstack-TEE/dstack"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								color: "#3498db",
								margin: "0 1rem",
								textDecoration: "none",
							}}
						>
							GitHub
						</a>
						<a
							href="https://t.me/+RF-yUoDduWAzZTUx"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								color: "#3498db",
								margin: "0 1rem",
								textDecoration: "none",
							}}
						>
							Community
						</a>
					</div>
				</div>
			</footer>
		</main>
	);
}
