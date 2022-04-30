import {Routes, Route} from "react-router-dom"
import SignUpForm from "../components/SignUpForm/SignUpForm"
import LoginForm from "../components/LoginForm/LoginForm"
import SignUpPage from "./Signup/SignUpPage"
import { useNavigate } from "react-router-dom"

export default function Home({ setUser }) {
    //handleSignup function
    const Navigate= useNavigate()
    const handleSignUp = (evt) => {
        // evt.preventDefautlt()
        Navigate("/signup")
    }
    const NavLog = useNavigate()
    const handleLogin = (evt) => {
        NavLog("/login")
    }
    return (
        
            <main>
            <p className='landing'> Welcome! <br /> This app is a way to keep track of all of your DIY projects</p>
            <div className="signup">                    
                <button onClick={handleSignUp}>Sign Up</button> 
            </div>
            
            <div className="login">
                <button onClick={handleLogin}>Log In</button>
            </div>
            </main>
        
    )

};