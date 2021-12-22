import { Link } from "react-router-dom"
import { Button, Container, Nav, Navbar, NavbarBrand } from "reactstrap"

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = props => {
  return (
    <Navbar color="light" light={true} sticky="top" expand="md">
      <Container>
        <Button outline={true}><NavbarBrand tag={Link} to="/">Home</NavbarBrand></Button>
        <Nav className="mr-auto" navbar />
        <Button outline={true} tag={Link} to="/edit">Create New Post</Button>
      </Container>
    </Navbar>
  )
}


export default Navigation;
