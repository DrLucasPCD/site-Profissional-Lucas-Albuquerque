"use client";

import { useEffect, useState } from "react";

const lattesUrl = "http://lattes.cnpq.br/4723512564485916";
const amazonUrl = "https://www.amazon.com.br/stores/Lucas-Albuquerque/author/B0BRJS2VXW?ref=ap_rdr&shoppingPortalEnabled=true";
const fluiUrl = "https://www.instagram.com/fluicreativestudio/";
const fluiSiteUrl = "https://flui-creative-studio.netlify.app/";
const professionalInstagramUrl = "https://www.instagram.com/drlucaspcd/";
const personalInstagramUrl = "https://www.instagram.com/lucas.v.s.a/";

const projects = [
  { mark: "flui", title: "Flui Creative Studio", text: "Editor de vídeo criado por mim para tornar a comunicação mais acessível. O projeto gera legendas para vídeos, inclusive de pessoas com dificuldade de dicção, ajudando a tornar a mensagem mais compreensível.", url: fluiSiteUrl, linkLabel: "Acessar projeto", secondaryUrl: fluiUrl, secondaryLabel: "Instagram" },
  { mark: "⌁", title: "Neurociência e paralisia cerebral", text: "Pesquisa em mapeamento cerebral por eletroencefalografia quantitativa em indivíduos com paralisia cerebral.", image: "/lucas-procedure.webp", url: lattesUrl, linkLabel: "Ver no Lattes" },
  { mark: "IA", title: "Engenharia Biomédica e IA", text: "Mestrado sobre uma abordagem híbrida inteligente para estimação de docking molecular entre proteínas.", image: "/lucas-mestrado.webp", url: lattesUrl, linkLabel: "Ver no Lattes" },
  { mark: "MD", title: "Formação médica e inclusão", text: "Vivências na graduação em Medicina e defesa de uma formação em saúde mais inclusiva.", image: "/lucas-medicine.webp", url: lattesUrl, linkLabel: "Ver no Lattes" },
];

const books = [
  { image: "/book-paralisia-atualizada.jpg", kicker: "Livro · 2023", title: "Paralisia Cerebral: Uma Visão de Dentro para Fora", copy: "Uma narrativa pessoal acompanhada de uma introdução à fisiopatologia da paralisia cerebral." },
  { image: "/book-cerebral-palsy.webp", kicker: "Book · 2023", title: "Cerebral Palsy: An Inside Out View", copy: "Edição em inglês da obra publicada por Lucas Albuquerque." },
];

const timeline = [
  ["1999", "Nascimento em 26 de janeiro"],
  ["2018–2022", "Graduação em Biomedicina pela UFPE"],
  ["2023–2024", "Especialização em Neurociências pela UFPE"],
  ["2023–2025", "Mestrado em Engenharia Biomédica pela UFPE"],
  ["2024–hoje", "Graduação em Medicina pela UNINASSAU Recife"],
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
          <span><strong>Lucas Albuquerque</strong><small>Biomédico · Mestre em Engenharia Biomédica</small></span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Navegação principal">
          {[["Início","inicio"],["Projetos","projetos"],["Livros","livros"],["Trajetória","trajetoria"],["Currículo","curriculo"],["Atualizações","atualizacoes"],["Contato","contato"]].map(([label,id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href={lattesUrl} target="_blank" rel="noreferrer">Currículo Lattes</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menu">
          <span /><span /><span />
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy reveal visible">
          <p className="eyebrow">Biomédico patologista · Mestre em Engenharia Biomédica</p>
          <h1>Ciência, propósito<br />e <em>superação.</em></h1>
          <p className="lead">Especialista em Neurociências, pesquisador em interface cérebro-máquina e graduando em Medicina. Transformo vivências e pesquisa em conhecimento acessível.</p>
          <div className="actions">
            <a className="button gold" href="#trajetoria">Conheça minha trajetória</a>
            <a className="button ghost" href={lattesUrl} target="_blank" rel="noreferrer">Ver currículo Lattes</a>
          </div>
        </div>
        <div className="hero-portrait reveal visible">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="portrait-glow" />
          <img src="/lucas-portrait.webp" alt="Lucas Albuquerque, graduando em Medicina" />
          <p className="floating-note"><span>Desde 2018</span> dedicado à ciência</p>
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
          <p>Nascido em 26 de janeiro de 1999, construí uma trajetória que une Biomedicina, Neurociências, Engenharia Biomédica e Medicina. A pesquisa e a escrita são meios de ampliar a inclusão e o acesso ao conhecimento.</p>
          <a className="text-link" href={lattesUrl} target="_blank" rel="noreferrer">Ver currículo completo <Arrow /></a>
        </div>
        <ol className="timeline reveal">
          {timeline.map(([year,text]) => <li key={year}><span className="year">{year}</span><p>{text}</p></li>)}
        </ol>
        <div className="trajectory-photo reveal"><img src="/lucas-graduacao.webp" alt="Lucas Albuquerque em sua cerimônia de graduação em Biomedicina" /></div>
      </section>

      <section className="section projects" id="projetos">
        <div className="section-heading reveal">
          <div><p className="eyebrow">Projetos em destaque</p><h2>Ideias que saem<br />do papel</h2></div>
          <p>Pesquisa, engenharia biomédica e formação médica orientadas pela ciência, inovação e inclusão.</p>
        </div>
        <div className="project-grid reveal">
          {projects.map((project, index) => (
            <article className={`project-card ${activeProject === index ? "active" : ""}`} key={project.title} onMouseEnter={() => setActiveProject(index)}>
              <span className="project-number">0{index + 1}</span>
              {project.image && <img className="project-image" src={project.image} alt="" loading="lazy" />}
              <div className={`project-mark mark-${index}`}>{project.mark}</div>
              <h3>{project.title}</h3><p>{project.text}</p>
              <div className="project-links"><a href={project.url} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow /></a>{project.secondaryUrl && <a className="secondary-link" href={project.secondaryUrl} target="_blank" rel="noreferrer">{project.secondaryLabel}</a>}</div>
            </article>
          ))}
        </div>
        <a className="text-link centered" href={lattesUrl} target="_blank" rel="noreferrer">Ver produções no Lattes <Arrow /></a>
      </section>

      <section className="section books" id="livros">
        <div className="section-heading reveal">
          <div><p className="eyebrow">Livros</p><h2>Conhecimento<br />para levar com você</h2></div>
          <p>Obras autorais que aproximam ciência, vivência e inclusão. Disponíveis na loja oficial do autor.</p>
        </div>
        <div className="book-grid reveal">
          {books.map((book) => (
            <article className="book-card" key={book.title}>
              <div className={book.image ? "book-cover" : "book-cover book-placeholder"}>{book.image ? <img src={book.image} alt={`Capa do livro ${book.title}`} loading="lazy" /> : <span>Cerebral<br />Palsy<br /><i>an inside out view</i></span>}</div>
              <div className="book-info"><span>{book.kicker}</span><h3>{book.title}</h3><p>{book.copy}</p><a className="button small gold" href={amazonUrl} target="_blank" rel="noreferrer">Ver na Amazon</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="metrics section reveal" aria-label="Indicadores profissionais">
        {[ ["03","formações concluídas"],["02","livros publicados"],["06+","apresentações em eventos"],["2024","Medicina em curso"] ].map(([number,label]) => (
          <div key={label}><strong>{number}</strong><span>{label}</span></div>
        ))}
      </section>

      <section className="section updates" id="atualizacoes">
        <div className="section-heading reveal">
          <div><p className="eyebrow">Atualizações</p><h2>O que está<br />acontecendo agora</h2></div>
          <a className="text-link" href={lattesUrl} target="_blank" rel="noreferrer">Ver produção completa <Arrow /></a>
        </div>
        <div className="updates-grid reveal">
          <article className="featured-update">
            <div className="update-image"><img src="/lucas-book-event.webp" alt="Lucas Albuquerque com o neurocientista Miguel Nicolelis em um evento" loading="lazy" /><span>Neurociência</span></div>
            <div><time>Encontro</time><h3>Encontro com o neurocientista Miguel Nicolelis</h3><p>Registro de um encontro inspirador, que aproxima a pesquisa, a divulgação científica e as referências que marcam minha trajetória.</p><a href={lattesUrl} target="_blank" rel="noreferrer">Conhecer a trajetória <Arrow /></a></div>
          </article>
          <div className="update-list">
            <article><span className="update-icon">◎</span><div><time>2022</time><h3>Graduação em Biomedicina pela Universidade Federal de Pernambuco</h3><a href={lattesUrl} target="_blank" rel="noreferrer">Ver formação <Arrow /></a></div></article>
            <article><span className="update-icon">✦</span><div><time>2024</time><h3>Conclusão da especialização em Neurociências pela UFPE</h3><a href={lattesUrl} target="_blank" rel="noreferrer">Ver formação <Arrow /></a></div></article>
            <article><span className="update-icon">□</span><div><time>2025</time><h3>Mestrado em Engenharia Biomédica concluído na UFPE</h3><a href={lattesUrl} target="_blank" rel="noreferrer">Ver formação <Arrow /></a></div></article>
          </div>
        </div>
        <div className="photo-story reveal" aria-label="Momentos da trajetória de Lucas Albuquerque">
          <figure><img src="/lucas-laptop.webp" alt="Lucas Albuquerque em atividade acadêmica" loading="lazy" /><figcaption>Pesquisa e estudo</figcaption></figure>
          <figure><img src="/lucas-conference.webp" alt="Lucas Albuquerque em evento científico" loading="lazy" /><figcaption>Eventos científicos</figcaption></figure>
          <figure><img src="/lucas-medicine.webp" alt="Lucas Albuquerque em sua formação médica" loading="lazy" /><figcaption>Formação em Medicina</figcaption></figure>
        </div>
      </section>

      <section className="section resume" id="curriculo">
        <div className="resume-heading reveal"><p className="eyebrow">Currículo</p><h2>Ciência se faz com<br /><em>curiosidade e constância.</em></h2></div>
        <div className="resume-grid reveal">
          {[ ["01","Formação acadêmica","Biomedicina (UFPE), Neurociências (UFPE), Engenharia Biomédica (UFPE) e Medicina em andamento"],["02","Pesquisa","Interface cérebro-máquina, eletroencefalografia quantitativa, IA e docking molecular"],["03","Publicações","Dois livros publicados e produções apresentadas em congressos"],["04","Experiência","Estágio no Hospital das Clínicas da UFPE/Ebserh e formação continuada em saúde"] ].map(([number,title,text]) => (
            <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
        <div className="resume-actions"><a className="button gold" href="/curriculo-lattes-lucas-albuquerque.pdf" target="_blank" rel="noreferrer">Baixar currículo Lattes</a><a className="button ghost" href={lattesUrl} target="_blank" rel="noreferrer">Abrir no CNPq</a></div>
      </section>

      <footer className="footer" id="contato">
        <div className="footer-main reveal">
          <p className="eyebrow">Acompanhe o trabalho</p>
          <h2>Conhecimento que<br />gera <em>impacto.</em></h2>
          <a className="email-link" href={amazonUrl} target="_blank" rel="noreferrer">Conheça os livros na Amazon <Arrow /></a>
        </div>
        <div className="footer-bottom">
          <a className="brand" href="#inicio"><span className="brand-mark">LA</span><span><strong>Lucas Albuquerque</strong><small>Ciência · propósito · impacto</small></span></a>
          <div className="socials" aria-label="Links profissionais"><a href={lattesUrl} target="_blank" rel="noreferrer" aria-label="Currículo Lattes">CV</a><a href={amazonUrl} target="_blank" rel="noreferrer" aria-label="Livros na Amazon">AM</a><a href={professionalInstagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram profissional">IG</a><a href={personalInstagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram pessoal">P</a></div>
          <p>© 2026 Lucas Albuquerque</p>
        </div>
      </footer>

      <nav className="mobile-dock" aria-label="Atalhos mobile">
        {[["⌂","Início","inicio"],["◇","Projetos","projetos"],["▣","Livros","livros"],["│","Trajetória","trajetoria"],["@","Contato","contato"]].map(([icon,label,id]) => <a key={id} href={`#${id}`}><span>{icon}</span>{label}</a>)}
      </nav>
    </main>
  );
}
