import React from "react"
import { Link } from "react-router-dom"
import { FullpageSection } from "@ap.cx/react-fullpage"
const Skills = () => {
  return (
    <FullpageSection className="vh-100 redBg d-flex align-items-center scrollChild">
      <div className="row w-100">
        <div className="col-12 col-md-10 offset-md-1 text-start p-5">
          <h1>Skills</h1>
          <h4 className="lh-base">
            Here, I've listed all the skills I possess.
            <br /> You can find the project-based implementations of these
            skills{" "}
            <Link className="links" to="/projects">
              here
            </Link>
          </h4>

          <h4 className="mt-3 lh-base">
            <span className="highlight">#C#</span>{" "}
            <span className="highlight">#Java</span>{" "}
            <span className="highlight">#SQL</span>{" "}
            <span className="highlight">#JS</span>{" "}
            <span className="highlight">#Kotlin</span>
            <br />
            <span className="highlight">#.NET Framework</span>{" "}
            <span className="highlight">#ASP.NET Core</span>{" "}
            <span className="highlight">#Entity Framework</span>
            <br />
            <span className="highlight">#SQL Server</span>{" "}
            <span className="highlight">#MongoDB</span> <br />
            <span className="highlight">#REST</span>{" "}
            <span className="highlight">#GraphQL</span>{" "}
            <span className="highlight">#Swagger</span>{" "}
            <span className="highlight">#Kafka</span>
            <br />
            <span className="highlight">#MAUI</span>{" "}
            <span className="highlight">#React</span>{" "}
            <span className="highlight">#Razor pages</span>{" "}
            <span className="highlight">#Jetpack Compose</span>
            <br />
            <span className="highlight">#MVC</span>{" "}
            <span className="highlight">#MVVM</span>{" "}
            <span className="highlight">#DDD</span>{" "}
            <span className="highlight">#OCP</span>{" "}
            <span className="highlight">#LSP</span>{" "}
            <span className="highlight">#SRP</span>
          </h4>
        </div>
      </div>
    </FullpageSection>
  )
}

export default Skills
