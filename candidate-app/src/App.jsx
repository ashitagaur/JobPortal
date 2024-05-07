import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import JobCardList from "./components/JobCard/JobCardList";
import Loading from "./components/Loader/Loader";
import useInfiniteScroll from "./customHooks/useInfiniteScroll";
import { companyNames } from "./data/constants";
import { Card, Chip } from "@mui/material";
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

      <Card
        sx={{
          position: "fixed",
          margin:"10px",
          top: "0px",
          backgroundColor: "rgb(255, 255, 255)",
          padding: "10px 30px",
          width: "100%",
          marginRight: "100px",
          height: "40px",
          zIndex: "10",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px",
          borderRadius: "8px",
        }}
      >
        👋 Ashita
      </Card>

      <Chip
        label={`We, at Weekday, are creating a go-to hub for uncovering the real issues candidates should be aware of before joining a company. Access 150+ company reviews here`}
        size="small"
        variant="outlined"
        style={{
          marginTop: "100px",
          marginLeft: "30px",
          position: "static",
          background: "aquamarine",
          padding: "5px",
        }}
      />
      <Box>
        <Navbar data={jobDataList} setFilteredData={setFilteredData} />
        <JobCardList data={filteredData} />
        {loading && <Loading />}
      </Box>
    </>
  );
}

export default App;
