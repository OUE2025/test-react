import React from "react";

// テスト用にダウンロードさせたいファイル情報をまとめておく
// 実際のファイル（PDFや画像、ZIPなど）は、/public/files 配下に配置してください。
const files = [
  {
    label: "会社案内PDF",
    fileName: "company-profile.pdf",
    url: "/files/company-profile.pdf",
  },
  {
    label: "料金表（Excel）",
    fileName: "price-list.xlsx",
    url: "/files/price-list.xlsx",
  },
  {
    label: "サンプル画像",
    fileName: "sample-image.jpg",
    url: "/files/sample-image.jpg",
  },
  {
    label: "ZIP一括ダウンロード",
    fileName: "all-data.zip",
    url: "/files/all-data.zip",
  },
];

// シンプルなテスト用ダウンロードページ
export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center py-10">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
          テスト用ダウンロードサイト
        </h1>
        <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">
          Reactで作成した、ファイルダウンロードの挙動を確認するためのシンプルなテストページです。
          <br />
          public/files 配下に任意のファイルを配置し、下記リストを編集すれば簡単にカスタマイズできます。
        </p>

        <div className="border border-slate-200 rounded-2xl overflow-hidden">
          <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              ダウンロード可能なファイル一覧
            </span>
            <span className="text-xs text-slate-400">
              {files.length} 件
            </span>
          </div>

          <ul className="divide-y divide-slate-100">
            {files.map((file) => (
              <li
                key={file.fileName}
                className="flex flex-col md:flex-row md:items-center justify-between gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">
                    {file.label}
                  </p>
                  <p className="text-xs text-slate-500 break-all">
                    {file.fileName}
                  </p>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs md:text-sm underline text-slate-500 hover:text-slate-700"
                  >
                    プレビュー
                  </a>

                  <a
                    href={file.url}
                    download={file.fileName}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-900 px-3 py-1.5 text-xs md:text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors whitespace-nowrap"
                  >
                    ダウンロード
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-xs md:text-sm text-slate-500 leading-relaxed">
          <p className="mb-1 font-semibold text-slate-600">使い方メモ</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Reactプロジェクトの public 配下に <code>/files</code> フォルダを作成します。</li>
            <li>/files の中にダウンロードさせたいファイルを配置します。</li>
            <li>このコンポーネント上部の <code>files</code> 配列に、<code>label</code> / <code>fileName</code> / <code>url</code> を追記・編集します。</li>
            <li>ブラウザからアクセスして、ダウンロードボタンの動作を確認します。</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
