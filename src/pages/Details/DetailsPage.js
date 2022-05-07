import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import * as projectsApi from "../../utilities/project-api";
// import * as toolsApi from "../../utilities/tool-api"
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Details({ user, setUser }) {
    const title = useRef(null)
    const entry = useRef(null)
    const Navigate = useNavigate()
    let params = useParams()
    const [project, setProject] = useState({
        title: '',
        entry: ''

    })
    // const [tool, setTool] = useState({
    //     name: ''

    // })
    const [error, setError] = useState('')

    const getOneProject = async (id) => {
        try {
            const response = await projectsApi.getOneProject(id)
            setProject(response)
        } catch (error) {
            setError("Bad Request")
        }
    }   
    

    // const getOneTool = async (id) => {
    //     try {
    //         const response = await toolsApi.getOneTool(id)
    //         setTool(response)
    //     } catch (error) {
    //         setError("Bad Request")
    //     }
    // }
    useEffect(() => {
        getOneProject(params.id)
        // getOneTool(params.id)
    }, [])

    const handleDelete = async (id) => {
        try {
            const response = await projectsApi.deleteProject(id)
            setProject(response)
        } catch (error) {
            setError(error.message)
        } finally {
            Navigate('/projects')
        }
    }
    return (
        <Layout>

            <h1>{project.title}</h1>
            <div>
                <h4>Project Description:</h4><br/>
                <br/><div className="show">
                    <h5>{project.entry}</h5>
                </div>
                <h4>Tools needed for this project: <br /></h4>
                <ul>
                    {/* <li>{tool.name}</li> */}
                    <li>Hammer</li>
                </ul>
                {/* <p>Notes:</p> <textarea className="displaytext" /> */}
                <br /><Link to={`/projects/${project._id}/edit`}>Edit your project</Link><br />
                <form onSubmit={handleDelete}>
                    <input type="submit" value="Delete this project" />
                </form>
            </div>
        </Layout>


    )
}