import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

export default function PerformanceCard({ title, statistics, icon: Icon, bgColor, iconColor }) {
  bgColor = `${bgColor} rounded-lg p-2 me-3`;
  iconColor = `${iconColor} w-10 h-12`;

  return (
    <div className="flex justify-center mt-3 h-26 mt-4">
      <Card className="w-full rounded-lg mx-3">
        <CardBody className="flex flex-col items-center justify-center p-3">
          <div className="w-28 h-8 flex items-center justify-center rounded-lg bg-gray-100 mb-2">
            <Icon className={iconColor} />
          </div>
          <div className="w-full text-center">
            <Typography className="text-xs font-bold text-gray-500">{title}</Typography>
            <Typography className="text-sm font-bold text-black">{statistics}</Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
