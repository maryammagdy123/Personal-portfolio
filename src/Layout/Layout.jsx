import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer/Footer'

export default function LayOut() {
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
