import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import SwiperImage from '../components/swiperImage/SwiperImage';
import './HomePage.css'
import
{
    Grid,
    Container,
    Typography,
    makeStyles,
    CardMedia
} from "@material-ui/core";
import cystone from '../assets/cystone.jpeg';
import ureter from '../assets/ureter.jpeg';

const useStyles = makeStyles( ( theme ) => ( {
    root:{
        // overflowX:'hidden'
    },
    topImageContainer: {
        // zIndex: 1,
        // overflow:'hidden',
    },
    media: {
        marginTop: '1rem',
        marginBottom: '1rem',
        boxShadow: '1px 1px 7px 1px grey',
    },
    productCard: {
        marginBottom: "2rem"    
    },
    info: {
        color: "#34455E",
        textAlign: 'center',
        marginTop:'2rem',
    },
    header: {
        position: "absolute",
        display: "flex",
        top: "10%",
        left: "10%",
        maxWidth: "20%",
        textAlign: "start",
        color: "#fff",
        // backgroundColor: "white",
        textShadow: '0px 1px 3px black',
        // padding: "0rem 0rem",
        fontWeight: 200,
        boxShadow: "10px 0 0 white",
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: 60,
        '@media screen and (max-width: 1024px)': {
            fontSize: 40,
        },
        '@media screen and (max-width: 700px)': {
            fontSize: 20,
        },
    },
} ) );

const HomePage = () =>
{
    const [ windowWidth, setWindowWidth ] = useState( window.innerWidth );

    useEffect( () =>
    {
        const handleWindowResize = () =>
        {
            setWindowWidth( window.innerWidth );
        };
        window.addEventListener( 'resize', handleWindowResize );
    }, [] );
     useEffect(() => {
        Aos.init({ duration: 3000});
    }, []);
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <SwiperImage />
            <Container className={ classes.topImageContainer } >
                <Grid container spacing={ 6 }  >
                <Grid item xs={ 2 } sm={ 12 } md={ 2 } ></Grid>
                    <Grid data-aos={(windowWidth > 1024 ? "fade-right" : "fade-up")} item xs={ 8 } sm={ 8 } md={ 4 } className={ classes.productCard }>
                        <a href="/products/ureter">
                        <CardMedia
                            component="img"
                            alt="Focus News"
                            // height="300"
                            className={ classes.media }
                            image={ ureter }
                        />
                         <Typography className={classes.info}>
                            Flexible Video Ureterorenoscope
                        </Typography>
                        </a>
                    </Grid>
                    {windowWidth < 769 ? <Grid item xs={ 2 } sm={ 2 } ></Grid> : null}
                    {windowWidth < 769 ? <Grid item xs={ 2 } sm={ 2 } ></Grid> : null}
                        <Grid data-aos={(windowWidth > 1024 ? "fade-left" : "fade-up")} item xs={ 8 } sm={ 8 } md={ 4 }>
                    <a href="/products/cy-1355">
                            <CardMedia
                                component="img"
                                alt="Focus News"
                                // height="300"
                                className={ classes.media }
                                image={ cystone }
                            />
                            <Typography className={classes.info}>
                                Flexible Video Cystonephroscope
                            </Typography>
                    </a>
                        </Grid>
                </Grid>
            </Container>
           </div >
    );
}
export default HomePage;