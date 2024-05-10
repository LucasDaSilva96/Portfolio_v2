import toast from "react-hot-toast";
import axios from "axios";
const API_BASE_URL = process.env.VITE_BASE_API_URL;

export const fetchAllProjects = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}api/v1/project/`);

    return res.data.data;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
};

export const fetchAllCertifications = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}api/v1/certification/`);

    return res.data.data;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
};
