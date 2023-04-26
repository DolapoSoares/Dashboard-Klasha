import React from "react"
import { Line } from "react-chartjs-2"

const LineChartLarge = () => {
  const data = {
    labels: ["20 Aug", "21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug"],
    datasets: [
      {
        label: "My First Dataset",
        data: [3000, 5000, 4000, 3500, 4200, 4700],
        fill: true,
        backgroundColor: "rgba(239, 44, 90, 0.2)",
        borderColor: "#EF2C5A",
        tension: 0.1,
      },
    ],
  }
  var option = {
    scales: {
      yAxes: [
        {
          ticks: {
            max: 6000,
            min: 1000,
            stepSize: 1000,
          },
        },
      ],
    },
  }

  return <Line width={751} height={300} data={data} options={option} />
}

export default LineChartLarge
