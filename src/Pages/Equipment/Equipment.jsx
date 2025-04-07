import React from "react";

const Equipment = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="equipment-hero"
        style={{
          backgroundImage: "url('/assets/equipmentbg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          color: 'white',
        }}
      >
        <div
          style={{
           
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 className="equipment-title">OUR EQUIPMENTS</h1>
        </div>
      </div>

      {/* Under Maintenance Message */}
      <div className="text-center py-5">
        <h2 className="lead text-muted">
          INDORE SOUND&LIGHT
        </h2>
      </div>

      {/* Background Image Section with Left Text & Right Form */}
      <div
        className="equipment-banner d-flex align-items-center"
        style={{
          backgroundImage: "url('/assets/equipmentimage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight:"100vh",
          color:"white",
          position:"relative",
          padding: "60px 0",
        }}
       >
        <div
          className="container"
         
         >
          <div className="row align-items-center">
            {/* Left side - Text */}
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="fw-bold">PLANNING YOUR NEXT EVENT?</h2>
              <p className="lead">
                Talk to us to book our event services. Fresh and innovative
                ideas to engage your crowd.
              </p>
              <button className="btn btn-outline-light mt-3">
                SPEAK WITH OUR EXPERTS
              </button>
            </div>

            {/* Right side - Form */}
            <div className="col-md-6">
              <div 
              className="bg-white text-dark rounded p-4 shadow"
              style={{
            maxWidth: "500px",
            margin: "0 auto",
            backgroundColor: "rgba(255,255,255,0.9)", // slightly transparent
             }}>
                <h5 className="text-center text-white bg-danger py-2 rounded">
                  GET IN TOUCH
                </h5>
                <form>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control mb-3"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control mb-3"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="form-control mb-3"
                  />
                  <textarea
                    className="form-control mb-3"
                    rows="4"
                    placeholder="Tell us about your event"
                  ></textarea>
                  <button className="btn btn-danger w-100" type="submit">
                    LET’S GET STARTED
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;