import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <>
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
    </>
  );
}
