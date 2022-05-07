import React from "react";
import { useState } from "react";
import UserLogOut from "../UserLogOut/UserLogOut";
import BackButton from "../BackButton/BackButton";
import { getUser } from '../../utilities/users-service';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function Layout(props) {
    const [user, setUser] = useState(getUser())
    return (
        <>
            <html>
                <head>
                    <title>{props.title}</title>

                    {/* //bootstrap css CDN */}
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>

                    {/* //bootstrap js CDN */}
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
                        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
                        crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
                        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
                        crossorigin="anonymous"></script>

                </head>
                <body>
                    <h1>{props.title}</h1>
                    {/* <p>Happy Building:{user.name}</p> */}

                    <ul className=" navbar nav justify-content-end">
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
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/tools" role="button" aria-expanded="false">Tools</a>
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
                <footer> Created By: Wesley Brown <a href="https://github.com/wescbro12?tab=repositories"><BsGithub /></a>
                    <a href="#"><BsLinkedin/></a>
                </footer>
            </html>
        </>
    )
}