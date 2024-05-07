import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import PropTypes from "prop-types";
import { Chip, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const JobCard = ({ data }) => {
  console.log("data", data);
  const [isVisible, setIsVisible] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const handleMore = () => {
    setIsVisible(!isVisible);
  };

  const handleApplyClick = () => {
    setIsApplied(true);
  };

  return (
    <>
      {/* using extended style  */}
      <Card
        sx={{
          "&:hover": {
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
            cursor: "pointer",
          },
        }}
        variant="outlined"
      >
        <CardContent>
          <Chip
            label={data?.posted || `⏳Posted 2 hours ago`}
            size="small"
            variant="outlined"
            style={{
              padding: "0.5rem",
              marginBottom: "5rem",
            }}
          />
          <Box style={{ display: "flex", marginBottom: "0.5rem", gap: "1rem" }}>
            <img
              src={data?.logoUrl || `https://placehold.co/40x40`}
              alt="img placeholder"
              style={{ width: "40px", height: "40px" }}
            />
            <Box>
              <Typography variant="body1" fontWeight="bold">
                {data?.companyName || "Company Name"}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {data?.jobRole.slice(0, 1).toUpperCase() +
                  data?.jobRole.slice(1) || "Not Specified"}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            {data?.location.slice(0, 1).toUpperCase() +
              data?.location.slice(1) || "Not Specified"}
          </Typography>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {`Estimated Salary: ₹${data?.minJdSalary || 0} - ${
                data?.maxJdSalary || 0
              } LPA`}
            </Typography>
            <Typography style={{ marginLeft: "0.5rem" }}>✅</Typography>
          </Box>
          <Typography variant="body1" fontWeight="bold">
            About Company:
          </Typography>
          <Typography variant="body2" fontWeight="bold">
            About us
          </Typography>
          <Typography
            variant="body1"
            sx={
              !isVisible
                ? {
                    maskImage:
                      "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
                  }
                : null
            }
          >
            {isVisible
              ? data?.jobDetailsFromCompany
              : data?.jobDetailsFromCompany.slice(0, 250) + "..."}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "transparent",
              color: "blue",
              width: "100%",
              padding: "0.5rem",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <Button onClick={handleMore}>
              {isVisible ? "Show Less" : "Show More"}
            </Button>
          </Typography>
          <Box>
            <Typography variant="body1" color="text.secondary">
              Skills
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "0.5rem",
              }}
            >
              {data.skills ? (
                data?.skills.map((skill, id) => (
                  <Chip
                    key={id}
                    label={skill}
                    sx={{
                      color: "blue",
                      backgroundColor: "#D9FED3",
                    }}
                    size="small"
                  />
                ))
              ) : (
                <Chip
                  label="Not Specified"
                  size="small"
                  sx={{
                    color: "blue",
                    backgroundColor: "#D9FED3",
                  }}
                />
              )}
            </Stack>
          </Box>
          <Typography variant="body1" color="text.secondary">
            Minimum Experience
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {(data?.minExp || 0) + " years" || "0 years"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            href={"#"}
            size="small"
            disabled={isApplied}
            sx={{
              backgroundColor: "#7ff4d3",
              color: "black",
              width: "100%",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: "#55EFC4",
              },
            }}
            onClick={isApplied ? null : handleApplyClick}
          >
            <Typography variant="body2" fontWeight="bold">
              {isApplied ? "Already Applied" : " ⚡ Easy Apply"}
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

JobCard.propTypes = {
  data: PropTypes.object.isRequired,
};
export default JobCard;
