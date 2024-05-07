import JobCard from './JobCard';
import { Grid } from '@mui/material';
import PropTypes from "prop-types";

const JobCardList = ({ data }) => {
    return (
      <Grid container lg={12} padding={2} spacing={2}>
      {data.map((card, id) => (
        <Grid key={id} item lg={4} xs={12} sm={6}>
          <JobCard data={card} />
        </Grid>
      ))}
    </Grid>   
    );
  };

  JobCardList.propTypes = {
    data: PropTypes.array.isRequired,
  };
  

  export default JobCardList;