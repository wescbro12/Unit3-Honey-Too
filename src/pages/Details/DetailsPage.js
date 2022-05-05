import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import * as projectsApi from "../../utilities/project-api";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

export default function Details({user, setUser}) {
    const title = useRef(null)
    const entry = useRef(null)
    let params = useParams()
    const [project, setProject] = useState({
        title: '',
        entry:''

    })
    const [error, setError] = useState('')

    const getOneProject = async (id) => {
        try {
            const response = await projectsApi.getOneProject(id)
            setProject(response)
        } catch (error) {
            setError("Bad Request")
        }
    }

    useEffect(() => {
        getOneProject(params.id)
    },[])
    return (
        <>
            <NavBar />
            <h1>{project.title}</h1>
            <div>
                <p>Project Description:</p>
                <div>
                    {project.entry}
                </div>
                <p>Tools needed for this project: <br /></p>
                <ul>
                    <li>Hammer</li>
                </ul>
                {/* <p>Notes:</p> <textarea className="displaytext" /> */}
                <br /><Link to={`/projects/${project._id}/edit`}>Edit your project</Link><br />
                //add delete form here
            </div>
        </>


    )
}