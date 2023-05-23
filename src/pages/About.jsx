import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="text-lg mb-6">
        Welcome to our medical website, dedicated to lung cancer detection.
      </p>
      <p className="text-lg mb-6">
        Our mission is to provide accurate and timely diagnosis of lung cancer,
        allowing for early detection and improved patient outcomes.
      </p>
      <p className="text-lg mb-6">
        Through the use of advanced technology and medical expertise, we aim to
        revolutionize the way lung cancer is diagnosed and treated.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Our Approach</h2>
      <p className="text-lg mb-6">
        At our medical center, we employ state-of-the-art imaging techniques and
        machine learning algorithms to detect lung cancer at its earliest stages.
      </p>
      <p className="text-lg mb-6">
        Our team of experienced radiologists and oncologists work collaboratively
        to analyze the results and provide personalized treatment plans tailored
        to each patient's needs.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us</h2>
      <ul className="list-disc pl-8 mb-6">
        <li className="text-lg mb-2">
          Expertise: Our technical team  have years of experience in training and testing
          the deep learning models.
        </li>
        <li className="text-lg mb-2">
          Advanced Technology: We utilize cutting-edge imaging technology and
          Forward-Forward Neural Networks to improve accuracy and efficiency.
        </li>
        <li className="text-lg mb-2">
          Patient-Centric Care: We prioritize the well-being and comfort of our
          patients, providing compassionate care throughout the entire process.
        </li>
        <li className="text-lg mb-2">
          Timely Diagnosis: Early detection is crucial for successful lung cancer
          treatment, and we strive to provide timely and accurate diagnoses.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
      <p className="text-lg mb-2">
        If you have any questions or would like to schedule an appointment, please
        feel free to contact us.
      </p>
      <p className="text-lg mb-2">Phone: +91 8125311448</p>
      <p className="text-lg">Email: info@lungcancerdetection.com</p>
    </div>
  );
};

export default About;

