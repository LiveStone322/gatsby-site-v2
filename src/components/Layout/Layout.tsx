 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "../Header/Header"
import LayoutProps from "./LayoutProps"
 
 const Layout = ({ children }: LayoutProps) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       <div style={{ maxWidth: 960 }} >
         <main>{children}</main>
         <footer style={{ marginTop: `2rem` }} >
           © {new Date().getFullYear()}, Fedulov Anton
         </footer>
       </div>
     </>
   )
 }

 export default Layout
 