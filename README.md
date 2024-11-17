# Vue.js News Application 📰

## 🛠️ Prerequisites
Before you begin, ensure you have the following installed:
```bash
# Required
Node.js (v14 or higher)
npm (Node Package Manager)

# Install Vue CLI globally
npm install -g @vue/cli
```

## ⚙️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/news-app.git
cd news-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VUE_APP_NEWS_API_KEY=your_news_api_key_here
```

## 📝 Available Scripts

```bash
# Start development server
npm run serve

# Build for production
npm run build

# Lint and fix files
npm run lint
```



## 🔧 Environment Variables

| Variable | Description |
|----------|-------------|
| `VUE_APP_NEWS_API_KEY` | Your NewsAPI key from newsapi.org |

## 🚨 Common Issues & Solutions

1. **Environment Variables Undefined**
```bash
# Ensure your .env file is in the root directory
# Variables must start with VUE_APP_
# Restart development server after changes
npm run serve
```

2. **Build Issues**
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules
npm install
```








