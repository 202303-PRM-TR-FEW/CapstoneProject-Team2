import {
  Card,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";


export default function Activity({ title, name }) {
  return (
    <div className="bg-white dark:bg-slate-800 ">
      <div>
        <Card className="flex-row w-full max-w-[36rem] shadow-none dark:bg-slate-800">
          <div className="mb-2">
            <div className="flex items-center mt-2">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="image"
                className="w-10 h-10 rounded-lg border border-gray-300"
              />
              <div className="ml-2">
                <Typography
                  variant="subtitle1"
                  color="blue-gray"
                  className="text-xs font-bold"
                >
                  {title}
                </Typography>
                <Typography color="gray" className="text-xs">
                  <span variant="subtitle1">{name}</span>
                </Typography>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
