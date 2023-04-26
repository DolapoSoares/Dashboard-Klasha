//Import Breadcrumb
import React from "react"
import { Card, CardBody, CardTitle, Container } from "reactstrap"
import Search from "./Search"
import TransTable from "./TransTable"

const Transactions = props => {
  document.title = "Transaction | Klasha"
  return (
    <React.Fragment>
      <div className="page-content" style={{ backgroundColor: "white" }}>
        <Container fluid>
          <Card>
            <CardBody>
              <CardTitle className="mt-5">Transaction History</CardTitle>
              <div className="d-flex flex-row justify-content-between">
                <div>
                  <Search placeholder="Search" />
                </div>
                <div className="d-flex flex-row">
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-3"
                  >
                    Filter <i className="bx bx-filter"></i>
                  </button>
                  <button type="button" className="btn btn-outline-secondary">
                    Export
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <TransTable />
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Transactions
