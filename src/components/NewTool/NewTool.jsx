import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createTool } from "../../utilities/tool-api";

export default function ToolForm() {
    const Navigate = useNavigate()
    const name = useRef(null)

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await createTool({name:name.current.value})
        } catch (error) {
            console.error(error)
        } finally {
            Navigate('/tools')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                
                <p>Please enter the tools needed for this project</p>
                <input name="name" ref={name} /><br />
                <input type="submit" value="Add Tools to Your Project" />
        </form>
        </>
    )
}