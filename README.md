# 我的閱讀書房

寬版深木書櫃，支援六大主題、逐章濃縮、故事卡與年度篩選。

## 網站與雲端

- `web/`：GitHub Pages 公開網站。
- `worker/index.js`：Sites / Cloudflare Worker API，使用 D1 保存藏書。
- `drizzle/`：雲端資料庫的版本化結構。
- `scripts/build-cloud.mjs`：把前端資源打包進 Worker；輸出 `dist/server/index.js`。
- `.github/workflows/pages.yml`：推送 main 後自動發布公開前端。

前端公開讀取雲端藏書。按「管理登入」後，在原書房網址使用 ChatGPT 登入，只有 `OWNER_EMAIL` 指定的帳號可寫入。寫入介面在伺服器驗證身分與來源，沒有把存取憑證放入前端。

`OWNER_EMAIL` 只設定在 Sites 的執行環境，不存於此儲存庫。Sites 的資料庫綁定為 `DB`。GitHub Pages 與 Sites 使用同一份雲端資料；朋友更新頁面即可看到新藏書。

## 管理

1. 按「管理登入」，使用書房擁有者的 ChatGPT 帳號登入。
2. 新增書籍或設定閱讀年份，儲存成功後即上雲端。
3. 曾存在舊瀏覽器的藏書，可登入後按「匯入此裝置藏書」。此動作不會刪除本機資料。

既有的內建書籍與整理內容隨版本發布；新藏書及閱讀年份儲存在 D1。程式碼與資料庫分開保存。沒有連線時不會假裝已成功同步。

## 開發驗證

使用 Node.js 執行：

```
node scripts/test-cloud.mjs
node scripts/build-cloud.mjs
```

書背目前為模擬，書籍尺寸來源與估計處見網站「關於」。筆記來源為使用者提供的畫線與前半段讀書筆記。
