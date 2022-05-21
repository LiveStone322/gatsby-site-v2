import { StaticImage } from "gatsby-plugin-image"
import React from "react"

// @ts-ignore
import * as classes from "./HeroSection.module.scss"

const HeroSection = () => {
  console.log({ classes })
  return (
    <div className={`container-fluid ${classes.containerFluid}`}>
      <div className={`container ${classes.container}`}>
        <div className={`row`}>
          <div className={`col-12 col-md-6 ${classes.leftPart}`}>
            <h1>Привет! Меня зовут Антон</h1>
            <p>Я UI/UX дизайнер и Frontend разработчик</p>
          </div>

          <div className={`col-12 col-md-6 ${classes.rightPart}`}>
            <div style={{ borderRadius: "50% 50%", overflow: "hidden" }}>
              <StaticImage
                src="../../images/avatar.jpg"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                objectFit={"cover"}
                alt="A Gatsby astronaut"
                objectPosition="center"
                placeholder="none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
