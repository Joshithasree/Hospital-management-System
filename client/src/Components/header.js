import { Col, Jumbotron, Row } from 'reactstrap';

function Header({ msg }) {
  return (
    <div className="header" style={{"padding":"10px","backgroundColor":"#6BB96D"}}>
      <Row>
        <Col md="12">
          <h1>Welcome!!! {msg}</h1>
        </Col>
      </Row>
      </div>
    
  );
}
export default Header;
