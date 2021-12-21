import { Link } from "react-router-dom"
import { Container, Nav, Navbar, NavbarBrand } from "reactstrap"

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = props => {
  return (
    <Navbar color="light" light={true} sticky="top" expand="md">
      <Container>
        <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
        <Nav className="mr-auto" navbar />
      </Container>
    </Navbar>
  )
}


export default Navigation;
