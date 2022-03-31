import React from 'react'
import "./CustomLink.css" 
import { Link, useMatch, useResolvedPath } from 'react-router-dom';



function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          className='navLink'
          style={{background : match ? "#044e4e" : "darkcyan", color : match ? "white" : "black"}}
          to={to}
          {...props}
        >
        {children}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
  }

export default CustomLink ;