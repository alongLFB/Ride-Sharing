# 使用 Node.js 官方镜像
FROM node:22

# 设置工作目录
WORKDIR /app

# 复制 package.json
COPY package*.json ./

# 安装依赖
RUN npm install -g pm2 && npm install

# 复制所有前端文件
COPY . .

# Add build-time environment variables
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ARG FRONTEND_PORT
ENV FRONTEND_PORT=${FRONTEND_PORT}

# 运行构建（如果是 React）
RUN npm run build

# 暴露端口
EXPOSE ${FRONTEND_PORT}

# 运行前端 - 修改这里
CMD PORT=$FRONTEND_PORT pm2-runtime start npm --name "ride-sharing-frontend" -- run start
