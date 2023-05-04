import React from 'react';
import Card from '../GlobalCard';
import Image from 'next/image';
import sourceType from '../../../public/images/charts/sourceType.svg';
import calendar from '../../../public/images/tasks/calendar.svg';
import PieChart from './PieChart';
import CurrencyBtn from '../CurrencyBtn';

// TODO: Add dynamic chart data
const CHART_DATA = [
  { name: '', value: 0, fill: '' },
  { name: 'Pending', value: 2000, fill: '#51cbff' },
  { name: 'Paid', value: 5000, fill: '#017efb' },
  { name: 'Closed/Won', value: 10_000, fill: '#b6e9ff' },
];
const DashboardSourceType = ({ chart = CHART_DATA }) => {
  const total = chart.reduce((a: number, b: any) => a + b.value, 0);
  return (
    <Card cls="px-0 py-4 shadow-none">
      <header className="flexs w-full justify-start gap-3 border-b border-b-primary-cool-grey/25 px-4 pb-2">
        <Image
          src={sourceType}
          alt={''}
          className="h-8 w-8 rounded-full bg-red-200"
        />
        <h2>Source Type</h2>
      </header>
      <div className="mt-2 flexs justify-between px-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">Summary</h3>
          <p className="flexs gap-3 text-xs text-primary-cool-grey">
            <Image src={calendar} alt={''} />
            From 1-6 Mar 2023
          </p>
        </div>
        <CurrencyBtn />
      </div>
      <div className="h-64">
        <PieChart data={CHART_DATA} value={'17k'} />
      </div>
      <div className="flex flex-col gap-4 px-4">
        {CHART_DATA.map(
          (item, index) =>
            index > 0 && (
              <div key={index} className="justify-betweens">
                <div className="center gap-3">
                  <span
                    className="h-4 w-4 rounded-full"
                    style={{
                      background: item.fill,
                    }}
                  />
                  <p>{item.name}</p>
                </div>
                <div className="flexs gap-4">
                  <h3 className="font-semibold">
                    {item.value.toLocaleString('en-US')}
                  </h3>
                  <span className="justify-centers h-8 w-8 rounded-full bg-blue-100 p-1 text-[10px] font-bold text-blue-500">
                    {((item.value / total) * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            )
        )}
      </div>
      <footer className="flexs mt-4 w-full justify-start gap-3 border-t pt-2">
        <h2 className="mx-auto whitespace-nowrap font-semibold">
          Manage All Source Types
        </h2>
      </footer>
    </Card>
  );
};

export default DashboardSourceType;
