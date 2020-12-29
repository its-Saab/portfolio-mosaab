import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
 } from 'reactstrap';
import Link from 'next/link'


const BsNav = props => {
    const {title, href} = props
    return(
        <Link href={href}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}

const BsNavBrand= () =>
 <Link href="/">
     <a className="navbar-brand port-navbar-bran">Mosaab Abbas</a>
 </Link>

const LoginLink = () =>
<a className="nav-link port-navbar-link" href="/api/v1/login">Log In</a>

const LogoutLink = () =>
<a className="nav-link port-navbar-link" href="/api/v1/logout">Log Out</a>


 function Header({user,loading,className}){
    const [isOpen, setIsOpen] = useState(false)

    const toggle= () => setIsOpen({isOpen: !isOpen})


     return(
        <Navbar className={`port-navbar port-default absolute ${className}`}
        light
        expand="md">
        <BsNavBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
                <BsNav href='/' title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
                 <BsNav href='/about' title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNav href='/blogs' title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNav href='/portfolios' title="Portfolio" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNav href='/cv' title="Cv" />
            </NavItem>
            {/* <NavItem className="port-navbar-item">
                <BsNav href='/secret' title="Secret" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNav href='/secretssr' title="SecretSSR" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNav href='/onlyAdmin' title="Admin" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNav href='/onlyadminssr' title="AdminSSR" />
            </NavItem> */}
          </Nav>

          <Nav navbar>
              { !loading &&
                <>
                { user &&
                <NavItem className="port-navbar-item">
                    <LogoutLink />
                </NavItem>
                }
                { !user &&
                 <NavItem className="port-navbar-item">
                    <LoginLink />
                </NavItem>
                }
                </>
              }
          </Nav>
        </Collapse>
      </Navbar>
     )

}
export default Header


