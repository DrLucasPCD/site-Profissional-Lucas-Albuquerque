"use client";

import { useEffect, useState } from "react";

const projects = [
  { mark: "flui", title: "Flui Creative Studio", text: "Comunicação acessível, design com propósito e ideias que fluem." },
  { mark: "⌁", title: "Pesquisa científica", text: "Estudos em Biomedicina, Neurociência e educação em saúde." },
  { mark: "◇", title: "Jornada acadêmica", text: "Vivências, aprendizados e bastidores da formação em Medicina." },
];

const books = [
  { image: "/book-diagnostico.webp", kicker: "Imaginologia", title: "Diagnóstico por imagem mamária", copy: "Um guia prático para estudantes e profissionais da saúde." },
  { image: "/book-radiologia.webp", kicker: "Radiologia", title: "Introdução à Radiologia", copy: "Princípios essenciais apresentados de forma clara e aplicada." },
  { image: "/book-anatomia.webp", kicker: "Anatomia", title: "Atlas de Anatomia Radiológica", copy: "Anatomia humana interpretada por imagens diagnósticas." },
];

const timeline = [
  ["1998", "Nascimento e início da jornada"],
  ["2016", "Graduação em Biomedicina"],
  ["2024", "Início da graduação em Medicina"],
  ["Hoje", "Pesquisador, autor e criador de projetos"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Lucas Albuquerque — início">
          <span className="brand-mark">LA</span>
          <span><strong>Lucas Albuquerque</strong><small>Biomédico · Acadêmico de Medicina</small></span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Navegação principal">
          {[["Início","inicio"],["Projetos","projetos"],["Livros","livros"],["Trajetória","trajetoria"],["Currículo","curriculo"],["Atualizações","atualizacoes"],["Contato","contato"]].map(([label,id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contato">Fale comigo</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu">
          <span /><span /><span />
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy reveal visible">
          <p className="eyebrow">Conhecimento que transforma</p>
          <h1>Ciência, propósito<br />e <em>superação.</em></h1>
          <p className="lead">Biomédico, acadêmico de Medicina, pesquisador e autor. Transformo desafios em conhecimento e impacto positivo.</p>
          <div className="actions">
            <a className="button gold" href="#trajetoria">Conheça minha trajetória</a>
            <a className="button ghost" href="#projetos">Ver projetos</a>
          </div>
        </div>
        <div className="hero-portrait reveal visible">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="portrait-glow" />
          <img src="/lucas-hero.webp" alt="Lucas Albuquerque trabalhando em um notebook" />
          <p className="floating-note"><span>+8 anos</span> dedicados à ciência</p>
        </div>
        <blockquote className="manifesto reveal visible">
          <span className="quote">“</span>
          <p>A ciência nos ensina a compreender o mundo. O propósito nos inspira a transformá-lo.</p>
          <footer>Lucas Albuquerque <i>— pesquisador e autor</i></footer>
        </blockquote>
        <a className="scroll-hint" href="#trajetoria"><span /> role para descobrir</a>
      </section>

      <section className="trajectory section" id="trajetoria">
        <div className="section-intro reveal">
          <p className="eyebrow">Trajetória</p>
          <h2>Uma história de<br />resiliência e conquistas</h2>
          <p>Desde o nascimento, enfrento desafios que me impulsionaram a buscar conhecimento, inovar e inspirar pessoas. Cada etapa me trouxe até aqui.</p>
          <a className="text-link" href="#atualizacoes">Conheça minha história <Arrow /></a>
        </div>
        <ol className="timeline reveal">
          {timeline.map(([year,text]) => <li key={year}><span className="year">{year}</span><p>{text}</p></li>)}
        </ol>
        <div className="trajectory-photo reveal"><img src="/lucas-hero.webp" alt="Lucas Albuquerque em seu ambiente de estudo" /></div>
      </section>

      <section className="section projects" id="projetos">
        <div className="section-heading reveal">
          <div><p className="eyebrow">Projetos em destaque</p><h2>Ideias que saem<br />do papel</h2></div>
          <p>Projetos que unem tecnologia, criatividade, educação e impacto social.</p>
        </div>
        <div className="project-grid reveal">
          {projects.map((project, index) => (
            <article className={`project-card ${activeProject === index ? "active" : ""}`} key={project.title} onMouseEnter={() => setActiveProject(index)}>
              <span className="project-number">0{index + 1}</span>
              <div className={`project-mark mark-${index}`}>{project.mark}</div>
              <h3>{project.title}</h3><p>{project.text}</p>
              <a href="#contato">Saiba mais <Arrow /></a>
            </article>
          ))}
        </div>
        <a className="text-link centered" href="#contato">Ver todos os projetos <Arrow /></a>
      </section>

      <section className="section books" id="livros">
        <div className="section-heading reveal">
          <div><p className="eyebrow">Livros</p><h2>Conhecimento<br />para levar com você</h2></div>
          <p>Obras construídas para tornar conteúdos complexos mais claros, próximos e acessíveis.</p>
        </div>
        <div className="book-grid reveal">
          {books.map((book) => (
            <article className="book-card" key={book.title}>
              <div className="book-cover"><img src={book.image} alt={`Capa do livro ${book.title}`} loading="lazy" /></div>
              <div className="book-info"><span>{book.kicker}</span><h3>{book.title}</h3><p>{book.copy}</p><a className="button small gold" href="#contato">Comprar agora</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="metrics section reveal" aria-label="Indicadores profissionais">
        {[ ["02","graduações"],["03","livros publicados"],["12+","artigos e publicações"],["5 mil+","pessoas impactadas"] ].map(([number,label]) => (
          <div key={label}><strong>{number}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="section updates" id="atualizacoes">
        <div className="section-heading reveal">
          <div><p className="eyebrow">Atualizações</p><h2>O que está<br />acontecendo agora</h2></div>
          <a className="text-link" href="#contato">Ver todas as atualizações <Arrow /></a>
        </div>
        <div className="updates-grid reveal">
          <article className="featured-update">
            <div className="update-image"><img src="/lucas-wide.webp" alt="Lucas trabalhando em uma pesquisa" loading="lazy" /><span>Artigo</span></div>
            <div><time>18 jul. 2026</time><h3>Neuroplasticidade e reabilitação: caminhos que conectam ciência e vida</h3><p>Um olhar sobre como o cérebro se adapta e cria novas possibilidades.</p><a href="#contato">Ler artigo <Arrow /></a></div>
          </article>
          <div className="update-list">
            <article><span className="update-icon">◎</span><div><time>10 jul. 2026</time><h3>Palestra sobre inclusão e acessibilidade na saúde</h3><a href="#contato">Ver detalhes <Arrow /></a></div></article>
            <article><span className="update-icon">✦</span><div><time>26 jun. 2026</time><h3>Nova etapa na pesquisa acadêmica</h3><a href="#contato">Acompanhar <Arrow /></a></div></article>
            <article><span className="update-icon">□</span><div><time>08 jun. 2026</time><h3>Bastidores da escrita do próximo livro</h3><a href="#contato">Saiba mais <Arrow /></a></div></article>
          </div>
        </div>
      </section>

      <section className="section resume" id="curriculo">
        <div className="resume-heading reveal"><p className="eyebrow">Currículo</p><h2>Ciência se faz com<br /><em>curiosidade e constância.</em></h2></div>
        <div className="resume-grid reveal">
          {[ ["01","Formação acadêmica","Biomedicina e graduação em Medicina"],["02","Experiência profissional","Pesquisa, educação e comunicação"],["03","Publicações e artigos","Produção científica e livros"],["04","Certificações e cursos","Aprendizado contínuo e multidisciplinar"] ].map(([number,title,text]) => (
            <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
        <a className="button gold" href="mailto:contato@lucasalbuquerque.com.br?subject=Solicitação de currículo">Solicitar currículo em PDF</a>
      </section>

      <footer className="footer" id="contato">
        <div className="footer-main reveal">
          <p className="eyebrow">Vamos conversar?</p>
          <h2>Boas ideias começam<br />com uma <em>conversa.</em></h2>
          <a className="email-link" href="mailto:contato@lucasalbuquerque.com.br">contato@lucasalbuquerque.com.br <Arrow /></a>
        </div>
        <div className="footer-bottom">
          <a className="brand" href="#inicio"><span className="brand-mark">LA</span><span><strong>Lucas Albuquerque</strong><small>Ciência · propósito · impacto</small></span></a>
          <div className="socials" aria-label="Redes sociais"><a href="#contato" aria-label="Instagram">ig</a><a href="#contato" aria-label="LinkedIn">in</a><a href="#contato" aria-label="YouTube">yt</a></div>
          <p>© 2026 Lucas Albuquerque</p>
        </div>
      </footer>

      <nav className="mobile-dock" aria-label="Atalhos mobile">
        {[["⌂","Início","inicio"],["◇","Projetos","projetos"],["▣","Livros","livros"],["│","Trajetória","trajetoria"],["@","Contato","contato"]].map(([icon,label,id]) => <a key={id} href={`#${id}`}><span>{icon}</span>{label}</a>)}
      </nav>
    </main>
  );
}
