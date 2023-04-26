import React from "react"
import { Col, Card, CardBody } from "reactstrap"
import PropTypes from "prop-types"
import LineChart from "./Charts"

const SummaryCard = ({ title, description, date }) => {
  return (
    <>
      <Card className="mini-stats-wid summary-cards">
        <CardBody
          style={{
            padding: "1.25rem 1rem",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <div className="d-flex">
            <div className="flex-grow-1">
              <p
                style={{ textAlign: "left", width: "100%" }}
              >
                {title}
              </p>
              <h4 className="mb-0" style={{ textAlign: "left" }}>
                {description}
              </h4>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.any,
  date: PropTypes.any,
}

export default SummaryCard
