import LoginForm from "../../components/LoginForm/LoginForm";
import NavBar from "../../components/NavBar/NavBar";

export default function Login(evt) {
    return (
        <main>
            <NavBar />
            <h1>Log in Here</h1>
            <LoginForm />
        </main>
    )
}