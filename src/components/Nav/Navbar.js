import React from 'react'
import styled from 'styled-components'

import Burger from './Burger'
const Nav = styled.nav`
	width:100%;
	height:55px;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #f1f1f1;

	.logo{
		padding:15px 0;
	}
	
`
const Navbar = ()=>{
	return(
		<Nav>
			<div className='logo'>
			  NavbarLogo
			</div>
			<Burger />
		</Nav>
		)
}

export default  Navbar