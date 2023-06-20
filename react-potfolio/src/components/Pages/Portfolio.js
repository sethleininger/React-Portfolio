import React from "react";
import Project from './Project';

const projects = [
    {
        // example of how to set of prop values
    // id: 0,
    // title: "PocketTraders",
    // languages: "react, jsx, css, js",
    // packages: "apollo-server-express, bcrypt, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, react-confirm-alert, react-popup-alert, uuid, concurrently",
    // image: "/img/pocket-traders.png",
    // description: "Allows you to trade pokemon and create a team. I did the design and front end!",
    // repo: "https://github.com/dbottoni/PokeTrader",
    // live: "https://pocket-traders.herokuapp.com/",
    },
    {

    },
    {

    },

];

function Portfolio() {
    return (
        <div>
            <p className="content is-medium">Portfolio</p>
            <hr/>

            <Project projects={projects} />
        </div>
    )
}
