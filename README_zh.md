
# 共乘平台

一个基于 Next.js、Express 和 MongoDB 的共乘 Web 应用程序。

## 前提条件

- Docker 和 Docker Compose
- Git
- Node.js（用于本地开发）

## 快速开始

### 第一步：克隆仓库
```bash
git clone https://github.com/alongLFB/Ride-Sharing.git
cd Ride-Sharing
```

### 第二步：复制环境配置
```bash
cp .env.example .env
```

### 第三步：在 `.env` 中配置环境变量
```bash
MONGO_USERNAME=your_username
MONGO_PASSWORD=your_secure_password
MONGO_PORT=27017
MONGODB_URI=mongodb://mongodb:27017/ride-sharing

BACKEND_PORT=3001
NEXT_PUBLIC_API_URL=http://127.0.0.1:3001

FRONTEND_PORT=3002
```

### 第四步：启动应用
```bash
docker-compose up --build -d
```

### 第五步：访问服务

- **前端**: [http://localhost:3002](http://localhost:3002)
- **后端**: [http://localhost:3001](http://localhost:3001)
- **MongoDB**: [mongodb://localhost:27017](mongodb://localhost:27017)

## 开发

### 项目结构

- `frontend2`: Next.js 前端
- `backend2`: Express.js 后端
- `docker-compose.yml`: Docker 配置文件
- `.env`: 环境变量
- `.env.example`: 环境模板

### 常用命令

#### 停止服务
```bash
docker-compose down
```

#### 查看日志
- 所有日志:
  ```bash
  docker-compose logs -f
  ```
- 前端日志:
  ```bash
  docker-compose logs -f frontend
  ```
- 后端日志:
  ```bash
  docker-compose logs -f backend
  ```
- MongoDB 日志:
  ```bash
  docker-compose logs -f mongodb
  ```

#### 重建服务
- 前端:
  ```bash
  docker-compose up -d --build frontend
  ```
- 后端:
  ```bash
  docker-compose up -d --build backend
  ```

## 许可

MIT
