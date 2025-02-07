
# Ride Sharing Platform

[English](README.md) | [中文](README_zh.md)

A Next.js, Express and MongoDB based ride sharing web application.

## Prerequisites

- Docker & Docker Compose
- Git
- Node.js (for local development)

## Quick Start

### Step 1: Clone the repository
```bash
git clone https://github.com/alongLFB/Ride-Sharing.git
cd Ride-Sharing
```

### Step 2: Copy environment configuration
```bash
cp .env.example .env
```

### Step 3: Configure environment variables in `.env`
```bash
MONGO_USERNAME=your_username
MONGO_PASSWORD=your_secure_password
MONGO_PORT=27017
MONGODB_URI=mongodb://mongodb:27017/ride-sharing

BACKEND_PORT=3001
NEXT_PUBLIC_API_URL=http://127.0.0.1:3001

FRONTEND_PORT=3002
```

### Step 4: Start the application
```bash
docker-compose up --build -d
```

### Step 5: Access the services

- **Frontend**: [http://localhost:3002](http://localhost:3002)
- **Backend**: [http://localhost:3001](http://localhost:3001)
- **MongoDB**: [mongodb://localhost:27017](mongodb://localhost:27017)

## Development

### Project Structure

- `frontend2`: Next.js frontend
- `backend2`: Express.js backend
- `docker-compose.yml`: Docker configuration
- `.env`: Environment variables
- `.env.example`: Environment template

### Useful Commands

#### Stop Services
```bash
docker-compose down
```

#### View Logs
- All:
  ```bash
  docker-compose logs -f
  ```
- Frontend:
  ```bash
  docker-compose logs -f frontend
  ```
- Backend:
  ```bash
  docker-compose logs -f backend
  ```
- MongoDB:
  ```bash
  docker-compose logs -f mongodb
  ```

#### Rebuild Services
- Frontend:
  ```bash
  docker-compose up -d --build frontend
  ```
- Backend:
  ```bash
  docker-compose up -d --build backend
  ```

## License

MIT
