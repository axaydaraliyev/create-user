import { useEffect } from "react";
import useApi from "../../components/hooks/useApi";

function Home() {
  const { loading, error, get } = useApi();
  useEffect(() => {
    get().then(console.log);
  }, []);
  return <div>Home</div>;
}

export default Home;
