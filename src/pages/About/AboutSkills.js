import { Col } from "react-bootstrap";
import Techstack from "./Techstack";
import { SKILLS, TOOLS } from "../../Constants";

function AboutSkills() {
  return (
    <>
      <Col className="skill-wrapper professional-skill">
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <div className="skill-container">
          {SKILLS.map((skill, index) => (
            <Techstack
              name={skill.name}
              initialRating={skill.initialRating}
              key={index}
            />
          ))}
        </div>

      </Col>
      {/* <Col className="skill-wrapper professional-tool">
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        {TOOLS.map((tool, index) => (
          <ul key={index} className="tool-name">
            <li>{tool}</li>
          </ul>
        ))}
      </Col> */}
    </>
  )
}

export default AboutSkills;