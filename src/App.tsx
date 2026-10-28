import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, X, Scissors, Sparkles, Flower2, Hand, Heart, CalendarDays, Clock3, MapPin, ChevronDown, Check, Star } from 'lucide-react'
import emblem from './assets/aurea-emblema.png'

const serviceGroups = [
  { label: 'Cabelos', subtitle: 'Cuidado, cor & movimento', items: [
    ['Corte feminino', 'A partir de R$ 90'], ['Corte masculino', 'A partir de R$ 55'], ['Escova e finalização', 'A partir de R$ 60'],
    ['Coloração e tonalização', 'A partir de R$ 180'], ['Mechas e iluminação', 'A partir de R$ 350'], ['Hidratação e reconstrução', 'A partir de R$ 90'],
  ]},
  { label: 'Beleza', subtitle: 'Detalhes que fazem diferença', items: [
    ['Maquiagem social', 'A partir de R$ 180'], ['Penteado para eventos', 'A partir de R$ 160'], ['Manicure', 'A partir de R$ 40'],
    ['Pedicure', 'A partir de R$ 45'], ['Esmaltação em gel', 'A partir de R$ 100'], ['Design de sobrancelhas', 'A partir de R$ 45'],
  ]},
  { label: 'Momentos especiais', subtitle: 'Para celebrar com você', items: [
    ['Produção para noivas', 'A partir de R$ 800'], ['Cabelo + maquiagem', 'Consulte combinação'], ['Produção para eventos', 'Orçamento personalizado'],
  ]},
]
const faqs = [
  ['Como faço para agendar um horário?', 'Neste projeto demonstrativo, o botão de agendamento não está conectado a um salão real. Em uma versão comercial, ele poderá abrir uma conversa pelo WhatsApp ou um sistema de reservas.'],
  ['Preciso agendar com antecedência?', 'Sim. O conceito recomenda reservar com antecedência, especialmente aos sábados e para serviços como maquiagem, penteados, coloração e mechas.'],
  ['Os preços incluem todos os produtos?', 'Os valores são demonstrativos. Em um atendimento real, qualquer custo adicional deverá ser informado antes da execução do serviço.'],
  ['Posso fazer coloração e hidratação no mesmo dia?', 'A possibilidade depende da avaliação dos fios, dos procedimentos desejados e da compatibilidade entre os produtos utilizados.'],
  ['O estúdio atende noivas?', 'O projeto prevê pacotes personalizados para noivas e eventos, sujeitos à disponibilidade e a orçamento prévio.'],
  ['Posso cancelar ou remarcar?', 'A recomendação é comunicar qualquer alteração com antecedência, de acordo com a política de agendamento que seria informada na reserva.'],
]
function FictionBadge({ footer = false }: { footer?: boolean }) {
  return <div className={footer ? 'fiction-note fiction-note--footer' : 'fiction-note'}><span className="fiction-dot" /> <strong>PROJETO FICTÍCIO</strong><span> — marca e informações demonstrativas para portfólio.</span></div>
}
function App() {
  const [activeGroup, setActiveGroup] = useState('Cabelos')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [bookingOpen, setBookingOpen] = useState(false)
  const showDemo = () => setBookingOpen(true)
  const closeMenu = () => setMenuOpen(false)
  const activeServices = serviceGroups.find(g => g.label === activeGroup) ?? serviceGroups[0]
  return <div className="site-shell">
    <FictionBadge />
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <img src={emblem} alt="Emblema dourado Auréa Beauty Studio" />
          <span><b>AURÉA</b><small>BEAUTY STUDIO</small></span>
        </a>
        <button className="mobile-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav--open' : 'nav'} aria-label="Navegação principal">
          <a href="#conceito" onClick={closeMenu}>O estúdio</a><a href="#servicos" onClick={closeMenu}>Serviços</a><a href="#experiencia" onClick={closeMenu}>Experiência</a><a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
          <button className="nav-cta" onClick={showDemo}>Agendar horário <ArrowUpRight size={15}/></button>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-watermark">A</div>
        <div className="container hero-layout">
          <div className="hero-content">
            <p className="overline"><span /> BELEZA • CUIDADO • ESSÊNCIA</p>
            <h1>Sua beleza,<br/><i>sua essência,</i><br/>seu momento.</h1>
            <p className="hero-description">Um convite para desacelerar, se cuidar e celebrar aquilo que faz você ser única. Cada detalhe pensado para transformar seu momento de beleza em uma experiência especial.</p>
            <div className="hero-buttons"><button className="button button--dark" onClick={showDemo}>Agendar meu horário <ArrowUpRight size={17}/></button><a className="under-link" href="#servicos">Descobrir serviços <ArrowDown size={15}/></a></div>
            <div className="hero-signature"><span className="signature-line"/><span>Beleza que revela a sua essência</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo" role="img" aria-label="Interior elegante e acolhedor de um salão de beleza" />
            <div className="photo-label"><span className="label-number">01</span><span>Seu tempo.<br/><i>Seu ritual.</i></span><span className="label-star">✳</span></div>
            <div className="round-stamp"><span>BELEZA COM INTENÇÃO · CUIDADO COM AFETO · </span><b>✳</b></div>
            <div className="image-caption">AURÉA — EST. 2018 <span>CONCEITO FICTÍCIO</span></div>
          </div>
        </div>
        <div className="container hero-bottom"><span>01 / 03</span><span className="hero-bottom-line"/><span>UM NOVO OLHAR SOBRE O AUTOCUIDADO</span></div>
      </section>

      <section className="intro section-pad" id="conceito">
        <div className="container intro-grid">
          <div className="intro-left"><span className="section-index">01 — NOSSA ESSÊNCIA</span><img src={emblem} alt="" className="intro-emblem"/><p>Um espaço imaginado para acolher sua beleza em todas as formas.</p></div>
          <div className="intro-right"><p className="overline overline--dark">MAIS DO QUE BELEZA</p><h2>O cuidado que você merece,<br/><i>do seu jeito.</i></h2><p>O Auréa Beauty Studio é um salão fictício criado para este portfólio. A proposta une estética contemporânea, atendimento atencioso e um ambiente elegante para valorizar a individualidade de cada pessoa.</p><p>Da escolha da cor ao acabamento final, cada serviço foi pensado como uma pausa na rotina — um momento para se olhar com carinho e sair se sentindo bem.</p><a className="text-arrow" href="#experiencia">Conheça nossa proposta <ArrowUpRight size={17}/></a></div>
        </div>
      </section>

      <section className="services section-pad" id="servicos">
        <div className="container">
          <div className="services-heading"><div><span className="section-index">02 — MENU DE BELEZA</span><h2>Seu próximo<br/><i>capítulo de beleza.</i></h2></div><p>Escolha seu momento. De um cuidado rápido a uma produção especial, encontre o serviço que combina com você.</p></div>
          <div className="service-tabs" role="tablist" aria-label="Categorias de serviços">{serviceGroups.map(g=><button key={g.label} role="tab" aria-selected={activeGroup===g.label} className={activeGroup===g.label?'service-tab active':'service-tab'} onClick={()=>setActiveGroup(g.label)}><span>{g.label}</span><ArrowUpRight size={15}/></button>)}</div>
          <div className="service-menu">
            <div className="service-menu-title"><span>{activeServices.subtitle}</span><span>{String(serviceGroups.findIndex(g=>g.label===activeGroup)+1).padStart(2,'0')} / 03</span></div>
            {activeServices.items.map(([name,price],i)=><div className="menu-row" key={name}><span className="menu-index">{String(i+1).padStart(2,'0')}</span><div className="menu-name">{name}<small>{name.includes('Mechas')?'Técnica personalizada após avaliação':name.includes('noivas')||name.includes('noiva')?'Planejamento mediante agendamento':'Atendimento pensado para você'}</small></div><span className="menu-dots"/><strong>{price}</strong></div>)}
            <div className="menu-footnote">* Valores fictícios para demonstração. O preço final pode variar conforme técnica, comprimento, produtos e complexidade.</div>
          </div>
          <div className="service-bottom"><span>Não sabe qual serviço escolher?</span><button className="text-arrow" onClick={showDemo}>Vamos conversar <ArrowUpRight size={16}/></button></div>
        </div>
      </section>

      <section className="experience section-pad" id="experiencia">
        <div className="container experience-grid">
          <div className="experience-visual"><div className="experience-image" role="img" aria-label="Detalhe de produtos de beleza e flores em uma bancada elegante" /><div className="experience-card"><Sparkles size={19}/><span>Um ritual de cuidado<br/><i>feito para você.</i></span></div><span className="experience-side">AURÉA BEAUTY STUDIO · CONCEITO</span></div>
          <div className="experience-copy"><span className="section-index">03 — A EXPERIÊNCIA AURÉA</span><h2>Pequenos detalhes.<br/><i>Uma grande diferença.</i></h2><p className="experience-lead">A beleza está no resultado — e também em como você se sente durante o caminho.</p>
            <div className="value-list">{[
              ['01','Escuta atenta','Entender seu estilo, suas preferências e o que faz você se sentir bem.'],
              ['02','Cuidado personalizado','Escolhas e técnicas adequadas ao serviço e às características de cada pessoa.'],
              ['03','Transparência em cada etapa','Orientações sobre procedimentos, valores e manutenção antes de começar.'],
              ['04','Um tempo só seu','Um ambiente pensado para tornar o autocuidado uma pausa prazerosa.'],
            ].map(([n,title,desc])=><div className="value-row" key={n}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div><Check size={16}/></div>)}</div>
          </div>
        </div>
      </section>

      <section className="quote-band"><div className="container quote-inner"><span className="quote-mark">“</span><p>Não é sobre se transformar em outra pessoa.<br/><i>É sobre revelar o que já existe em você.</i></p><span className="quote-credit">AURÉA BEAUTY STUDIO · FRASE CONCEITUAL</span></div></section>

      <section className="details section-pad">
        <div className="container details-grid">
          <div><span className="section-index">04 — PLANEJE SEU MOMENTO</span><h2>Seu tempo de<br/><i>se cuidar.</i></h2><p>Os horários abaixo fazem parte do conceito visual do projeto e não correspondem a um estabelecimento real.</p><button className="button button--dark" onClick={showDemo}>Simular agendamento <CalendarDays size={16}/></button></div>
          <div className="hours-card"><div className="hours-title"><Clock3 size={19}/><span>HORÁRIOS DE FUNCIONAMENTO</span></div>{[['Segunda-feira','Fechado'],['Terça a sexta','9h às 19h'],['Sábado','8h às 18h'],['Domingos e feriados','Eventos sob consulta']].map(([day,time])=><div className="hours-row" key={day}><span>{day}</span><strong>{time}</strong></div>)}<div className="address-note"><MapPin size={17}/><span>Endereço-base fictício: Caraguatatuba — SP<br/><small>Atendimento e deslocamentos para eventos sujeitos à disponibilidade.</small></span></div></div>
        </div>
      </section>

      <section className="faq section-pad" id="duvidas"><div className="container faq-grid"><div><span className="section-index">05 — PERGUNTAS FREQUENTES</span><h2>Tudo o que você<br/><i>precisa saber.</i></h2><p>Informações demonstrativas para conhecer a proposta do estúdio.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?'faq-open':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>

      <section className="final-call"><div className="container final-call-inner"><img src={emblem} alt="" /><span className="section-index">SEU PRÓXIMO MOMENTO COMEÇA AQUI</span><h2>Permita-se um momento<br/><i>só seu.</i></h2><p>Descubra uma experiência de cuidado criada para valorizar a sua essência.</p><button className="button button--light" onClick={showDemo}>Agendar meu horário <ArrowUpRight size={17}/></button><small>Projeto fictício para portfólio · Botão demonstrativo</small></div></section>
    </main>

    <footer className="footer"><div className="container footer-top"><div className="footer-brand"><a className="brand brand--footer" href="#inicio"><img src={emblem} alt=""/><span><b>AURÉA</b><small>BEAUTY STUDIO</small></span></a><p>Beleza que revela a sua essência.</p><span className="fiction-stamp">MARCA FICTÍCIA · PORTFÓLIO</span></div><div className="footer-column"><h3>Explore</h3><a href="#conceito">O estúdio</a><a href="#servicos">Serviços e valores</a><a href="#experiencia">Nossa proposta</a><a href="#duvidas">Perguntas frequentes</a></div><div className="footer-column"><h3>Informações</h3><span><MapPin size={14}/> Caraguatatuba — SP (fictício)</span><span><Clock3 size={14}/> Ter–Sex 9h–19h · Sáb 8h–18h</span><span><svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></svg> Perfil social não conectado</span><small>CNPJ não atribuído — empresa fictícia.</small></div></div><div className="container footer-bottom"><span>© 2026 Auréa Beauty Studio · Conceito para portfólio.</span><span>Sem atendimento real, reservas ou transações.</span></div><div className="container footer-disclaimer"><FictionBadge footer/></div></footer>

    {bookingOpen&&<div className="modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setBookingOpen(false)}}><div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={()=>setBookingOpen(false)} aria-label="Fechar"><X size={20}/></button><img src={emblem} alt="" /><span className="section-index">AVISO DE DEMONSTRAÇÃO</span><h2 id="modal-title">Este estúdio é fictício.</h2><p>O Auréa Beauty Studio foi criado para um projeto de portfólio. Nenhum agendamento será enviado e não existe atendimento comercial real.</p><button className="button button--dark" onClick={()=>setBookingOpen(false)}>Entendi <Check size={16}/></button></div></div>}
  </div>
}
export default App