import { motion } from "framer-motion";
import "./NewsBubble.css";

const newsLinks = [
  { name: "BBC", url: "https://www.bbc.com/news" },
  { name: "CNN", url: "https://www.cnn.com" },
  { name: "Reuters", url: "https://www.reuters.com" },
  { name: "Al Jazeera", url: "https://www.aljazeera.com" },
  { name: "NDTV", url: "https://www.ndtv.com" },
  { name: "The Guardian", url: "https://www.theguardian.com" },
  { name: "NY Times", url: "https://www.nytimes.com" },
  { name: "Hindustan Times", url: "https://www.hindustantimes.com" },
  { name: "The Washington Post", url: "https://www.washingtonpost.com" },
  { name: "The Wall Street Journal", url: "https://www.wsj.com" },
  { name: "Bloomberg", url: "https://www.bloomberg.com" },
  { name: "CNBC", url: "https://www.cnbc.com" },
  { name: "India Today", url: "https://www.indiatoday.in" },
  { name: "Economic Times", url: "https://economictimes.indiatimes.com" },
  { name: "LiveMint", url: "https://www.livemint.com" },
  { name: "The Hindu", url: "https://www.thehindu.com" },
  { name: "Financial Times", url: "https://www.ft.com" },
  { name: "Deccan Herald", url: "https://www.deccanherald.com" },
  { name: "Yahoo News", url: "https://news.yahoo.com" },
  { name: "Time", url: "https://time.com" },
  { name: "Vice News", url: "https://www.vice.com/en" },
  { name: "The Verge", url: "https://www.theverge.com" },
  { name: "TechCrunch", url: "https://techcrunch.com" },
  { name: "Wired", url: "https://www.wired.com" },
  { name: "Scroll.in", url: "https://scroll.in" },
  { name: "Firstpost", url: "https://www.firstpost.com" }
];

const NewsBubbles = () => {
  return (
    <div className="bubble-container">
      {newsLinks.map((link, index) => {
        const xStart = Math.random() * window.innerWidth;
        const yStart = Math.random() * window.innerHeight;
        const xDrift = Math.random() * 100 - 50;
        const yDrift = Math.random() * 100 - 50;
        const delay = Math.random() * 3;
        const size = 100;
        return (
          <motion.a
            key={index}
            href={link.url}
            className="news-bubble"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: xStart, y: yStart }}
            animate={{ x: xStart + xDrift, y: yStart + yDrift }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 20 + Math.random() * 10,
              ease: "easeInOut",
              delay,
            }}
            style={{ width: size, height: size }}
          >
            {link.name}
          </motion.a>
        );
      })}
    </div>
  );
};

export default NewsBubbles;