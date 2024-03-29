import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { updateProject } from "../../utilities/project-api";
import { Link } from "react-router-dom";
import * as projectsApi from "../../utilities/project-api";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";

export default function Update(props) {
    const Navigate = useNavigate()
    const title = useRef(null)
    const entry = useRef(null)
    let params = useParams()

    const [project, setProject] = useState({
        title: '',
        entry: '',
    })
    const [error, setError] = useState('')

    const updateProject = async (id) => {
        try {
            const response = await projectsApi.getOneProject(id)
            setProject(response)
        } catch (error) {
            setError("Bad Request")
        }
    }

    useEffect(() => {
        updateProject(params.id)
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await projectsApi.updateProject({ title: title.current.value, entry: entry.current.value })
        } catch (error) {
            console.error(error)
        } finally {
            Navigate()
        }

    }



    return (
        <Layout title="Edit your project">



            <div className="show">
                <form onSubmit={handleSubmit}>
                    <h5>Project Name:</h5><br /><input name="title" type=" text" defaultValue={project.title} ref={title} /><br />
                    <h5>Project Description:</h5><br /><textarea name="entry" type="text" defaultValue={project.entry} ref={entry} /><br />

                    <br /> <Link to={`/tools/${project._id}/new`}><h4>Add tools to your project</h4></Link>

                </form>
            </div>

        </Layout>
    )
}