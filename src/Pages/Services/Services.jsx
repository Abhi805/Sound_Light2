import React from 'react'

export default function Services() {
  return (
    <>
       <div className="container-fluid p-0">
      <div className="position-relative text-center text-white">
    <img src="/assets/servicebg.jpg" className="img-fluid w-100" style={{height: "500px", objectFit: "cover"}} alt="Header"/>
    <h1 className="position-absolute top-50 start-50 translate-middle display-4 fw-bold">SERVICES</h1>
  </div>


  <div className="container py-5">
    <div className="row mb-5 align-items-center">
      <div className="col-md-6">
        <img src="/assets/liveconcert.jpg" className="img-fluid rounded shadow" alt="Live Concert"/>
      </div>
      <div className="col-md-6">
        <h1 className="text-danger fw-bold">LIVE CONCERTS</h1>
        <h4>Live events are real-time entertainment programs organized for a live audience — like concerts, celebrity shows, product launches, DJ nights, etc. Tumhari company (Indore Sound & Light) jaise professionals inhe stage setup, lighting, sound systems, and AV (audio-video) ke saath professionally execute karte hain.</h4>
      </div>
    </div>


    
  

    <div className="row mb-5 align-items-center flex-md-row-reverse">
      <div className="col-md-6">
        <img src="/assets/videoconference.jpg" className="img-fluid rounded shadow" alt="Fashion Show"/>
      </div>
      <div className="col-md-6">
        <h1 className="text-danger fw-bold">VIDEO CONFERENCE</h1>
        <h4>Event video conferencing is a virtual meeting setup that allows people to attend or speak at your event remotely using the internet — through platforms like Zoom, Google Meet, or Microsoft Teams.It’s perfect for corporate events, hybrid meetings, webinars, panel discussions, or guest speakers who can't attend in person..</h4>
      </div>
    </div>

    <div className="row mb-5 align-items-center">
      <div className="col-md-6">
        <img src="/assets/corporatemeets.jpg" className="img-fluid rounded shadow" alt="Corporate Meet"/>
      </div>
      <div className="col-md-6">
        <h1 className="text-danger fw-bold">CORPORATE MEETS</h1>
        <h4>Corporate events are professional gatherings or functions organized by a company for its employees, clients, partners, or stakeholders. These events help businesses build relationships, communicate important messages, boost team morale, or celebrate milestones.</h4>
      </div>
    </div>

    <div className="row mb-5 align-items-center flex-md-row-reverse">
      <div className="col-md-6">
        <img src="/assets/brandevents.jpg" className="img-fluid rounded shadow" alt="Brand Event"/>
      </div>
      <div className="col-md-6">
        <h1 className="text-danger fw-bold">BRAND EVENTS</h1>
        <h4>Brand events are specially designed experiences that promote a company's brand, product, or service in a memorable and engaging way. These events help companies connect emotionally with their audience, build brand awareness, and leave a lasting impression.</h4>
      </div>
    </div>

    <div className="row mb-5 align-items-center">
      <div className="col-md-6">
        <img src="/assets/entertainmentevents.jpg" className="img-fluid rounded shadow" alt="Theme Party" />
      </div>
      <div className="col-md-6">
        <h1 className="text-danger fw-bold">ENTERTAINMENT EVENT</h1>
        <h4>Entertainment events are fun and lively shows or gatherings planned to entertain the audience. These can include music, dance, comedy, drama, or celebrity performances — basically anything that creates joy, excitement, and unforgettable memories!</h4>
      </div>
    </div>

    <div className="row mb-5 align-items-center flex-md-row-reverse">
      <div className="col-md-6">
        <img src="/assets/promotion.jpg" className="img-fluid rounded shadow" alt="Wedding" />
      </div>
      <div className="col-md-6">
        <h1 className="text-danger fw-bold">PROMOTIONS</h1>
        <h4>Promotion events are marketing-focused gatherings or activities designed to promote a product, brand, service, or idea to a specific audience. The main goal is to increase visibility, attract customers, and boost sales or awareness through interactive experiences.</h4>
      </div>
    </div>

    <div className="row mb-5 align-items-center">
      <div className="col-md-6">
        <img src="/assets/exibition.jpg" className="img-fluid rounded shadow" alt="Exhibition" />
      </div>
      <div className="col-md-6">
        <h1 className="text-danger fw-bold">EXHIBITIONS</h1>
        <h4>Exhibition events are large-scale events where different brands, businesses, or artists showcase their products, services, or creations to a wide audience. These events are usually held in halls, malls, or expo centers and are perfect for networking, marketing, and attracting new customers.</h4>
      </div>
    </div>
  </div>


  <footer className="bg-dark text-white text-center py-4">
    <p className="mb-0">&copy; 2025 INDORE SOUND&LIGHT Events. All rights reserved.</p>
  </footer>
</div>

    </>
  )
}