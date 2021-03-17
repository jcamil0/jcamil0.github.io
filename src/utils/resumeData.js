import React from "react";

import { Facebook, GitHub, WebAsset ,LinkedIn} from "@material-ui/icons";

export default {
  profile: {
    firstname: "Juan camilo",
    lastname: "Llanos",
    title: "Programador junior",
    photo: "",
    city: "cali - colombia",
    phone: "+57 3123364645",
    mail: "jcamilo.llanos@hotmail.com",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et erat lobortis, efficitur ipsum vitae, convallis lacus. Nullam aliquam condimentum ante sed faucibus. Sed dignissim tempus sapien, efficitur rhoncus libero ultrices vel. Vestibulum porttitor efficitur libero, ac egestas massa fringilla sit amet. Integer suscipit felis eget rutrum volutpat. Donec elementum massa vitae sodales viverra. Aliquam in velit vel orci commodo suscipit at quis turpis. Mauris ac placerat enim, in iaculis nunc. Mauris nisl orci, imperdiet ut mauris ac, gravida tempus velit. Quisque porttitor nibh ac eros rhoncus, vitae egestas felis tempor. Nulla suscipit laoreet egestas. Vivamus sit amet luctus dolor. Donec egestas dui id tortor tempor dapibus. ",
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
