import React from "react";
import Faq from './SecondComp/Faq'
import Topics from './SecondComp/Topics'
export default function VirtualDomEx(){
    return(
        <div>
            <h1>Welcome to the React App</h1>
            <Topics/>
            <Faq/>
        </div>
    );
}