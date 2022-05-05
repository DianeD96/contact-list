import './App.css';
import React from 'react';
import axios from "axios";
import config from "./config.json"
import {Container, Typography} from "@mui/material";
import ContactList from "./components/ContactList.jsx"

function App() {
  const [contacts, setContacts] = React.useState([]);
  const [listLoading, setListLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchContacts(){
      setListLoading(true);
      try{
        const backendURL = `http://localhost:${config.BACKEND_PORT}/contacts`;
        const response = await axios.get(backendURL);
        const pulledContacts = response.data.contacts;
        setContacts(pulledContacts);
      } catch (error){
        console.error(error);
      } finally {
        setListLoading(false);
      }
    }
    fetchContacts();
  }, []);  // empty deps array: only perform this effect on the first load of the page

  return (
    <>
      {listLoading && (  // list is loading, render this message
          <Container>
            <Typography variant="h4">Please wait, loading your contacts...</Typography>
          </Container>
      )}
      {listLoading || (  // not rendering the contact list to page until server has been pulled
          <ContactList contacts={contacts} setContacts={setContacts} />
      )}
    </>
  );
}

export default App;
