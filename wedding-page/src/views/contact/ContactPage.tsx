import { Box, Container, Grid } from '@mui/material'
import React, { RefObject } from 'react'
import text from '../../text-content'
import media from '../../media-content'
import ToastMaster from './ToastMaster'

type ContactPageProps = {
    refProp: RefObject<HTMLElement>
}

const ContactPage = (props: ContactPageProps) => (
    <Box
        sx={{ display: 'flex', bgcolor: 'primary.light' }}
        component='section'
        ref={props.refProp}
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
                      imageUrl={media.contact.contact1.imageUrl}
                      />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ToastMaster 
                      name={text.contacts.contact2.name}
                      contactDetails={text.contacts.contact2.contact}
                      description={text.contacts.contact2.description}
                      imageUrl={media.contact.contact2.imageUrl}
                      />
                </Grid>
            </Grid>
        </Container>    
    </Box>
)

export default ContactPage