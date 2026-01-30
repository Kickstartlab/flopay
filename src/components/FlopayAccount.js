import { useEffect, useState } from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import account1 from "../assets/account1.png";
import account2 from "../assets/account2.png";
import account3 from "../assets/account3.png";


const slides = [
  {
    img: slide1,
    cards: [account1, account2],
    tag: "The Flo Pay Account",
    title: "A digital bank account for the modern age",
    features: [
      {
        icon: account1,
        text: "Manage your fiat and crypto in one simple app.",
      },
      {
        icon: account2,
        text: "Instantly convert between fiat and crypto.",
      },
      {
        icon: account3,
        text: "Send money seamlessly to friends and merchants.",
      },
    ],
    cta: "Learn more",
  },
  {
    img: slide2,
    cards: [account3],
    tag: "Flo Pay Cards",
    title: "Your Money, Your Crypto, One Card",
    features: [
      {
        icon: account1,
        text: "Spend your cash and crypto anywhere.",
      },
      {
        icon: account2,
        text: "Pay in-store or online with your contactless debit card.",
      },
      {
        icon: account3,
        text: "Earn on every purchase with rewards.",
      },
    ],
    cta: "Learn more",
  },
];

export default function FlopayAccount() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const totalSlides = slides.length;

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      triggerNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Handle manual navigation with fade effect
  const triggerChange = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setFade(true);
    }, 300);
  };

  const triggerNext = () => {
    triggerChange((activeIndex + 1) % totalSlides);
  };

  const triggerPrev = () => {
    triggerChange((activeIndex - 1 + totalSlides) % totalSlides);
  };

  const progress = ((activeIndex + 1) / totalSlides) * 100;

  return (
    <div className="w-full text-white overflow-hidden relative group">

      <div
        className={`lg:flex items-center justify-center gap-24 lg:h-[100vh] transform transition-all duration-300 ease-in-out lg:space-y-0 space-y-8 ${fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>

        <div className="lg:w-1/2">
          <img
            src={slides[activeIndex].img}
            alt="slide-img"
          />
        </div>

        <div className={`space-y-8 transition-all duration-300 ${fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>

          <span className="px-4 py-1 rounded-full border border-yellow-500 text-yellow-400 text-sm">
            {slides[activeIndex].tag}
          </span>

          <h1 className="md:text-4xl text-2xl">
            {slides[activeIndex].title}
          </h1>

          <div className="space-y-3">
            {slides[activeIndex].features.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <img src={item.icon} className="w-8 h-8" />
                <p className="text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>

          <button className="px-5 py-2 border border-yellow-100 rounded-full text-yellow-400 hover:bg-yellow-100 hover:text-black transition flex items-center gap-5">
            {slides[activeIndex].cta}

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>

          </button>

        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={triggerPrev}
        className="absolute bottom-20 left-1/4 transform -translate-y-1/3 text-white text-3xl font-bold duration-150 opacity-0 group-hover:opacity-100"
      >
        ←
      </button>
      <button
        onClick={triggerNext}
        className="absolute bottom-20 right-1/4 transform -translate-y-1/3 text-white text-3xl font-bold duration-150 opacity-0 group-hover:opacity-100"
      >
        →
      </button>
    </div>
  );
}