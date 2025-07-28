import { useState, useEffect } from "react";
import oilIcon from './oil.svg';
import goldIcon from './gold.svg';
import silverIcon from './silver.svg';

const data = [
  { name: "Crude Oil", price: "$83.75", change: "+0.52%", icon: oilIcon },
  { name: "Gold", price: "$1956", change: "-0.12%", icon: goldIcon },
  { name: "Silver", price: "$23.5", change: "+0.21%", icon: silverIcon },
];

export const CommodityTicker = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHide(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`commodity-ticker-wrapper ${hide ? "hide" : ""}`}>
      <div className="ticker-bar">
        {data.map((item, i) => (
          <div key={i} className="ticker-item">
            <img src={item.icon} alt={item.name} />
            <div>
              <div className="commodity-name">{item.name}</div>
              <div className={`commodity-price ${item.change.startsWith("+") ? "positive" : "negative"}`}>
                {item.price} ({item.change})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};