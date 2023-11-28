import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <>
        <ResponsiveContainer width='70%' height='70%'>
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* 차트 실선*/}
            <CartesianGrid strokeDasharray='3 3' /> 
            {/* 커스텀 X축 선 */}
            <XAxis
              dataKey='name'
              label={{
                value: 'Custom X-Axis Label',
                position: 'insideBottom',
                offset: -10,
              }}
            />
            {/* 커스텀 Y축 선*/}
            <YAxis
              label={{
                value: 'Custom Y-Axis Label',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip />
            <Legend />
            {/* 꺽은 선들*/}
            <Line
              type='monotone'
              dataKey='pv'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
          </LineChart>
          
          
        </ResponsiveContainer>
        <div>
        </div>
      </>
    );
  }
}