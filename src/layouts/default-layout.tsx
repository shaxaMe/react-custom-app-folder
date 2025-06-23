import React from "react"
import { Link } from "react-router"

interface IProps{
    children:React.ReactNode
}
function DefaultLayout({children}:IProps) {
    console.log('children','layoutRender')
  return (
    <div>
        <div className="flex gap-4" style={{display:'flex',gap:'10px'}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
        </div>
        {children}
    </div>
  )
}

export default DefaultLayout