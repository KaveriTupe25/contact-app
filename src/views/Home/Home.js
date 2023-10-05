import React, { useState } from 'react';
import './Home.css';

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
                const { name, mobile, email } = contact; //destructuring
                return ( <
                    div className = 'contact-card'
                    key = { index } >
                    <
                    p className = 'contact-name m-2' > 🦝{ name } < /p> <
                    p className = 'contact-mobile m-2' > 📞{ mobile } < /p> <
                    p className = 'contact-email m-2' > ✉{ email } < /p> < /
                    div >
                )
            })
        } <
        /
    div >

        <
        div className = "contacts-add-container" >
        <
        h2 className = 'container-names' > Add Contacts < /h2> < /
    div >

        <
        /div> < /
    div >
)
}