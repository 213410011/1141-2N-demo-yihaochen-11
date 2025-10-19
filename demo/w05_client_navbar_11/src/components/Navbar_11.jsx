import React from 'react';
import { Link } from 'react-router-dom'; 
import Wrapper from '../assets/wrappers/Navbar_11';

const Navbar_11 = () => {
  return (
    <Wrapper>
      <header className="header">
        <div className="header-row container" role="navigation" aria-label="Main">
          <div className="header-left">
            <div className="logo">
              <h1>TkuDemo</h1>
            </div>
          </div>

          <div className="header-right">
            <ul className="main-menu">
              <li className="menu-item"><Link to="/" className="active">Home</Link></li>

              <li className="menu-item mega-menu">
                <Link to="#">Mega menu +</Link>
                <div className="mega-menu-wrapper slideInUp">
                  {[1, 2, 3, 4].map((block) => (
                    <div className="mega-menu-col" key={block}>
                      <h5>Menu block {block}</h5>
                      <ul className="mega-sub-menu">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <li key={item}><Link to="#">Menu block item {item}</Link></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>

              <li className="menu-item dropdown">
                <Link to="#">Demo +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item"><Link to="/booklist_11">W2_BookList_11</Link></li>
                    <li className="menu-item"><Link to="/static_11">W2-BlogStatic_11</Link></li>
                    <li className="menu-item"><Link to="/localjson_11">W3-BlogLocalJson_11</Link></li>
                    <li className="menu-item"><Link to="/node_11">W4-BlogNode_11</Link></li>
                    <li className="menu-item"><Link to="#">W5-BlogSupa_11</Link></li>
                  </ul>
                </div>
              </li>

              <li className="menu-item"><Link to="#">Blog</Link></li>
              <li className="menu-item"><Link to="#">Contact</Link></li>
            </ul>

            <Link
              to="#"
              id="hamburger-icon"
              className="mobile-toggler"
              aria-label="Mobile Menu"
            >
              <i className="fas fa-bars"></i>
            </Link>
          </div>

          {/* 手機版選單 */}
          <div id="mobile-menu" className="mobile-menu hidden slideInDown">
            <ul>
              <li className="menu-item"><Link to="#" className="active">Home</Link></li>

              <li className="menu-item mega-menu">
                <Link to="#">Mega menu +</Link>
                <div className="mega-menu-wrapper">
                  {[1, 2, 3, 4].map((block) => (
                    <div className="mega-menu-col" key={block}>
                      <h5>Menu block {block}</h5>
                      <ul className="mega-sub-menu">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <li key={item}><Link to="#">Menu block item {item}</Link></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>

              <li className="menu-item dropdown">
                <Link to="#">Services +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item"><Link to="#">Service 1</Link></li>
                    <li className="menu-item"><Link to="#">Service 2</Link></li>
                    <li className="menu-item"><Link to="#">Service 3</Link></li>
                    <li className="menu-item"><Link to="#">Service 4</Link></li>
                  </ul>
                </div>
              </li>

              <li className="menu-item"><Link to="#">Blog</Link></li>
              <li className="menu-item"><Link to="#">Contact</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar_11;
