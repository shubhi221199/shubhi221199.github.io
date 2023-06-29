import React,{useEffect} from "react";
import {DiMongodb, DiHtml5} from 'react-icons/di'
import {SiExpress,SiCss3, SiRedux, SiTailwindcss,SiJavascript,SiReact,SiPostman,SiVite,SiFirebase,SiChakraui} from 'react-icons/si'
import {FaNodeJs, FaGitSquare, FaJava} from 'react-icons/fa'
import {TbBrandVscode} from 'react-icons/tb'
import AOS from "aos";

export const Skills = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <section data-aos="fade-up" className="sections" id="skills">
        <h1 data-aos="fade-up"  className="heading">
        <span className="sauce">Skills</span>
      </h1>
      <div></div>
        <p data-aos="fade-up">Here are a few Technologies I’ve been working with recently:</p>
          <ul data-aos="fade-up"  className="skills-list">
            <li className="skills-card">
              <div className="skills-card-name" > <SiJavascript className="skills-card-img" color="rgb(255,68,159)" /> JavaScript</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <SiReact className="skills-card-img" color="rgb(255,68,159)"/>  ReactJs</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiRedux className="skills-card-img" color="rgb(255,68,159)"/> Redux</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <SiExpress className="skills-card-img" color="rgb(255,68,159)"/> ExpressJs</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <FaNodeJs className="skills-card-img" color="rgb(255,68,159)"/> Node.js</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" > <DiMongodb className="skills-card-img" color="rgb(255,68,159)"/> MongoDb</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><DiHtml5 className="skills-card-img" color="rgb(255,68,159)"/> HTML</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiCss3 className="skills-card-img" color="rgb(255,68,159)"/> CSS</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiTailwindcss className="skills-card-img" color="rgb(255,68,159)"/> Tailwind</div>
            </li>

            <li className="skills-card">
              <div className="skills-card-name" ><SiFirebase className="skills-card-img" color="rgb(255,68,159)"/> Firebase</div>
            </li>

            <li className="skills-card">
              <div className="skills-card-name" ><SiChakraui className="skills-card-img" color="rgb(255,68,159)"/> Chakra-UI</div>
            </li>

            <li className="skills-card">
              <div className="skills-card-name" ><FaJava className="skills-card-img" fontSize={'27px'} color="rgb(255,68,159)"/> Java</div>
            </li>
          </ul>
        <p data-aos="fade-up" style={{marginTop:'3rem'}}>Here are a few Tools I’ve been working with recently:</p>
          <ul data-aos="fade-up"  className="skills-list">
            <li className="skills-card">
              <div className="skills-card-name" > <FaGitSquare className="skills-card-img" color="rgb(255,68,159)"/> Git</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><TbBrandVscode className="skills-card-img" fontSize={'25px'} color="rgb(255,68,159)"/> VScode</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiPostman className="skills-card-img" color="rgb(255,68,159)"/> Postman</div>
            </li>
            <li className="skills-card">
              <div className="skills-card-name" ><SiVite className="skills-card-img" fontSize={'25px'} color="rgb(255,68,159)"/> Vite</div>
            </li>
          </ul>
    </section>
  )
}
