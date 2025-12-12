import { useEffect } from "react";
import useApi from "../../components/hooks/UseApi";

function Home() {
  const { get, loading, error } = useApi();
  useEffect(() => {
    get().then((data)=>data);
    console.log(data);
    
  }, []);
  return <div>Home</div>;
}

export default Home;
