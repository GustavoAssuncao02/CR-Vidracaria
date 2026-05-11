import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  DoorOpen,
  Instagram,
  MapPin,
  MessageCircle,
  PanelsTopLeft,
  Phone,
  RectangleVertical,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Wrench,
} from "lucide-react";

const whatsapp = "https://wa.me/5575987021018";

const heroImage = {
  src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  alt: "Ambiente moderno com portas e janelas de vidro",
};

const services = [
  {
    title: "Box para banheiro",
    text: "Vidro temperado, perfis de aluminio e instalacao com acabamento limpo.",
    icon: ShowerHead,
  },
  {
    title: "Janelas de correr",
    text: "Solucoes sob medida para ventilacao, luz natural e seguranca.",
    icon: PanelsTopLeft,
  },
  {
    title: "Portas de vidro",
    text: "Portas modernas para lojas, residencias e ambientes corporativos.",
    icon: DoorOpen,
  },
  {
    title: "Espelhos",
    text: "Espelhos lapidados e bizotados para banheiros, salas e comercios.",
    icon: RectangleVertical,
  },
  {
    title: "Guarda-corpo",
    text: "Guarda-corpo de varanda e escadas com fixacao segura.",
    icon: ShieldCheck,
  },
  {
    title: "Manutencao",
    text: "Trocas, ajustes, instalacoes e reparos em vidros e acessorios.",
    icon: Wrench,
  },
];

const navLinks = [
  ["#inicio", "Inicio"],
  ["#servicos", "Servicos"],
  ["#sobre", "Sobre"],
  ["#contato", "Contato"],
];

function BrandMark({ compact = false }) {
  return (
    <a className={`brand-mark ${compact ? "brand-mark--compact" : ""}`} href="#inicio">
      <span className="brand-emblem">CR</span>
      <span className="brand-copy">
        <strong>Vidraçaria</strong>
        <small>Deus é fiel</small>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header site-header--glass">
      <div className="shell header-inner">
        <BrandMark />
        <nav className="nav-links" aria-label="Navegacao principal">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-action" href={whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          Orçamento
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer footer--dark" id="contato">
      <div className="shell footer-grid">
        <div>
          <BrandMark compact />
          <p>
            Solucoes em vidro para casas, lojas e empresas, com atendimento direto e
            acabamento caprichado.
          </p>
        </div>
        <div>
          <h3>Contato</h3>
          <a href={whatsapp} target="_blank" rel="noreferrer">
            <Phone size={16} /> WhatsApp 75 98702-1018
          </a>
          <span>
            <MapPin size={16} /> Feira de Santana e região
          </span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={16} /> Instagram
          </a>
        </div>
        <div>
          <h3>Serviços</h3>
          <span>Box, portas e janelas</span>
          <span>Espelhos e peliculas</span>
          <span>Guarda-corpo e manutencao</span>
        </div>
      </div>
      <div className="footer-bottom">© 2026 CR Vidraçaria. Todos os direitos reservados.</div>
    </footer>
  );
}

function GlassLanding() {
  return (
    <div className="page page-glass">
      <div className="glass-bg" aria-hidden="true" />
      <Header />

      <main>
        <section className="glass-hero shell" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={16} /> Qualidade e transparencia
            </span>
            <h1>
              Vidros que <em>transformam</em> ambientes.
            </h1>
            <p>
              Instalacao de vidros, box, janelas, divisorias, espelhos e fachadas
              para projetos residenciais e comerciais.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Pedir orcamento
              </a>
              <a className="btn btn-secondary" href="#servicos">
                Ver servicos <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="glass-visual" aria-label="Composicao visual com paineis de vidro">
            <div className="glass-panel glass-panel--main">
              <span>Qualidade em cada instalação</span>
            </div>
            <div className="glass-panel glass-panel--side" />
            <div className="glass-stat">
              <strong>10+</strong>
              <span>anos no mercado</span>
            </div>
          </div>
        </section>

        <section className="stats-strip shell" aria-label="Indicadores">
          <div>
            <strong>500+</strong>
            <span>Projetos realizados</span>
          </div>
          <div>
            <strong>Rápido</strong>
            <span>Atendimento rápido</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Compromisso no acabamento</span>
          </div>
        </section>

        <section className="section shell two-column" id="sobre">
          <div className="image-stack">
            <img src={heroImage.src} alt={heroImage.alt} />
            <div>
              <strong>CR Vidraçaria</strong>
              <span>Tradicao, seguranca e confianca.</span>
            </div>
          </div>
          <div>
            <span className="section-kicker">Quem somos</span>
            <h2>Atendimento de vidracaria com responsabilidade do inicio ao fim.</h2>
            <p>
              Cada projeto recebe orientacao, medicao cuidadosa e escolha correta dos
              materiais para garantir beleza, durabilidade e seguranca.
            </p>
            <div className="feature-list">
              <span>
                <CheckCircle2 size={18} /> Vidros certificados
              </span>
              <span>
                <CheckCircle2 size={18} /> Equipe especializada
              </span>
              <span>
                <CheckCircle2 size={18} /> Orçamento transparente
              </span>
            </div>
          </div>
        </section>

        <section className="section shell" id="servicos">
          <div className="section-heading centered">
            <span className="section-kicker">Servicos</span>
            <h2>O que oferecemos</h2>
            <p>Produtos sob medida para valorizar e proteger o seu ambiente.</p>
          </div>
          <div className="service-grid glass-service-grid">
            {services.map(({ title, text, icon: Icon }) => (
              <article className="service-card" key={title}>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell testimonials">
          {["Maria Silva", "Joao Pereira", "Ana Costa"].map((name, index) => (
            <article key={name}>
              <div className="stars">★★★★★</div>
              <p>
                {index === 0
                  ? "Fizeram o box do meu banheiro e ficou perfeito. Equipe pontual e caprichosa."
                  : index === 1
                    ? "As janelas da loja ficaram excelentes, com entrega rapida e preco justo."
                    : "As divisorias do escritorio ficaram lindas e o acabamento surpreendeu."}
              </p>
              <strong>{name}</strong>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return <GlassLanding />;
}
