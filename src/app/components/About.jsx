export default function About() {
  return (
    <section className="about_area" id="introduction">
      <div className="container">
        <div className="title_cnt text-center">
          <h2 data-aos="fade-up">About Us</h2>
          <p data-aos="fade-up">Welcome to ShibaGlow!</p>
        </div>
        <div className="about_main">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_left pe-xl-5">
                {[
                  { title: "Introduction", text: "ShibaGlow (SGLOW) isn’t just another meme coin—it’s a movement combining viral meme culture with financial rewards and global impact. Built on the Binance Smart Chain (BSC), ShibaGlow is your gateway to a community-focused, hyper-deflationary token that rewards holders and gives back to meaningful causes." },
                  { title: "Vision", text: "To redefine meme coins by blending fun, financial inclusion, and charitable impact, creating a community where everyone can laugh, earn, and make a difference." },
                ].map((item, index) => (
                  <div className="about_cnt" key={index}>
                    <h4 data-aos="fade-up">{item.title}</h4>
                    <p data-aos="fade-up">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_right ps-xl-4">
                <h3 data-aos="fade-up">Core Features</h3>
                {[
                  { title: "Hyper-Deflationary Mechanics", text: "Every transaction reduces the total supply, making SGLOW increasingly scarce and valuable." },
                  { title: "Holder Rewards", text: "Earn passive income with 5% reflections from every transaction." },
                  { title: "Charitable Impact", text: "Support global causes through community-chosen donations." },
                  { title: "Community Governance", text: "Participate in key decisions, including burns and charity initiatives." },
                  { title: "Scalability & Low Fees", text: "Fast and cost-effective transactions on the Binance Smart Chain." },
                ].map((feature, index) => (
                  <div className="about_cntInner" key={index}>
                    <h4 data-aos="fade-up">{feature.title}</h4>
                    <p data-aos="fade-up">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
