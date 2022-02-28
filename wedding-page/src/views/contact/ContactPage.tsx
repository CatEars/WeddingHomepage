import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import text from '../../text-content'

type ToastMasterProps = {
    name: string,
    contactDetails: string,
    description: string
}


const ToastMaster = (props: ToastMasterProps) => (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', px: 5}}>
        <Avatar 
            alt={props.name} 
            src="info/terra.jpg" 
            sx={{ width: 150, height: 150 }} />
        <Typography
            variant="h6"
            sx={{ mt: 5 }}
            textAlign="center"
        >{props.name}</Typography>
        <Typography
            variant="subtitle1"
            textAlign="center"
        >
            {props.description}
        </Typography>
        <Typography
            variant="subtitle1"
            textAlign="center"
        >
            Phone: {props.contactDetails}
        </Typography>
    </Box>
);

const ContactPage = () => (
    <Box
        sx={{ display: 'flex', bgcolor: 'primary.light' }}
        component='section'
    >
        <Container
            sx={{ display: 'flex', mt: 30, mb: 30 }}    
        >
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <ToastMaster 
                      name={text.contacts.contact1.name}
                      contactDetails={text.contacts.contact1.contact}
                      description={text.contacts.contact1.description}
                      />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ToastMaster 
                      name={text.contacts.contact2.name}
                      contactDetails={text.contacts.contact2.contact}
                      description={text.contacts.contact2.description}
                      />
                </Grid>
            </Grid>
        </Container>    
    </Box>
)

export default ContactPage