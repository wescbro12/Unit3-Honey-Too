import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage({setUser}) {
    return (
        <main>
            <h1>Sign Up Form</h1>
            {<SignUpForm setUser={setUser} />}
            <button><Link to="/login">Log In</Link></button>
        </main>
    )
}