import "./App.css";

const skills = [
  {
    skill: "Python",
    level: "advanced",
    color: "#659dcc",
  },
  {
    skill: "C#",
    level: "intermediate",
    color: "#b978b5",
  },
  {
    skill: "WordPress",
    level: "advanced",
    color: "#3b94bb",
  },
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#f1814d",
  },

  {
    skill: "Java",
    level: "beginner",
    color: "#a5a8cd",
  },
  {
    skill: "Node.js",
    level: "intermediate",
    color: "#7cb701",
  },
  {
    skill: "PHP",
    level: "advanced",
    color: "#a5a8cd",
  },

  {
    skill: "React",
    level: "intermediate",
    color: "#5ed3f3",
  },

  {
    skill: "JavaScript",
    level: "advanced",
    color: "#eab921",
  },
  {
    skill: "Spring Boot",
    level: "beginner",
    color: "#6aad3d",
  },
  {
    skill: "Git and GitHub",
    level: "advanced",
    color: "#ec4b26",
  },

  {
    skill: "ASP.NET",
    level: "intermediate",
    color: "#28a9e3",
  },
  {
    skill: "Docker",
    level: "beginner",
    color: "#5e8ce8",
  },
  {
    skill: "Angular",
    level: "intermediate",
    color: "#f279d5",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="geraldworks-avatar.jpg"
      alt="GeraldWorks.DEV"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>GeraldWorks.DEV</h1>
      <p>
        A passionate Full-Stack Developer based in the Philippines. Specialize
        in creating user-friendly websites, high-performance web/mobile
        applications, and digital tools.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App;
