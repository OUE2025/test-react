import { useState } from "react";
import "./App.css";

type PageKey = "home" | "services" | "pricing" | "about";

const pageTabs: { key: PageKey; label: string }[] = [
  { key: "home", label: "トップ" },
  { key: "services", label: "サービス内容" },
  { key: "pricing", label: "料金・利用まで" },
  { key: "about", label: "事業所案内" },
];

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>("home");

  return (
    <div className="page">
      <header className="masthead">
        <div className="masthead__text">
          <p className="eyebrow">訪問介護 あおぞらケア</p>
          <h1 className="headline">
            住み慣れたお家で、いつもの毎日を支える訪問介護
          </h1>
          <p className="lead">
            介護福祉士・看護資格をもつスタッフが、ご自宅での生活を一緒にデザインします。
            介護保険・自費どちらも柔軟に対応。まずはお気軽にご相談ください。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:0312345678">
              03-1234-5678（相談無料）
            </a>
            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => setActivePage("services")}
            >
              サービスを見る
            </button>
          </div>
        </div>
        <div className="masthead__card">
          <div className="card-badge">24h 緊急相談</div>
          <p className="card-title">ご相談受付中</p>
          <ul className="card-points">
            <li>平日 8:30-18:00 / 土曜 9:00-15:00</li>
            <li>介護保険の申請・更新もサポート</li>
            <li>ご家族向けオンライン面談 OK</li>
          </ul>
          <p className="card-note">エリア: 台東区・墨田区・江東区 ほか隣接エリア</p>
        </div>
      </header>

      <nav className="tabs">
        {pageTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`tab ${activePage === tab.key ? "is-active" : ""}`}
            onClick={() => setActivePage(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="content">
        <PageContent activePage={activePage} />
      </main>

      <footer className="footer">
        <div>
          <p className="footer-title">訪問介護 あおぞらケア</p>
          <p className="footer-text">
            東京都台東区浅草 1-2-3 ビル 5F / 事業所番号 13A2B3456
          </p>
        </div>
        <div className="footer-cta">
          <span>電話相談</span>
          <a href="tel:0312345678">03-1234-5678</a>
        </div>
      </footer>
    </div>
  );
}

function PageContent({ activePage }: { activePage: PageKey }) {
  if (activePage === "home") {
    return (
      <section className="panel-grid">
        <div className="panel">
          <p className="panel-label">大切にしていること</p>
          <h2>ご本人の「らしさ」を守るケア</h2>
          <p>
            いつもの生活リズムや習慣を尊重し、無理なく続けられるケアを組み立てます。
            週1回の生活援助から、毎日の身体介護まで幅広く対応。
          </p>
          <ul className="check-list">
            <li>介護福祉士・看護資格者がチームで担当</li>
            <li>服薬・栄養・口腔ケアまでワンストップ</li>
            <li>ご家族との連絡ノート・写真共有に対応</li>
          </ul>
        </div>
        <div className="panel highlight">
          <p className="panel-label">安心のために</p>
          <h2>緊急時も 24 時間サポート</h2>
          <p>
            夜間の転倒や体調変化など、気になるときはいつでも専用窓口へ。状況確認と必要な対応を迅速に行います。
          </p>
          <div className="stats">
            <div>
              <span className="stat-number">15 分以内</span>
              <span className="stat-caption">一次連絡の目安</span>
            </div>
            <div>
              <span className="stat-number">95%</span>
              <span className="stat-caption">利用継続率（昨年度）</span>
            </div>
            <div>
              <span className="stat-number">200+</span>
              <span className="stat-caption">年間対応ケース</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (activePage === "services") {
    return (
      <section className="panel-grid services">
        <div className="panel">
          <p className="panel-label">訪問介護</p>
          <h2>身体介護</h2>
          <p>
            入浴・排せつ・清拭・体位変換・移乗介助など、日常生活に必要な身体介護を行います。
          </p>
          <ul className="bullet-list">
            <li>入浴・洗髪介助／部分浴</li>
            <li>排せつ・オムツ交換・ポータブルトイレ</li>
            <li>歩行・車いす移動介助、通院同行</li>
          </ul>
        </div>
        <div className="panel">
          <p className="panel-label">訪問介護</p>
          <h2>生活援助</h2>
          <p>
            ご自宅の環境を整えることで、ご本人とご家族の負担を軽減します。安全・衛生を最優先に対応します。
          </p>
          <ul className="bullet-list">
            <li>買い物代行・配達受け取り</li>
            <li>調理・配膳・食器洗い・キッチン清掃</li>
            <li>お部屋の掃除・洗濯・ゴミ出し</li>
          </ul>
        </div>
        <div className="panel">
          <p className="panel-label">自費サービス</p>
          <h2>保険外サポート</h2>
          <p>
            介護保険の枠を超えるサポートもご相談ください。冠婚葬祭の付き添い、長時間の見守りなど柔軟に対応します。
          </p>
          <ul className="bullet-list">
            <li>外出付き添い・趣味活動の同行</li>
            <li>夜間帯の見守りや宿泊対応</li>
            <li>院内付き添い・退院支援</li>
          </ul>
        </div>
      </section>
    );
  }

  if (activePage === "pricing") {
    return (
      <section className="panel-grid">
        <div className="panel">
          <p className="panel-label">料金の目安</p>
          <h2>介護保険サービス</h2>
          <p>
            介護度・サービス内容・時間帯により異なります。自己負担は 1〜3 割。ケアマネジャーと連携し、ご負担を最適化します。
          </p>
          <ul className="bullet-list">
            <li>身体介護 30 分〜: 自己負担 300 円台〜</li>
            <li>生活援助 45 分〜: 自己負担 250 円台〜</li>
            <li>早朝・夜間・深夜は加算あり</li>
          </ul>
          <p className="note">
            正確な金額は介護認定・サービス計画に基づきご案内します。
          </p>
        </div>
        <div className="panel">
          <p className="panel-label">料金の目安</p>
          <h2>自費サービス</h2>
          <p>
            介護保険で対応できない内容も、30 分単位でご利用いただけます。訪問時間・内容に応じてお見積りします。
          </p>
          <ul className="bullet-list">
            <li>平日: 30 分 2,800 円〜</li>
            <li>夜間・土日祝: 割増 25% 目安</li>
            <li>交通費: 実費（自転車圏内は無料）</li>
          </ul>
        </div>
        <div className="panel flow">
          <p className="panel-label">ご利用まで</p>
          <h2>スムーズな 4 ステップ</h2>
          <ol className="steps">
            <li>
              <span>1. ご相談</span>
              <p>お電話またはフォームから。状況とご希望をお伺いします。</p>
            </li>
            <li>
              <span>2. ご訪問・提案</span>
              <p>ご自宅を拝見し、ケアプランやサービス内容を一緒に検討します。</p>
            </li>
            <li>
              <span>3. 契約・開始準備</span>
              <p>日程調整とスタッフ選定、連絡方法を決定します。</p>
            </li>
            <li>
              <span>4. サービス開始</span>
              <p>初回訪問後も、必要に応じてプランを柔軟に見直します。</p>
            </li>
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section className="panel-grid about">
      <div className="panel">
        <p className="panel-label">事業所情報</p>
        <h2>事業所概要</h2>
        <ul className="definition">
          <li>
            <span>名称</span>
            <p>訪問介護 あおぞらケア</p>
          </li>
          <li>
            <span>所在地</span>
            <p>東京都台東区浅草 1-2-3 ビル 5F</p>
          </li>
          <li>
            <span>電話</span>
            <p>
              <a href="tel:0312345678">03-1234-5678</a>（平日 8:30-18:00）
            </p>
          </li>
          <li>
            <span>事業所番号</span>
            <p>13A2B3456</p>
          </li>
        </ul>
      </div>
      <div className="panel">
        <p className="panel-label">対応エリア</p>
        <h2>台東区中心に、隣接エリアまで</h2>
        <p>
          台東区・墨田区・江東区・千代田区・中央区の一部に伺います。
          訪問経路や時間帯により柔軟に調整しますのでお気軽にご相談ください。
        </p>
        <div className="tags">
          <span>浅草</span>
          <span>蔵前</span>
          <span>両国</span>
          <span>清澄白河</span>
          <span>上野</span>
        </div>
        <p className="note">
          福祉用具・訪問看護・デイサービスなど、地域の事業所との連携もサポートします。
        </p>
      </div>
      <div className="panel contact-card">
        <p className="panel-label">お問い合わせ</p>
        <h2>まずは無料相談をご利用ください</h2>
        <p>直近のお困りごとをお聞きし、最適なサービスと手続きをご案内します。</p>
        <div className="contact-actions">
          <a className="btn btn-primary" href="tel:0312345678">
            電話する
          </a>
          <a className="btn btn-ghost" href="mailto:info@aozora-care.jp">
            メールで相談
          </a>
        </div>
        <ul className="card-points compact">
          <li>ご家族のみのご相談も歓迎</li>
          <li>感染症対策を徹底して訪問</li>
        </ul>
      </div>
    </section>
  );
}
