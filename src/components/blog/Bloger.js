import React from "react";

// apollo / client
import { useQuery } from "@apollo/client";

//Graphql - components
import { GET_BLOG_INFO } from "../../Graphql/queries";

// mui
import { Grid } from "@mui/material";

// shared / components
import CardElements from "../shared/CardElements";
import Loader from "../shared/Loader";

const Bloger = () => {
  const { loading, data, errors } = useQuery(GET_BLOG_INFO);
  if (loading) return <Loader />;
  if (errors) return <h2>404 Somthing error ... try Agine</h2>;
  return (
    <Grid container spacing={2}>
      {data.posts.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={6}>
          <CardElements item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Bloger;
