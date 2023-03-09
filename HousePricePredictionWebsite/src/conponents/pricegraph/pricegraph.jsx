import React from "react";
import "../pricegraph/pricegraph.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  Filler,
  LineElement,
  Title,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  Filler,
  LineElement,
  Title
);

const Pricegraph = (data) => {
  console.log(data["data"]);
  let key = [];
  let val = [];
  for (let v of Object.keys(data["data"]["allLocCount"])) {
    key.push(v);
    val.push(data["data"]["allLocCount"][v]);
  }
  const datagraph = {
    labels: key,

    datasets: [
      {
        label: "Prediction distribution.",
        data: val,
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const linedata = {
    labels: key,
    datasets: [
      {
        label: "Location which has highest estimate",
        data: data["data"]["pricestat"]["all"],
        backgroundColor: "yellow",
        borderWidth: 1,
        borderColor: "green",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div className="bargraph">
      <h1 className="heading-pred">User statstics</h1>
      <div className="gph1">
        <div className="sizegraph">
          <Bar data={datagraph} options={options}></Bar>
        </div>
        <div className="contentgph">
          You can visualize the number of properties that you've saved as
          favorites or expressed interest in, in every location that you've been
          searching for. This can help you keep track of your progress in each
          area and give you a better idea of where to focus your property search
          efforts. allows you to easily see which locations have the most
          properties that match your preferences, and which areas may require
          more attention. It's a powerful tool that can help you streamline your
          property search and find your dream home faster.
        </div>
      </div>
      <div className="dividergraph"></div>
      <div className="manmin">
        <div className="maxp">
          <p className="p-heading">HEIGHT EST</p>
          <p className="p-value">{data["data"]["pricestat"]["max"]}</p>
        </div>
        <div className="minmaxdivi"></div>
        <div className="minp">
          <p className="p-heading">LOWEST EST</p>
          <p className="p-value">{data["data"]["pricestat"]["min"]}</p>
        </div>
      </div>
      <div className="dividergraph"></div>
      <div className="gph2">
        <div className="sizegraph2">
          <Line data={linedata} options={options}></Line>
        </div>
        <div className="contentgph">
          This graph helps you compare the highest and lowest prices in each
          location to other areas. This can help you identify the areas that
          offer the best value for your money and adjust your property search
          accordingly. This is just one of the many features that we offer to
          make your real estate journey as easy and efficient as possible. With
          our innovative tools and user-friendly platform, you can find the
          perfect property at the right price.
        </div>
      </div>
    </div>
  );
};

export default Pricegraph;
