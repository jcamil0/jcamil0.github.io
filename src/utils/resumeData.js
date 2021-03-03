import React from "react";

import { Facebook, GitHub, Instagram, WebAsset } from "@material-ui/icons";

export default {
  profile: {
    firstname: "juan camilo",
    lastname: "llanos",
    title: "programador junior",
    photo: "",
    city: "cali - colombia",
    phone: "+57 3123364645",
    mail: "jcamilo.llanos@hotmail.com",
    summary: "sadaddsadasa",
  },
  social: [
    {
      name: "facebook",
      link: "https://facebook.com/",
      icon: <Facebook />,
    },

    {
      name: "instagram",
      link: "https://www.instagram.com/",
      icon: <GitHub />,
    },
    {
      name: "github",
      link: "https://github.com/jcamil0",
      icon: <Instagram />,
    },
  ],
  experiences: [
    {
      company: "asdasdas",
      picture: "",
      location: "asdasdasdasd",
      title: "hola ",
      period: "2020 2020",
      description: ["", "", "."],
    },
    {
      company: "intyel",
      picture: "",
      location: "google ",
      title: "hola ",
      period: "200 202020",
      description: ["", "", "."],
    },
  ],
  educations: [
    {
      title: "luis carlos galan",
      city: "cali",
      degree: "bachillerato",
      period: "2016",
      university: "",
      picture: "",
    },
  ],
  skills: [
    {
      name: "front-end",
      description: ["html", "css", "angular", "vue"],
    },
    {
      name: "front-end",
      description: ["html", "css", "angular", "vue"],
    },
    {
      name: "front-end",
      description: ["html", "css", "angular", "vue"],
    },
  ],
  services: [
    {
      title: "desarrolaldor web",
      description: "desarrollo paginas web en react y angular",
      icon: <WebAsset />,
    },
    {
      title: "desarrolaldor web",
      description: "desarrollo paginas web en react y angular",
      icon: <WebAsset />,
    },
    {
      title: "desarrolaldor web",
      description: "desarrollo paginas web en react y angular",
      icon: <WebAsset />,
    },
  ],
  portfolio: [
    {
      tag: "react native ",
      img: "https://wallpapercave.com/wp/wp3284841.gif",
      title: "hola",
      caption:"hola caption ",
      description: "app reacasdasdadasdasdasdasdasdasdasdasd ",
      links: [{ link: "google.com", icon: <Facebook /> }],
    },
    {
      tag: "react js  ",
      img: "https://wallpapercave.com/wp/wp3284841.gif",
      title: "hola",
      caption:"hola caption ",
      description: "app react asdasdasdasdasdasdasdasdasdasdasda ",
      links: [{ link: "google.com", icon: <Facebook /> }],
    },
  ],
};
