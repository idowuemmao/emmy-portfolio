import Merchandise from "../images/merchandise.png";
import adventureworks from "../images/adventureworks.png";
import KPI from "../images/KPI Dashboard image.png";
import regional from "../images/Regional Dashboard picture.png";
import halloween from "../images/halloween.png";
import christmas from "../images/christmas.png";
import employee from "../images/employee.png";
import candy from "../images/candy.png";
import spotify from "../images/Spotify.png";
import email from "../images/email.png";
import india from "../images/india.png";
import supply from "../images/supply.png";
import hub from "../images/hub.png";
import HealthCare from "../images/data-cleaning.png";
import Airline from "../images/Airline.png";
import population from "../images/Population 1.png";

const ProjectData = [
  {
    id: "P00",
    title: "Airline Delay Report",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNzYzOWJmNzktYTM0Mi00NTk1LWFhOWEtMTlmMmQwMTcxMGJmIiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9",
    pic: population,
    code: "https://github.com/idowuemmao/Population_and_Urbanization_Trend",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },
  {
    id: "P0",
    title: "Airline Delay Report",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZGZiYzdmOTYtZDcyNC00NzQ1LWFlOGQtODk2MjMxOWFiNTQzIiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9",
    pic: Airline,
    code: "https://github.com/idowuemmao/Airline_Delay_Report",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },
  {
    id: "P1",
    title: "Merchandise Sale Report",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYjBjMGViZWUtNGNlYS00MGVhLTlkNzUtMGU2NjJkMzk1NmRjIiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9",
    pic: Merchandise,
    code: "https://github.com/idowuemmao/Merchandise_Sale_Report",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },
  {
    id: "P2",
    title: "Adventure Works Report",
    url: "https://www.linkedin.com/posts/emmanuel-idowu-analyst_my-adventure-work-activity-7247515756182069248-VbCK",
    pic: adventureworks,
    code: "https://github.com/idowuemmao/AdventureWorksDashboard",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },

  {
    id: "P3",
    title: "KPI Dashboard",
    url: "https://www.linkedin.com/posts/emmanuel-idowu-analyst_dataanalytics-excel-kpidashboard-activity-7219012388312801280-dOij",
    pic: KPI,
    code: "https://github.com/idowuemmao/KPI-Dashboard",
    stack: ["Advanced Excel", "Google Sheet", "VBA", "Canva"],
  },
  {
    id: "P4",
    title: "Regional Sales Dashboard",
    url: "https://www.linkedin.com/posts/emmanuel-idowu-analyst_dataanalytics-excel-datavisualization-activity-7221061450386010112-YBsB",
    pic: regional,
    code: "https://github.com/idowuemmao/Regional-Sales-Dashboard",
    stack: ["Advanced Excel", "Google Sheet", "VBA", "Canva"],
  },
  {
    id: "P5",
    title: "Candy Research Report",
    url: "https://app.powerbi.com/view?r=eyJrIjoiYjA0Y2IxZmMtZWU1OC00OWUzLWEwNjQtYTQ0ZmQ1NTc3YzdlIiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9",
    pic: candy,
    code: "https://github.com/idowuemmao/Candy_Research_Report",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },
  {
    id: "P6",
    title: "Employees Performance Report",
    url: "https://www.linkedin.com/posts/emmanuel-idowu-analyst_datadna-dashboard-visualizations-activity-7255597262561509376-tzJe",
    pic: employee,
    code: "https://github.com/idowuemmao/Employee_Performance",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },
  {
    id: "P7",
    title: "Halloween Candy Report",
    url: "https://mavenanalytics.io/project/20500",
    pic: halloween,
    code: "https://github.com/idowuemmao/Mavin-Halloween-Candy-Dashboard",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },
  {
    id: "P8",
    title: "Christmas Holiday Sales Report",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMTcyMzUyZTktNWZlYy00OWVmLWFiYjMtMWJlMDU2OTA0NTk2IiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9",
    pic: christmas,
    code: "https://github.com/idowuemmao/Mavin-Halloween-Candy-Dashboard",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },
  {
    id: "P9",
    title: "Spotify Streaming Report",
    url: "https://mavenanalytics.io/project/26185",
    pic: spotify,
    code: "https://github.com/idowuemmao/Spotify-Streaming-Report",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },
  {
    id: "P10",
    title: "Email Campaign Report",
    url: "https://app.powerbi.com/view?r=eyJrIjoiZGNiNjc5MWUtNjkxZi00ZTBlLTg5Y2QtMDU5NzI3NTlmMjc1IiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9",
    pic: email,
    code: "https://github.com/idowuemmao/Email_Campaign_Report",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },
  {
    id: "P11",
    title: "Indian Box Office Report",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7287108125193646080",
    pic: india,
    code: "https://github.com/idowuemmao/India-Box-Office-Report",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },
  {
    id: "P12",
    title: "Supply Chain Report",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNDI2NTIxNjYtNTdmMi00NWRjLWE4NmQtMjE3YTU4NTliNjU4IiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9",
    pic: supply,
    code: "https://github.com/idowuemmao/Supply_chain_Report",
    stack: ["Power Query", "Power BI", "DAX and Measures", "Canva"],
  },
  {
    id: "P13",
    title: "HealthCare Report",
    url: "https://docs.google.com/spreadsheets/d/1IAv51ATZFR9F0tO4JaN-zjdS8oVl98mmnCR7RBgSKTA/edit",
    pic: hub,
    code: "https://github.com/idowuemmao/Peace_HealthCare_Report",
    stack: ["Google Sheet"],
  },
  {
    id: "P14",
    title: "HealthCare Data Cleaning",
    url: "https://www.linkedin.com/posts/emmanuel-idowu-analyst_datacleaningchallenge-greendatasolutions-activity-7292845953332514817-FdvO",
    pic: HealthCare,
    code: "https://github.com/idowuemmao/HealthCare_Data_Cleaning",
    stack: ["Power Query", "Ms Excel"],
  },
];
export default ProjectData;
