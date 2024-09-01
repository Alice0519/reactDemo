import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // 替换为你的API基础URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
