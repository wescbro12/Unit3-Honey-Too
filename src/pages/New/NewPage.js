import Layout from "../../components/Layout/Layout"
import NavBar from "../../components/NavBar/NavBar"
import ProjectForm from "../../components/ProjectForm/ProjectForm"
export default function NewPage() {
    
    return (
        <>
            <Layout title="New Project">
                <ProjectForm />

            </Layout>
            {/* <NavBar /> */}
           
        </>
    )
}