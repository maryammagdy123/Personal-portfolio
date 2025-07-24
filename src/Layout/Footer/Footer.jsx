import React from 'react'

export default function Footer() {
	return <>
		<div className='bg-dark text-white  footer' data-bs-theme="light">
			<div className='container mt-4'>
				<h2 className='text-white text-center fw-bold my-4 p-2'>Contact</h2>
				<div className="contact-details">
					<div className="row">
						<div className="col-md-4">
							<div className='item d-flex flex-column justify-content-center align-items-center  text-white'>
								<i className="fa-regular fa-envelope-open my-2 text-primary"></i> <p >mayamga9@gmail.com</p>
							</div>
						</div>
						<div className="col-md-4  ">
							<div className='item d-flex flex-column justify-content-center align-items-center  text-white'>
								<i className="fa-solid fa-phone my-2  text-primary"></i> <p >+20-123567888</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className='item d-flex flex-column justify-content-center align-items-center  text-white'>
								<i className="fa-solid fa-location-crosshairs my-2  text-primary"></i> <p >Egypt,Cairo</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='copy-rights text-white bg-primary p-2 text-center d-flex justify-content-center align-items-center'>
				<p>Copyright © Mariam Magdy</p>
			</div>
		</div>
	</>
}
