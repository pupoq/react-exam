import {Link} from 'react-router-dom'
import {Navbar, Nav, NavLink} from 'react-bootstrap'
import './Navbar.css'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { SignIn } from '../Components/SignIn'
import { SignOut } from '../Components/SignOut'

export const BootstrapNavbar = () => {

  const [user] = useAuthState(auth)
  console.log(user)


  return (
    <Navbar expand='sm' bg='dark'>
      <Navbar.Toggle aria-controls='myNavbar' />
      <Navbar.Collapse className='row'>
          <Nav id='myNavbar' className='around'>
              
              <NavLink as={Link} className='NavLink' to='/countries'>Countries</NavLink>
              <NavLink as={Link} className='NavLink' to='/cytaty'>Цитаты</NavLink>
              <NavLink as={Link} className='NavLink' to='/nasa'>Nasa</NavLink>
          </Nav>
          <div className='ava2'>
            {user ? <img className='ava' src={user.photoURL} /> : null }
          {user ? <SignOut /> : <SignIn />}
          </div>
      </Navbar.Collapse>
      
    </Navbar>
  )
}

export default BootstrapNavbar