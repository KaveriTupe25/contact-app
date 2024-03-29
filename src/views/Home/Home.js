import React, { useState } from 'react';
import './Home.css';
import ContactCard from '../../components/ContactCard/ContactCard';
import showToast from 'crunchy-toast';

export default function Home() {
    const [contacts, setContacts] = useState([{
            name: 'Kau',
            mobile: '6789566674',
            email: 'kau@gmail.com'
        },
        {
            name: 'Kavya',
            mobile: '8877567743',
            email: 'kavya@gmail.com'
        },
        {
            name: 'adika',
            mobile: '6789566674',
            email: 'adika@gmail.com'
        },
        {
            name: 'urmila',
            mobile: 6789566674,
            email: 'urmila@gmail.com'
        }
    ]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const addContact = () => {
        const obj = {
            name: name,
            email: email,
            mobile: mobile
        }
        setContacts([...contacts, obj]);

        showToast('Contact added successfully');
        setName('');
        setEmail('');
        setMobile('');
    };

    return ( <
            div >
            <
            h1 className = "app-title" > 📞Contact App < /h1> 

            <
            div className = "app-body" >

            <
            div className = "contacts-container" >
            <
            h2 className = 'container-names' > Show Contacts < /h2>  {
            contacts.map((contact, index) => {
                return <ContactCard key = { index }
                name = { contact.name }
                email = { contact.email }
                mobile = { contact.mobile }
                / >
            })
        } <
        /
    div >

        <
        div className = "contacts-add-container" >
        <
        h2 className = 'container-names' > Add Contacts < /h2>   <
    input type = 'text'
    placeholder = 'Name'
    className = 'user-input'
    onChange = {
        (e) => {
            setName(e.target.value);
        }
    }
    / >   <
    input type = 'email'
    placeholder = 'Email'
    className = 'user-input'
    onChange = {
        (e) => {
            setEmail(e.target.value);
        }
    }
    / >  <
    input type = 'text'
    placeholder = 'Mobile'
    maxLength = { 10 }
    className = 'user-input'
    onChange = {
        (e) => {
            setMobile(e.target.value);
        }
    }
    / >

    <
    button className = 'add-contact-btn'
    onClick = { addContact } > Add Contact < /button> < /
    div >

        <
        /div> < /
    div >
)
}