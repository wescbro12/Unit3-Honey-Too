import { render } from "@testing-library/react";
import { useState } from "react";
import { signUp } from '../../utilities/users-service';

export default function SignUpForm({ setState }) {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (evt) => {
        setState({ state, [evt.target.name]: evt.target.value, error: '' })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        try {
            const formData = { ...state };
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData)
            props.setUser(user)
        } catch (error) {
            setState({ error: 'Sign Up Failed' })
        }
    }
    
        const disable = state.password !== state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={handlSubmit}>
                        <label>Name</label>   
                        <input type="text" name="name" value={state.name} onChange={handleChange} required />
                        <label>Email</label>
                        <input type="email" name="email" value={state.email} onChange={handleChange} required />
                        <label>Password</label>
                        <input type="password" name="password" value={state.password} onChange={handleChange} required />
                        <label>Confirm Password</label>
                        <input type="password" name="confirm" value={state.confirm} onChange={handleChange} required />
                        <button type="submit" disable={disable}>SIGN UP</button>
                    </form>
                </div>
                <h1 className="error-message">&nbsp;{state.error}</h1>
            </div>
        )
    

}