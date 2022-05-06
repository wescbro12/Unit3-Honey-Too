import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react"
import styles from './AuthPage.module.css'

export default function AuthPage({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <main className={styles.AuthPage}>
            <h1>Honey Do Too</h1>
            <img src="https://i.imgur.com/XPZajeb.png" className="logo"/>
            <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
            {
                showSignUp ?
                    <SignUpForm setUser={setUser} /> :
                    <LoginForm setUser={setUser} />
            }
        </main>
    )
}