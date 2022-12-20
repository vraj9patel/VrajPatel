import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer<br />Full Stack Developer<br />Graphic Designer<br />Open Source Contributor<br />Programmer",
          "Photographer<br />Cricketer<br />Swimmer",
          "Venturous<br/>Ardent<br />Zealous",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
