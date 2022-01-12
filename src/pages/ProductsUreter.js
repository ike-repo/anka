import React, {useState, useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

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
        marginBottom:'5rem',
        marginLeft:'7rem',
       alignItems:'center',
        //  height: "calc(140vh - 19.0625rem)",
        // textAlign: 'start',
        overflow: 'hidden',
    // overflowY: 'visible',

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
        fontSize:'2rem'
    },
    products: {
        marginTop:'5rem',
        marginBottom:'10rem',

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

function ProductsUreter ()
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
                <Grid item xs={ 12 } sm={ 6 } md={ 6 }>
                    <a href="/products/ur-1328"> 
                        <CardMedia
                            data-aos={(windowWidth > 1024 ? "fade-right" : "fade-up")}
                            component="img"
                            alt="Ureter"
                            // height="300"
                            // className={ classes.media }
                            image={ "/images/product1.jpeg" }
                        />
                    </a>
                </Grid>
                <Grid item xs={ 12 } sm={ 6 } md={ 6 }>
                <a href="/products/ur-1331"> 

                    <CardMedia
                        data-aos="fade-up"
                        component="img"
                        alt="Ureter"
                        // height="300"
                        // className={ classes.media }
                        image={ "/images/product2.jpeg" }
                    />
                    </a>
                </Grid>
            </Grid>
            <Grid container spacing={ 4 } >
                <Grid item xs={ 2 } sm={2} md={2}></Grid>
                <Grid data-aos={(windowWidth > 1024 ? "fade-right" : "fade-up")} item xs={ 2 } sm={ 2 } md={ 2 }>
                    <CardMedia
                        // data-aos= "fade-up"
                        component="img"
                        alt="feature"
                        // height="300"
                        // className={ classes.media }
                        image={ "/images/portatif.png" }
                    />
                    <Typography className={formStyles.info}>
                        Portatif
                    </Typography>
                </Grid>
                {windowWidth > 769 ? <Grid item md={1} ></Grid> : null}
                <Grid data-aos= "fade-up" item xs={ 2 } sm={ 2 } md={ 2 }>
                    <CardMedia
                        
                        component="img"
                        alt="feature"
                        // height="500"
                        // className={ classes.media }
                        image={ "/images/dayanikli.png" }
                    />
                     <Typography className={formStyles.info}>
                        Dayanıklı
                    </Typography>
                </Grid>
                {windowWidth > 769 ? <Grid item md={1} ></Grid> : null}

                <Grid data-aos={(windowWidth > 1024 ? "fade-left" : "fade-up")} item xs={ 2 } sm={ 2 } md={ 2 }>
                    <CardMedia
                        // data-aos= "fade-up"
                        component="img"
                        alt="feature"
                        // height="300"
                        // className={ classes.media }
                        image={ "/images/ergonomik.png" }
                    />
                     <Typography className={formStyles.info}>
                        Ergonomik
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}
export default ProductsUreter;