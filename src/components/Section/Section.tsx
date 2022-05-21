import React from "react"
import floatingCard from "../floatingCard"

// @ts-ignore
import * as classes from "./Section.module.scss"

const Section = ({ title, children }) => {
  return (
    <div className="container">
      <div className={classes.section}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default Section
