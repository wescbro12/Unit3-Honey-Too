import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";

export default function SignUpPage({setUser}) {
    return (
        <main>
            <h1>Sign Up Form</h1>
            {<SignUpForm setUser={setUser}/>}
        </main>
    )
}