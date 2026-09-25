import { useState } from 'react'

const features = [
  {
    title: 'AI workflows',
    text: 'Automate repetitive tasks and turn raw operations into execution-ready systems.',
    accent: 'cyan'
  },
  {
    title: 'Smart outreach',
    text: 'Generate personalized campaigns, email content, and conversion-focused messaging.',
    accent: 'purple'
  },
  {
    title: 'Revenue insights',
    text: 'Track customer journeys, conversion opportunities, and the highest-performing funnels.',
    accent: 'amber'
  },
  {
    title: 'Fast deployment',
    text: 'Launch optimized flows in days, not months, with a setup built for modern teams.',
    accent: 'green'
  }
]

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'For founders validating an idea and building momentum.',
    features: ['1 workspace', 'AI automation templates', 'Basic analytics', 'Email support'],
    cta: 'Get started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'For growing teams that need speed, control, and conversion.',
    features: ['Unlimited automations', 'Advanced AI prompts', 'Custom dashboards', 'Priority support'],
    cta: 'Start free trial',
    popular: true
  },
  {
    name: 'Scale',
    price: '$199',
    description: 'For larger businesses running multi-channel growth operations.',
    features: ['Team seats included', 'Custom integrations', 'Dedicated onboarding', 'Slack support'],
    cta: 'Talk to sales',
    popular: false
  }
]

const faqs = [
  {
    question: 'How quickly can we launch?',
    answer: 'Most clients go live in under 2 weeks with our onboarding workflow and templates.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes. The Pro plan includes a 14-day free trial with full access to core features.'
  },
  {
    question: 'Does this work for agencies and SaaS teams?',
    answer: 'Absolutely. The platform is designed for startups, agencies, marketers, and AI-first product teams.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. Billing is month-to-month, and you can cancel at any time without penalties.'
  }
]

const logos = ['Nexa', 'PixelForge', 'Northstar', 'Helio', 'Lattice', 'Aural']

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav">
          <div className="brand">
            <span className="brand-mark">A</span>
            <span>Astra</span>
          </div>

          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <button className="btn btn-ghost">Log in</button>
            <button className="btn btn-primary">Book demo</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="badge">Built for AI-powered growth</span>
              <h1>Turn product traction into predictable revenue.</h1>
              <p>
                Astra helps teams automate outreach, launch smarter growth workflows,
                and turn customer signals into action with AI.
              </p>

              <div className="cta-row">
                <button className="btn btn-primary large">Start free trial</button>
                <button className="btn btn-secondary large">Watch demo</button>
              </div>

              <div className="mini-stats">
                <div>
                  <strong>4.9/5</strong>
                  <span>Customer rating</span>
                </div>
                <div>
                  <strong>2.3x</strong>
                  <span>Average lift</span>
                </div>
                <div>
                  <strong>10k+</strong>
                  <span>Automations launched</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="dashboard-card">
                <div className="dashboard-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>

                <div className="chart-panel">
                  <div className="chart-bars">
                    <span style={{ height: '28%' }}></span>
                    <span style={{ height: '45%' }}></span>
                    <span style={{ height: '58%' }}></span>
                    <span style={{ height: '70%' }}></span>
                    <span style={{ height: '90%' }}></span>
                    <span style={{ height: '100%' }}></span>
                  </div>

                  <div className="chart-meta">
                    <div>
                      <label>Pipeline</label>
                      <strong>$128.4K</strong>
                    </div>
                    <div className="chip success">+32.8%</div>
                  </div>
                </div>

                <div className="insight-row">
                  <div className="insight-box">
                    <span>Qualified leads</span>
                    <strong>832</strong>
                  </div>
                  <div className="insight-box">
                    <span>Automations</span>
                    <strong>27</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="logo-strip">
          <div className="container">
            <span>Trusted by teams at</span>
            <div className="logos">
              {logos.map((logo) => (
                <div key={logo} className="logo-pill">{logo}</div>
              ))}
            </div>
          </div>
        </div>

        <section id="features" className="features section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Why teams switch</span>
              <h2>Built to move faster without adding chaos.</h2>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <article key={feature.title} className={`feature-card ${feature.accent}`}>
                  <div className="icon-wrap">
                    <span></span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="showcase section">
          <div className="container">
            <div className="showcase-box">
              <div className="showcase-copy">
                <span className="eyebrow">Operational clarity</span>
                <h2>Everything in one command center.</h2>
                <p>
                  From AI-generated campaigns to pipeline forecasting, Astra gives your
                  team one view of what matters most.
                </p>

                <ul className="check-list">
                  <li>Unified reporting across channels</li>
                  <li>Actionable lead prioritization</li>
                  <li>Built-in automations for daily execution</li>
                </ul>
              </div>

              <div className="showcase-panel">
                <div className="panel-header">
                  <span>Performance</span>
                  <span className="chip success">Live</span>
                </div>

                <div className="metric-set">
                  <div className="metric">
                    <label>CTR</label>
                    <strong>8.4%</strong>
                  </div>
                  <div className="metric">
                    <label>Conversion</label>
                    <strong>14.2%</strong>
                  </div>
                  <div className="metric">
                    <label>ROAS</label>
                    <strong>5.7x</strong>
                  </div>
                </div>

                <div className="mini-graph">
                  <span style={{ height: '40%' }}></span>
                  <span style={{ height: '60%' }}></span>
                  <span style={{ height: '48%' }}></span>
                  <span style={{ height: '76%' }}></span>
                  <span style={{ height: '92%' }}></span>
                  <span style={{ height: '100%' }}></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing section">
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">Pricing</span>
              <h2>Simple plans for every stage of growth.</h2>
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <article key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <span className="badge-plan">Most popular</span>}
                  <h3>{plan.name}</h3>
                  <div className="price-row">
                    <span className="currency">$</span>
                    <span className="price">{plan.price}</span>
                    <span className="period">/mo</span>
                  </div>
                  <p>{plan.description}</p>

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                    {plan.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="faq section">
          <div className="container faq-wrap">
            <div className="section-heading">
              <span className="eyebrow">FAQ</span>
              <h2>Everything you need to know.</h2>
            </div>

            <div className="faq-list">
              {faqs.map((item) => (
                <div key={item.question} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container contact-wrap">
            <div className="contact-copy">
              <span className="eyebrow">Let’s talk</span>
              <h2>Build your next growth engine with Astra.</h2>
              <p>
                Tell us about your goals and we’ll share a roadmap that fits your team.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Morgan"
                    required
                  />
                </label>
              </div>

              <div className="field-row two-col">
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    required
                  />
                </label>

                <label>
                  Company
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Studio"
                  />
                </label>
              </div>

              <div className="field-row">
                <label>
                  Message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="We want to automate outreach and improve demo conversion..."
                    rows="5"
                    required
                  ></textarea>
                </label>
              </div>

              <button type="submit" className="btn btn-primary form-btn">
                Send inquiry
              </button>

              {submitted && (
                <div className="success-msg">
                  Thanks! Your message has been received and we’ll reach out shortly.
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <div className="brand">
            <span className="brand-mark">A</span>
            <span>Astra</span>
          </div>

          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>

          <span className="copyright">© 2026 Astra</span>
        </div>
      </footer>
    </div>
  )
}

export default App
