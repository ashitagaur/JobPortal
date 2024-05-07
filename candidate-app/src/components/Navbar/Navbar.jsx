import { useState, useEffect, Suspense, lazy } from "react";
import demoData from "../../data/demoData.json";
import Loading from "../Loader/Loader";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Badge, Grid, Tab, Tabs } from "@mui/material";

const MultiSelect = lazy(() => import("../Filter/MultiSelect"));

const Navbar = ({ data, setFilteredData }) => {
  const [value, setValue] = useState(1);

  const roles = [...new Set(data.map((job) => job.jobRole))];
  const location = [...new Set(data.map((job) => job.location))];
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedMode, setSelectedMode] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedSalary, setSelectedSalary] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);

  useEffect(() => {
    filterData();
  }, [
    selectedRoles,
    selectedMode,
    selectedExperience,
    selectedSalary,
    selectedLocations,
  ]);

   // Filter by roles, mode, experience, salary, loication
  const filterData = () => {
    let filteredData = data.filter((job) => {

      if (selectedLocations.length > 0 && !selectedLocations.includes(job.location)) {
        return false;
      }
     
      if (selectedRoles.length > 0 && !selectedRoles.includes(job.jobRole)) {
        return false;
      }

      if (selectedMode.length > 0 && !selectedMode.includes(job.mode)) {
        return false;
      }

      if (
        (selectedExperience !== "" && job.maxExp < selectedExperience) ||
        (selectedExperience !== "" && job.minExp > selectedExperience)
      ) {
        return false;
      }

      if (
        selectedSalary !== "" &&
        (job.maxJdSalary > selectedSalary || job.minJdSalary < selectedSalary)
      ) {
        return false;
      }
      return true;
    });
    
    // filtered data upd ated in parent component
    setFilteredData(filteredData.length > 0 ? filteredData : data);
  };


  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  
  const handleRoleChange = (event, value) => {
    setSelectedRoles(event.join(""));
  };

  const handleModeChange = (event, value) => {
    setSelectedMode(event.join(""));
  };

  const handleExperienceChange = (event, inputs) => {
    console.log(typeof +event);
    setSelectedExperience(event);
  };

  const handleSalaryChange = (event) => {
    setSelectedSalary(event);
  };

  const handleLocationChange = (event) => {
    setSelectedLocations(event.join(""));
  };

  return (
    <>
      {/* hard coded tabs  */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem",
        }}
      >
        <Tabs value={value}>
          <Tab label="Applied jobs" disabled />
          <Tab label="Search jobs" />
          <Badge
            badgeContent={160}
            color="primary"
            style={{
              position: "relative",
              top: "0.7rem",
              right: "0",
            }}
          ></Badge>
          <Tab label="Suggested jobs" disabled />
        </Tabs>
      </Box>
      <p>Navbar</p>
      <Grid lg={10} item container spacing={2} style={{ margin: "2px" }}>
        <Suspense fallback={<Loading />}>
          <Grid item lg={2} xs={6} sm={6}>
            <MultiSelect
              options={location}
              name="Location"
              onChange={handleLocationChange}
            />
          </Grid>
          <Grid item lg={2} xs={6} sm={6}>
            <MultiSelect
              options={roles}
              name="Roles"
              onChange={handleRoleChange}
            />
          </Grid>

          <Grid item lg={2} xs={6} sm={6}>
            <MultiSelect
              options={demoData.mode}
              name="Mode"
              onChange={handleModeChange}
            />
          </Grid>

          <Grid item lg={2} xs={6} sm={6}>
            <MultiSelect
              options={demoData.experience}
              name="Min Experince"
              onChange={handleExperienceChange}
            />
          </Grid>

          <Grid item lg={2} xs={6} sm={6}>
            <MultiSelect
              options={demoData.minBasePay}
              name="Min base pay"
              onChange={handleSalaryChange}
            />
          </Grid>
        </Suspense>
      </Grid>
    </>
  );
};

Navbar.propTypes = {
  data: PropTypes.array.isRequired,
  setFilteredData: PropTypes.func,
};

export default Navbar;
