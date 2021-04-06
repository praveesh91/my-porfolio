import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { about, mainBody, repos, skills } from '../editable-stuff/config.js';
import useResizeObserver from '../hooks/useResizeObserver';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg">
      <Navbar.Brand className="brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* {
            <Nav.Link className="nav-link lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </Nav.Link>
          } */}

          {about.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}>
              About
            </Nav.Link>
          )}
          <Nav.Link
            className="nav-link lead"
            href={process.env.PUBLIC_URL + "/#skills"}>
            Skills
          </Nav.Link>
          <Nav.Link
            className="nav-link lead"
            href={process.env.PUBLIC_URL + "/#projects"}>
            Projects
          </Nav.Link>
          <Nav.Link
            className="nav-link lead"
            href={process.env.PUBLIC_URL + "/#experiance"}>
            Experience
          </Nav.Link>
          <Nav.Link
            className="nav-link lead"
            href={process.env.PUBLIC_URL + "/#contact"}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
