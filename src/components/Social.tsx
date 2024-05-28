import React from "react";

const Social = () => {
  return (
    <section className="container-fluid text-center" style={{marginTop: '8vh'}}>
      <h1 className="badge text-bg-primary fs-1">Social</h1>
      <div className="row justify-content-evenly pt-4 fs-1">
        <div className="col-md-4">
          <a href="https://www.instagram.com/adidyabimanyu">
            <i className="bi bi-instagram"></i>
          </a>
          <h5>Instagram</h5>
        </div>
        <div className="col-md-4">
          <a href="https://github.com/AdidyaAbimanyu">
            <i className="bi bi-github"></i>
          </a>
          <h5>GitHub</h5>
        </div>
        <div className="col-md-4">
          <a href="@adidyawork88@gmail.com">
            <i className="bi bi-file-earmark-person"></i>
          </a>
          <h5>Resume</h5>
        </div>
      </div>
    </section>
  );
}

export default Social;