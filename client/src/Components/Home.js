import logo from "../Images/logo-t.png";
import Posts from "./Posts";
import SharePosts from "./SharePost";
import User from "./User";
import { Container, Row, Col } from "reactstrap"; //import the Reactstrap Components
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import image1 from '../Images/image1.jpg';
import cooc from '../Images/cooc.png';
import pink from '../Images/pink.png';
import white from '../Images/white.png';
import sth from '../Images/sth.png';
import miss from '../Images/miss.png';
const Home = () => {
  const email = useSelector((state) => state.users.user.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email]);

  return (
    <>
      <Row>
      <Col md={9}>
      <Row>
        <h2>Explore Our Collection</h2>
      <Col className="columndiv2" lg="2">
      <img src={cooc} className='loginImage'/>
      <h5>Cooc Perfum</h5>
      </Col>
      <Col className="columndiv2" lg="2">
      <img src={pink} className='loginImage'/>
      <h5>Pink Perfum</h5>
      </Col>
      <Col className="columndiv2" lg="2">
      <img src={white} className='loginImage'/>
      <h5>White Perfum</h5>
      </Col>
      <Col className="columndiv2" lg="2">
      <img src={sth} className='loginImage'/>
      <h5>Sth Perfume</h5>
      </Col>
      <Col className="columndiv2" lg="2">
      <img src={miss} className='loginImage'/>
      <h5>Miss Perfume</h5>
      </Col>
      </Row>
      <br></br>
      <br></br>
          <SharePosts />
        </Col>
        <Col md={3}>
          <User />
        </Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={9}>
          <Posts />
        </Col>
      </Row>
    </>
  );
};

export default Home;
