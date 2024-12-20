import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../graphql/projects"
import { Project } from "../utils/types"
import ProjectCard from "./ProjectCard"

const ProjectList = () => {

  const { loading, error, data} = useQuery<{
    projects: Project[]
  }>(GET_PROJECTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return (
    <div>
      {data && data.projects.map((project: Project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
