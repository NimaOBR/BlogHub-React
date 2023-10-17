import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS_COMMENTS } from "../../Graphql/queries";
import { Avatar, Grid, Typography, Box } from "@mui/material";
import Loader from "./../shared/Loader";

const Comments = ({ slug }) => {
  const { loading, data, errors } = useQuery(GET_POSTS_COMMENTS, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (errors) return <h2>404 Somthing error ... try Agine</h2>;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,.1) 0 4px 12px",
        borderRadius: 4,
        py: 1,
        my: 5,
        display: "block",
        // width: "100%",
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          component="p"
          variant="h6"
          fontWeight="bold"
          px={2}
          color="secondary"
        >
          کامنت ها
        </Typography>

        {data?.comments.map((item) => (
          <Grid
            item
            sx={12}
            key={item.id}
            m={2}
            p={2}
            border="1px solid silver"
            borderRadius={2}
          >
            <Box component="div" display="flex" alignItems="center" mb={2}>
              <Avatar>{item.name[0]}</Avatar>
              <Typography
                component="span"
                variant="p"
                mr={2}
                fontWeight="bold"
                color="secondary"
              >
                {item.name}
              </Typography>
            </Box>
            <Typography component="span" variant="p" fontWeight="bold">
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Comments;
