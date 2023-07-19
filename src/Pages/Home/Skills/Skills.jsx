import SkillsCard from "../../../Components/SkillsCard/SkillsCard";
import SkillsObj from './SkillsObj'
import Lottie from "lottie-react";
import lottieAnime from "../../../../public/Animation - 1689773456209.json"




const Skills = () => {
    return (
        <div className="text-center pt-20 p-5" id="skills">
            <h1 className="text-4xl font-semibold">My Skills</h1>
            <hr />
            <div className="grid md:grid-cols-4 content-center">
                <div className="col-span-2">
                    <Lottie className="h-96 m-0 p-0" animationData={lottieAnime} loop={true}></Lottie>
                    <p className="p-10">Also I have good knowledge in Vercel, Figma, VS code, Chrome DevTools,Firebase, npm packages. I have a keen eye for detail and a commitment to delivering high-quality work within deadlines.</p>
                </div>
                <div className="grid md:grid-cols-2 justify-items-center col-span-2 gap-5">
                   {
                    SkillsObj.map((skill, index) => (
                        <SkillsCard 
                        key={index}
                        title={skill.title}
                        image={skill.image}
                        value={skill.value}/>
                    ))
                   }
                </div>
            </div>
        </div>
    );
};

export default Skills;