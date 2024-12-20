import { useState } from "react"
import { ProjectFormInfo } from "../utils/types"
import { useMutation } from "@apollo/client"
import { CREATE_PROJECT } from "../graphql/projects"

const ProjectForm = () => {
    const [project, setProject] = useState<ProjectFormInfo>({
        title: '',
        description: ''
    })

    const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
        refetchQueries: ['GetProjects']
    })

    const handleChange = (e: any) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        createProject({
            variables: {
                name: project.title,
                description: project.description
            }
        })
    }

    if (error) return <p>Error: {error.message}</p>
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="projectTitle">New Project</label>
        <input type="text" name="title" id="projectTitle" placeholder="Write a new project" onChange={handleChange}/>
        <textarea name="description" id="description" rows={3} placeholder="Write a description" onChange={handleChange}/>
        <button type="submit" disabled={(!project.title || !project.description || loading) && true } >Create Project</button>
    </form>
  )
}

export default ProjectForm
