import React, { useState, useEffect } from 'react';
import "./Footer.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import logo from '../../assets/anka_logo1.svg'
import { Typography } from '@material-ui/core';

function Copyright ()
{
    return (
        <React.Fragment>
            <Typography className="copyright">
                { "© " } Anka-Group Medikal { new Date().getFullYear() }
            </Typography>
        </React.Fragment>
    );
}

export default function Footer ()
{
    const [ windowWidth, setWindowWidth ] = useState( window.innerWidth );
    useEffect( () =>
    {
        const handleWindowResize = () =>
        {
            setWindowWidth( windowWidth );
        };

        window.addEventListener( 'resize', handleWindowResize );

        return () =>
        {
            window.removeEventListener( 'resize', handleWindowResize );
        }
    }, [ windowWidth ] );
    return (
        <Typography component="footer" className="footerRoot">
            <Container className="container">
                { windowWidth > 480 ?
                    <Grid container spacing={ 3 } className="footerObjects">
                        <Grid item xs={ 5 } sm={ 5 } md={ 4 } className="logoFooter">
                            <a href="/">
                                <img className="logo-footer" src={ logo } alt="logo"></img>
                            </a>
                        </Grid>
                        <Grid item xs={ 5 } sm={ 5 } md={ 6 }>
                            <Typography variant="h6" gutterBottom >
                                Bize Ulaşın
                        </Typography>
                            <ul className="list">
                                <li className="listItem">
                                    <div className="footer-info">
                                        <i className="fas fa-map-marked-alt fa-2x" style={ { marginRight: "1rem" } }></i>
                                        <Typography className="contactus">
                                            İstiklal Mahallesi 894. Sokak No:79A/15 Atakum/SAMSUN
                                    </Typography>
                                    </div>
                                </li>
                                <li className="listItem">
                                    <div className="footer-info">

                                        <i className="fas fa-phone-alt fa-2x" style={ { marginRight: "1rem" } } ></i>
                                        <Typography className="contactus">
                                            Tel: 0 533 136 18 79
                                </Typography>
                                    </div>
                                </li>
                                <li className="listItem">
                                    <div className="footer-info">
                                        <i className="fas fa-at fa-2x" style={ { marginRight: "1rem" } }></i>
                                        <Typography className="contactus">
                                            info@anka-medikal.com
                                </Typography>
                                    </div>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 12 } md={ 12 } >
                            <Copyright />
                            <br></br>
                        </Grid>
                    </Grid>
                :
                    <Grid item xs={ 12 } sm={ 12 } md={ 12 } >
                        <Copyright />
                        <br></br>
                    </Grid>}
            </Container>
        </Typography>
    );
}
