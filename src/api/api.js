// 导入 Axios
import axios from 'axios';

// 设置基础 URL
const axiosInstance = axios.create({
    // baseURL: 'http://localhost:5000'
});

// 导出 Axios 实例以便在其他地方使用
export default axiosInstance;