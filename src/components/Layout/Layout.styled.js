import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
background-color: #f6f6f654;
 box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 10px -10px;
  height: 80px;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 20px 20px;
//   justify-content: space-between;
 
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 30px;
  padding: 5px;


  &.active {
    color: red;
  }
`;