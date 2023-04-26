import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, Card, CardBody, Input } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
import SummaryCard from "./SummaryCard"
import ChartSummaryCard from "./ChartSummaryCard"
import LineChartLarge from "./LineChartLarge"

//redux

const Dashboard = props => {
  //meta title
  document.title = "Dashboard | Klasha"

  return (
    <React.Fragment>
      <div className="page-content" style={{ backgroundColor: "white" }}>
        <Container fluid>
          <Row lg="4">
            <SummaryCard
              title="Today's Sales"
              description={<>&#8358;1,652.50</>}
            />
            <ChartSummaryCard
              title="Today's Sales"
              description={<>&#8358;1,652.50</>}
              date="24 Aug - 01 Sep 21"
            />
            <ChartSummaryCard
              title="Today's Sales"
              description={<>&#8358;1,652.50</>}
              date="24 Aug - 01 Sep 21"
            />
            <ChartSummaryCard
              title="Today's Sales"
              description={<>&#8358;1,652.50</>}
              date="24 Aug - 01 Sep 21"
            />
          </Row>
          <Row lg="12">
            <Col lg="8">
              <Card>
                <div className="d-flex flex-row align-items-center mb-3">
                  <h5 className="me-5">Sales</h5>
                  <h6 className="me-3" style={{ color: "#EF2C5A" }}>
                    7 Days
                  </h6>
                  <h6 className="me-3">30 Days</h6>
                  <Input
                    className="me-2"
                    style={{ width: "100px" }}
                    type="select"
                  >
                    <option>USD</option>
                    <option>NGR</option>
                    <option>GBP</option>
                  </Input>
                  <Input
                    className="me-3"
                    style={{ width: "200px" }}
                    type="select"
                  >
                    <option>Email</option>
                  </Input>
                  <button type="button" className="btn btn-outline-secondary">
                    <i className="bx bx-down-arrow-alt"></i> Download Report
                  </button>
                </div>
                <CardBody
                  style={{
                    padding: "1.25rem 1rem",
                    border: "1px solid black",
                    borderRadius: "5px",
                  }}
                >
                  <LineChartLarge />
                </CardBody>
              </Card>
            </Col>
            <Card
              className="mt-5"
              style={{
                boxShadow: "none",
                border: "none",
                flexGrow: "1",
                flexBasis: "0",
              }}
            >
              <CardBody
                style={{
                  padding: "1.25rem 1rem",
                  borderRadius: "5px",
                  backgroundColor: "#EF2C5A",
                }}
              >
                <div className="klasha-lines d-flex flex-column justify-content-flex-end align-items-flex-end">
                  <p
                    style={{
                      maxWidth: "220px",
                      color: "white",
                      fontSize: "20px",
                    }}
                    className="mb-5"
                  >
                    KlashaWire- send money to businesses globally from Africa
                  </p>
                  <button
                    type="button"
                    className="btn btn-dark"
                    style={{
                      marginTop: "120px",
                      width: "120px",
                    }}
                  >
                    Send a Wire
                  </button>
                </div>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any,
  chartsData: PropTypes.any,
  onGetChartsData: PropTypes.func,
}

export default withTranslation()(Dashboard)
