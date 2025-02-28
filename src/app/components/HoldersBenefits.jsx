import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function HoldersBenefits() {
  return (
    <section className="benefits_area" id="benefits">
      <div className="container">
        <div className="title_cnt text-center" data-aos="fade-up">
          <h3>Holders’ Benefits</h3>
        </div>
        <div className="benefit_main">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="benefits_left" data-aos="fade-right">
                <div className="benefit_cnt">
                  <h4>Passive Income</h4>
                  <p>Earn reflections automatically.</p>
                </div>
                <div className="benefit_cnt">
                  <h4>Deflationary Growth:</h4>
                  <p>Token burns increase value.</p>
                </div>
                <div className="benefit_cnt">
                  <h4>Community Voice:</h4>
                  <p>Influence key decisions.</p>
                </div>
                <div className="benefit_cnt">
                  <h4>Security:</h4>
                  <p>Liquidity locked, regular audits.</p>
                </div>
                <div className="benefit_cnt">
                  <h4>Charitable Impact:</h4>
                  <p>Support global causes with every transaction.</p>
                </div>
                <div className="benefit_bottom">
                  <p>Connect your wallet to join ShibaGlow's presale</p>
                  <a href="#" style={{ border: "1px solid #ebeced", padding: "4px", borderRadius: "10px" }}>
                    <ConnectButton />
                    </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="benefits_right" data-aos="fade-left">
                <img src="/images/benefit.png" alt="Benefits" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
