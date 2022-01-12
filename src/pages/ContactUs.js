import React from "react";
import
{
    Grid,
    Container,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const stylesFunc = makeStyles( ( theme ) => ( {
    wrapper: {
        marginTop: "3rem",
        //  height: "calc(140vh - 19.0625rem)",
        textAlign: 'start',
        marginBottom: "9rem",
        // overflow: 'hidden'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    headerInfo: {
        margin: '5rem 0rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: ''

    },
    info: {
        color: "#34455E",
        textAlign: 'center'
    },
    MuiSelectIconOutlined: {
        // right:'20% !important'
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'red',
        alignItems: 'center',
        color: 'white !important'
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
    submitButton: {
        marginBottom: '1em',
        background: '#14688D',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#14688D'
        }
    }
} ) );

const ContactUs = () =>
{

    const formStyles = stylesFunc();

    return (
        <Container className={ formStyles.wrapper } maxWidth="md">
            <Grid container spacing={ 6 } >
                <Grid item xs={ 12 } sm={ 12 } md={ 12 }>
                    <div className={ formStyles.headerInfo }>
                        <i className="fas fa-map-marked-alt fa-5x" style={ { color: "#14688D" } }></i>
                        <br></br>
                        <Typography className={ formStyles.info } variant="h5">
                        İstiklal Mahallesi 894. Sokak No:79A/15 Atakum/SAMSUN
                        </Typography>
                    </div>
                    <div className={ formStyles.headerInfo }>
                        <i className="fas fa-at fa-5x" style={ { color: "#14688D" } }></i>
                        <br></br>
                        <Typography className={ formStyles.info } variant="h5">
                        info@anka-medikal.com
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ContactUs;
