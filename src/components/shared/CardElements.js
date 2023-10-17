import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@mui/material";

// react router dom @6.3.0
import { Link } from "react-router-dom";

const CardElements = ({ item }) => {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,.17) 0 4px 12px", borderRadius: 4 }}>
      {item.author && (
        <CardHeader
          avatar={
            <Avatar
              src={item.author.avatar.url}
              alt=""
              sx={{ marginLeft: 2 }}
            />
          }
          title={
            <Typography component="span" color="secondary" fontWeight="bold">
              {item.author.name}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height="194"
        image={item.coverphotos.url}
        alt={item.slug}
      />
      <CardContent>
        <Typography component="p" color="primary" fontWeight="bold">
          {item.title}
        </Typography>
      </CardContent>
      <Divider variant="middle" color="secondary" sx={{ margin: "10px" }} />
      <CardActions>
        <Link to={`/blogs/${item.slug}`}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              width: "35%",
              margin: "auto",
              borderRadius: 3,
            }}
          >
            مطالعه
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardElements;
