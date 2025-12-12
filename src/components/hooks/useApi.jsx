import { useState } from "react";
import { apiAxios } from "../api/apiAxios";


const UseApi = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const results = async function () {
    setLoading(true);
    try {
      const respons = await apiAxios({ method: "get", url: "/allUsers" });
    
     
      
      return respons;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, get: () => results() };
};
export default UseApi;
