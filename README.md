# australia_electron
澳洲客戶打包

## electron 套件相關

#### 請先在電腦安裝下列項目
1. node.js
2. npm
----
## electron 基本安裝步驟
1. 下載 electron-quick-start 檔案內容
   git clone https://github.com/electron/electron-quick-start
   [electron-quick-start github](https://en.wikipedia.org/wiki/Markdown)
2. 開啟cmd，並移動至electron-quick-start資料夾
   cd C:\xampp\htdocs\electron-quick-start (範例路徑)
3. 在cmd(終端機)內輸入 npm install
4. 在cmd內輸入 npm start，即可預覽App檔開啟後狀態
----
### 打包檔案放置位置
> 請將所要打包的檔案放置在 C:\xampp\htdocs\electron-quick-start\    
>┌ package.json        放置 npm 相關版本內容...，執行 npm 指令檔案     
>├ main.js             預覽App及設置瀏覽器開啟打包檔相關，包含App上方工具列設置...等     
>├ package-lock.json     
>├ preload.js     
>├ renderer.js     
>├ main.js     
>├ README.md     
>├ LICENSE.md     
>└ 其他所要打包檔案(file/js/css/image....)     

### main.js 相關設置
請參考github內main.js內容    

`mainWindow.loadFile('path/to/index.html')`    
指定至開啟App的主頁面index.html    


`Menu.setApplicationMenu(null);`    
移除App上方工具列表    

----
## electron 打包相關
1. 在cmd內輸入 npm install electron-builder --save-dev
2. package.json 設置內容
3. 依照需求在cmd內輸入 npm run pack 或 npm run dist

** package.json 設置內容 **              

    // 請在"scripts"內添加下列兩項    
    "scripts": {    
        "pack": "electron-builder --dir",   // 打包成散檔    
        "dist": "electron-builder"          // 打包成散檔及單一exe安裝檔    
    }    

    // 請添加"build"在最下方    
    "build": {    
        "appId": "com.electron.GOGOFINDER", // 應用程式使用者模型識別碼       
        "productName": "GOGO_ePubReader",   // exe檔前綴名稱，GOGO_ePubReader.exe
        "copyright":"xxxx",                 // 版權訊息
        "directories": {
          "output": "GOGO_ePubReader_file"  // 執行打包後，檔案放置資料夾
        }
    }


