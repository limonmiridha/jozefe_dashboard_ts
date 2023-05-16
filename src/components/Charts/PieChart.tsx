import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ data, width, text, fontSize, colors }: any) => {
  const styles = {
    root: {
      // textAlign: 'center',
      position: 'relative',
      width: width,
      height: '60vh',
      margin: '0 auto',
    },
    overlay: {
      position: 'absolute',
      top: -75,
      right: 40,
      bottom: 0,
      left: 40,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: fontSize,

      // background: "#FFFFFF33",
      textAlign: 'center',
      // This is important to preserve the chart interactivity
      pointerEvents: 'none',
    },
  };

  return (
    <div className="max-h-64 root">
      <ResponsivePie
        data={data}
        // colors={['#E5FEF4', '#0DDFA4']}
        margin={{ top: -40, right: 40, bottom: 40, left: 40 }}
        innerRadius={0.7}
        cornerRadius={0}
        activeOuterRadiusOffset={8}
        // colors={{ scheme: 'nivo' }}
        // colors={{ scheme: 'paired' }}
        colors={colors ? colors : (d: any) => d.data.color}
        // borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={8}
        arcLinkLabelsTextOffset={8}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
        arcLinkLabelsOffset={-5}
        arcLinkLabelsDiagonalLength={23}
        arcLinkLabelsStraightLength={15}
        arcLinkLabelsThickness={10}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 1.7]],
        }}
      />
      <div className="overlay">
        <span className="font-bold">{text}</span>
      </div>
    </div>
  );
};

export default PieChart;
