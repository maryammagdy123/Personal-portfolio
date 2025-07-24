import React from 'react'

export default function Contact() {
	return (
		<>
			<section id="contact" className='p-md-5 '>
				<div className="container">
					<div className="section-header m-5">
						<h3 className="heading text-black">Conatct</h3>
					</div>
					<div className="contact-inputs">
						<form>
							<div class="form-group mb-3">
								<label for="exampleInput1">User name :</label>
								<input type="text" class="form-control" id="exampleInput1" aria-describedby="userName" placeholder="User name" />
							</div>
							<div class="form-group mb-3">
								<label for="exampleInput2">User age :</label>
								<input type="text" class="form-control" id="exampleInput2" aria-describedby="userAge" placeholder="User age" />
							</div>
							<div class="form-group mb-3">
								<label for="exampleInput3">User Email :</label>
								<input type="email" class="form-control" id="exampleInput3" aria-describedby="userEmail" placeholder="User email" />
							</div>
							<div class="form-group mb-3">
								<label for="exampleInput4">User password :</label>
								<input type="password" class="form-control" id="exampleInput4" aria-describedby="userPass" placeholder="User password" />
							</div>
							<button type="submit" class="btn btn-primary">send message</button>
						</form>
					</div>
				</div>
			</section>
		</>

	)
}
