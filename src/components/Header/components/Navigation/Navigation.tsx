import { Link } from "gatsby"
import React from "react"
import FloatingCard from "../../../floatingCard"

// @ts-ignore
import * as classes from "./Navigation.module.scss"

const Navigation = () => {
  return FloatingCard(
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link to="">раз</Link>
        </li>
        <li>
          <Link to="">два</Link>
        </li>
        <li>
          <Link to="">три</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
