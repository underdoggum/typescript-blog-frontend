import { Link } from "react-router-dom"
import { Button, Container, Nav, Navbar, NavbarBrand } from "reactstrap"

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = props => {
  return (
    <Navbar color="light" light={true} sticky="top" expand="sm" className="p-2">
      <Container>
        <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
        <Nav className="mr-auto" navbar />
        <Button outline={true} tag={Link} to="/edit">Create New Post</Button>
      </Container>
    </Navbar>
  )
}


export default Navigation;
