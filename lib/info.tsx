import me from '../public/images/blue_nick.jpg';
import travel from '../public/images/snow2.jpg';


export const name = 'Nicolas Rouge';
export const avatar = me;
export const travelpic = travel;

//https://colorhunt.co/palettes/dark
// 082032
// 2C394B
// 334756
// FF4C29

const textColor =  "#FF4C29";
const skillsColor =  "#334756";


export const Highlight = ({ children, color }) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: "4px",
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
      Hi there! 👋, I'm a <a style={{ color: textColor }}>Full Stack Developer</a> with <b style={{ color: textColor }}>4+</b> years of experience, Expert in <a style={{ color: textColor }}>.NET</a> and <a style={{ color: textColor }}>React</a>, Working in <a style={{ color: textColor }}>Cloud</a> environements. Always excited to explore new tools and technologies, from <a style={{ color: textColor }}>DevOps</a> to <a style={{ color: textColor }}>AI</a>! 🛠️
          {/* My goal is to deliver <a style={{ color: textColor }}>efficient</a>, <a style={{ color: textColor }}>secure</a>, and <a style={{ color: textColor }}>agile</a> solutions. */}

    </>
  );
};
export const bio = () => {

  return (
    <>
      <Highlight color={skillsColor}><b>Clean Architecture 🧹</b>
      </Highlight><Highlight color={skillsColor}><b>Microservices 🔍</b></Highlight>
      <Highlight color={skillsColor}>API</Highlight>
      {/* <Highlight color='grey'>MVC</Highlight> */}
      <br />
      <Highlight color={skillsColor}><b>.NET</b></Highlight>
      <Highlight color={skillsColor}><b>.NET Core/6/7</b></Highlight>
      <Highlight color={skillsColor}><b>C#</b></Highlight>
      <Highlight color={skillsColor}>Unit Tests ✅</Highlight>
      <Highlight color={skillsColor}>DI </Highlight>
      <br />
      <Highlight color={skillsColor}><b>ReactJs⚛️</b></Highlight>
      <Highlight color={skillsColor}><b>TypeScript🦕</b></Highlight>
      <Highlight color={skillsColor}>Redux🔁</Highlight>
      <Highlight color={skillsColor}>NextJs</Highlight>
      <Highlight color={skillsColor}>JavaScript</Highlight>
      <br />
      <Highlight color={skillsColor}><b>Azure</b></Highlight>
      <Highlight color={skillsColor}><b>AWS</b></Highlight>
      <Highlight color={skillsColor}>SQL</Highlight>
      <Highlight color={skillsColor}>AGILE</Highlight>
      <Highlight color={skillsColor}>Git 🌳</Highlight>
      <Highlight color={skillsColor}>CI/CD </Highlight>
      <Highlight color={skillsColor}>Docker</Highlight>
      <br />
      <br />
      ➡️ Currently <a style={{ color: textColor }}>leading the transformation</a> of a vehicles delivery platform at <a href="https://www.coxautoinc.com/" style={{ color: textColor }}><u>Cox Automotive🚗🇬🇧 🇺🇸 </u></a>.
      <br />
      ➡️ Prior to this, I worked on some game-changing Fleet management platform features and created an app <a style={{ color: textColor }}>from scratch</a> which amassed <a style={{ color: textColor }}>1000+ users on its debut</a> and have <a style={{ color: textColor }}>consistently thrived</a> since.
      <br />
      {/* My extensive experience traverses various industries, */}
      ➡️ Experience in <a style={{ color: textColor }}>Automotive</a>, <a style={{ color: textColor }}>Healthcare</a> and <a style={{ color: textColor }}>Banking</a>. Check my Linkedin for more details.
      {/* , positioning me as a <a style={{ color: textColor }}>versatile and innovative</a> professional. */}
      <br />
      <br />
      In my spare time, I love working on mini projects:
      {/* to sharpen my skills and stay engaged with the tech community: */}
      <br />
      <br />
      🔹<a href="#"><b>💻.NET 6+ APIs </b></a>
      <br />
      🔹<a href="#"><b>⚛️ React projects</b></a>
      <br />
      🔹<a href="https://github.com/dtsmith94/cox-auto-hackathon-2022"><u>🤖 Cox <b>Hackathon</b></u></a>
      <br />
      🔹<a href="#">☁️ <b>Serverless platforms</b></a>
      <br />
      {/* 🔹<a href="#" style={{ color: textColor }}>🗺️ English Speakers around the world</a> */}
      <br />
      <br />
      When I'm not coding, I enjoy discovering new experiences and destinations. 
      Recently, I went skiing for the first time and it was an incredible adventure! 🗻🚠⛷️
    </>
  );
};
