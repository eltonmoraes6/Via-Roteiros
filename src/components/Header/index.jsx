import React, { useContext, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';

import { AuthContext } from '../../context/Auth';
import { nameToUpperCase } from '../../utilities/getInitials.js';

import logo from '../../assets/images/logo-via-roteiros.png';
import { USER_LOGOUT } from '../../context/constants';
import '../../styles/header.css';

const nav_links = [
  {
    path: '/home',
    display: 'Home',
  },
];

const Header = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: USER_LOGOUT });
    navigate('/');
  };

  const goTo = (url) => {
    navigate(`${url}`);
  };

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > -80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener('scroll', stickyHeaderFunc);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper d-flex align-items-center justify-content-between'>
            <div className='logo' onClick={() => goTo('/home')}>
              <img src={logo} alt='logo' />
            </div>

            <div className='navigation' ref={menuRef} onClick={toggleMenu}>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav_links.map((item, index) => (
                  <li className='nav__item' key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'active__link' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className='nav__right d-flex align-items-center gap-4'>
              <div className='nav__btns d-flex align-items-center gap-4 '>
                {user ? (
                  <>
                    <h5 className='mb-0'>
                      Olá, {nameToUpperCase(user.username)}
                    </h5>
                    <button className='btn btn-dark' onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Button className='btn secondary__btn'>
                      <Link to='/login'>Fazer Login</Link>
                    </Button>
                    <Button className='btn primary__btn'>
                      <Link to='/register'>Criar Conta</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className='mobile__menu' onClick={toggleMenu}>
                <i className='ri-menu-line'></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
