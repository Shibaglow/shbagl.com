export default function Sponsors() {
  const sponsors = [
    { img: "/images/sponsors-1.png", name: "FaZe Banks", role: "Youtuber", animation: "zoom-in-right" },
    { img: "/images/sponsors-2.png", name: "TJR Trades", role: "Youtuber", animation: "zoom-in-up" },
    { img: "/images/sponsors-3.png", name: "Logan Paul", role: "Youtuber", animation: "zoom-in-up" },
    { img: "/images/sponsors-4.png", name: "Davinci Jeremie", role: "Youtuber", animation: "zoom-in-left" },
  ];

  return (
    <section className="sponsors_area" id="sponsors">
      <div className="container">
        <div className="title_cnt text-center">
          <h3 data-aos="fade-up">Sponsors</h3>
          <p data-aos="fade-up">Trusted by a growing network of sponsors and partners in the crypto space:</p>
        </div>
        <div className="sponsors_main">
          <div className="row">
            {sponsors.map((sponsor, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="sponsors_item" data-aos={sponsor.animation}>
                  <img src={sponsor.img} alt={sponsor.name} />
                  <div className="sponsors_cnt">
                    <h4>{sponsor.name}</h4>
                    <p>{sponsor.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
