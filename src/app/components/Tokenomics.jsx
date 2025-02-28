export default function Tokenomics() {
  return (
    <section className="tokenomics_area" id="tokenomics">
      <div className="container">
        <div className="title_cnt text-center">
          <h3 data-aos="fade-up">Tokenomics</h3>
          <p data-aos="fade-up">1 Trillion SGLOW</p>
        </div>
        <div className="tokenomics_item" data-aos="zoom-in-up">
          <img src="/images/tokenomics.svg" alt="Tokenomics" />
        </div>
        <div className="tokenomics_bottom">
          <h4 data-aos="fade-up">Transaction Fees:</h4>
          <ul data-aos="fade-up">
            <li>5% Reflections to holders</li>
            <li>% Burn to reduce supply</li>
            <li>2% Liquidity for price stability</li>
            <li>1% Charity for global causes</li>
          </ul>
        </div>            
      </div>
    </section>
  );
}
