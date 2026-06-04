const news = [
  {
    category: "Мэдээ",
    title: "Өрхийн эрүүл мэндийн төвүүдийн үйлчилгээг иргэдэд ойртуулна",
    date: "2026.06.03",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Зөвлөмж",
    title: "Улирлын томуу, амьсгалын замын халдвараас сэргийлэх зөвлөмж",
    date: "2026.06.02",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Үйлчилгээ",
    title: "Цахим бүртгэл, цаг авах үйлчилгээг шинэчиллээ",
    date: "2026.06.01",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
  },
];

const services = [
  "Амбулаторийн цаг авах",
  "Вакцинжуулалтын мэдээлэл",
  "Эмийн лавлах",
  "Өргөдөл, гомдол",
  "Тусгай зөвшөөрөл",
  "Шилэн данс",
];

const links = ["Нүүр хуудас", "Бидний тухай", "Мэдээ", "Үйлчилгээ", "Ил тод байдал", "Холбоо барих утас"];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        <div className="container topbarInner">
          <span>Монгол Улс, Өмнөговь аймаг, Цогтцэций сум</span>
          <span>Утас: 88707708 · И-мэйл: info@eruulmendiintuv.mn</span>
        </div>
      </div>

      <header className="siteHeader">
        <div className="container headerInner">
          <a className="brand" href="#" aria-label="Эрүүл Мэндийн Төв">
        
            <img className="brandLogo" src="/logo-transparent.png" alt="Logo" width="100" height="100"/>
            <span>
              <strong>ЭРҮҮЛ МЭНДИЙН ТӨВ</strong>
              <small>Иргэн бүрт ойр, чанартай тусламж</small>
            </span>
          </a>
          <nav className="nav" aria-label="Үндсэн цэс">
            {links.map((link) => (
              <a href="#" key={link}>{link}</a>
            ))}
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">Эрүүл мэндийн мэдээллийн нэгдсэн портал</span>
            <h1>Иргэдэд хэрэгтэй мэдээ, үйлчилгээ, зөвлөмжийг нэг дороос</h1>
		
            <p>
              Эрүүл мэндийн төвийн үйлчилгээ, цаг авах холбоос, урьдчилан сэргийлэх зөвлөмж,
              салбарын шинэ мэдээг ойлгомжтой, хурдан хүргэнэ.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#services">Үйлчилгээ харах</a>
              <a className="secondaryButton" href="#news">Сүүлийн мэдээ</a>
            </div>
          </div>
          {/* <img src="doctors.jpg" alt="Girl in a jacket" width="500" height="600"/> */}
          <div className="heroVisual" role="img" aria-label="Эмнэлгийн ажилтан өвчтөнд зөвлөгөө өгч буй зураг" />
        </div>
      </section>

      <section className="quickLinks" id="services">
        <div className="container quickGrid">
          {services.map((item) => (
            <a className="quickCard" href="#" key={item}>
              <span className="quickIcon">□</span>
              <span>{item}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="contentBand" id="news">
        <div className="container sectionHeader">
          <div>
            <span className="eyebrow">Мэдээ мэдээлэл</span>
            <h2>Сүүлийн үеийн мэдээлэл</h2>
          </div>
          <a className="textLink" href="#">Бүгдийг харах</a>
        </div>
        <div className="container newsGrid">

          {news.map((item) => (
            <article className="newsCard" key={item.title}>
		
              <div className="newsImage" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="newsBody">
                <div className="meta"><span>{item.category}</span><time>{item.date}</time></div>
                <h3>{item.title}</h3>
                <a href="#">Дэлгэрэнгүй</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="noticeBand">
        <div className="container noticeGrid">
          <div>
            <span className="eyebrow">Ил тод байдал</span>
            <h2>Албан мэдээ, тушаал шийдвэр, худалдан авалтын мэдээлэл</h2>
          </div>
          <div className="noticeList">
            <a href="#">Тушаал, шийдвэрийн төсөлд санал авах</a>
            <a href="#">Худалдан авах ажиллагааны зар</a>
            <a href="#">Хүний нөөцийн ил тод мэдээлэл</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <strong>ЭРҮҮЛ МЭНДИЙН ТӨВ</strong>
            <p>Иргэдэд зориулсан эрүүл мэндийн мэдээлэл, үйлчилгээний портал.</p>
          </div>
          <div>
            <span>Хаяг</span>
            <p>Цогтцэций сум, Өмнөговь аймаг, Монгол Улс</p>
          </div>
          <div>
            <span>Холбоо барих</span>
            <p>info@eruulmendiintuv.mn<br />88707708</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
