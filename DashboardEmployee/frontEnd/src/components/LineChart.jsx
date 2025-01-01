import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";


// Mock data for events
const data = [
  {
    id: 'Workshop',
    color: 'hsl(220, 70%, 50%)',
    data: [
      { x: 'January', y: 4 },
      { x: 'February', y: 8 },
      { x: 'March', y: 3 },
      { x: 'April', y: 6 },
      { x: 'May', y: 5 },
      { x: 'June', y: 10 },
      { x: 'July', y: 9 },
      { x: 'August', y: 1 },
      { x: 'September', y: 7 },
      { x: 'October', y: 0 },
      { x: 'November', y: 4 },
      { x: 'December', y: 2 },
    ],
  },
  {
    id: 'Competition',
    color: 'hsl(100, 70%, 50%)',
    data: [
      { x: 'January', y: 8 },
      { x: 'February', y: 3 },
      { x: 'March', y: 8 },
      { x: 'April', y: 2 },
      { x: 'May', y: 10 },
      { x: 'June', y: 7 },
      { x: 'July', y: 7 },
      { x: 'August', y: 0 },
      { x: 'September', y: 3 },
      { x: 'October', y: 5 },
      { x: 'November', y: 3 },
      { x: 'December', y: 1 },
    ],
  },
  {
    id: 'Seminaire',
    color: 'hsl(340, 70%, 50%)',
    data: [
      { x: 'January', y: 9 },
      { x: 'February', y: 1 },
      { x: 'March', y: 8 },
      { x: 'April', y: 7 },
      { x: 'May', y: 3 },
      { x: 'June', y: 5 },
      { x: 'July', y: 0 },
      { x: 'August', y: 9 },
      { x: 'September', y: 7 },
      { x: 'October', y: 10 },
      { x: 'November', y: 6 },
      { x: 'December', y: 1 },
    ],
  },
  {
    id: 'Formation',
    color: 'hsl(280, 70%, 50%)',
    data: [
      { x: 'January', y: 6 },
      { x: 'February', y: 5 },
      { x: 'March', y: 1 },
      { x: 'April', y: 10 },
      { x: 'May', y: 0 },
      { x: 'June', y: 6 },
      { x: 'July', y: 4 },
      { x: 'August', y: 2 },
      { x: 'September', y: 4 },
      { x: 'October', y: 2 },
      { x: 'November', y: 8 },
      { x: 'December', y: 0 },
    ],
  },
];

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "months",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;