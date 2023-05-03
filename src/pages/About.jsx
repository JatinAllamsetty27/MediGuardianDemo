import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <Container>
      <Row>
        <Col md={4} className="text-center">
          <FontAwesomeIcon icon={faUser} size="6x" className="mb-4" />
          <h3>Jatin</h3>
          <p>Data Maven | Web Developer</p>
        </Col>
        <Col md={8}>
          <center><h2>About Me</h2></center>
          <p>Hi there! I'm Jatin, a data maven and web developer. I have a passion for using data to solve complex problems and create meaningful solutions.

As a data maven, I have experience working with large datasets, performing data analysis, and developing predictive models. I'm proficient in Python, R, SQL, and other programming languages commonly used in data science. I'm also skilled in data visualization tools like Tableau and Power BI, and have experience presenting complex data in a clear and concise manner.</p>
          <p>In addition to my data skills, I'm also a seasoned web developer. I specialize in creating responsive and user-friendly websites and web applications using technologies like HTML, CSS, JavaScript, ReactJS, and NodeJS. I have experience working with both front-end and back-end development, and have created a variety of web applications for clients in various industries.

I'm a highly motivated self-starter with a strong work ethic, and I enjoy working in a fast-paced environment where I can continually learn and grow. When I'm not working, you can find me exploring the latest tech trends, attending hackathons, or spending time with my family.

If you're interested in working together, please don't hesitate to reach out. I'm always looking for new and exciting projects to take on!</p>
          <Row className="mt-4">
            <Col md={4}>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <p>jatinallamsetty06@gmail.com</p>
            </Col>
            <Col md={4}>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <p>linkedin.com/in/JatinAllamsetty27</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

