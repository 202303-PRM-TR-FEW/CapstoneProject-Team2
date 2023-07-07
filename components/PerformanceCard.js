import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  import { BsChevronRight } from "react-icons/bs";
  
  export default function PerformanceCard({ title, statistics, icon: Icon,bgColor ,iconColor}) {
      bgColor=`${bgColor}  rounded-lg p-2 me-3`
      iconColor=`${iconColor}  w-10 h-10`
    return (
      <Card className="mt-6 rounded-lg w-300 ">
        <CardBody className="flex items-center justify-between p-2 gap-10">
          <div className="flex items-center gap-2">
            <div className={bgColor}>
              <Icon className={iconColor} />
            </div>
            <div className="pe-5 w-100">
              <Typography className="text-sm font-bold text-gray-500">
                {title}
              </Typography>
              <Typography className="text-black font-bold text-lg">
                {statistics}
              </Typography>
            </div>
          </div>
          <CardFooter className="pt-0">
            <a href="#" className="inline-block">
              <Button
                size="sm"
                variant="text"
                className="flex items-center gap-2"
              >
                <BsChevronRight className="text-gray-500 w-5 h-5 text-bold" />
              </Button>
            </a>
          </CardFooter>
        </CardBody>
      </Card>
    );
  }