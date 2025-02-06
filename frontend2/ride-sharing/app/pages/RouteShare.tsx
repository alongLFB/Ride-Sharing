"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const RideShare = () => {
  const [type, setType] = useState('driver');
  const [formData, setFormData] = useState({
    date: '',
    departure: '',
    destination: '',
    timeRange: '',
    seats: '',
    price: '',
    wechat: '',
    telephone: '',
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['date', 'departure', 'destination', 'timeRange', 'wechat'];

    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        alert(`请填写${field === 'date' ? '日期' : field === 'departure' ? '出发地' : field === 'destination' ? '目的地' : field === 'timeRange' ? '时间范围' : '联系方式(微信ID)'}`);
        return false;
      }
    }

    if (type === 'driver' || type === 'passenger') {
      if (!formData.seats) {
        alert(type === 'driver' ? '请填写空余座位数' : '请填写人数');
        return false;
      }
      if (!formData.price) {
        alert(type === 'driver' ? '请填写价格' : '请填写预期价格');
        return false;
      }
    }

    return true;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch('http://127.0.0.1:3001/api/rideshare/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, ...formData }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        alert('出行信息发布成功！');
      } else {
        console.error('Failed to submit:', response.statusText);
        alert('提交失败，请稍后再试。');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('发生错误，请检查网络连接或稍后再试。');
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <h2 className="text-2xl text-center font-bold">发布出行信息</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>类型</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="请选择类型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="driver">车找人</SelectItem>
                <SelectItem value="passenger">人找车</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>日期</Label>
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>出发地</Label>
            <Input
              value={formData.departure}
              onChange={(e) => handleInputChange('departure', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>目的地</Label>
            <Input
              value={formData.destination}
              onChange={(e) => handleInputChange('destination', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>时间范围</Label>
            <Input
              value={formData.timeRange}
              onChange={(e) => handleInputChange('timeRange', e.target.value)}
            />
          </div>

          {type === 'driver' && (
            <>
              <div className="space-y-2">
                <Label>空余座位数</Label>
                <Input
                  type="number"
                  value={formData.seats}
                  onChange={(e) => handleInputChange('seats', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>价格</Label>
                <Input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                />
              </div>
            </>
          )}

          {type === 'passenger' && (
            <>
              <div className="space-y-2">
                <Label>人数</Label>
                <Input
                  type="number"
                  value={formData.seats}
                  onChange={(e) => handleInputChange('seats', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>预期价格</Label>
                <Input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                />
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label>联系方式(微信ID)</Label>
            <Input
              value={formData.wechat}
              onChange={(e) => handleInputChange('wechat', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>联系方式（手机号）*选填</Label>
            <Input
              value={formData.telephone}
              onChange={(e) => handleInputChange('telephone', e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">发布</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RideShare;
