import React from 'react'
import styled from 'styled-components'

const UL = styled.ul`
	
		list-style:none;
		display:flex;
		flex-flow:row nowrap;

	li{
		padding:18px 10px;
	}

	@media(max-width: 768px){
		flex-flow: column nowrap;
		background: #0D2538;
		position:fixed;
		top:0;
		right:0;
		height:100vh;
		width:300px;
		padding-top:3.5rem;
		transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		transition:transform 0.3s ease-in-out;

		li{
			color:white;
		}
	}
`
const Rightbar = ({open})=>{
	console.log(open);
	return(
		<UL open={open}>
		  <li>Home</li>
		  <li>About Us</li>
		  <li>Contact Us</li>
		  <li>Sign In</li>
		  <li>Sign Up</li>
		</UL>
		)
}

export default Rightbar