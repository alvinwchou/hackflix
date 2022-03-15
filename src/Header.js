// import our old friend, the Link component
import { Link } from "react-router-dom"



export default function() {
    return(
        <header>
            {/* wrap the h1 in a Router link which navigates back to the homepage */}
            <Link to='/' >
                <h1>Hackflix</h1>
            </Link>
        </header>
    )
}