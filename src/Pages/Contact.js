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

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
      paddingTop: 60,
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    
    minWidth: 256,
    maxWidth:256,
    
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
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
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
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const ContactMe = React.memo(function ContactMe() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: "#00000" });
//   const styles2 = useStyles({ color: "#4d137f" });
//   const styles3 = useStyles({ color: "#ff9900" });
//   const styles4 = useStyles({ color: "#34241e" });
  return (
    <>
      <Grid classes={gridStyles} container spacing={10} wrap={"nowrap"}>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"Connect on GitHub"}
            subtitle={
              "Visit me on GitHub page to see my code work, and connect with me."
            }
            image={
              "./israelVarelaCommercialHS.jpg"
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"LinkedIn"}
            subtitle={
              "Visit me on LinkedIn to connect and see my work history."
            }
            image={
              "/Users/israelvarela/Desktop/Code/COPY - smu-dal-fsf-pt-06-2020-u-c /20-State/02-Homework/react-portfolio/src/images2/israelVarelaCommercialHS.jpg"
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"Resume"}
            subtitle={"View and download resume."}
            image={
              "/Users/israelvarela/Desktop/Code/COPY - smu-dal-fsf-pt-06-2020-u-c /20-State/02-Homework/react-portfolio/src/images2/israelVarelaCommercialHS.jpg"
            }
          />
        </Grid>
      </Grid>
    </>
  );
});
export default ContactMe;
