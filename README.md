# 陳葵懋 Ian Chen — Personal Profile

個人學經歷履歷靜態網站 / Personal professional profile (static site).

**Live site → https://iangithub.github.io**

陳葵懋 Ian Chen — 一等一科技 (e-Excellence) 研發部主任工程師、Microsoft AI MVP 與 Microsoft Certified Trainer (MCT)。專注 .NET、Azure、容器化、Azure OpenAI、生成式 AI、RAG 與 AI Agent。

## Features
- 🌗 深色科技感設計 (dark tech theme)
- 🌐 中英雙語切換 (bilingual zh / en toggle，記住偏好)
- 📱 RWD 響應式 (responsive)
- ⚡ 純靜態，無建置流程 (plain HTML/CSS/JS — no build step)

## Structure
```
index.html              # 主頁面 / single page
assets/css/style.css    # 樣式 / styles
assets/js/main.js       # 語言切換 + 進場動畫 / lang toggle + reveal
.nojekyll               # 停用 Jekyll 處理 / serve files as-is
```

## Local preview
直接用瀏覽器開啟 `index.html`，或：
```bash
python -m http.server 8000
# 開啟 http://localhost:8000
```

## Deploy
本站透過 GitHub Pages 由 `main` 分支根目錄發佈。Push 到 `main` 即自動更新。
