import NavBar from "../../components/NavBar/NavBar"
export default function NewPage() {
    // const handleSubmit = async (evt) => {
    //     evt.preventDefault
    //     try {
    //         const response = await fetch("/api/projects", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(jobForm),
    //         }); Navigate('/jobs');
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    return (
        <>
            <NavBar />
            <form action="/projects" method="POST">
                <p>Project Name:</p><br /><input name="title" type="text" /><br />
                <br /><p>Project Description:</p><br /><textarea name="entry" autoCorrect="on" /><br />

                <br /><input type="submit" value="Create new project" />
            </form>
            <br /><a href="/projects"><h3>Return to Project Directory</h3></a>
        </>
    )
}