import me from '../public/images/blue_nick.jpg';
import travel from '../public/images/igloo.jpg';


export const name = 'Nicolas Rouge';
export const avatar = me;
export const travelpic = travel;

const textColor = "rgb(246, 173, 85)";

export const Highlight = ({ children, color }) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: "4px",
      color: "#fff",
      padding: "2px 4px",
      fontSize: "13px",
      marginRight: "2px",
      cursor: "pointer",
    }}
  >
    {children}
  </span>
);


export const about = () => {
  return (
    <>
      Hi there! 👋, I'm a <a style={{ color: textColor }}>Full Stack Developer</a> with <b style={{ color: textColor }}>4+</b> years experience.
      My goal is to deliver <a style={{ color: textColor }}>efficient</a>, <a style={{ color: textColor }}>secure</a>, and <a style={{ color: textColor }}>agile</a> solutions.
      <br />
      Expert in <a style={{ color: textColor }}>.NET</a> and <a style={{ color: textColor }}>React</a>, Working in <a style={{ color: textColor }}>Cloud</a> environements - Always excited to explore new tools and technologies, from <a style={{ color: textColor }}>DevOps</a> to <a style={{ color: textColor }}>AI</a>! 🛠️
    </>
  );
};
export const bio = () => {
  return (
    <>
      <Highlight color={textColor}><b>Clean Architecture 🧹</b></Highlight><Highlight color={textColor}><b>Microservices 🔍</b></Highlight><Highlight color={textColor}>API</Highlight><Highlight color={textColor}>MVC</Highlight>
      <br />
      <Highlight color={textColor}><b>.NET 💻</b></Highlight><Highlight color={textColor}><b>.NET Core 6 / 7</b></Highlight><Highlight color={textColor}><b>C#</b></Highlight><Highlight color={textColor}>Unit Tests ✅</Highlight><Highlight color={textColor}>DI </Highlight>
      <br />
      <Highlight color={textColor}><b>ReactJs ⚛️</b></Highlight><Highlight color={textColor}><b>TypeScript 🦕</b></Highlight><Highlight color={textColor}>Redux 🔁</Highlight><Highlight color={textColor}>NextJs 🔜</Highlight><Highlight color={textColor}>Tailwind 🎨</Highlight><Highlight color={textColor}>StyledCpts 💅</Highlight><Highlight color={textColor}>JavaScript</Highlight>
      <br />
      <Highlight color={textColor}><b>Azure ☁️</b></Highlight><Highlight color={textColor}><b>AWS ☁️</b></Highlight><Highlight color={textColor}>SQL</Highlight><Highlight color={textColor}>AGILE 🏃‍♂️</Highlight><Highlight color={textColor}>Git 🌳</Highlight><Highlight color={textColor}>CI/CD </Highlight><Highlight color={textColor}>Docker</Highlight><Highlight color={textColor}>Figma</Highlight>

      <br />
      <br />
      Currently working at <a href="https://www.coxautoinc.com/" style={{ color: textColor }}><u>Cox Automotive🚗🇬🇧 🇺🇸 </u></a> where I'm currently <a style={{ color: textColor }}>leading the transformation</a> of a vehicle delivery platform's frontend.
      <br />
      Prior to this, I worked on some game-changing Fleet management platform features and created an app <a style={{ color: textColor }}>from scratch</a> which amassed 1000+ users on their debut and have consistently thrived since. 
      My extensive experience traverses various industries, 
      including <a style={{ color: textColor }}>Automotive</a>, <a style={{ color: textColor }}>Healthcare</a> and <a style={{ color: textColor }}>Banking</a> services., positioning me as a versatile and innovative professional.
      <br />
      <br />

      In my spare time, I love working on mini projects to sharpen my skills and stay engaged with the tech community:
      <br />
      🔹<a href="https://github.com/dtsmith94/cox-auto-hackathon-2022" style={{ color: textColor }}><u>🤖 Cox Automotive Hackathon (AI)</u></a>
      <br />
      🔹<a href="https://gatsbyitskills.gatsbyjs.io/" style={{ color: textColor }}><u>💹 UK IT job market in one glance </u></a>
      <br />
      🔹<a href="#" style={{ color: textColor }}>🌎 English Speakers around the world</a>
      <br />
      🔹<a href="#" style={{ color: textColor }}>☁️ Serverless platform based</a>
      <br />
      🔹<a href="#" style={{ color: textColor }}>.NET 6 APIs</a>
      <br />
      🔹<a href="#" style={{ color: textColor }}>React projects</a>

      <br />
      <br />

      {/* ♣️🪨📍🗺️🔘🔵⚪▫️ */}

      When I'm not coding, I enjoy discovering new experiences and destinations. Recently, I tried skiing for the first time, and it was an incredible adventure! 🗻🚠⛷️


      {/* <h2>My Skillset</h2>
      <ul>
        <li>🔧 BACK-END: .NET, dotnet, C#, API</li>
        <li>☁️ CLOUD: Azure, AWS</li>
        <li>👨‍💻 FRONT-END: ReactJS, Redux, React Query, Typescript, HTML, CSS</li>
        <li>♾️ DEVOPS: GitHub, CI/CD, YAML pipelines, Docker (learning)</li>
        <li>🎯 AGILE: Scrum, Jira, Refinement</li>
        <li>📚 DATABASES: SQL, GraphQL, MSSQL, MySQL</li>
        <li>🎨 DESIGN: Figma (learning) IA: Azure Cognitive Service</li>
      </ul>
      <h2>Additional Skills</h2>
      <ul>
        <li>🌟 Java, JEE</li>
        <li>🐍 Python, Django</li>
      </ul> */}
    </>
  );
};
