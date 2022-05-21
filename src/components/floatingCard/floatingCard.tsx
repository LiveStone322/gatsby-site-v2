import React from "react"

// @ts-ignore
import * as classes from "./floatingCard.module.scss"

const floatingCard = (children: JSX.Element) => {
  return (
    <div className={classes.container}>
      <div className={classes.backCard + " " + classes.card}></div>
      <div className={classes.card}>{children}</div>
    </div>
  )
}

export default floatingCard
