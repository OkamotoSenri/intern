const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
app.use(bodyParser.json());

// ルートの読み込み
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// サーバーの起動
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
