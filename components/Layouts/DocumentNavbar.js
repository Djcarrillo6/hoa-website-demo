import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { POWERSTONE_BLUE } from '../../utilities';

const DocumentNavbar = ({ className }) => {
	return (
		<>
			<nav className={className}>
				<div className='container'>
					<h1 className='logo'>
						<a href='/index.html'>Powerstone Homeowner Dashboard</a>
					</h1>
				</div>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Logout</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default styled(DocumentNavbar)`
	background: ${POWERSTONE_BLUE};
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	transition: all 0.3s ease-in-out;
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px 0;
		transition: all 0.3s ease-in-out;
	}
	ul {
		display: flex;
		list-style-type: none;
		align-items: flex-end;
	}
	a {
		color: #fff;
		text-decoration: none;
		padding: 7px 15px;
		transition: all 0.3s ease-in-out;
	}
`;
