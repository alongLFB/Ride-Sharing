const express = require('express');
const router = express.Router();
const RideShare = require('../models/RideShare');

// 数据验证中间件
const validateRideShare = (req, res, next) => {
  const { type, date, departure, destination, timeRange, seats, price, wechat } = req.body;
  
  if (!type || !date || !departure || !destination || !timeRange || !seats || !price || !wechat) {
    return res.status(400).json({ error: '所有字段都是必填的' });
  }
  
  if (!['driver', 'passenger'].includes(type)) {
    return res.status(400).json({ error: '无效的类型' });
  }
  
  if (isNaN(seats) || seats < 1) {
    return res.status(400).json({ error: '座位数必须是大于0的数字' });
  }
  
  if (isNaN(price) || price < 0) {
    return res.status(400).json({ error: '价格必须是非负数' });
  }
  
  next();
};

// 创建新的拼车信息
router.post('/submit', validateRideShare, async (req, res) => {
  try {
    const rideShare = new RideShare(req.body);
    await rideShare.save();
    res.status(201).json({ 
      message: '出行信息发布成功',
      data: rideShare 
    });
  } catch (error) {
    res.status(500).json({ 
      error: '服务器错误',
      details: error.message 
    });
  }
});

// 获取所有拼车信息
router.get('/', async (req, res) => {
  try {
    const { type, date, departure, destination } = req.query;
    const query = {};
    
    if (type) query.type = type;
    if (date) query.date = new Date(date);
    if (departure) query.departure = new RegExp(departure, 'i');
    if (destination) query.destination = new RegExp(destination, 'i');
    
    const rideShares = await RideShare.find(query)
      .sort({ createdAt: -1 })
      .limit(50);
      
    res.json(rideShares);
  } catch (error) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 获取特定拼车信息
router.get('/:id', async (req, res) => {
  try {
    const rideShare = await RideShare.findById(req.params.id);
    if (!rideShare) {
      return res.status(404).json({ error: '未找到该出行信息' });
    }
    res.json(rideShare);
  } catch (error) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 更新拼车信息
router.put('/:id', validateRideShare, async (req, res) => {
  try {
    const rideShare = await RideShare.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!rideShare) {
      return res.status(404).json({ error: '未找到该出行信息' });
    }
    res.json(rideShare);
  } catch (error) {
    res.status(500).json({ error: '服务器错误' });
  }
});

// 删除拼车信息
router.delete('/:id', async (req, res) => {
  try {
    const rideShare = await RideShare.findByIdAndDelete(req.params.id);
    if (!rideShare) {
      return res.status(404).json({ error: '未找到该出行信息' });
    }
    res.json({ message: '出行信息已删除' });
  } catch (error) {
    res.status(500).json({ error: '服务器错误' });
  }
});

module.exports = router;