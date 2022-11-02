import { Grid } from "@mui/material";
import Weather from "./wethear/weather";
import Cards from "./Cards";
import Tables from "./Tables";
import Orders from "./Orders";
import { Box } from "@mui/system";

const Feed = () => {
  return (
    <>
      <Box sx={{display : "flex" , flexDirection : "column", width : "100%"}}>
        <Cards />
        <Tables />
        <Weather /> 
        <Orders />
      </Box>
    </>
  );
};

export default Feed;
