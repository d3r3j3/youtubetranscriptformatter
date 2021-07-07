import React from 'react';
import {NavBar, ContactBar,LinkBar} from '../layouts.js';


function Contact() {
    return(
        <div class = "w-screen grid flex bg-gray">
            <NavBar/>
            <LinkBar/>
            <ContactBar/>
             
                     
        </div>
    );
}

export default Contact;