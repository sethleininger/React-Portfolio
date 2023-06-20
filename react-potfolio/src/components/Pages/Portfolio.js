import React from "react";
import Project from '../Project';

const projects = [
    {
        // example of how to set of prop values
    id: 0,
    title: "Cook's Companion",
    languages: "jsx, css, js",
    packages: "bcrypt, Express.js, MySQL, bootstrap",
    image: "/img/cooks-companion.png",
    description: "An app to create and save recipes. I did the design and front end, and handlebar!",
    repo: "https://github.com/andrewmuhn/cooks-companion",
    live: "",
    },
    { id: 1,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/img/weather-dashboard.png",
    description: "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/sethleininger/Weather-Forecast-App",
    live: "https://sethleininger.github.io/Weather-Forecast-App/",
  },
];

 export default function Portfolio() {
    return (
        <div>
            <h2 className="content is-medium">Portfolio</h2>
            <hr/>

            <Project projects={projects} />
        </div>
    )
}


