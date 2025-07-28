import { motion } from "framer-motion";
import "./NewsBubble.css";

const newsLinks = [
  { name: "BBC", url: "https://www.bbc.com/news", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/BBC_World_Service_2022_%28Boxed%29.svg/800px-BBC_World_Service_2022_%28Boxed%29.svg.png" },
  { name: "CNN", url: "https://www.cnn.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/CNN_Logo_%282014%29.svg/1280px-CNN_Logo_%282014%29.svg.png" },
  { name: "Reuters", url: "https://www.reuters.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Reuters_logo_2024.svg/250px-Reuters_logo_2024.svg.png" },
  { name: "Al Jazeera", url: "https://www.aljazeera.com", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Al_Jazeera_Media_Network_Logo.svg/1024px-Al_Jazeera_Media_Network_Logo.svg.png" },
  { name: "NDTV", url: "https://www.ndtv.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/NDTV_logo.svg/1920px-NDTV_logo.svg.png" },
  { name: "The Guardian", url: "https://www.theguardian.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/1920px-The_Guardian_2018.svg.png" },
  { name: "NY Times", url: "https://www.nytimes.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/NewYorkTimes.svg/1920px-NewYorkTimes.svg.png" },
  { name: "Hindustan Times", url: "https://www.hindustantimes.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hindustan_Times_logo.svg/1920px-Hindustan_Times_logo.svg.png" },
  { name: "The Washington Post", url: "https://www.washingtonpost.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/The_Logo_of_The_Washington_Post_Newspaper.svg/1920px-The_Logo_of_The_Washington_Post_Newspaper.svg.png" },
  { name: "The Wall Street Journal", url: "https://www.wsj.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/WSJ_Logo.svg/1920px-WSJ_Logo.svg.png" },
  { name: "Bloomberg", url: "https://www.bloomberg.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/New_Bloomberg_Logo.svg/1920px-New_Bloomberg_Logo.svg.png" },
  { name: "CNBC", url: "https://www.cnbc.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/CNBC_2023.svg/800px-CNBC_2023.svg.png" },
  { name: "India Today", url: "https://www.indiatoday.in", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/India_Today_logo.png" },
  { name: "Economic Times", url: "https://economictimes.indiatimes.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Economic_Times_logo.svg/1920px-The_Economic_Times_logo.svg.png" },
  { name: "LiveMint", url: "https://www.livemint.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mint_%28newspaper%29_logo.svg/330px-Mint_%28newspaper%29_logo.svg.png" },
  { name: "The Hindu", url: "https://www.thehindu.com", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/The_Hindu_wordmark_with_illustrations.svg/1920px-The_Hindu_wordmark_with_illustrations.svg.png" },
  { name: "Financial Times", url: "https://www.ft.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Financial_Times_masthead.svg/1920px-Financial_Times_masthead.svg.png" },
  { name: "Deccan Herald", url: "https://www.deccanherald.com", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Deccan_Herald_logo.svg/800px-Deccan_Herald_logo.svg.png" },
  { name: "Yahoo News", url: "https://news.yahoo.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yahoo_news_logo.svg/250px-Yahoo_news_logo.svg.png" },
  { name: "Time", url: "https://time.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Time_Magazine_logo.svg/1920px-Time_Magazine_logo.svg.png" },
  { name: "Vice News", url: "https://www.vice.com/en", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Vice_News_primary_logo.svg/1920px-Vice_News_primary_logo.svg.png" },
  { name: "The Verge", url: "https://www.theverge.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/The_Verge_wordmark_2022.svg/1920px-The_Verge_wordmark_2022.svg.png" },
  { name: "TechCrunch", url: "https://techcrunch.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1280px-TechCrunch_logo.svg.png" },
  { name: "Wired", url: "https://www.wired.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wired_logo.svg/1920px-Wired_logo.svg.png" },
  { name: "Scroll.in", url: "https://scroll.in", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Scroll_India_Logo.svg/1920px-Scroll_India_Logo.svg.png" },
  { name: "Firstpost", url: "https://www.firstpost.com", logo: "https://www.firstpost.com/dlxczavtqcctuei/news18/static/images/fp/firstpost-desktop.png" },
  { name: "AP News", url: "https://apnews.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Associated_Press_logo_2012.svg/800px-Associated_Press_logo_2012.svg.png" },
  { name: "NPR", url: "https://www.npr.org", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/NPR_new_logo.svg/1920px-NPR_new_logo.svg.png" },
  { name: "Politico", url: "https://www.politico.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Politico-logo_2024_red.svg/1920px-Politico-logo_2024_red.svg.png" },
  { name: "Los Angeles Times", url: "https://www.latimes.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Los_Angeles_Times_logo.svg/1920px-Los_Angeles_Times_logo.svg.png" },
  { name: "USA Today", url: "https://www.usatoday.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/USA_Today_%282020-01-29%29.svg/1920px-USA_Today_%282020-01-29%29.svg.png" },
  { name: "Times of India", url: "https://timesofindia.indiatimes.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_times_of_india.svg/1920px-The_times_of_india.svg.png" },
  { name: "Telegraph", url: "https://www.telegraph.co.uk", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/The_Telegraph_%28Macon%29_%282020-01-15%29.svg/1920px-The_Telegraph_%28Macon%29_%282020-01-15%29.svg.png" },
  { name: "Sky News", url: "https://news.sky.com", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sky_News_logo.svg/250px-Sky_News_logo.svg.png" },
  { name: "Independent", url: "https://www.independent.co.uk", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/The_Independent_news_logo.svg/1920px-The_Independent_news_logo.svg.png" },
  { name: "ABC News", url: "https://abcnews.go.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/ABC_News_logo_2021.svg/1920px-ABC_News_logo_2021.svg.png" },
  { name: "CBS News", url: "https://www.cbsnews.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/CBS_News_2020_%28Stacked_II%29.svg/250px-CBS_News_2020_%28Stacked_II%29.svg.png" },
  { name: "Fox News", url: "https://www.foxnews.com", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg" },
  { name: "South China Morning Post", url: "https://www.scmp.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/SCMP_logo.svg/1920px-SCMP_logo.svg.png" },
  { name: "Le Monde", url: "https://www.lemonde.fr", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Le_Monde.svg/1920px-Le_Monde.svg.png" },
  { name: "Der Spiegel", url: "https://www.spiegel.de", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Logo-der_spiegel.svg/1920px-Logo-der_spiegel.svg.png" },
  { name: "El País", url: "https://elpais.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/El_Pa%C3%ADs_logo.svg/1920px-El_Pa%C3%ADs_logo.svg.png" },
  { name: "Globe and Mail", url: "https://www.theglobeandmail.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/The_Globe_and_Mail_%282019-10-31%29.svg/1920px-The_Globe_and_Mail_%282019-10-31%29.svg.png" },
  { name: "Sydney Morning Herald", url: "https://www.smh.com.au", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/The_Sydney_Morning_Herald_logo.svg/1920px-The_Sydney_Morning_Herald_logo.svg.png" },
  { name: "Nikkei Asia", url: "https://asia.nikkei.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Nikkei_Asia_logo.svg/1920px-Nikkei_Asia_logo.svg.png" },
  { name: "Jazeera English", url: "https://english.alaraby.co.uk", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/1920px-Aljazeera_eng.svg.png" },
  { name: "Anadolu Agency", url: "https://www.aa.com.tr/en", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Anadolu_Agency_logo_2023_%282%29.svg/800px-Anadolu_Agency_logo_2023_%282%29.svg.png" },
  { name: "TASS", url: "https://tass.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/TASS_Logo_%28Latin%29_2022.svg/800px-TASS_Logo_%28Latin%29_2022.svg.png" },
  { name: "Straits Times", url: "https://www.straitstimes.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/The_Straits_Times_Logo.svg/1920px-The_Straits_Times_Logo.svg.png" },
  { name: "Rappler", url: "https://www.rappler.com", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Rappler_logo.svg/800px-Rappler_logo.svg.png" },
  { name: "Africa News", url: "https://www.africanews.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Africanews_logo.svg/1920px-Africanews_logo.svg.png" },
  { name: "Japan Times", url: "https://www.japantimes.co.jp", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The-japan-times-logo.svg/1920px-The-japan-times-logo.svg.png" },
  { name: "Haaretz", url: "https://www.haaretz.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Logo_Haaretz_en_2023_wordmark.svg/1920px-Logo_Haaretz_en_2023_wordmark.svg.png" }
];


const NewsBubbles = () => {
  return (
    <div className="glass-panel">
    <div className="bubble-container">
      {newsLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="news-bubble"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link.logo} alt={link.name} className="bubble-logo" />
        </a>
      ))}
    </div>
    </div>
  );
};

export default NewsBubbles;