import demoData from "../../data/demoData.json";
import Loading from "../Loader/Loader";
import demoFilteredData from "../../data/demoFilterdData";

import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { Suspense, lazy } from "react";

const MultiSelect = lazy(() => import("../Filter/MultiSelect"));

const Navbar = ({ data, setFilteredData }) => {

    const filteredData = demoFilteredData;
    setFilteredData(filteredData.length > 0 ? filteredData : data);
    return(
        <>
        <p>Navbar</p>
        <Grid >
        <Suspense fallback={<Loading />}/>
        <Grid >
            <MultiSelect
              options={demoData.mode}
              name="Mode"
            />
          </Grid>
        </Grid>
        </>
    );

}

Navbar.propTypes = {
    data: PropTypes.array.isRequired,
    setFilteredData: PropTypes.func
  };

export default Navbar;