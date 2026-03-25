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
            A selection of technologies and methodologies I use to build robust,
            scalable, and maintainable applications. Explore project-based
            examples{" "}
            <Link className="links" to="/projects">
              here
            </Link>
            .
          </h4>

          <h4 className="mt-3 lh-base">
            <strong>Languages:</strong> <span className="highlight">Java</span>,{" "}
            <span className="highlight">Kotlin</span>,{" "}
            <span className="highlight">JavaScript</span>,{" "}
            <span className="highlight">SQL</span>
            <br />
            <strong>Frameworks & Platforms:</strong>{" "}
            <span className="highlight">Spring Boot</span>,{" "}
            <span className="highlight">Spring WebFlux</span>,{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">Jetpack Compose</span>
            <br />
            <strong>Databases:</strong>{" "}
            <span className="highlight">PostgreSQL</span>,{" "}
            <span className="highlight">MongoDB</span>
            <br />
            <strong>AI & Machine Learning:</strong>{" "}
            <span className="highlight">Pre-trained ML models</span>,{" "}
            <span className="highlight">AI API integration</span>
            <br />
            <strong>Tools & Methodologies:</strong>{" "}
            <span className="highlight">REST</span>,{" "}
            <span className="highlight">GraphQL</span>,{" "}
            <span className="highlight">Swagger</span>,{" "}
            <span className="highlight">Kafka</span>,{" "}
            <span className="highlight">MVC</span>,{" "}
            <span className="highlight">MVVM</span>,{" "}
            <span className="highlight">SOLID</span>
          </h4>
        </div>
      </div>
    </FullpageSection>
  )
}

export default Skills
