import React from "react";

import { Facebook, GitHub, WebAsset, LinkedIn } from "@mui/icons-material";

export default {
  profile: {
    firstname: "Juan camilo",
    lastname: "Llanos",
    title: "Programador junior",
    photo: "",
    city: "cali - colombia",
    phone: "+57 3123364645",
    mail: "jcamilo.llanos@hotmail.com",
    summary:
      "Desarrollador web junior con 2 años de experiencia en el desarrollo de aplicaciones de interfaz de usuario y aplicaciones web profesionales usando HTML5, CSS, CSS3, JavaScript (Es5 y ES6), jQuery y Bootstrap Diseñado y mantenido sitios web usando HTML5, CSS3, jQuery, Bootstrap, y JavaScript Problemas identificados y corregidos descubiertos durante las pruebas o los comentarios de los clientes bajo la guía de un desarrollador senior.",
  },
  social: [
    {
      name: "facebook",
      link: "https://facebook.com",
      icon: <Facebook />,
    },

    {
      name: "instagram",
      link: "https://www.linkedin.com",
      icon: <LinkedIn />,
    },
    {
      name: "github",
      link: "https://github.com/jcamil0",
      icon: <GitHub />,
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
      caption: "hola caption ",
      description: "app reacasdasdadasdasdasdasdasdasdasdasd ",
      links: [{ link: "google.com", icon: <Facebook /> }],
    },
    {
      tag: "react js  ",
      img: "https://wallpapercave.com/wp/wp3284841.gif",
      title: "hola",
      caption: "hola caption ",
      description: "app react asdasdasdasdasdasdasdasdasdasdasda ",
      links: [{ link: "google.com", icon: <Facebook /> }],
    },
  ],
};
