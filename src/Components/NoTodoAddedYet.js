import { Box, Paper, Typography } from "@mui/material";

const NoTodoAddedYet = () => {
  return (
    // <Paper justifyContent="center">
    //   <Typography variant="h5"></Typography>
    // </Paper>
    <Paper>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h5"> No todo added yet!</Typography>
      </Box>
    </Paper>
  );
};

export default NoTodoAddedYet;
