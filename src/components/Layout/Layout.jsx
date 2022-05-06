import React from "react";
import { useState } from "react";
import UserLogOut from "../UserLogOut/UserLogOut";
import BackButton from "../BackButton/BackButton";

export default function Layout(props) {
    const [user, setUser] =useState()
    return (
        <>
            <html>
                <head>
                    <title>{props.title}</title>

                    {/* //bootstrap css CDN */}
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>

                    {/* //bootstrap js CDN */}
                    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="/css/app.css" />

                </head>
                <body>
                    <h1>{props.title}</h1>

                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/projects" role="button" aria-expanded="false">Projects</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="/projects/new">New Project</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="/projects">Project Directory</a>

                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/projects" role="button" aria-expanded="false">Tools</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="/tools/new">Add a Tool</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="/tools">Tools Directory</a>

                            </div>
                        </li>
                        <UserLogOut user={user} setUser={setUser} />
                    </ul>
                    <BackButton />


                    {props.children}


                </body>
                <footer> Created By: "So I've been thinking..."</footer>
            </html>
        </>
    )
}