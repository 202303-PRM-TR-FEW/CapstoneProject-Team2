import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Activity() {
  return (
    <div className="bg-white">
      <div>
        <Card className="flex-row w-full max-w-[48rem]">
          <div  className="mb-2">
            <h3 className="text-sm font-medium">Monday</h3>
            <div className="flex items-center mt-2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="image" 
                className="w-12 h-12 rounded-3xl border border-gray-300"
              />
              <div className="ml-2">
                <Typography variant="h6" color="blue-gray" className="text-sm">
                  Becoming a Photographer
                </Typography>
                <Typography color="gray" className="font-normal text-sm">
                <span variant="h6">Clara Manning</span>
                </Typography>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
