import React from "react";
import Color from "color";
import GoogleFont from "react-google-font-loader";
import { makeStyles } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { AutoComplete } from "material-ui";
import Link from "@material-ui/core/Link";
import image from "../images2/israelVarelaCommercialHS.jpg";
import image2 from "../images2/israelVarelaHS2.jpg";
import image3 from "../images2/israelVarelaHS3.jpg";
import image4 from "../images2/israelVarelaHS4.jpg";
import "../components/Header/style.css";
import "./style.css";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    paddingTop: 110,
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(.9)",
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    maxWidth: 256,
    padding: 50,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 3px 6px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "2rem",
    color: "#fff",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
  subtitle2: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle, subtitle2 }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
          <Typography className={classes.subtitle2}>{subtitle2}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const ContactMe = React.memo(function ContactMe() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: "#000000" });
  //   const styles2 = useStyles({ color: "#4d137f" });
  //   const styles3 = useStyles({ color: "#ff9900" });
  //   const styles4 = useStyles({ color: "#34241e" });
  return (
    <div className="contactCard">
    <Grid classes={gridStyles} container spacing={10} >
      <Link target="_blank" href="https://github.com/israelvarela">
        <Grid item xs={6} sm={3}>
          <CustomCard
            classes={styles}
            title={"Connect on GitHub"}
            subtitle={
              "Visit me on GitHub page to see my code work, and connect with me."
            }
            image={image}
          />
        </Grid>
      </Link>

      <Link target="_blank" href="https://www.linkedin.com/in/israelrvarela/">
        <Grid item xs={6} sm={3}>
          <CustomCard
            classes={styles}
            title={"Connect on LinkedIn"}
            subtitle={
              "Visit me on LinkedIn to connect and see my work history."
            }
            image={image2}
          />
        </Grid>
      </Link>

      <Link
        target="_blank"
        href="https://israelvarela.github.io/portfolio/assets/images/Israel_Varela_Resume_2020C.pdf"
      >
        <Grid item xs={6} sm={3}>
          <CustomCard
            classes={styles}
            title={"View Resume"}
            subtitle={
              "View and download my resume to see my professional background and skill sets I've acquired throughout the course of my career."
            }
            image={image3}
          />
        </Grid>
      </Link>

      <Link target="_blank" href="mailto:israel.varela78@yahoo.com">
        <Grid item xs={6} sm={3}>
          <CustomCard
            classes={styles}
            title={"Feel Free To Reach Out!"}
            subtitle={"p: 214-677-7668"}
            subtitle2={"e: israel.varela78@yahoo.com"}
            image={image4}
          />
        </Grid>
      </Link>
    </Grid>
    </div>
  );
});
export default ContactMe;
