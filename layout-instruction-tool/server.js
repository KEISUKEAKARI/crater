const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8084;

// キャッシュ無効化
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
    next();
});

// app.jsを常にディスクから読んで返す（キャッシュ回避）
app.get('/app.js', (req, res) => {
    res.set('Content-Type', 'application/javascript');
    const content = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
    res.send(content);
});

// 静的ファイル配信
app.use(express.static(__dirname, { maxAge: 0 }));

// セクション一覧API（sections/フォルダの画像を返す）
app.get('/api/sections', (req, res) => {
    const sectionsDir = path.join(__dirname, 'sections');

    if (!fs.existsSync(sectionsDir)) {
        return res.json([]);
    }

    const exts = ['.png', '.jpg', '.jpeg', '.svg', '.gif'];
    const files = fs.readdirSync(sectionsDir);
    const sections = files
        .filter(f => exts.includes(path.extname(f).toLowerCase()))
        .map(f => ({
            file: f,
            name: path.basename(f, path.extname(f))
        }));

    res.json(sections);
});

app.listen(PORT, () => {
    console.log(`Layout Tool: http://localhost:${PORT}`);
});
