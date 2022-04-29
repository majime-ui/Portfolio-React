import React from 'react'
import "./intro.css"
import Me from "../../img/hafizh.png"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
          <div className="i-left-wrapper">
              <h2 className="i-intro">Hello, My name is </h2>
              <h1 className="i-name">Ahmadien Hafizh Yusufi</h1>
              <div className="i-title">
                  <div className="i-title-wrapper">
                      <div className="i-title-item">Web Developer</div>
                      <div className="i-title-item">UI/UX Designer</div>
                      <div className="i-title-item">Game Developer</div>
                      <div className="i-title-item">Illustrator</div>
                      <div className="i-title-item">Content Creator</div>
                  </div>
              </div>
              <p className="i-desc">
                I do designing website and application with Figma,
                developing website with React, developing game with Unity,
                Drawing illustration with Clip Studio Paint,
                and making content in social media.
              </p>
          </div>
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img"/>
      </div>
    </div>
  )
}

export default Intro
