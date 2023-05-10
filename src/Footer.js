import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">ABOUT US</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
              aliquam voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">KEEP IN TOUCH </h5>

            <ul className="list mb-0">
              <li>
                <a href="#!" className="text-dark text-decoration-none">Instagram</a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">Facebook</a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">Twitter</a>
              </li>
             
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">HELP</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark text-decoration-none">Contact Us</a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">T&C</a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">FAQ</a>
              </li>
              <li>
                <a href="#!" className="text-dark text-decoration-none">Consumer policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
      
      


      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} NEXT-GEN
      </div>
    </footer>
  );
};

export default Footer;
