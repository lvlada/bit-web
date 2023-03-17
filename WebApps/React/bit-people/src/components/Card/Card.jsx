import React from "react";
import "./Card.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import IdCard from "../IdCard/IdCard";

export default function Card() {
  const url = "https://randomuser.me/api/?results=15";
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((respon) => {
        return respon.json();
      })
      .then((json) => {
        setUser(json.results);
        console.log('res', json)
      });
  }, []);

  return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10">
        {user.length > 0 && (
          <> 
          <ul>       
            {user.map((item, index) =>{
                return <IdCard key={index} content = {item} gen = {item.gender}/>
            })
          }
          </ul>
            </>
          )}
        </div>
      </div>
    </div>




        // <React.Fragment>
        //   {user.length > 0 && (
        //     <ul className="user-list">
        //       {user.map((item, index) => {
        //         return <IdCard index={index} content={item} />;
        //       })}
        //     </ul>
        //   )}
        // </React.Fragment>
  );
}
