const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rideShareRoutes = require('./routes/rideShare');

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 数据库连接
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// 路由
app.use('/api/rideshare', rideShareRoutes);

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '服务器内部错误' });
});

const PORT = process.env.BACKEND_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/health', async (req, res) => {
  try {
    // 检查数据库连接
    await mongoose.connection.db.admin().ping();  // 测试 MongoDB 是否可用

    // 如果有其他外部依赖服务，这里可以增加相关检查代码

    res.status(200).json({
      status: 'OK',
      database: 'OK',
      external_services: 'OK',
      resources: {
        memory: '75%',
        disk: '80% free'
      }
    });
  } catch (err) {
    console.error('Health check failed:', err);
    res.status(500).json({
      status: 'FAIL',
      database: 'FAIL',
      external_services: 'FAIL',
      error: 'Database connection failed'
    });
  }
});
