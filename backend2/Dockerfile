# 使用 Node.js 官方镜像
FROM node:22

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果有）
COPY package*.json ./

# 安装依赖
RUN npm install -g pm2 && npm install

# 复制项目文件
COPY . .

# 设置环境变量（可选，docker-compose 也能设置）
ARG BACKEND_PORT
ENV BACKEND_PORT=${BACKEND_PORT}

# 暴露端口
EXPOSE ${BACKEND_PORT}

# 使用 pm2 运行后端服务
CMD PORT=$BACKEND_PORT pm2-runtime start app.js --name "ride-sharing-backend"

