import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperImage.css';
import
{
    Grid,
    Container,
    Typography,
    Link,
    makeStyles,
    CardMedia
} from "@material-ui/core";

SwiperCore.use( [ Navigation, Pagination, Autoplay ] )

const useStyles = makeStyles( ( theme ) => ( {
    topImageContainer: {
        zIndex: 1,
        // overflow:'hidden'
    },
    media: {
        marginTop: '5rem',
        marginBottom: '5rem'
    },
    root: {
        // marginBottom:"3rem"
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

const SwiperImage = () =>
{
    const slides = [];
    const [ windowWidth, setWindowWidth ] = useState( window.innerWidth );
    // const imageUrl = windowWidth >= 650 ? DesktopTopImage : DesktopTopImage;
    const classes = useStyles();
    useEffect( () =>
    {
        const handleWindowResize = () =>
        {
            setWindowWidth( window.innerWidth );
        };

        window.addEventListener( 'resize', handleWindowResize );

        return () =>
        {
            window.removeEventListener( 'resize', handleWindowResize );
        }
    }, [] );

    useEffect( () =>
    {
        Aos.init( { duration: 3000 } );
    }, [] );
    let i = 0;
    for ( i = 0; i < 8; i += 1 ) {
        slides.push(
            <SwiperSlide key={ `slide-${ i }` } tag="li" >
                <a href="products"><img src={ `images/product${ i + 1 }.jpeg` }/></a>
            </SwiperSlide>
        )
    }
    return (
        <React.Fragment >
            <Grid container spacing={ 3 } className={ classes.topImageContainer } >
                <Grid item xs={ 2 } sm={ 12 } md={ 3 } ></Grid>
                <Grid item xs={ 8 } sm={ 12 } md={ 6 } >
                    <Swiper
                        // data-aos='fade-up'
                        className={ classes.media }
                        loop={ true }
                        autoplay={ {
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        } }
                        tag="section"
                        wrapperTag="ul"
                        // pagination
                        spaceBetween={ 5 }
                        slidesPerView={ 1 }>
                        { slides }
                    </Swiper>
                </Grid>
                <Grid item xs={ 12 } sm={ 12 } md={ 3 } ></Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SwiperImage;
