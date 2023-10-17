import React, { useState } from "react";
// mui
import { Button, Grid, TextField, Typography, Container } from "@mui/material";

// apollo/client
import { useMutation } from "@apollo/client";

//Graphql -pholder
import { SEND_COMMENT } from "./../../Graphql/mutation";

// react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const CommentsForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  const sendHandeler = () => {
    if (name && email && text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn("لطفا فیلد ها رو پر کنید !", { position: "top-center" });
    }
  };
  if (data && pressed) {
    toast.success("کامنت ارسال شد و منتظر تایید میباشد", {
      position: "top-center",
    });
    setPressed(false);
  }
  if (error) {
    toast.warn("خطایی رخ داد دوباره امتحان کنید!", {
      position: "top-center",
    });
  }
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,.1) 0 4px 12px",
        borderRadius: 4,
        py: 1,
        my: 5,
        display: "block",
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          component="p"
          variant="h6"
          fontWeight="bold"
          color="secondary"
        >
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item sx={12} m={2}>
        <TextField
          id=""
          label="نام کاربر"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item sx={12} m={2}>
        <TextField
          id=""
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item sx={12} m={2}>
        <TextField
          id=""
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item sx={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            درحال ارسال ...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandeler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentsForm;
