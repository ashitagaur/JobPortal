import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Chip, Typography } from "@mui/material";
import Box from "@mui/material/Box";

import PropTypes from "prop-types";


const JobCard = ({data}) => {
    console.log("data", data);
  return (
    <>
      <h1>Job Card here ... </h1>
      {/* using extended style  */}
      <Card
        sx={{
          "&:hover": {
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
            cursor: "pointer",
          },
        }}
       >
        <Chip
          label={`⏳Posted 2 hours ago`}
          size="small"
          variant="outlined"
          style={{
            padding: "0.5rem",
            marginBottom: "5rem",
          }}
        />
        <Box>
            <Typography>
            {data?.companyName || "Company Name"}
            </Typography>

        </Box>
        <CardActions></CardActions>
        <CardContent></CardContent>
      </Card>
    </>
  );
};


JobCard.propTypes = {
    data: PropTypes.object.isRequired,
  };
export default JobCard;
