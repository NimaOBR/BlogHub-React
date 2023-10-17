import React from "react";

// @apollo/client
import { useQuery } from "@apollo/client";

// Graphql - pholder
import { GET_POST } from "./../../Graphql/queries";

// shared - pholder
import Loader from "./../shared/Loader";

// mui - mui-icons
import { Avatar, Container, Grid, Typography, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// sanitize-html
import sanitixeHtml from "sanitize-html";

// comments - form
import CommentsForm from "./../comments/CommentsForm";
import Comments from "../comments/Comments";

const BlogPage = () => {
  const { slug } = useParams();
  const navagate = useNavigate();

  const { loading, data, errors } = useQuery(GET_POST, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (errors) return <h2>404 Somthing error ... try Agine</h2>;
  window.scrollTo(0, 0);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography component="h2" variant="h4" color="secondary">
            {data.post.title}
          </Typography>
          <ArrowBackIcon
            onClick={() => navagate(-1)}
            style={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverphotos.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item sx={12} mt={6} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5">
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="span" color="GrayText">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={12}>
          <div
            style={{ fontWeight: "bold" }}
            dangerouslySetInnerHTML={{
              __html: sanitixeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} mt={4}>
          <CommentsForm slug={slug} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} mt={4}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
