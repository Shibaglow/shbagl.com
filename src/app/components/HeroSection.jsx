"use client";

import { useState, useEffect } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("February 27, 2025 20:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeRemaining > 0) {
        setTimeLeft({
          days: String(Math.floor(timeRemaining / (1000 * 60 * 60 * 24))).padStart(2, "0"),
          hours: String(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
          minutes: String(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
          seconds: String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, "0"),
        });
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero_area" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 order-2 order-lg-1">
            <div className="hero_left" data-aos="fade-right">
              <h1>The Meme Coin for Community, Fun, and Financial Rewards</h1>
              <p>
                Fortune Favors the Bold: ShibaGlow’s Presale — Turn $100 into
                $100,000 with ShibaGlow — The 1000x meme coin that’s about to
                make you laugh all the way to the bank!
              </p>
              <span>Connect your wallet to join ShibaGlow's presale...</span>

              {/* <a href="#" style={{ border: "1px solid #ebeced", padding: "4px", borderRadius: "10px" }}>
                <ConnectButton />
              </a> */}
              {typeof window !== "undefined" && window.ethereum ? (
                <a href="#" style={{ border: "1px solid #ebeced", padding: "4px", borderRadius: "10px" }}>
                  <ConnectButton />
                </a>
              ) : (
                <a href="http://metamask.app.link/dapp/shbaglow.com/" style={{ border: "1px solid #ebeced", padding: "4px", borderRadius: "10px" }}>
                  Connect Wallet
                </a>
              )}


            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2">
            <div className="hero_right" data-aos="fade-left">
              <img src="/images/hero.png" alt="Hero Image" />
              <div className="countdown">
                {[
                  { id: "days", label: "Days", value: timeLeft.days },
                  { id: "hours", label: "Hours", value: timeLeft.hours },
                  { id: "minutes", label: "Minutes", value: timeLeft.minutes },
                  { id: "seconds", label: "Seconds", value: timeLeft.seconds },
                ].map((time) => (
                  <div className="time-block" key={time.id}>
                    <span className="time-value">{time.value}</span>
                    <span className="time-label">{time.label}</span>
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
