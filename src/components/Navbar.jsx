import 'react';
import '../styles/Navbar.css'


function Navbar({auth, setAuth}) {
    return (
        <nav className='d-flex align-items-center gap-3'>
          <a href="/" className='itemsdans btn btn-secondary'>Home</a>
          <a href="/market" className='itemsdans  btn btn-secondary' >Markets</a>
          {auth && <a href="/trade" className='itemsdans  btn btn-secondary' >Trade</a> }
          <a href="/about" className='itemsdans  btn btn-secondary'>About us</a>
          <a href="/tools" className='itemsdans  btn btn-secondary'>Tools</a>
          <a href="/support" className='itemsdans  btn btn-secondary'>Support</a>
          {auth && <a href="/profile" className='itemsdans  btn btn-secondary' >Profile</a> }
        </nav>
        
    );
}

export default Navbar;