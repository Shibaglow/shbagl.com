export default function Footer() {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="footer_main">
          <div className="row">
            <div className="col-lg-7">
              <div className="footer_left pe-xl-5">
                <div className="footer_logo" data-aos="zoom-in">
                  <a href="#">
                    <img src="/images/footer-logo.png" alt="ShibaGlow Logo" />
                  </a>
                </div>
                <div className="footer_item" data-aos="zoom-in">
                  <div className="footer_upper">
                    <h3>ShibaGlow</h3>
                    <p>Fortune Favors the Bold!</p>
                  </div>
                  <div className="footer_bottom">
                    <p>&copy; 2025 ShibaGlow</p>
                    <a href="mailto:shibaglow@gmail.com">shibaglow@gmail.com</a>
                    <ul>
                      <li>
                        <a href="https://www.instagram.com/shiba_glow/" target="_blank">
                          <img src="/images/instagram.svg" alt="Instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/shibaglow" target="_blank">
                          <img src="/images/twitter.svg" alt="Twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/images/youtube.svg" alt="YouTube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="footer_right ps-lg-5 ms-xl-4 pt-2" data-aos="zoom-in">
                <h4>Quick Links</h4>
                <h3>Coming soon...</h3>
                <ul>
                  <li><a href="https://x.com/shibaglow" target="_blank">Twitter</a></li>
                  <li><a href="#">Telegram</a></li>
                  <li><a href="#">Discord</a></li>
                  <li><a href="https://www.instagram.com/shiba_glow/" target="_blank">Instagram</a></li>
                </ul>
                <p>
                  <strong>Legal Disclaimer:</strong> Cryptocurrency investments involve risk. Please invest responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
