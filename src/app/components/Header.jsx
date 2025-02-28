export default function Header() {
  return (
    <header className="header_area">
      <div className="container">
        <nav className="main_nav">
          <div className="nav_logo">
            <a href="#">
              <img src="/images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="nav_links d-none d-lg-block">
            <ul>
              {[
                { name: "Home", scroll: "home" },
                { name: "Introduction", scroll: "introduction" },
                { name: "Sponsors", scroll: "sponsors" },
                { name: "Tokenomics", scroll: "tokenomics" },
                { name: "Roadmap", scroll: "roadmap" },
                { name: "Holders’ Benefits", scroll: "benefits" },
              ].map((item) => (
                <li key={item.scroll}>
                  <a href="#" data-scroll={item.scroll}>{item.name}</a>
                </li>
              ))}
              <li>
                <a href="#" className="nav_btn">WhitePaper</a>
              </li>
            </ul>
          </div>
          <div className="hamburger_btn d-lg-none">
            <div className="hamburger-menu">
              <span className="line-top"></span>
              <span className="line-center"></span>
              <span className="line-bottom"></span>
            </div>
          </div>
        </nav>
      </div>
      <div className="ofcavas-menu d-lg-none">
        <div className="container">
          <div className="nav_links ofcanvas_body">
            <ul>
              {[
                { name: "Home", scroll: "home" },
                { name: "Introduction", scroll: "introduction" },
                { name: "Sponsors", scroll: "sponsors" },
                { name: "Tokenomics", scroll: "tokenomics" },
                { name: "Roadmap", scroll: "roadmap" },
                { name: "Holders’ Benefits", scroll: "benefits" },
              ].map((item) => (
                <li key={item.scroll}>
                  <a href="#" data-scroll={item.scroll}>{item.name}</a>
                </li>
              ))}
              <li>
                <a href="#" className="nav_btn">WhitePaper</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
