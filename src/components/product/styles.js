import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    // objectFit: "contain",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardDescription: {
    display: "flex",
    justifyContent: "left",
    textAlign: "left",
    // textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    // wordBreak: "break-all",
    textOverflow: "ellipsis",
  },
}));
