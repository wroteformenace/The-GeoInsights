import React from "react";

// Simplified continent paths (replace these with real SVG paths from a detailed world map)
const continentPaths = {
  africa:
    "M370,250 L400,300 L430,250 L410,220 L370,230 Z", // Replace with real path data
  europe:
    "M420,180 L450,170 L430,200 L410,210 Z",
  asia:
    "M510,140 L600,120 L570,200 L520,210 Z",
  northAmerica:
    "M180,100 L230,80 L200,160 L170,150 Z",
  southAmerica:
    "M220,260 L250,320 L200,340 L190,300 Z",
  oceania:
    "M670,320 L700,340 L690,360 L660,350 Z",
  antarctica:
    "M350,400 L500,420 L400,430 Z",
};

const continents = [
  { id: "africa", name: "Africa" },
  { id: "europe", name: "Europe" },
  { id: "asia", name: "Asia" },
  { id: "northAmerica", name: "North America" },
  { id: "southAmerica", name: "South America" },
  { id: "oceania", name: "Oceania" },
  { id: "antarctica", name: "Antarctica" },
];

// Rough label positions (adjust as needed)
const labelPositions = {
  africa: { x: 400, y: 270 },
  europe: { x: 440, y: 190 },
  asia: { x: 560, y: 170 },
  northAmerica: { x: 210, y: 120 },
  southAmerica: { x: 230, y: 320 },
  oceania: { x: 690, y: 350 },
  antarctica: { x: 430, y: 425 },
};

export default function InteractiveWorldMap({ selectedContinent, onSelect }) {
  return (
    <svg
      width="100%"
      height="450"
      viewBox="0 0 800 450"
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: "transparent" }}
    >
      <rect width="100%" height="100%" fill="transparent" />
      {continents.map(({ id, name }) => {
        const isSelected = selectedContinent === name;
        const { x, y } = labelPositions[id];

        return (
          <g
            key={id}
            onClick={() => onSelect(name)}
            style={{ cursor: "pointer" }}
          >
            <path
              d={continentPaths[id]}
              fill={isSelected ? "#1c314a" : "#3fa7ff"}
              stroke="#fff"
              strokeWidth="2"
              opacity={selectedContinent && !isSelected ? 0.5 : 1}
              style={{
                transition: "fill 0.3s, opacity 0.3s",
                filter: isSelected ? "drop-shadow(0 0 10px #3fa7ff88)" : "none",
              }}
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              fill="#eaf6ff"
              fontSize="15"
              fontWeight="600"
              pointerEvents="none"
              style={{ textShadow: "0 1px 4px #0008" }}
            >
              {name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

