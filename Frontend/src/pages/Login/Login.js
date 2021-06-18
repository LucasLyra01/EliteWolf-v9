import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import logo_name from "../../assets/img/logos/logo_name.svg";

import stylescss from "./Login.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  
  paper: {
    margin: theme.spacing(10, 8, 10),
    color: "#FFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0),
    color: "#FFF",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: "50px",
    borderRadius: "5px",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="success" align="center">
      {"Copyright © "}
      <Link color="inherit">
        Investimentos
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={8} className={stylescss.image} />
      <Grid item xs={12} sm={12} md={4} className={stylescss.fundo}>
        <div className={classes.paper}>
          <img src={logo_name} alt={"Logo Elite Wolf"}/>
          <h1>Bem Vindo(a)</h1>
          <form className={classes.form} noValidate>
            <TextField className={stylescss.campos}
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="standard-basic"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField className={stylescss.campos}
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs className={stylescss.center}>
                <p>
                    Esqueceu sua senha?
                </p>
                <p>
                    Ainda não possui senha?{" "}
                    <Link className={stylescss.link}>Cadastre-se</Link>
                </p>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
