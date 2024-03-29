import { Link } from "react-router-dom"
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import UserLogOut from "../../components/UserLogOut/UserLogOut";
import * as projectsApi from "../../utilities/project-api"



export default function Projects({user}) {
   
    //declaring Variables and State
    // const id = useParams()
    const [projects, setProjects] = useState([])
    const [error, setError] = useState('')
    const [refresh, setRefresh] = useState(false)

    //Functions here
    const getAllProjects = async () => {
        try {
            const response = await projectsApi.getAllProjects()
            setProjects(response)
        } catch (error) {
            setError("Bad Request")
        }
    }

    useEffect(() => {
        getAllProjects()
    }, [refresh])
    return (

        <Layout title="Project Directory">

            <Link to="/projects/new"><h2>Create a new project</h2></Link>
            <ul className="list-unstyled list inline">
                {projects && projects.map((project) => {
                    return (
                        project.user === user.name ?
                        <li className="list-inline-item">
                            <div className="col mb-4">
                                <div className="card" style={{ width: 15 + "em" }}>
                                    <img src="https://i.imgur.com/XPZajeb.png" alt="honey-do logo" className="card-img-top" style={{ height: 10 + "em" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">{project.entry}</p>
                                        <Link to={`/projects/${project._id}`} className="btn btn-primary">Details</Link>
                                    </div>
                                </div>
                            </div>
                            </li>
                            : null
                    )
                })}
            </ul>



        </Layout>
    )
}