import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
// import ToolForm from "../../components/NewTool/NewTool";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import * as toolsApi from "../../utilities/tool-api"


export default function Tools(props) {
    const [tools, setTools] = useState([])
    const [error, setError] = useState('')
    
    const getAllTools = async () => {
        try {
            const response = await toolsApi.getAllTools()
            setTools(response)
        } catch (error) {
            setError("Bad Request")
        }
    }
    useEffect(() => {
        getAllTools()
    }, [])

    return (
        <>
            <NavBar />
            <Link to="/tools/new"><h2>Create a new tool</h2></Link>
            <ul>
                {tools && tools.map((tool) => {
                    <li key ={`${tool._id}`}>
                        <a href={`/tools/${tool._id}`}>{ tool.name}</a>
                    </li>
                })}
            </ul>
            <Link to="/projects"><h3>Go to the Project Directory</h3></Link>
        </>
    )
}