import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

/*
 * This function visualizas the given grade distribution
 */
const GradeDistribution = (props) => {
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 15,
          },
        },
      },
    },
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <div className="GradeGraph">
      <h1>Grade Distribution</h1>
      <div style={{ width: "650px" }}>
        <Bar data={props.gradeData} height={400} options={options} />
      </div>
    </div>
  );
};

export default GradeDistribution;
