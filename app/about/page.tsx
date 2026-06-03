const links = [
  { label: "Нүүр хуудас", href: "/" },
  { label: "Бидний тухай", href: "/about" },
  { label: "Мэдээ", href: "/#news" },
  { label: "Үйлчилгээ", href: "/#services" },
  { label: "Ил тод байдал", href: "/#transparency" },
  { label: "Холбоо барих утас", href: "#contact" },
];

const services = [
  "Анхан шатны тусламж, үйлчилгээ",
  "Эх, хүүхдийн эрүүл мэндийн хяналт",
  "Дархлаажуулалт, урьдчилан сэргийлэх үзлэг",
  "Яаралтай тусламжийн бэлэн байдал",
  "Нийгмийн эрүүл мэндийн сургалт, зөвлөгөө",
  "Өрхийн болон сумын түвшний цахим бүртгэл",
];

const stats = [
  { value: "24/7", label: "Яаралтай тусламжийн бэлэн байдал" },
  { value: "6", label: "Үндсэн үйлчилгээний чиглэл" },
  { value: "1", label: "Иргэдэд ойр нэгдсэн төв" },
];

export default function AboutPage() {
  return (
    <main>
      <div className="topbar">
        <div className="container topbarInner">
          <span>Өмнөговь аймаг, Цогтцэций сум</span>
          <span>Холбоо барих: 7053-XXXX · info@eruulmendiintuv.mn</span>
        </div>
      </div>

      <header className="siteHeader">
        <div className="container headerInner">
          <a className="brand" href="/" aria-label="Цогтцэций Эрүүл Мэндийн Төв">
            <span className="brandMark">+</span>
            <span>
              <strong>ЦОГТЦЭЦИЙ ЭРҮҮЛ МЭНДИЙН ТӨВ</strong>
              <small>Иргэн бүрт ойр, чанартай тусламж</small>
            </span>
          </a>
          <nav className="nav" aria-label="Үндсэн цэс">
            {links.map((link) => (
              <a className={link.href === "/about" ? "active" : undefined} href={link.href} key={link.label}>{link.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <section className="aboutHero">
        <div className="container aboutHeroGrid">
          <div>
            <span className="eyebrow">Бидний тухай</span>
            <h1>Цогтцэций сумын иргэдийн эрүүл мэндийн төлөө</h1>
            <p>
              Цогтцэций Эрүүл Мэндийн Төв нь сумын иргэдэд анхан шатны тусламж үйлчилгээ,
              урьдчилан сэргийлэх үзлэг, дархлаажуулалт, эх хүүхдийн хяналт болон нийгмийн
              эрүүл мэндийн зөвлөгөөг хүртээмжтэй хүргэх зорилготой байгууллага юм.
            </p>
          </div>
          <div className="aboutPhoto" role="img" aria-label="Эрүүл мэндийн төвийн тусламж үйлчилгээ" />
        </div>
      </section>

      <section className="aboutIntro">
        <div className="container aboutIntroGrid">
          <article>
            <span className="eyebrow">Эрхэм зорилго</span>
            <h2>Аюулгүй, шуурхай, хүн төвтэй тусламж</h2>
            <p>
              Бид иргэдийн эрүүл мэндийн хэрэгцээнд ойр ажиллаж, өвчлөлөөс урьдчилан сэргийлэх,
              эрт илрүүлэх, зөвлөгөө мэдээлэл өгөх үйл ажиллагааг тогтмол зохион байгуулна.
            </p>
          </article>
          <div className="statGrid">
            {stats.map((item) => (
              <div className="statCard" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contentBand">
        <div className="container sectionHeader">
          <div>
            <span className="eyebrow">Үйл ажиллагаа</span>
            <h2>Төвийн үндсэн үйлчилгээ</h2>
          </div>
        </div>
        <div className="container aboutServiceGrid">
          {services.map((item) => (
            <article className="aboutServiceCard" key={item}>
              <span className="quickIcon">□</span>
              <h3>{item}</h3>
              <p>Иргэдэд ойлгомжтой мэдээлэл өгч, шаардлагатай тусламжийг шат дараатай хүргэнэ.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="noticeBand" id="contact">
        <div className="container noticeGrid">
          <div>
            <span className="eyebrow">Холбоо барих</span>
            <h2>Цогтцэций Эрүүл Мэндийн Төв</h2>
          </div>
          <div className="noticeList">
            <a href="tel:70530000">Утас: 7053-0000</a>
            <a href="mailto:info@eruulmendiintuv.mn">И-мэйл: info@eruulmendiintuv.mn</a>
            <a href="#">Хаяг: Өмнөговь аймаг, Цогтцэций сум</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <strong>ЦОГТЦЭЦИЙ ЭРҮҮЛ МЭНДИЙН ТӨВ</strong>
            <p>Иргэдэд зориулсан эрүүл мэндийн мэдээлэл, үйлчилгээний портал.</p>
          </div>
          <div>
            <span>Хаяг</span>
            <p>Өмнөговь аймаг, Цогтцэций сум, Монгол Улс</p>
          </div>
          <div>
            <span>Холбоо барих</span>
            <p>info@eruulmendiintuv.mn<br />7053-0000</p>
          </div>
        </div>
      </footer>
    </main>
  );
}