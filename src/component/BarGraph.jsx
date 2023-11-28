import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { data } from './Rechart';

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tiny-bar-chart-35meb';

  render() {
    return (
      <ResponsiveContainer width="70%" height="70%">
        <BarChart width={150} height={40} data={data} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }} >
              <CartesianGrid strokeDasharray='3 3' /> 
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
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d"  />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}