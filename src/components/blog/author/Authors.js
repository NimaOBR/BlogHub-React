import React from "react";

import { useQuery } from "@apollo/client";
import { GET_USERS_INFO } from "../../../Graphql/queries";

// mui
import { Grid, Avatar, Typography, Divider } from "@mui/material";

// react-router-dom
import { Link } from "react-router-dom";

//shared - pholder
import Loader from "../../shared/Loader";

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_USERS_INFO);
  if (loading) return <Loader />;
  if (errors) return <h2>404 Somthing error ... try Agine</h2>;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,.17) 0 4px 12px",
        borderRadius: 4,
      }}
    >
      {data.authors.map((item, index) => (
        <React.Fragment key={item.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`authors/${item.slug}`}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Avatar src={item.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="span" fontWeight="bold" color="secondary">
                {item.name}
              </Typography>
            </Link>
          </Grid>
          {index !== data.authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Authors;
