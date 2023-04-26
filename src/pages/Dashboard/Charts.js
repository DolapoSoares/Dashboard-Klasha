import React from "react"
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines"

const LineChart = () => {
  return (
    <React.Fragment>
      <Sparklines
        data={[6, 2, 8, 4, 3, 8, 1, 3, 6, 5, 9]}
        width={100}
        height={33}
      >
        <SparklinesLine
          style={{
            stroke: "#EF2C5A",
            fill: "#EF2C5A",
          }}
        />
      </Sparklines>
    </React.Fragment>
  )
}

export default LineChart
