import React from 'react';

const Events = () => {
  const eventImages = [
    { src: '/images/event1.jpg' },
    { src: '/images/event2.jpg', title: 'MP Sthapna Diwas' },
    { src: '/images/event3.jpg' },
    { src: '/images/event4.jpg' },
    { src: '/images/event5.jpg' },
    { src: '/images/event6.jpg' },
    { src: '/images/event7.jpg' },
    { src: '/images/event8.jpg' },
    { src: '/images/event9.jpg' }
  ];

  return (
    <div>
      {/* Banner */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/assets/eventbg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px'
        }}
      >
        <h1 className="display-4 fw-bold">EVENT</h1>
      </div>

      {/* Description */}
      <div className="container text-center my-5">
        <p>
          A glimpse of some recent events, helping some of the largest clients and celebrities
          with our best-in-class sound systems, advanced lighting equipment, SFX Systems, truss systems,
          Silent Generator (DG) sets, LED walls, etc.
        </p>
      </div>

      {/* Image Grid */}
      <div className="container mb-5">
        <div className="row g-3">
          {eventImages.map((img, idx) => (
            <div key={idx} className="col-md-4 col-sm-6">
              <div className="position-relative overflow-hidden">
                <img
                  src={img.src}
                  alt={`Event ${idx + 1}`}
                  className="img-fluid w-100 rounded"
                  style={{ height: '280px', objectFit: 'cover' }}
                />
                {img.title && (
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: 'rgba(255, 0, 0, 0.7)' }}>
                    <h5 className="text-white text-uppercase">{img.title}</h5>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="container text-center mb-5">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
          </ul>
        </nav>
      </div>

     
    </div>
  );
};

export default Events;