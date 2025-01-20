import React, { useState } from "react";
import "./qualification.css";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="container qualification__container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <HiOutlineAcademicCap className="qualification__icon" />
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <HiOutlineBriefcase className="qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Education Timeline - Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intermediate (FSC)</h3>
                <span className="qualification__subtitle">
                  Civil Lines, Lahore
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2020-2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Education Timeline - Right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">
                  University of Engineering and Technology (UET)
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2022-Present
                </div>
              </div>
            </div>

            {/* Education Timeline - Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Object-Oriented Programming (OOP)
                </h3>
                <span className="qualification__subtitle">(2022)</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Education Timeline - right */}

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">(2022)</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2022
                </div>
              </div>
            </div>

            {/* Education Timeline - left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Data Structures and Algorithms
                </h3>
                <span className="qualification__subtitle">(2023)</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Education Timeline - Right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Database Management Systems (DBMS)
                </h3>
                <span className="qualification__subtitle">(2023)</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2023
                </div>
              </div>
            </div>

            {/* Education Timeline - Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Operating Systems</h3>
                <span className="qualification__subtitle">(2024)</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* Education -->left */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Computer Networks</h3>
                <span className="qualification__subtitle">(2024)</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2024
                </div>
              </div>
            </div>
          </div>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">Artificial Intelligence</h3>
              <span className="qualification__subtitle">(2024)</span>
              <div className="qualification__calendar">
                <HiOutlineCalendar className="qualification__calendar-icon" />
                2024
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">Data Science</h3>
              <span className="qualification__subtitle">(2024)</span>
              <div className="qualification__calendar">
                <HiOutlineCalendar className="qualification__calendar-icon" />
                2024
              </div>
            </div>
          </div>
          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Freelance Developer - Left */}

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Freelance Web Developer
                </h3>
                <span className="qualification__subtitle">Freelance</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2021 - Present
                </div>
                <p>
                  Worked on building dynamic web applications for clients using
                  various technologies such as React, Node.js, and the MERN
                  stack. Managed complete project lifecycles and ensured client
                  satisfaction through communication and quality delivery.
                </p>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Junior Developer Internship - Right */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Junior Web Developer Intern
                </h3>
                <span className="qualification__subtitle">Tech Solutions</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  June 2023
                </div>
                <p>
                  Assisted in developing web applications for various clients
                  using the MERN stack. Focused on backend development, API
                  integration, and improving system performance. Collaborated
                  closely with senior developers and participated in code
                  reviews and team meetings.
                </p>
              </div>
            </div>

            {/* Internship Experience - Left */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Engineering Intern
                </h3>
                <span className="qualification__subtitle">Global Tech</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2023
                </div>
                <p>
                  Worked in a team developing and deploying a web-based project
                  management tool. Contributed to designing the UI and
                  implementing various features using JavaScript and Angular.
                  Focused on improving performance and usability of the tool.
                </p>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
