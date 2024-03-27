import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const preciousMetalsData = [
  {
    metal: "  Gold",
    rate: "  1800 per ounce",
    time: "  Oct 26, 2023, 12:00 PM",
  },
  {
    metal: " Silver",
    rate: " 25 per ounce",
    time: " Oct 26, 2023, 12:00 PM",
  },
  {
    metal: " Platinum",
    rate: " 1000 per ounce",
    time: " Oct 26, 2023, 12:00 PM",
  },
  {
    metal: " Gold",
    rate: " 1800 per ounce",
    time: " Oct 26, 2023, 12:00 PM",
  },
  {
    metal: " Silver",
    rate: " 25 per ounce",
    time: " Oct 26, 2023, 12:00 PM",
  },
  {
    metal: " Platinum",
    rate: " 1000 per ounce",
    time: " Oct 26, 2023, 12:00 PM",
  },
];
const NewsSlider: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div
      className={`scrolling-text-container ${isSticky ? "sticky" : ""}`}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        backgroundColor: "black",
        zIndex: 1000,
        position: "fixed",
        top: isSticky ? 0 : 35, // Adjust the initial top position as needed
      }}
    >
      <Marquee style={{ height: 35 }} speed={25} pauseOnHover={true}>
        {preciousMetalsData.map((metalData) => (
          <span style={{ color: "white" }} key={metalData.metal}>
            {metalData.metal} Rate:{" "}
            <span style={{ color: "red" }}>${metalData.rate}</span>
            <span style={{ color: "#adff2f" }}>{metalData.time} |&nbsp;</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default NewsSlider;
