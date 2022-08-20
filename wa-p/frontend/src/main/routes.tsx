import { Route, Routes } from "react-router-dom"
import React from "react"

// pages
import Film from "@/presentation/pages/Film"
import Home from "@/presentation/pages/Home"
import NotFound from "@/presentation/pages/NotFound"

const Routers:React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<Film />} />
    </Routes>
  )
}

export default Routers