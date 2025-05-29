/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const MarketSizeSection = () => {
  const breathingTubeData = [
    { name: "Operating Room", namex: " OR: ", value: 15, color: "#3B82F6" },
    {
      name: "Intensive Care Unit",
      namex: " ICU: ",
      value: 2.5,
      color: "#10B981",
    },
    { name: "Outside OR/ICU", namex: " ", value: 0.65, color: "#F59E0B" },
  ];

  const expansionData = [
    { name: "Stroke victims", value: 0.6 },
    { name: "Chemotherapy patients", value: 0.5 },
    { name: "Nursing homes", value: 1 },
    { name: "Dysphagia", value: 1.5 },
    { name: "General anesthesia", value: 16 },
    { name: "Diagnostic markets", value: 10 },
    { name: "Trauma victims, after major surgery", value: 0.5 },
  ];

  const CustomLegend = ({ payload }) => (
    <ul className="list-none p-0">
      {payload.map((entry, index) => (
        <li key={`item-${index}`} className="flex items-center mb-2">
          <div
            className="w-4 h-4 rounded-full mr-2"
            style={{ backgroundColor: entry.color }}
          />
          <span className="font-semibold font-mono text-md text-gray-700">
            {entry.value}: {breathingTubeData[index].value}M
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-start text-gray-100 tracking-tight  sm:text-4xl">
          Market Size
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Breathing Tube Usage
            </h3>
            <p className="text-lg mb-6 text-center text-gray-700">
              More than 20 million people in US get breathing tube every year.
            </p>
            <div className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={breathingTubeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ namex, value }) => `${namex}  ${value}M`}
                  >
                    {breathingTubeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend content={<CustomLegend />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Accessible Market
            </h3>
            <p className="text-lg mb-6 text-center text-gray-700">
              Market expansion opportunities totaling over 20 million per year:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {expansionData.map((item, index) => (
                <div
                  key={index}
                  className={`text-center ${
                    index === expansionData.length - 1 ? "col-span-2" : ""
                  } p-4 rounded-lg bg-gray-50`}
                  // className="bg-gray-50 p-4 rounded-lg text-center"
                >
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-3xl font-bold font-mono text-[#145D7A]">
                    {item.value}M
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSizeSection;
