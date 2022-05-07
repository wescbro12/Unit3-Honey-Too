import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react"
import styles from './AuthPage.module.css'

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <main className="auth">
            <h1>Honey Do Too</h1>
            <div className='intro'>
                Welcome to the Honey Do Too app.
                This is a place where DIYers can show off their projects.
                Please sign-up/log-in
            </div>
            {/* <img src="https://i.imgur.com/XPZajeb.png" className="logo"/> */}
            <h4 onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</h4>
            {
                showSignUp ?
                    <SignUpForm setUser={setUser} /> :
                    <LoginForm setUser={setUser} />
            }
        </main>
    )
}