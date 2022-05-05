import React from "react";
import axios from 'axios';
import config from '../config.json'
import {Button, Card, Container, Typography} from "@mui/material";

export default function ContactList({ contacts, setContacts }){
    function editContact(contactId, contactIdx){
        // todo: use a MUI Dialog to edit contact information,
        //  send axios request to backend
        //  on request success, edit that contact in the array
    }

    function deleteContact(contactId, contactIdx){
        // todo: delete a contact with the associated contactId,
        //  send axios delete request
        //  on request success, simply delete it from array
    }

    return (
        <Container>
            {
                contacts.map((contact, contactIdx) => {  // map through all the contacts
                    return (
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: 3
                            }}
                            key={contactIdx}
                        >
                            <Typography variant="h5">
                                Contact Name: {contact.name}
                            </Typography>
                            <Typography variant="body">
                                Phone Number: {contact.phone}
                            </Typography>
                            <Container sx={{ marginTop: 2 }}>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    onClick={() => editContact(contact.id, contactIdx)}  // todo
                                >
                                    Edit Contact
                                </Button>
                                <Button
                                    variant='contained'
                                    color='error'
                                    onClick={() => deleteContact(contact.id, contactIdx)}  // todo
                                >
                                    Delete Contact
                                </Button>
                            </Container>
                        </Card>
                    )
                })
            }
        </Container>
    )
}
