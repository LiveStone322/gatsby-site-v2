import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/Header"
import LayoutProps from "./LayoutProps"

// @ts-ignore
import * as classes from "./Layout.module.scss"

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <footer style={{ marginTop: `2rem` }}>
        © {new Date().getFullYear()}, Fedulov Anton
      </footer>
    </>
  )
}

export default Layout
