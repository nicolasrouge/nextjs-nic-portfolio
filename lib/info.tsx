import me from '../public/images/blue_nick.jpg';
import travel from '../public/images/snow2.jpg';
import blackpool from '../public/images/blackpool.jpg';
import lake from '../public/images/lake.jpg';
import london from '../public/images/london.jpg';
import manny from '../public/images/manny.jpg';
import manny2 from '../public/images/manny2.jpg';
import manny3 from '../public/images/manny3.jpg';
import mannysky from '../public/images/mannysky.jpg';
import peak from '../public/images/peak.jpg';
import roman from '../public/images/roman.jpg';
import surf from '../public/images/surf.jpg';

export const name = 'Nicolas Rouge';
export const avatar = me;
export const travelpic = travel;
export const blackpoolpic = blackpool;
export const lakepic = lake;
export const londonpic = london;
export const mannypic = manny;
export const manny2pic = manny2;
export const mannyskypic = mannysky;
export const peakpic = peak;
export const romanpic = roman;
export const surfpic = surf;

//https://colorhunt.co/palettes/dark
// 082032
// 2C394B
// 334756
// FF4C29

const textColor = "#FF4C29";
const skillsColor = "#334756";


export const Highlight = ({ children, color }) => (
  <span
    style={{
      color: "lightgrey",
      backgroundColor: color,
      borderRadius: "4px",
      padding: "2px 4px",
      fontSize: "14px",
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
      Hi there! 👋, I'm a <a style={{ color: textColor }}>Full Stack Developer</a> with <b style={{ color: textColor }}>5</b> years of experience, Expert in <a style={{ color: textColor }}>.NET</a> and <a style={{ color: textColor }}>React</a>, Working in <a style={{ color: textColor }}>Cloud</a> environements. Always excited to explore new tools and technologies, from <a style={{ color: textColor }}>DevOps</a> to <a style={{ color: textColor }}>AI</a>! 🛠️
      {/* My goal is to deliver <a style={{ color: textColor }}>efficient</a>, <a style={{ color: textColor }}>secure</a>, and <a style={{ color: textColor }}>agile</a> solutions. */}

    </>
  );
};
export const bio = () => {

  return (
    <>
      <div className="flex-wrap gap-2">
      <Highlight color={skillsColor}><b>Clean Code 🧹</b></Highlight>
      <Highlight color={skillsColor}><b>SOLID</b></Highlight>
      <Highlight color={skillsColor}><b>Design patterns</b></Highlight>

      <br />
      <Highlight color={skillsColor}><b>TDD</b></Highlight>
      <Highlight color={skillsColor}><b>Unit Tests</b></Highlight>
      <br />
      <Highlight color={skillsColor}><b>N-Tier</b></Highlight>
      <Highlight color={skillsColor}><b>Hexagonal Architecture</b></Highlight>

      <br />
      <Highlight color={skillsColor}><b>API REST</b></Highlight>
      <Highlight color={skillsColor}><b>.NET</b></Highlight>
      <Highlight color={skillsColor}><b>.NET Core/6+</b></Highlight>
      <Highlight color={skillsColor}><b>C#</b></Highlight>
      <br />
      <Highlight color={skillsColor}><b>ReactJs</b></Highlight>
      <Highlight color={skillsColor}><b>NextJs</b></Highlight>
      <Highlight color={skillsColor}><b>Redux</b></Highlight>

      <br />
      <Highlight color={skillsColor}><b>TypeScript🦕</b></Highlight>
      <Highlight color={skillsColor}><b>JavaScript</b></Highlight>
      <br />
      <Highlight color={skillsColor}><b>Azure</b></Highlight>
      <Highlight color={skillsColor}>AWS</Highlight>
      <Highlight color={skillsColor}><b>SQL</b></Highlight>
      <Highlight color={skillsColor}><b>AGILE</b></Highlight>
      <Highlight color={skillsColor}><b>Git</b></Highlight>
      <Highlight color={skillsColor}><b>CI/CD</b></Highlight>
      <Highlight color={skillsColor}>Docker</Highlight>
      </div>
      <br />
      <br />
      ➡️ Currently working on the transformation of a vehicles delivery platform at <a href="https://www.coxautoinc.com/" style={{ color: textColor }}><u>Cox Automotive UK & Europe</u></a>.
      <br />
      ➡️ Prior to this, I worked on some game-changing Fleet management platform features and created an 'e-learning' app <a style={{ color: textColor }}>from scratch</a> which amassed <a style={{ color: textColor }}>1000+ users on its debut</a> and have <a style={{ color: textColor }}>consistently thrived</a> since.
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
      🔹<a href="#"><b>⚛️ React and NextJs projects</b></a>
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
