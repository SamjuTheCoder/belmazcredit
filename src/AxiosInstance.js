import axios from "axios";
//import Swal from "sweetalert2";

// SECURE AXIOS
export const newAxios = axios.create({
 //baseURL: process.env.VUE_APP_API_URL,
 // baseURL: 'http://127.0.0.1:8000/api',
  baseURL: 'https://backend.belmazcredit.com/api',
  headers: {
    "Content-Type": "application/json",
  },
});

newAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("wertyuiojhdfghhdrtfyguh");

//   if (!token) {
//     window.location.href = "/";
//     return;
//   }

  const AuthStr = "Bearer ".concat(token);

  config.headers.Authorization = AuthStr;
  // config.headers["HTTP_API_KEY"] = token;

  return config;
});


