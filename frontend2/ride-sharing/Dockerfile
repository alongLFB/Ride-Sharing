# 使用 Node.js 官方镜像
FROM node:22

# 设置工作目录
WORKDIR /app

# 复制 package.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有前端文件
COPY . .

# 运行构建（如果是 React）
RUN npm run build

# 暴露端口
EXPOSE 3002

# 运行前端
CMD ["pm2-runtime", "start", "npm", "--name", "ride-sharing-frontend", "--", "run", "start"]
