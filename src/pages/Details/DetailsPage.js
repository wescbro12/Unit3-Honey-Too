import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import * as projectsApi from "../../utilities/project-api";
import { useState, useEffect, useRef } from "react";

export default function Details() {
    const title = useRef(null)
    const entry = useRef(null)

    const [project, setProject] = useState([])
    const [error, setError] = useState('')

    const getOneProject = async () => {
        try {
            const response = await projectsApi.getOneProject({title:title.current.value, entry: entry.current.value})
            setProject(response)
        } catch (error) {
            setError("Bad Request")
        }
    }

    useEffect(() => {
        getOneProject(`${project._id}`)
    },[])
    return (
        <>
            <NavBar />
            <h1>Project Details Page</h1>
            <div>
                <p>Project Description:</p> <textarea className="displaytext" ref={entry} />
                <p>Tools needed for this project: <br /></p>
                <ul>
                    <li>Hammer</li>
                </ul>
                {/* <p>Notes:</p> <textarea className="displaytext" /> */}
                <br /><Link to={`/projects/${project._id}/edit`}>Edit your project</Link><br />
            </div>
        </>


    )
}