import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap";

export interface IHeaderProps {
  height?: string;
  image?: string;
  title: string;
  headline: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ children, height, image, headline, title }) => {
  
  const headerStyle = {
    background: "linear-gradient(rgba(36,20,38,0.5), rgba(36,39,38,0.5)), url(" + image + ") no-repeat center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: height,
  }
  
  return (
    <header style={headerStyle}>
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <h1 className="display-4 text-white mt-5 mb-2">{title}</h1>
            <h3 className="mb-5 text-white">{headline}</h3>
            {children}
          </Col>
        </Row>
      </Container>
    </header>
  )
}

Header.defaultProps = {
  height: "100%",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
}


export default Header;
