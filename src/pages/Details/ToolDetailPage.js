import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import * as toolsApi from "../../utilities/tool-api";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ToolDetails({ user, setUser }) {
    const Navigate = useNavigate()
    let params = useParams()
    const [tool, setTool] = useState({
        name: ''

    })
    const [error, setError] = useState('')

    const getOneTool = async (id) => {
        try {
            const response = await toolsApi.getOneTool(id)
            setTool(response)
        } catch (error) {
            setError("Bad Request")
        }
    }
    useEffect(() => {
        getOneTool(params.id)
    }, [])

    return (
        <Layout>
           <br /> <h4>How would you like to use this tool?</h4><br />
            <br /><div className="show">
                <h5>{tool.name}</h5><br/>
                
            </div><br />
            <Link to="/projects"><button>Add to Project</button></Link><br />
            
            

            {/* Add Delete function */}

            <br /><Link to="/tools"><h3>Return to Tools Directory</h3></Link>

        </Layout>
    )
}