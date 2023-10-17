import React from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// @apollo/client
import { useQuery } from "@apollo/client";

// Graphql - component
import { GET_AUTHOR } from "../../../Graphql/queries";

// mui
import { Avatar, Container, Grid, Typography } from "@mui/material";

// sanitize-html
import sanitixeHtml from "sanitize-html";

// shared - pholder
import CardElements from "../../shared/CardElements";
import Loader from "../../shared/Loader";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR, {
    variables: {
      slug,
    },
  });
  if (loading) return <Loader />;
  if (errors) return <h2>404 Somthing error ... try Agine</h2>;
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography mt={2} component="h3" variant="h5">
            {data.author.name}
          </Typography>
          <Typography color="GrayText" mt={2} mb={5}>
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{ fontWeight: "bold" }}
            dangerouslySetInnerHTML={{
              __html: sanitixeHtml(data.author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item sx={12} mt={6}>
          <Typography component="h3" variant="h5">
            مقالات {data.author.name}
          </Typography>
        </Grid>
        <Grid container spacing={2} mt={2}>
          {data.author.posts.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CardElements item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
