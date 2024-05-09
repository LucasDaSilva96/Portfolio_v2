import toast from "react-hot-toast";
import axios from "axios";

// TODO change URL ↓
export const fetchAllProjects = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/v1/project/");

    return res.data.data;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
};

export const fetchAllCertifications = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/v1/certification/");

    return res.data.data;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
};
