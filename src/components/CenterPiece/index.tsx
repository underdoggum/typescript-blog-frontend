import { Container } from "reactstrap"

export interface ICenterPieceProps {}

const CenterPiece: React.FunctionComponent<ICenterPieceProps> = ({ children }) => {

  return (
    <Container fluid={true} className="p-0">
      <Container
        style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        className="d-flex justify-content-center"
      >
        {children}
      </Container>
    </Container>
  )
}


export default CenterPiece;
