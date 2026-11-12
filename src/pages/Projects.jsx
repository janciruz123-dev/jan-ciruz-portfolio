
function Projects() {
  return (
    <section>
      <h1>My Projects</h1>

      <p>Here are some of the projects I have worked on or practiced.</p>

      <div className="projects-container">

        <div className="project-card">
          <h2>AI Symptom Checker</h2>
          <p>
            A system designed to provide preliminary health information
            based on user-entered symptoms.
          </p>
        </div>

        <div className="project-card">
          <h2>Smart To-Do List</h2>
          <p>
            A task management application that helps users organize
            and track their daily activities.
          </p>
        </div>

        <div className="project-card">
          <h2>Sound and Visual Match</h2>
          <p>
            An interactive learning application that matches pictures
            with their corresponding sounds.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
