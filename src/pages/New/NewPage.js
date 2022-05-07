import Layout from "../../components/Layout/Layout"
import ProjectForm from "../../components/ProjectForm/ProjectForm"
export default function NewPage({user, setUser}) {
    
    return (
        <>
            <Layout title="New Project">
                <ProjectForm user={user} />

            </Layout>
            {/* <NavBar /> */}
           
        </>
    )
}