
import React from "react"
<<<<<<< HEAD
import Header from "./Header"
=======
import AppHeader from "./AppHeader"
import Footer from "./Footer"
>>>>>>> 119c30a496581c760b5bd80dc46b24b9cd5dc582

export default function Layout({children}) {

  return (
<<<<<<< HEAD
    <>
      <Header />
      { children }
    </>
=======
    <div className="container is-max-desktop">
      <AppHeader />
      { children }
      <Footer />
    </div>
>>>>>>> 119c30a496581c760b5bd80dc46b24b9cd5dc582
  )
}
