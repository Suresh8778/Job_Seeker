import React from "react";
import { SiTata } from "react-icons/si";
import { SiZoho } from "react-icons/si";
import { SiAirtel } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Zoho",
      location: "OMR Chennai, Tamilnadu",
      openPositions: 10,
      icon: <SiZoho />,
    },
    {
      id: 2,
      title: "Airtel",
      location: "Whitefield Banagalore , karanataka",
      openPositions: 15,
      icon: <SiAirtel />      ,
    },
    {
      id: 3,
      title: "Tata",
      location: "East Navi, Mumbai",
      openPositions: 10,
      icon: <SiTata />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;