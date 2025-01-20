import React, { useState } from "react";
import "./services.css";
import {
  HiOutlineClipboardList,
  HiOutlineArrowSmRight,
  HiOutlineCheckCircle,
  HiX,
} from "react-icons/hi";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="section services" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Create + Collaborate</span>

      <div className="grid container services__container">
        {/* Service 1: Frontend Developer */}
        <div className="services__content">
          <div>
            <HiOutlineClipboardList className="services__icon" />
            <h3 className="services__title">
              Frontend
              <br />
              Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <HiOutlineArrowSmRight className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">Frontend Developer</h3>
              <p className="services__modal-description">
                Over 2 years of experience in frontend development, creating
                beautiful and responsive user interfaces.
              </p>
              <ul className="grid services__modal-services">
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">HTML (Expert)</p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">CSS (Expert)</p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">Bootstrap (Expert)</p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">Tailwind CSS (Expert)</p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">JavaScript (Expert)</p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    TypeScript (Intermediate)
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">React (Expert)</p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">Redux Toolkit (Expert)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 2: Backend Developer */}
        <div className="services__content">
          <div>
            <HiOutlineClipboardList className="services__icon" />
            <h3 className="services__title">
              Backend
              <br />
              Developer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <HiOutlineArrowSmRight className="services__button-icon" />
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <HiX
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">Backend Developer</h3>
              <p className="services__modal-description">
                Over 2 years of experience in backend development, building
                scalable and robust APIs.
              </p>
              <ul className="grid services__modal-services">
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">JavaScript (Expert)</p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    TypeScript (Intermediate)
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">Node.js (Expert)</p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">Express.js (Expert)</p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">MongoDB (Expert)</p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">
                    SQL (MySQL, PostgreSQL) (Expert)
                  </p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">Firebase (Expert)</p>
                </li>
                <li className="services__modal-service">
                  <HiOutlineCheckCircle className="services__modal-icon" />
                  <p className="services__modal-info">OAuth (Expert)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
