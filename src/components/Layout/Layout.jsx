const { NavLink } = require("react-router-dom")

 const Layout = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/movies" >Movies</NavLink>
            </nav>
        </div>
    )
}

export default Layout