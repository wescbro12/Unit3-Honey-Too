import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../utilities/project-api";




export default function ProjectForm({user}) {
    const Navigate = useNavigate()
    const title = useRef(null)
    const entry = useRef(null)

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            // await fetch('http://localhost:3001/api/projects/new', {
            //     method: 'POST',
            //     body: JSON.stringify({
            //         title: title.current.value, entry: entry.current.value
            //     })
            // })
            await createProject({ title: title.current.value, entry: entry.current.value, user:user.name })
        } catch (error) {
            console.error(error)
        } finally {
            Navigate('/projects')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Project Name:</p><br /><input name="title" type="text" ref={title} /><br />
                <br /><p>Project Description:</p><br /><textarea name="entry" autoCorrect="on" ref={entry}/><br />

                <br /><input type="submit" value="Create new project" />
            </form>
            <br /><a href="/projects"><h3>Return to Project Directory</h3></a>
        </>
    )
}