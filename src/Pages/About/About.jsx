import React from 'react';
import './About.css';
const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="text-white text-center py-5" style={{ backgroundImage: 'url(/assets/bgimage.jpg)', backgroundSize: 'cover', height: '300px' }}>

        <h1 className="display-4 fw-bold" style={{ marginTop: '93px' }}  >ABOUT US</h1>
      </section>

      {/* Intro Section */}
      <section className="container py-5">
        <h6 className="text-danger fw-bold">WE REINVENT MUSIC.</h6>

        <h1 className="fw-bold text-uppercase">Inodre Sound&Light Team Event Industry</h1>
        <img src="/assets/ourteam.jpg" alt="Indore Sound&light Team" className="img-fluid d-block mx-auto" style={{ width: '1000px' }} />
        <h4>
        Meet the heart of Indore Sound & Light – a passionate team of creators, planners, and dream-makers.With deep experience in sound, lighting, and event production, we work together to turn your vision into unforgettable reality.From behind-the-scenes tech experts to front-line coordinators, every team member plays a role in making your event truly magical.
        </h4>
        <div className="text-center my-4">
          <button className="btn btn-danger px-4 py-2">SPEAK WITH OUR EXPERTS</button>
        </div>
      </section>

      {/* Experience Section */}
      <section >
          <div className="container my-5">
                <div className="row align-items-start">
                       <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
                         <h6 className="text-danger fw-bold  text-uppercase border-bottom border-2 border-danger d-inline-block pb-1 mb-3">WHY US</h6>
                         <h2 className="fw-bold text-uppercase display-6 1h-sm">The Leader, When it Comes to Experience</h2>
                       </div>
                   <div className="col-md-6">
                        <h1 className="text-secondary fs-6">
                        At Indore Sound & Light, we don’t just manage events — we create experiences Our passionate team combines creativity, technical expertise, and a deep understanding of your needs to bring your vision to life.Whether it’s a wedding, concert, fashion show, or corporate event, we handle every detail with care and commitment.
                        </h1>
                       

                    </div>
                 </div>
           </div>
    </section>

      {/* Memoriam Section */ }
  <section className="container py-5 d-flex align-items-center border-top">
    <div className="row align-items-center">
      <div className="col-md-8">
        <h1 className="text-danger fw-bold">satish thakre</h1>
        <h5>
        Meet Satish Thakre – the guiding force behind Indore Sound & Light.With years of hands-on experience and a deep passion for perfection, Satish Sir leads our team with dedication, vision, and a never-give-up attitude.His calm leadership, expert planning, and technical brilliance ensure that every event runs smoothly and leaves a lasting impression.Whether it’s a high-energy concert or an elegant wedding, he makes sure every light shines just right and every sound hits the perfect note.
        </h5>
      
      </div>
      <div className="col-md-4 text-center">
        <img src="/assets/eventmanger.jpg" className="img-fluid rounded-circle" alt="Mr. Soni" style={{ maxWidth: '250px' }} />
      </div>
    </div>
  </section>

  {/* Our Team */ }
  <section className="bg-dark text-white py-5 text-center">
    <h5 className="text-danger">Our Team</h5>
    <h2 className="fw-bold">Experts of Indore sound&light</h2>
    <div className="container mt-4">
      <div className="row g-3">
        {[
          'Alesh Soni - Director',
          'Vijay Soni - Director',
          'Amit Soni - Director',
          'Manish Soni - Director',
          'Gaurav Soni - Director',
          'Sharad Soni - Executive Manager',
          'Prabhat Soni - Executive Manager',
          'Shubham Soni - Executive Manager'
        ].map((name, index) => (
          <div key={index} className="col-6 col-md-3">
            <div className="bg-light text-dark p-3 rounded">
              <img src={`/assets/team-${index + 1}.jpg`} className="img-fluid rounded mb-2" alt={name} />
              <p className="fw-bold mb-0">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Clients Section */ }
  <section className="container py-5 text-center">
    <h6 className="text-danger">OUR CLIENTS</h6>
    <h2 className="fw-bold">WE LOVE OUR CLIENTS & THEY LOVE US</h2>
    <div className="row mt-4">
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image1.png" className="img-fluid" alt="Client 1" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image2.png" className="img-fluid" alt="Client 2" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image3.png" className="img-fluid" alt="Client 3" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image4.png" className="img-fluid" alt="Client 4" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image5.png" className="img-fluid" alt="Client 5" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image6.png" className="img-fluid" alt="Client 6" />
    </div>

    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image7.png" className="img-fluid" alt="Client 7" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image8.png" className="img-fluid" alt="Client 8" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image9.png" className="img-fluid" alt="Client 9" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image10.png" className="img-fluid" alt="Client 10" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image11.png" className="img-fluid" alt="Client 11" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image12.png" className="img-fluid" alt="Client 12" />
    </div>

    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image13.png" className="img-fluid" alt="Client 13" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image14.png" className="img-fluid" alt="Client 14" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image15.png" className="img-fluid" alt="Client 15" />
    </div>
    <div className="col-4 col-md-2 mb-3">
      <img src="/assets/partners/image16.png" className="img-fluid" alt="Client 16" />
    </div>
  </div>
  <button className="btn btn-danger mt-3">LET'S TALK ABOUT YOUR NEXT EVENT</button>
  </section>
</div>
  );
};

export default About;