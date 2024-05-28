import React from 'react';
import Typewriter from 'typewriter-effect';
import profileImage from '../images/Profile.jpg';

const Home = () => {
  return (
    <main className="container-fluid text-center text-light fw-medium bg-primary" style={{ marginTop: '8vh', height: '90vh' }}>
      <section>
        <img src={profileImage} alt="Adidya Abimanyu" className="rounded-circle img-thumbnail" width="200" style={{ marginTop: '8vh' }} />
        <h1 className="display-4">Adidya Abimanyu</h1>
        <h2>
          <Typewriter
            options={{
              strings: ['Mahasiswa', 'Frontend Developer'],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 20
            }}
          />
        </h2>
        <p className='fs-4' style={{marginTop: '14vh'}}>This website was created using React, Typescript and Bootstrap.</p>
      </section>
    </main>
  );
}

export default Home;
