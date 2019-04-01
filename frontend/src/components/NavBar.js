import React, { useState } from 'react'
import { Link, NavLink as RRNavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import { Calendar, Square, ChevronLeft, ChevronRight, Settings, User, Search } from 'react-feather'

const CalendarToolBar = () => {
  return (
    <div className='c-calendar-toolbar'>

      <span className='title'>April 2019 </span>

      <span className='icon-set'>
        <ChevronLeft />
        <ChevronRight />
        <Square className='ml-2' size={20} />
      </span>
    </div>
  )
}

const NavBar = () => {
  const [ isOpen, setIsOpen ] = useState(false) // state for toggling navbar

  const toggle = () => setIsOpen(!isOpen)
  const closeNav = () => setIsOpen(false)

  return (
    <Navbar fixed='top' color='white' light expand='md' className='shadow-sm'>
      <NavbarBrand tag={Link} to='/' onClick={closeNav}><Calendar/> Calendar</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <CalendarToolBar />
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to='/about' onClick={closeNav}><Search/></NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/about' onClick={closeNav}><Settings/></NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/about' onClick={closeNav}><User/></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavBar
