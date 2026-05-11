import { useState } from "react";
import Icon from "@/components/ui/icon";

const GALLERY_ITEMS = [
  {
    type: "image",
    src: "https://cdn.poehali.dev/projects/64fc7359-be7e-409e-806c-f36651a59ca8/files/64b026c1-1af1-4898-a591-6676294f8261.jpg",
    label: "Аниме-портрет на металле",
  },
  {
    type: "image",
    src: "https://cdn.poehali.dev/projects/64fc7359-be7e-409e-806c-f36651a59ca8/files/82751c2d-72cc-4e6b-9b59-b2e874a1b4fc.jpg",
    label: "Семейный портрет",
  },
  {
    type: "image",
    src: "https://cdn.poehali.dev/projects/64fc7359-be7e-409e-806c-f36651a59ca8/files/8028213c-d6aa-4d3e-bf7b-f72c0c5d41ab.jpg",
    label: "Галерея постеров",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    label: "Видео 360°",
  },
];

const SPECS = [
  { label: "Материал", value: "Алюминий + лак" },
  { label: "Разрешение", value: "До 4K / HD" },
  { label: "Толщина", value: "2 мм" },
  { label: "Покрытие", value: "Глянец / матовый" },
  { label: "Печать", value: "УФ-принтер" },
  { label: "Гарантия", value: "10 лет" },
];

const ADVANTAGES = [
  {
    icon: "Image",
    title: "HD качество",
    desc: "Печать до 4K разрешения — каждая деталь изображения передаётся идеально чётко",
    color: "#ff2d55",
  },
  {
    icon: "Zap",
    title: "Яркие цвета",
    desc: "УФ-печать даёт насыщенные, не выгорающие цвета на 10+ лет",
    color: "#00f5ff",
  },
  {
    icon: "Shield",
    title: "Прочный металл",
    desc: "Алюминиевая основа с лаковым покрытием — не боится влаги, царапин и перепадов температур",
    color: "#f5a623",
  },
  {
    icon: "Star",
    title: "Любой сюжет",
    desc: "Портрет, пейзаж, аниме, фото, постер — напечатаем любое изображение",
    color: "#b44fff",
  },
  {
    icon: "Ruler",
    title: "Любой размер",
    desc: "От мини-формата 20×30 см до панно 120×80 см и более под заказ",
    color: "#00f5ff",
  },
  {
    icon: "Package",
    title: "Готово к вешанию",
    desc: "Крепления и защитная упаковка уже включены — достал и повесил",
    color: "#f5a623",
  },
];

const REVIEWS = [
  {
    name: "Алексей К.",
    role: "Постоянный клиент",
    rating: 5,
    text: "Заказал портрет семьи на металле — результат превзошёл ожидания! Цвета живые, детали чёткие. Висит в гостиной, все гости спрашивают где брал.",
    avatar: "🖼️",
  },
  {
    name: "Михаил Д.",
    role: "Дизайнер интерьеров",
    rating: 5,
    text: "Использую картины на металле в проектах уже год. Качество стабильное, сроки соблюдают. Клиенты в восторге от эффекта глянцевого металла.",
    avatar: "🎨",
  },
  {
    name: "Дмитрий В.",
    role: "Подарок на юбилей",
    rating: 5,
    text: "Подарил маме фото на металле вместо обычной рамки — она была в слезах от радости. Упаковка аккуратная, доставили быстро. Рекомендую!",
    avatar: "🎁",
  },
];

export default function Index() {
  const [activeGallery, setActiveGallery] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen" style={{ background: "var(--dark-metal)" }}>
      {/* Частицы фона */}
      <div className="bg-particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${8 + i * 8}%`,
              width: i % 3 === 0 ? "6px" : "3px",
              height: i % 3 === 0 ? "6px" : "3px",
              animationDuration: `${8 + i * 1.5}s`,
              animationDelay: `${i * 0.7}s`,
              background: i % 2 === 0 ? "var(--neon-gold)" : "var(--neon-cyan)",
            }}
          />
        ))}
      </div>

      {/* ===== НАВБАР ===== */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          background: "rgba(13,14,20,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(245,166,35,0.2)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, var(--neon-gold), #d4860f)",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          >
            <Icon name="Sword" size={16} style={{ color: "#0d0e14" }} />
          </div>
          <span
            className="font-bold tracking-widest text-sm"
            style={{ fontFamily: "'Russo One', sans-serif", color: "var(--neon-gold)" }}
          >
            CAT CRAFTEDS STORE
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["О нас", "Товар", "Галерея", "Заказ", "Контакты"].map((item, i) => (
            <a key={i} href={`#${["about", "product", "gallery", "order", "contacts"][i]}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>
        <a href="#order">
          <button className="btn-forge text-xs py-2 px-5">Заказать</button>
        </a>
      </nav>

      {/* ===== ГЕРОИКА ===== */}
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines pt-20"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 120%, rgba(245,166,35,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(0,245,255,0.06) 0%, transparent 50%),
            var(--dark-metal)
          `,
        }}
      >
        {/* Декоративная сетка */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245,166,35,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,166,35,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Вращающийся декор */}
        <div
          className="absolute right-8 top-1/4 w-48 h-48 opacity-10 animate-rotate-slow hidden lg:block"
          style={{ border: "1px solid var(--neon-gold)", borderRadius: "50%" }}
        />
        <div
          className="absolute right-16 mt-8 w-32 h-32 opacity-10 hidden lg:block"
          style={{
            top: "30%",
            border: "1px solid var(--neon-cyan)",
            animation: "rotate-slow 15s linear infinite reverse",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          {/* Бейдж */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 text-xs animate-slide-up"
            style={{
              background: "rgba(245,166,35,0.08)",
              border: "1px solid rgba(245,166,35,0.3)",
              color: "var(--neon-gold)",
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.15em",
              clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
          >
            <Icon name="Zap" size={12} />
            АНИМЕ-ПАНК КУЗНИЦА — ОСНОВАНА В 2018
          </div>

          {/* Главный заголовок */}
          <h1
            className="glitch-container text-7xl md:text-9xl font-black mb-4 leading-none animate-slide-up delay-200"
            data-text="CAT CRAFTEDS STORE"
            style={{
              fontFamily: "'Russo One', sans-serif",
              background: "linear-gradient(135deg, #fff5d0 0%, var(--neon-gold) 40%, #c8c8d0 70%, var(--neon-gold) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
            }}
          >
            CAT CRAFTEDS STORE
          </h1>

          <div
            className="text-2xl md:text-3xl mb-6 animate-slide-up delay-300 animate-flicker"
            style={{
              fontFamily: "'Oswald', sans-serif",
              color: "var(--neon-cyan)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Картины на металле
          </div>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up delay-400"
            style={{ color: "var(--chrome)", fontFamily: "'Rubik', sans-serif" }}
          >
            Эксклюзивные картины на металле, HD качества, портреты, фото, постеры.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
            <a href="#order">
              <button className="btn-forge text-sm">
                <span className="flex items-center gap-2">
                  <Icon name="ShoppingCart" size={16} />
                  Оформить заказ
                </span>
              </button>
            </a>
            <a href="#gallery">
              <button className="btn-steel text-sm">
                <span className="flex items-center gap-2">
                  <Icon name="Images" size={16} />
                  Смотреть галерею
                </span>
              </button>
            </a>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-3 gap-8 mt-20 animate-slide-up delay-600">
            {[
              { num: "1200+", label: "Клиентов" },
              { num: "8 лет", label: "Опыта" },
              { num: "100%", label: "Ручная работа" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="stat-number text-3xl md:text-4xl mb-1">{s.num}</div>
                <div
                  style={{
                    color: "var(--steel)",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Нижняя стрелка */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={28} style={{ color: "var(--neon-gold)", opacity: 0.6 }} />
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== ТОВАР ===== */}
      <section
        id="product"
        className="relative py-24 px-6"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 10% 50%, rgba(0,245,255,0.05) 0%, transparent 60%),
            var(--dark-metal)
          `,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="neon-text-cyan text-xs tracking-widest mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ◆ ФЛАГМАНСКИЙ ПРОДУКТ ◆
            </div>
            <h2
              className="text-5xl md:text-6xl font-black mb-4"
              style={{ fontFamily: "'Russo One', sans-serif", color: "#e8e0d0" }}
            >
              METAL <span className="neon-text-gold">PRINT</span>
            </h2>
            <p style={{ color: "var(--steel)", maxWidth: "500px", margin: "0 auto" }}>
              Картина на металле — ваше фото, портрет или постер в HD качестве на алюминиевой панели.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Описание */}
            <div>
              <div
                className="p-6 mb-6 relative"
                style={{
                  background: "rgba(26,28,38,0.6)",
                  border: "1px solid rgba(245,166,35,0.15)",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                }}
              >
                <div className="corner-decor tl" />
                <div className="corner-decor br" />
                <p style={{ color: "var(--chrome)", lineHeight: "1.8" }}>
                  Печатаем на алюминиевых панелях с лаковым покрытием — изображение буквально светится
                  изнутри. Подходит для портретов, семейных фото, аниме-постеров и любых изображений.
                  Не выгорает, не боится влаги, готово к вешанию сразу из коробки.
                </p>
              </div>

              {/* Характеристики */}
              <div className="grid grid-cols-2 gap-3">
                {SPECS.map((s, i) => (
                  <div
                    key={i}
                    className="p-3 flex flex-col gap-1"
                    style={{
                      background: "rgba(26,28,38,0.5)",
                      border: "1px solid rgba(200,200,208,0.08)",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--steel)",
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        fontFamily: "'Oswald', sans-serif",
                      }}
                    >
                      {s.label}
                    </span>
                    <span style={{ color: "var(--neon-gold)", fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}>
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-end gap-4">
                <div>
                  <div style={{ color: "var(--steel)", fontSize: "12px", marginBottom: "4px" }}>Цена</div>
                  <div
                    className="text-4xl font-black"
                    style={{ fontFamily: "'Russo One', sans-serif", color: "var(--neon-gold)" }}
                  >
                    2 000 ₽
                  </div>
                </div>
                <a href="#order">
                  <button className="btn-forge mb-1">Заказать</button>
                </a>
              </div>
            </div>

            {/* Особенности */}
            <div className="space-y-4">
              {ADVANTAGES.slice(0, 3).map((adv, i) => (
                <div
                  key={i}
                  className="card-metal p-5 flex gap-4 items-start"
                  style={{
                    clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                  }}
                >
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: `${adv.color}18`,
                      border: `1px solid ${adv.color}40`,
                    }}
                  >
                    <Icon name={adv.icon} size={20} style={{ color: adv.color }} />
                  </div>
                  <div>
                    <div
                      className="font-bold mb-1"
                      style={{ fontFamily: "'Oswald', sans-serif", color: adv.color, letterSpacing: "0.05em" }}
                    >
                      {adv.title}
                    </div>
                    <div style={{ color: "var(--steel)", fontSize: "14px", lineHeight: "1.5" }}>{adv.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== ГАЛЕРЕЯ ===== */}
      <section id="gallery" className="relative py-24 px-6" style={{ background: "var(--dark-metal)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="neon-text-gold text-xs tracking-widest mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ◆ ИНТЕРАКТИВНАЯ ГАЛЕРЕЯ ◆
            </div>
            <h2 className="text-5xl font-black" style={{ fontFamily: "'Russo One', sans-serif", color: "#e8e0d0" }}>
              СМОТРИ <span className="neon-text-cyan">ИЗНУТРИ</span>
            </h2>
          </div>

          {/* Главный просмотр */}
          <div
            className="relative mb-4 overflow-hidden scanlines"
            style={{
              aspectRatio: "16/9",
              background: "#0a0b10",
              border: "1px solid rgba(245,166,35,0.2)",
              boxShadow: "0 0 40px rgba(0,0,0,0.8)",
            }}
          >
            <div className="corner-decor tl" />
            <div className="corner-decor tr" />
            <div className="corner-decor bl" />
            <div className="corner-decor br" />

            {GALLERY_ITEMS[activeGallery].type === "image" ? (
              <img
                src={GALLERY_ITEMS[activeGallery].src}
                alt={GALLERY_ITEMS[activeGallery].label}
                className="w-full h-full object-cover"
                style={{ opacity: 0.9 }}
              />
            ) : (
              <video
                src={GALLERY_ITEMS[activeGallery].src}
                controls
                className="w-full h-full object-cover"
                style={{ background: "#000" }}
              />
            )}

            <div
              className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between"
              style={{ background: "linear-gradient(transparent, rgba(13,14,20,0.9))" }}
            >
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: "var(--neon-gold)",
                  letterSpacing: "0.1em",
                  fontSize: "14px",
                }}
              >
                {GALLERY_ITEMS[activeGallery].label}
              </span>
              <div className="flex items-center gap-2" style={{ color: "var(--steel)", fontSize: "12px" }}>
                <Icon name={GALLERY_ITEMS[activeGallery].type === "video" ? "Play" : "Image"} size={14} />
                {activeGallery + 1} / {GALLERY_ITEMS.length}
              </div>
            </div>
          </div>

          {/* Превью */}
          <div className="grid grid-cols-4 gap-3">
            {GALLERY_ITEMS.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveGallery(i)}
                className={`gallery-thumb relative overflow-hidden ${activeGallery === i ? "active" : ""}`}
                style={{ aspectRatio: "4/3" }}
              >
                {item.type === "image" ? (
                  <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ background: "#1a1c26" }}>
                    <Icon name="Play" size={28} style={{ color: "var(--neon-gold)" }} />
                  </div>
                )}
                <div
                  className="absolute bottom-0 left-0 right-0 py-1 px-2 text-center"
                  style={{
                    background: "rgba(13,14,20,0.85)",
                    fontSize: "10px",
                    fontFamily: "'Oswald', sans-serif",
                    color: activeGallery === i ? "var(--neon-gold)" : "var(--steel)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== ПРЕИМУЩЕСТВА ===== */}
      <section
        className="relative py-24 px-6"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 90% 50%, rgba(180,79,255,0.05) 0%, transparent 60%),
            var(--dark-metal)
          `,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="neon-text-red text-xs tracking-widest mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ◆ ПОЧЕМУ МЫ ◆
            </div>
            <h2 className="text-5xl font-black" style={{ fontFamily: "'Russo One', sans-serif", color: "#e8e0d0" }}>
              НАШИ <span className="neon-text-gold">ПРЕИМУЩЕСТВА</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADVANTAGES.map((adv, i) => (
              <div
                key={i}
                className="card-metal p-6"
                style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-4"
                  style={{
                    background: `${adv.color}15`,
                    border: `1px solid ${adv.color}30`,
                    clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  }}
                >
                  <Icon name={adv.icon} size={22} style={{ color: adv.color }} />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Oswald', sans-serif", color: adv.color, letterSpacing: "0.05em" }}
                >
                  {adv.title}
                </h3>
                <p style={{ color: "var(--steel)", fontSize: "14px", lineHeight: "1.6" }}>{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== ОТЗЫВЫ ===== */}
      <section className="relative py-24 px-6" style={{ background: "var(--dark-metal)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="neon-text-cyan text-xs tracking-widest mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ◆ ЧТО ГОВОРЯТ КЛИЕНТЫ ◆
            </div>
            <h2 className="text-5xl font-black" style={{ fontFamily: "'Russo One', sans-serif", color: "#e8e0d0" }}>
              ОТЗЫВЫ <span className="neon-text-gold">ВОИНОВ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((rev, i) => (
              <div
                key={i}
                className="card-metal p-6 relative"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)" }}
              >
                <div className="text-3xl mb-4">{rev.avatar}</div>
                <div className="stars mb-3">{"★".repeat(rev.rating)}</div>
                <p
                  className="mb-6"
                  style={{ color: "var(--chrome)", fontSize: "14px", lineHeight: "1.7", fontStyle: "italic" }}
                >
                  «{rev.text}»
                </p>
                <div>
                  <div style={{ fontFamily: "'Oswald', sans-serif", color: "var(--neon-gold)", fontWeight: 600 }}>
                    {rev.name}
                  </div>
                  <div style={{ color: "var(--steel)", fontSize: "12px" }}>{rev.role}</div>
                </div>
                <div
                  className="absolute bottom-0 left-6 right-6 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)" }}
                />
              </div>
            ))}
          </div>

          {/* Общий рейтинг */}
          <div
            className="mt-10 p-6 flex flex-col md:flex-row items-center justify-center gap-8 text-center"
            style={{ background: "rgba(245,166,35,0.05)", border: "1px solid rgba(245,166,35,0.2)" }}
          >
            <div>
              <div className="stat-number text-5xl mb-1">4.9</div>
              <div className="stars text-xl">★★★★★</div>
            </div>
            <div style={{ width: "1px", height: "60px", background: "rgba(245,166,35,0.3)" }} className="hidden md:block" />
            <div>
              <div className="stat-number text-3xl mb-1">1200+</div>
              <div style={{ color: "var(--steel)", fontFamily: "'Oswald', sans-serif", fontSize: "13px", letterSpacing: "0.1em" }}>
                ДОВОЛЬНЫХ КЛИЕНТОВ
              </div>
            </div>
            <div style={{ width: "1px", height: "60px", background: "rgba(245,166,35,0.3)" }} className="hidden md:block" />
            <div>
              <div className="stat-number text-3xl mb-1">98%</div>
              <div style={{ color: "var(--steel)", fontFamily: "'Oswald', sans-serif", fontSize: "13px", letterSpacing: "0.1em" }}>
                ПОВТОРНЫХ ЗАКАЗОВ
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== ФОРМА ЗАКАЗА ===== */}
      <section
        id="order"
        className="relative py-24 px-6"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,166,35,0.07) 0%, transparent 70%),
            var(--dark-metal)
          `,
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="neon-text-gold text-xs tracking-widest mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ◆ СДЕЛАТЬ ЗАКАЗ ◆
            </div>
            <h2 className="text-5xl font-black" style={{ fontFamily: "'Russo One', sans-serif", color: "#e8e0d0" }}>
              ЗАКОВАТЬ <span className="neon-text-gold">ЛЕГЕНДУ</span>
            </h2>
            <p className="mt-4" style={{ color: "var(--steel)" }}>
              Оставьте заявку — мастер свяжется с вами в течение 2 часов
            </p>
          </div>

          {submitted ? (
            <div
              className="p-12 text-center relative"
              style={{
                background: "rgba(26,28,38,0.8)",
                border: "1px solid rgba(245,166,35,0.3)",
                boxShadow: "0 0 40px rgba(245,166,35,0.1)",
              }}
            >
              <div className="corner-decor tl" />
              <div className="corner-decor tr" />
              <div className="corner-decor bl" />
              <div className="corner-decor br" />
              <div className="text-6xl mb-4">⚔️</div>
              <h3
                className="text-3xl font-black mb-3 neon-text-gold"
                style={{ fontFamily: "'Russo One', sans-serif" }}
              >
                ЗАЯВКА ПРИНЯТА!
              </h3>
              <p style={{ color: "var(--chrome)" }}>
                Мастер свяжется с вами в течение 2 часов. Легенда начинает ковку!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative p-8"
              style={{
                background: "rgba(26,28,38,0.8)",
                border: "1px solid rgba(245,166,35,0.2)",
                boxShadow: "0 0 40px rgba(0,0,0,0.5)",
              }}
            >
              <div className="corner-decor tl" />
              <div className="corner-decor tr" />
              <div className="corner-decor bl" />
              <div className="corner-decor br" />

              <div className="space-y-4">
                <div>
                  <label
                    className="block mb-2 text-xs tracking-widest"
                    style={{ fontFamily: "'Oswald', sans-serif", color: "var(--neon-gold)" }}
                  >
                    ИМЯ ВОИНА *
                  </label>
                  <input
                    required
                    className="input-forge"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block mb-2 text-xs tracking-widest"
                      style={{ fontFamily: "'Oswald', sans-serif", color: "var(--neon-gold)" }}
                    >
                      ТЕЛЕФОН *
                    </label>
                    <input
                      required
                      className="input-forge"
                      placeholder="+7 (999) 000-00-00"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-xs tracking-widest"
                      style={{ fontFamily: "'Oswald', sans-serif", color: "var(--neon-gold)" }}
                    >
                      E-MAIL
                    </label>
                    <input
                      className="input-forge"
                      type="email"
                      placeholder="mail@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-2 text-xs tracking-widest"
                    style={{ fontFamily: "'Oswald', sans-serif", color: "var(--neon-gold)" }}
                  >
                    ПОЖЕЛАНИЯ К ЗАКАЗУ
                  </label>
                  <textarea
                    className="input-forge resize-none"
                    rows={4}
                    placeholder="Опишите пожелания: гравировка, размер, материал..."
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    style={{ clipPath: "none" }}
                  />
                </div>

                <button type="submit" className="btn-forge w-full text-sm mt-2">
                  <span className="flex items-center justify-center gap-2">
                    <Icon name="Sword" size={18} />
                    ЗАКОВАТЬ ЛЕГЕНДУ — ОТПРАВИТЬ ЗАЯВКУ
                  </span>
                </button>

                <p className="text-center text-xs" style={{ color: "var(--steel)" }}>
                  Отправляя форму, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== КОНТАКТЫ ===== */}
      <section id="contacts" className="relative py-24 px-6" style={{ background: "var(--dark-metal)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="neon-text-cyan text-xs tracking-widest mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
              ◆ СВЯЗАТЬСЯ С КУЗНЕЙ ◆
            </div>
            <h2 className="text-5xl font-black" style={{ fontFamily: "'Russo One', sans-serif", color: "#e8e0d0" }}>
              НАШИ <span className="neon-text-cyan">КОНТАКТЫ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "Phone",
                label: "Телефон",
                value: "+7 (999) 123-45-67",
                sub: "Пн–Сб, 10:00–20:00",
                color: "#f5a623",
                href: "tel:+79991234567",
              },
              {
                icon: "Mail",
                label: "Email",
                value: "forge@steelforge.ru",
                sub: "Ответим за 2 часа",
                color: "#00f5ff",
                href: "mailto:forge@steelforge.ru",
              },
              {
                icon: "MapPin",
                label: "Мастерская",
                value: "Москва, ул. Кузнецкий мост, 12",
                sub: "Показываем вживую",
                color: "#ff2d55",
                href: "#",
              },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="card-metal p-6 flex flex-col items-center text-center gap-3 no-underline"
                style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}40` }}
                >
                  <Icon name={c.icon} size={24} style={{ color: c.color }} />
                </div>
                <div
                  style={{ fontFamily: "'Oswald', sans-serif", color: "var(--steel)", fontSize: "12px", letterSpacing: "0.1em" }}
                >
                  {c.label}
                </div>
                <div style={{ fontFamily: "'Oswald', sans-serif", color: "#e8e0d0", fontWeight: 600 }}>
                  {c.value}
                </div>
                <div style={{ color: "var(--steel)", fontSize: "12px" }}>{c.sub}</div>
              </a>
            ))}
          </div>

          {/* Соцсети */}
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            {[
              { icon: "MessageCircle", label: "Telegram", color: "#00f5ff" },
              { icon: "Instagram", label: "Instagram", color: "#b44fff" },
              { icon: "Youtube", label: "YouTube", color: "#ff2d55" },
            ].map((s, i) => (
              <button
                key={i}
                className="btn-steel flex items-center gap-2 text-sm"
                style={{ color: s.color, borderColor: s.color, boxShadow: `0 0 8px ${s.color}40` }}
              >
                <Icon name={s.icon} size={16} style={{ color: s.color }} />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ФУТЕР ===== */}
      <footer
        className="py-8 px-6 text-center"
        style={{
          background: "rgba(10,11,16,0.95)",
          borderTop: "1px solid rgba(245,166,35,0.15)",
        }}
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <div
            className="w-6 h-6 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, var(--neon-gold), #d4860f)",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          >
            <Icon name="Sword" size={12} style={{ color: "#0d0e14" }} />
          </div>
          <span
            style={{ fontFamily: "'Russo One', sans-serif", color: "var(--neon-gold)", fontSize: "14px", letterSpacing: "0.15em" }}
          >
            CAT CRAFTEDS STORE
          </span>
        </div>
        <p style={{ color: "var(--steel)", fontSize: "12px" }}>
          © 2024 Steel Forge. Кузница легенд. Все права защищены.
        </p>
      </footer>
    </div>
  );
}