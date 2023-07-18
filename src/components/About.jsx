import { Container } from "react-bootstrap";
import NavTop from "../elements/NavTop";
import './About.css';

function About() {
    return (
        <>
            <NavTop />
            <Container className="my-5 px-4">
                <h1 className="about-title pb-3">🔑&nbsp;&nbsp;Tentang</h1>
                <p className="about-desc m-0">Kenapa<strong>Tebak Crush</strong> ini muncul adalah untuk memberi jawaban hati lo yang sedang berbunga bunga. Semoga dengan adanya <strong>Tebak Crush</strong> bisa menjadi jawaban cinta lo bahwa dia adalah calon pacar lo.<br /> <i><strong>#PEKADIKIT&nbsp;&nbsp;#TEBAKCRUSH&nbsp;&nbsp;#SIAPACRUSHLO</strong></i></p>
                <div className="mt-4 mb-5">
                    <h4 className="about-section">💻</h4>
                    <p>
                        <a className="about-content" href="https://www.instagram.com/georgemiraclee" target="_blank" rel="noreferrer">@georgemiraclee</a>
                    </p>
                </div>
            </Container>
        </>
    )
}

export default About;