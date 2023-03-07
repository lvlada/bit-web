import React from "react";
import { LoremIpsum } from 'react-lorem-ipsum';
import './style.scss'

export default function Post(){
    const blogTitle = ['Prvi', 'Drugi', 'Treci', 'Cetvrti'];
    return(
        <div className="container blog">
            {blogTitle.map((item, i) =>{
                return <p key={i}>
                    <h4>{item}</h4>
                    <LoremIpsum p={1}/>
                </p>
            })}
        </div>
    );
}