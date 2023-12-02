import axios from 'axios';

export default axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: { 'ngrok-skip-browser-warning': 123 }, // dummy header to bypass ngrok welcome page
});
