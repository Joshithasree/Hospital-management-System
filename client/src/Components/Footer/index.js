import { Container, Row, Col } from "reactstrap";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";
function Footer() {
	return (
		<footer style={{"backgroundColor":"grey"}}>
			<Container fluid={true} >
				<Row>
					<Col sm="12" md="3">
						<h2>Contact Us</h2>
						<ul className="list-unstyled">
							<li>
								<FontAwesomeIcon icon={faPhone} />
								+91 12345678 90
							</li>
							<li>
								<a
									href="https://gmail.com"
									style={{ color: "white" }}
								>
									<FontAwesomeIcon icon={faEnvelope} />{" "}
									contact@CityHospitals.com
								</a>
							</li>
						</ul>
					</Col>

					<Col sm="10" md="5">
						<h2>Addresses</h2>
						<Row>
						<Col>
						<p>H.NO 123/456</p>
						<p>Jubliee Hills</p>
						<p>Hyderabad</p>
						</Col>
						<Col>
						<p>502, Block 3</p>
						<p>Brigade Road</p>
						<p>Bangalore</p>
						</Col>
						<Col>
						<p>Road.No: 5</p>
						<p>Andheri</p>
						<p>Mumbai</p>
						</Col>
						</Row>
						
						
					</Col>
					
					<Col sm="12" md="4">
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://facebook.com"
							fgColor="white"
						/>
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://twitter.com"
							fgColor="white"
						/>
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://linkedin.com"
							fgColor="white"
						/>
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://github.com"
							fgColor="white"
						/>
					</Col>
				</Row>
				<Row>
					<Col sm="12">
						<p>©Copyright 2022 City Hospitals</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
export default Footer;
