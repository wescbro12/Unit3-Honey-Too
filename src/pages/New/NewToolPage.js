import Layout from "../../components/Layout/Layout";
import ToolForm from "../../components/NewTool/NewTool";

export default function NewToolPage({user, setUser}) {

    return (
        <Layout>
            <div className="show">
                <ToolForm />
            </div>
        </Layout>
    )
}