import React, { useState, useEffect } from "react";
import Aos from 'aos';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CardMedia } from '@material-ui/core'
import pic1 from '../assets/ur1331a.jpeg'
import pic2 from '../assets/ur1331b.jpeg'

const useStyles = makeStyles( ( theme ) => ( {
    
    media: {
        boxShadow: "1px 1px 7px 1px grey",
        // marginLeft:'3.5rem',
        marginTop:'2rem'
    },
    singleProduct: {
        position:'relative',
        overflow:'hidden',
        marginTop: '3em',
        marginBottom:'2rem'
        // color: '#15678D',
    },
    paper: {
        padding: theme.spacing( 10 ),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        // height: '16rem',
        alignItems:'center',
        justifyContent:'space-between'
    },
    
    details: {
        color: '#15678D',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize:'1.2rem',
        textDecoration: 'none',
    },

    detailsSmall:{
        color: '#34455E',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize:'0.8rem',
        textDecoration: 'none',
    },

} ) );

export default function Ur1331 ()
{
    const [ windowWidth, setWindowWidth ] = useState( window.innerWidth );
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

    useEffect(() => {
        Aos.init({ duration: 3000});
    }, []);

    return (
        <div className={ classes.singleProduct }>
            <Grid container spacing={ 3 } >
                    {/* <Grid item xs={ 1 } sm={ 1 } md={ 1 } ></Grid>
                    <Grid item xs={ 10 } sm={ 12 } md={ 10 }>
                        <CardMedia
                            data-aos="fade-up"
                            component="img"
                            alt="UR-1328"
                            // height="300"
                            className= { classes.media }
                            image={ pic1 }
                        />
                    </Grid>
                    <Grid item xs={ 1 } sm={ 1 } md={ 1 } ></Grid> */}
                    <Grid item xs={ 1 } sm={ 1 } md={ 1 } ></Grid>
                    <Grid item xs={ 10 } sm={ 10 } md={ 10 }>
                        <CardMedia
                            data-aos={(windowWidth > 1024 ? "fade-right" : "fade-up")}
                            component="img"
                            alt="UR-1328"
                            // height="300"
                            className= { classes.media }
                            image={ pic2 }
                        />
                    </Grid>
            </Grid>
        </div>
        )
    }