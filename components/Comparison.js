import React from 'react';
import { Progress, Typography } from "@material-tailwind/react";

export default function Comparison({ label, value }) {
  return (
    <div className="bg-white p-4 rounded-lg">
    
      <div className="flex items-center">
        <Typography color="gray" className="text-xs font-medium">{label}</Typography>
        <div className="w-full ml-4">
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue" variant="h6">{value}%</Typography>
          </div>
          <Progress value={value} />
        </div>
      </div>
    </div>

    
  );
}
