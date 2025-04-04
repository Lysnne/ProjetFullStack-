import 'react';
import '../styles/Home.css'

function Navbar() {
    return (
        <nav>
          <a href="/" className='itemsdans btn btn-secondary'>Home</a>
          <a href="/market" className='itemsdans  btn btn-secondary' >Markets</a>
          <a href="/about" className='itemsdans  btn btn-secondary'>About us</a>
          <a href="/about" className='itemsdans  btn btn-secondary'>Tools</a>
          <a href="/support" className='itemsdans  btn btn-secondary'>Support</a>
        </nav>
        
    );
}

export default Navbar;