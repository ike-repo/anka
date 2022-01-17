import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpeg'
import product3 from '../assets/product3.jpg'
import portatif from '../assets/portatif.png'
import dayanikli from '../assets/dayanikli.png'
import ergonomik from '../assets/ergonomik.png'

import
{
    Grid,
    Container,
    Typography,
    makeStyles, 
    CardMedia
} from "@material-ui/core";


const stylesFunc = makeStyles( ( theme ) => ( {
    wrapper: {
        marginBottom:'2rem',
        // marginLeft:'4rem',
       alignItems:'center',
       position:'relative',
        //  height: "calc(140vh - 19.0625rem)",
        // textAlign: 'start',
        overflow: 'hidden',
    // overflowY: 'unset',

    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    headerInfo: {
        // margin: '5rem 0rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: ''

    },
    info: {
        color: "#34455E",
        textAlign: 'center',
        marginTop:'2rem',
        justifyContent: 'center',
        fontSize:'1rem'
    },
    products: {
        marginTop:'2rem',
        marginBottom:'2rem',
        position:'relative',
        overflow:'hidden',
    },
    formLogo: {
        maxWidth: 150,
        //  marginBottom: 20
    },
    formHeader: {
        textAlign: 'center',
        marginBottom: '1rem',
        marginTop: '1rem',
        color: "#34455E"
    },
    
} ) );

function Products ()
{
    const formStyles = stylesFunc();
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

    return (
        <Container  className={ formStyles.wrapper } >
            <Grid  container spacing={ 3 } className={ formStyles.products } >
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                    <a href="/products/ur-1328"> 
                        <CardMedia
                            data-aos={(windowWidth > 1024 ? "fade-right" : "fade-up")}
                            component="img"
                            alt="Product UR-1328"
                            // height="300"
                            // className={ classes.media }
                            image={ product1 }
                        />
                    </a>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                <a href="/products/ur-1331"> 

                    <CardMedia
                        data-aos="fade-up"
                        component="img"
                        alt="Product UR-1331"
                        // height="300"
                        // className={ classes.media }
                        image={ product2 }
                    />
                    </a>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                <a href="/products/cy-1355"> 

                    <CardMedia
                        data-aos={(windowWidth > 1024 ? "fade-left" : "fade-up")}
                        component="img"
                        alt="Product CY-1355"
                        // height="300"
                        // className={ classes.media }
                        image={ product3 }
                    />
                    </a>
                </Grid>
            </Grid>
            <Grid container spacing={ 4 } className={ formStyles.logos }>
                <Grid item xs={ 1 } sm={2} md={2}></Grid>
                <Grid data-aos={(windowWidth > 1024 ? "fade-right" : "fade-up")} item xs={ 3 } sm={ 2 } md={ 2 }>
                    <CardMedia
                        // data-aos= "fade-up"
                        component="img"
                        alt="feature"
                        // height="300"
                        // className={ classes.media }
                        image={ portatif }
                    />
                    <Typography className={formStyles.info}>
                        Portatif
                    </Typography>
                </Grid>
                {windowWidth > 769 ? <Grid item md={1} ></Grid> : null}
                <Grid data-aos= "fade-up" item xs={ 3 } sm={ 2 } md={ 2 }>
                    <CardMedia
                        
                        component="img"
                        alt="feature"
                        // height="500"
                        // className={ classes.media }
                        image={ dayanikli }
                    />
                     <Typography className={formStyles.info}>
                        Dayanıklı
                    </Typography>
                </Grid>
                {windowWidth > 769 ? <Grid item md={1} ></Grid> : null}

                <Grid data-aos={(windowWidth > 1024 ? "fade-left" : "fade-up")} item xs={ 3 } sm={ 2 } md={ 2 }>
                    <CardMedia
                        // data-aos= "fade-up"
                        component="img"
                        alt="feature"
                        // height="300"
                        // className={ classes.media }
                        image={ ergonomik }
                    />
                     <Typography className={formStyles.info}>
                        Ergonomik
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Products;