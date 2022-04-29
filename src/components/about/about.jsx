import React from 'react'
import "./about.css"
import Sertif1 from "../../img/sertif1.png"
import Sertif2 from "../../img/sertif2.jpg"

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?cs=srgb&dl=pexels-lucie-liz-3165335.jpg&fm=jpg"
                alt=""
                className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                My name is Ahmadien Hafizh Yusufi, now I am studying 
                Bachelor of Informatics at the Faculty of Computer Science, 
                Universitas Pembangunan Nasional Veteran Jakarta.
            </p>
            <p className="a-desc">
                I am a fast learner, ambitious and hard worker. 
                I am skilled and experienced in digital design and game development.
                
                In addition, I am adaptable in various environments, 
                can work well under pressure, and can do daily tasks competently.

                I am also experienced in providing game developer learning materials 
                for beginners as a mentor in study clubs on campus. Then I also create 
                digital design content on my social media to learn about modern design 
                developments.
            </p>
            <div className="a-award">
                <img src={Sertif1} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Design Manager Certificate</h4>
                    <p className="a-award-desc">
                    I once volunteered as a design manager at the TEDXUPNVJ event in February 2021.
                    </p>
                </div>
            </div>
            <div className="a-award">
                <img src={Sertif2} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Head of Events Division</h4>
                    <p className="a-award-desc">
                    I once volunteered as the head of the event division at the Student Study Club game development workshop in June 2021.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About