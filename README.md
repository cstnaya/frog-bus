# Week3 - 全台公車動態時刻查詢應用服務 - 蛙蛙公車

###### tags: `React` `React-router-dom` `axios` `mapbox-gl` `jsSHA` `ESLint` `MOTC-TDX`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Project Description
The F2E 第三周作品專案，公車即時動態搜尋 App。
- [找路線]：輸入欲搜尋的公車路線，顯示該路線公車目前位置，及各站須等待時間。 (每 30 秒刷新一次)
- [找站牌]：輸入使用者目前所在站牌，顯示行經此站牌的公車路線一覽，及各自的等待時間。(每 30 秒刷新一次)
- [找附近車站]：鎖定使用者目前位置，顯示使用者周遭站牌及其位置。 (約 600 公尺內)

### System Description
事前準備：
- 開通 MOTC-TDX 的 api-token
- 開通 mapbox 的 api-token (allowed-url 需儲存 localhost:3000/*)
- 在 root directory 另開新檔案 .env 
- 將 MOTC-TDX 的 ID 儲存為 `REACT_APP_ID`
- 將 MOTC-TDX 的 Key 儲存為 `REACT_APP_KEY`
- 將 Mapbox 的 token 儲存為 `REACT_APP_MAPBOX_TOKEN`

```
REACT_APP_ID=YOUR_MOTC_ID
REACT_APP_KEY=YOUR_MOTC_KEY
REACT_APP_MAPBOX_TOKEN=YOUR_MOPBOX_TOKEN
```

運行方式：
- `npm install`
- `npm start`
- 請確認運行在 `localhost:3000/*` 或 `localhost:3001/*` 上


### Tools
此專案使用到的工具:
- React, React-dom, React-router-dom
- axios
- font-awesome js/css library
- jsSHA
- mapbox-gl-js
- ESLint

### Fold Structure
- src
  - components: 放置 UI 元件與 邏輯運算 codes 的地方
  - css: .css 統一放置區
  - pages: 此專案共 4 頁，拆分為 4 個主要 page components 放置於此
  - widgets: 放置 components 會重複使用到的 methods, vars

### Third Party Service
- MOTC TDX api
- Mapbox-gl api
