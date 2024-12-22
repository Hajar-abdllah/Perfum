import {
  Form,
  Input,
  FormGroup,
  Label,
  Container,
  Button,
  Col,
  Row,
} from "reactstrap";

import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Features/UserSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../Images/1.png';
const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Retrieve the current value of the state from the store, name of state is users with a property user
  const user = useSelector((state) => state.users.user);
  const isSuccess = useSelector((state) => state.users.isSuccess);
  const isError = useSelector((state) => state.users.isError);

  const handleLogin = () => {
    const userData = {
      email: email,
      password: password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (isSuccess) {
      navigate("/");
    }
  }, [user, isError, isSuccess]);

  return (
    <div>
      <Container fluid>
        <Row className="formrow">
        <Col className="columndiv1" lg="12">
        <Col className="columndiv2" lg="5">
            <img src={image1} className='loginImage'/>
          </Col>
            <Form className="div-form"> 
            <Col md={12}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter email..."
                  type="email"
                  className="colorenter"
                  onChange={(e) => setemail(e.target.value)}
                />
              </FormGroup>
            </Col>    
            <Col md={12}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter password..."
                  type="password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <Button onClick={() => handleLogin()}> Login </Button>
              <p className="smalltext">
                No Account? <Link to="/register">Sign Up now.</Link>
            </p>
            </Col>
                  
          
        </Form>
        </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default Login;
