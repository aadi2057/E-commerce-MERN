import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "2%",
    textAlign: "left",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "15px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
      marginBottom: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
}));
