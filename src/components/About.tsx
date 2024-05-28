import React from "react";
import Marquee from "react-fast-marquee";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../images/c.png';
import '../images/cpp.png';
import '../images/java.png';
import '../images/javascript.png';
import '../images/python.png';
import '../images/react.png';
import '../images/typescript.png';
import '../images/html.png';
import '../images/css.png';
import '../images/laravel.png';
import '../images/sqlserver.png';
import '../images/flask.png';
import '../images/bootstrap.png';

const skills = [
    { name: 'React', image: require('../images/react.png') },
    { name: 'Typescript', image: require('../images/typescript.png') },
    { name: 'Javascript', image: require('../images/javascript.png') },
    { name: 'C', image: require('../images/c.png') },
    { name: 'C++', image: require('../images/cpp.png') },
    { name: 'Java', image: require('../images/java.png') },
    { name: 'Python', image: require('../images/python.png') },
    { name: 'HTML', image: require('../images/html.png') },
    { name: 'CSS', image: require('../images/css.png') },
    { name: 'Laravel', image: require('../images/laravel.png') },
    { name: 'MSSQL', image: require('../images/sqlserver.png') },
    { name: 'Flask', image: require('../images/flask.png') },
    { name: 'Bootstrap', image: require('../images/bootstrap.png') }
];

const About = () => {
    return (
        <section className="container-fluid text-center bg-primary" style={{ marginTop: '8vh', height: '90vh' }}>
            <h1 className="badge text-bg-light text-primary fs-1" style={{ marginTop: '10vh' }}>About Me</h1>
            <p className="pt-3 fs-4 text-light">
                Hello, my name is Adidya Abimanyu, you can call me Adid, my place of residence is Jakarta,
                I am an Informatics student at Sebelas Maret University. I have an interest in the world of programming such as
                databases, full-stack development, and object-oriented programming.
            </p>
            <p className="badge text-bg-light text-primary fs-1 mt-5">Skills</p>
            <div className="container-fluid my-4">
                <Marquee gradient={false} speed={50}>
                    {skills.map((skill, index) => (
                        <div key={index} className="mx-3">
                            <div className="card text-bg-light shadow" style={{ width: '150px' }}>
                                <img src={skill.image} className="card-img-top" alt={skill.name} height={100} />
                                <div className="card-body">
                                    <h5 className="card-title">{skill.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default About;