import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import HeaderProps from "./HeaderProps"

const Header = ({ siteTitle }: HeaderProps) => (
  <header>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
