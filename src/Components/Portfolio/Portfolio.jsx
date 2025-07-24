import './portfolio.css'
import Daniels from '../../assets/328shots_so.jpeg'
import Mealify from '../../assets/237shots_so.jpeg'
import Weather from '../../assets/262shots_so.png'
import Bookmarker from '../../assets/758shots_so.png'
import DevFolio from '../../assets/434shots_so.png'
import Bento from '../../assets/823shots_so.jpeg'

import { useState } from 'react';

const projects = [
  {
    title: "Daniels Portfolio Website",
    description:
      "A responsive and interactive personal portfolio website built using Bootstrap 5, enhanced with custom JavaScript functionalities and  Typed.js.",
    techStack: "HTML , CSS , Bootstrap & TypedJs",
    imgSrc: Daniels,
    liveLink: "https://maryammagdy123.github.io/Daniels/",
    githubLink: "https://github.com/maryammagdy123/Daniels.git",
  },
  {
    title: "Mealify",
    description:
      "A responsive restaurant-themed website built using only HTML and CSS. It features a modern, clean design and aims to showcase a food-related interface.",
    techStack: "HTML , CSS , Bootstrap",
    imgSrc: Mealify,
    liveLink: "https://maryammagdy123.github.io/Mealify/",
    githubLink: "https://github.com/maryammagdy123/Mealify.git",
  },
  {
    title: "Weather App",
    description:
      "A simple weather forecast web application that displays current and 3-day weather information for any city using the WeatherAPI.",
    techStack: "HTML , CSS , JS & API",
    imgSrc: Weather,
    liveLink: "https://maryammagdy123.github.io/Weather-app/",
    githubLink: "https://github.com/maryammagdy123/Weather-app.git",
  },
  {
    title: "Bookmarker App",
    description:
      "A simple web-based bookmarking app that lets users save, visit, and delete their favorite websites. Built with Vanilla JavaScript, Bootstrap, and localStorage for data persistence.",
    techStack: "HTML , CSS & JS",
    imgSrc: Bookmarker,
    liveLink: "https://maryammagdy123.github.io/Bookmarker/",
    githubLink: "https://github.com/maryammagdy123/Bookmarker.git",
  },
  {
    title: "DevFolio",
    description:
      "DevFolio is a responsive single-page portfolio website built using HTML, CSS, and Bootstrap. It's designed to present profile, skills, services, work, blog, and contact information and professional manner.",
    techStack: "HTML , CSS & Bootstrap",
    imgSrc: DevFolio,
    liveLink: "https://maryammagdy123.github.io/Bookmarker/",
    githubLink: "https://github.com/maryammagdy123/Bookmarker.git",
  },
  {
    title: "Bento Grid Layout",
    description:
      "This project is a frontend layout challenge focused on creating a bento-style grid layout using only HTML and CSS. It highlights key UI concepts such as visual hierarchy, grid-based design, and responsive adaptation.",
    techStack: "HTML & CSS",
    imgSrc: Bento,
    liveLink: "https://github.com/maryammagdy123/bento-grid.git",
    githubLink: "https://github.com/maryammagdy123/bento-grid.git",
  },
];

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <section className="poetfolio p-md-5" id="Portfolio">
        <div className="container">
          <div className="section-header m-5">
            <h3 className="heading text-black">Portfolio</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="row gy-5">
            {projects.map(({ imgSrc, title, description, techStack, liveLink, githubLink }, index) => (

              <div className="col-md-4" key={index}>
                <div className="card portfolio-card h-100">
                  <img
                    className="card-img-top"
                    src={imgSrc}
                    alt={title}
                    data-bs-toggle="modal"
                    data-bs-target="#imageModal"
                    onClick={() => setSelectedImg(imgSrc)}
                  />
                  <div className="card-body d-flex">
                    <div className="card-content">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text text-muted">{description}</p>
                      <p className="card-text">
                        Tech Stack: <span className="text-primary">{techStack}</span>
                      </p>
                      <div className="project-links d-flex gap-4">
                        <div>
                          <i className="fa-solid fa-link"></i>{" "}
                          <a className="text-dark" href={liveLink} target="_blank">Live Preview</a>
                        </div>
                        <div>
                          <i className="fa-brands fa-github"></i>{" "}
                          <a className="text-dark" href={githubLink} target="_blank">View Code</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          <div className="modal fade" id="imageModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content bg-transparent border-0">
                <div className="modal-header border-0 justify-content-end">
                  <i data-bs-dismiss="modal" className="fa-solid fa-xmark text-white fa-2xl"></i>
                </div>
                <div className="modal-body text-center">
                  {selectedImg && (
                    <img src={selectedImg} className="img-fluid rounded shadow" alt="Preview" />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* End Modal */}
        </div>
      </section>
    </>
  );
}
