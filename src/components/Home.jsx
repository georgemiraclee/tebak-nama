import { Container, Row, Col } from "react-bootstrap";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "../elements/NavTop";
import GYC from "../assets/gyc.gif";
import './Home.css';

function Home() {
    return (
        <>
            <Navbar />
            <Container className="my-5 px-4">
                <Row>
                    <Col className="wrapper-title">
                        <h1 className="content-title">Tebak nama, teman saudara atau siapapun</h1>
                        <p className="content-desc"><strong>TebakCrush</strong> merupakan sebuah website yang dimana kita dapat menebak nama crush,mantan, teman atau nama yang sedang lo pikirin sekarang banget. tetapi lo cuma bisa menebak namanya terbatas  dari 3 sampai 7 huruf.<br />
                        <i><strong>#PEKADIKIT&nbsp;&nbsp;#TEBAKCRUSH&nbsp;&nbsp;#SIAPACRUSHLO</strong></i>
                        </p>
                        <Link className="content-button" to="/start">Mulai <BiPlayCircle className="content-icon py-1" /></Link>
                        <Link className="content-button2 ms-3" to="/cara-main">Cara Bermain ?</Link>
                    </Col>
                    <Col className="text-center wrapper-image">
                        <img className="home-image" width="80%" src={GYC} alt="TebakCrush" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;