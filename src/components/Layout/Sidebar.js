import * as React from 'react'
import { useRoutes, A as Link} from "hookrouter";

import routes from "../../routes";
 function Sidebar(){
   const match = useRoutes(routes);
    return(
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
          <ul className="nav nav-pills flex-column">
 
            <li className="nav-item">
              <Link className= {`nav-link ${match.type.name==='Dashboard'?"active":''}`} href="/">Dashboard <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className= {`nav-link ${match.type.name==='Posts'?"active":''}`}  href="/posts" >Posts</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${match.type.name==='CommentsReduce'?"active":''}`}  href="/comments/reduce">Comments reduce</Link>
            </li>
           
            <li className="nav-item">
              <Link className={`nav-link ${match.type.name==='CommentsState'?"active":''}`}  href="/comments/state">Comments state</Link>
            </li>
           

          </ul>

          
        </nav>
    )  
}

export default Sidebar