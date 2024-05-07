import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import JobCardList from "./components/JobCard/JobCardList";
import Loading from "./components/Loader/Loader";
import useInfiniteScroll from "./customHooks/useInfiniteScroll";
import { companyNames } from "./data/constants";

import Box from "@mui/material/Box";

function App() {
  const [jobDataList, setJobDataList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [offset]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            limit: 9,
            offset: offset,
          }),
        }
      );
      const data = await response.json();
      
      const updatedData = data.jdList.map((job) => {
        let randomIndex = Math.floor(Math.random() * companyNames.length);
        let companyName = companyNames[randomIndex];

        const modes = ["In-Office", "Hybrid", "Remote"];
        let randomModeIndex = Math.floor(Math.random() * modes.length);
        let mode = modes[randomModeIndex];

        return { ...job, companyName, mode };
      });
      setJobDataList((prevJdList) => [...prevJdList, ...updatedData]);
    } catch (error) {
      console.error(error);
    }
  };
  
  const loading = useInfiniteScroll(fetchData, offset, setOffset);
  
  return (
    <>
     <p>Weekday App</p>
     <Box>
     <Navbar data={jobDataList} setFilteredData={setFilteredData}/>
     <JobCardList data={filteredData}/>
     {loading && <Loading />}
     </Box>
    </>
  )
}

export default App;
