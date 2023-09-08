import {} from "react";
import { NavLink } from 'react-router-dom'
import { BsFillBagFill, BsFillHouseFill, BsFillPersonFill } from "react-icons/bs";
import './Nav.css'

const Nav = () => {

    return (
        <>
            <nav className="nav">
                <NavLink className="logo" to='/'>
                    <div className="logo-link">
                        <p>HW</p>
                    </div>
                    <p>hello world</p>
                </NavLink>
                <div className="nav-links">
                    <div className="links">
                        <BsFillHouseFill />
                        <NavLink className="link" to='/'>Home</NavLink>
                    </div>
                    <div className="links">
                        <BsFillBagFill />
                        <NavLink className="link" to='Produtos'>Produtos</NavLink>
                    </div>
                    <div className="links">
                        <BsFillPersonFill />
                        <NavLink className="link" to='Sobre'>Sobre</NavLink>
                    </div>
                </div>
                <div className="buscar">
                    <input type="text" placeholder="Buscar" />
                    <button type="submit">Buscar</button>
                </div>
            </nav>
        </>
    )

}

export default Nav