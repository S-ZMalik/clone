import Heading from "./Heading.jsx"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Team = ({teamData}) => {

  return (
    <div className="team-section ">
        <Heading
          heading={"OUR TE"}
          span={"AM"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
          }
          shortPara={"ut et dolore magna aliqua. Ut enim ad minim veniam."}
        />

        <div className="container grid grid-four-cols">
            {teamData.map((team) => (
                <div key ={team.name} className="team-image-card" data-aos="fade-up">
                <div className="team-img">
                    <img src={team.teamImage} alt="" />
                </div>
                <div className="text-div">
                    <h5 className="name">
                      {team.name}
                    </h5>
                    <p className="para">
                      {team.teamPara}
                    </p>
                    <ul className="icon-list">
                        {team.teamIcon.map((icon, index) => (
                            <li key={index} className="list-icon">
                                {icon}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Team