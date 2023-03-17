import React from "react";
import "./IdCard.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Image from "react-bootstrap/Image";

export default function IdCard({ content, gen }) {
  const [gender, setGender] = useState(true);
  //console.log('Lista',content, gen)
  useEffect(() => {
    if (gen === "male") {
      setGender(false);
    } else {
      setGender(true);
    }
  }, [gen]);

  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="ms"
      >
        <div className={`row ${gender ? "genderBg" : "genderBg2"}`}>
          <div className="col-md-1 col-sm-2">
            <Image
              src={content.picture.thumbnail}
              roundedCircle
              className="image"
            />
          </div>
          <div className="col-md-11 col-sm-10">
            <p>
              {content.name.first} {content.name.last} <br />
              <span className="email">
                <i class="material-icons">email</i>
                {content.email}
              </span>
              <br />
              <span className="dateBrth">
                <i class="material-icons">cake</i>
                {content.dob.date}
              </span>
            </p>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
