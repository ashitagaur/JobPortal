import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import JobCardList from "./components/JobCard/JobCardList";
import Loading from "./components/Loader/Loader"

import useInfiniteScroll from "./customHooks/useInfiniteScroll";

function App() {
  
  const [offset, setOffset] = useState(0);
  const fetchData = async () => {
    try {
      console.log("fetch data")
    } catch (error) {
      console.log(error)
    }
  }
  
  const loading = useInfiniteScroll(fetchData, offset, setOffset);
  return (
    <>
     <p>Weekday App</p>
     <Navbar/>
     <JobCardList/>
     {loading && <Loading />}
    </>
  )
}

export default App;
