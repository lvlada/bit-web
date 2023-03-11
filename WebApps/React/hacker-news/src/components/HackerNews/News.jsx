import React from "react";
import './News.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faClock } from '@fortawesome/free-solid-svg-icons'



const News = (props) => {

    const info = props.content;
    const id = props.id;
    const url = `https://hacker-news.firebaseio.com/v0/item/${info}.json?print=pretty`
    const [user, setUser] = useState({});
    
    useEffect(()=>{
        fetch(url)
        .then(respons =>{
          return respons.json();
        })
        .then(json => {
          json.length = 10;
          setUser(json);
          console.log('new',user);
        });
      },[props])
      
      let time = new Date (user.time);
      let present = new Date();
      let present2 = present.getHours();
      let time2 = present2 - time.getHours() ;
     
      //URL ???????? CRASH!!!

      //SOME TEST
      let newLink = '';
      const sampleString = user.url;
        if (typeof(sampleString) === 'string') {
            newLink = sampleString.split('/');
        } else {
            console.log('neeeeeee');
        }

    console.log(newLink[2]);


    return(
        <>
            <tr>
                <td id="index">{id+1}.</td>
                <td>
                    <p id="title"><a rel="stylesheet" href="{user.url}">{user.title} ({newLink[2]})</a></p>
                    <p><span id="score"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>&nbsp;{user.score} points&nbsp;&nbsp;&nbsp;</span>

                    <span><FontAwesomeIcon icon={faUser} id="awesome"></FontAwesomeIcon>&nbsp;{user.by}&nbsp;&nbsp;&nbsp;</span>

                    <span><FontAwesomeIcon icon={faClock} id="awesome"></FontAwesomeIcon>&nbsp;{time2} hours ago, trenutno:{present2}h&nbsp;&nbsp;&nbsp;</span>

                    <span id="comments">{user.descendants} comments&nbsp;&nbsp;&nbsp;</span></p>
                </td>
            </tr>
        </>

    );
}
export default News;
