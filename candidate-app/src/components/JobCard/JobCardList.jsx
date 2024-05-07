import JobCard from './JobCard';
import { Grid } from '@mui/material';
import PropTypes from "prop-types";

const JobCardList = ({ data }) => {
    return (
      <Grid>
      {data.map((card, id) => (
        <Grid key={id}>
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