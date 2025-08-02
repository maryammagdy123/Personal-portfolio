import React from 'react'
import Logo from "../../../src/assets/MARYAM.png"
import './home.css'
export default function Home() {
	return (
		<div className="container p-5 my-3 ">
			<div className="row">
				<div className="col-md-8">
					<div className="about-content">
						<h1 className='text-primary'>Maryam Magdy</h1>
						<p className='fw-medium'>I'm <span className='text-primary'>Ui designer</span> & <br /><span className='text-primary'>Front-End Developer</span> </p>
						<p>I'm a UI designer passionate about creating intuitive user
							experiences. Currently based in Cairo, I am dedicated to learning and
							honing my skills in design. I primarily use Figma to bring my ideas to
							life and am excited to explore real-world projects as I continue my
							journey in UI design. I look forward to connecting with others and
							growing in this dynamic field.</p>
						<div class="btn-sci d-flex flex-column flex-sm-row">
							<a href="#" className="btn bg-primary my-3">Download CV</a>
							<div class="sci d-flex justify-content-center align-items-center mx-auto ">
								<a href=""><i className="fa-brands fa-behance fa-2"></i></a>
								<a href=""><i class="fa-brands fa-github fa-2"></i></a>
								<a href=""><i class="fa-brands fa-linkedin-in fa-2"></i></a>
								<a href=""><i class="fa-brands fa-figma fa-2"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4 my-3">
					<img src={Logo} className='Logo' alt="logo" />
				</div>
			</div>
		</div>
	)
}

