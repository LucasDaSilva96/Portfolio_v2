import toast from "react-hot-toast";
import axios from "axios";

export const fetchAllProjects = async () => {
  try {
    const res = await axios.get(
      `https://portfolio-backend-vf6c.onrender.com/api/v1/project/`
    );

    return res.data.data;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
};

export const fetchAllCertifications = async () => {
  try {
    const res = await axios.get(
      `https://portfolio-backend-vf6c.onrender.com/api/v1/certification/`
    );

    return res.data.data;
  } catch (e) {
    toast.error(e.message);
    return [];
  }
};
