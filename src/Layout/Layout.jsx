import React from 'react'
import Navbar from './Navbar/Navbar.jsx'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer.jsx'

export default function Layout() {
	return (
		<>
			<Navbar />
			<div className="container p-4 my-3">
				<Outlet />
			</div>
			<Footer />
		</>
	)
}
