import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { ashton } from "../assets";
   
  export function CardDefault(talent) {
    console.log(talent.talent.socials)
    // console.log(Object(talent.talent.socials).keys())
    return (
      <Card className="mt-6 w-full">
        <CardHeader color="blue-gray" className="relative h-56 object-cover">

        <img src={talent.talent.img} alt="card-image" className=" h-full w-full object-cover object-top" />
        </CardHeader>
        <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
            {talent.talent.name}
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-2 text-sm">
            {talent.talent.niche}
          </Typography>

          {Object.keys(Object(talent.talent.socials)).map((key, i) => {
            return (
              <a href={talent.talent.socials[key]} target="_blank"> 
                <Typography className="hover:cursor-pointer hover:text-eerieBlack">
                    {key}
                </Typography>
              </a>
            );
          })}
          
        </CardBody>
        {/* <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter> */}
      </Card>
    );
  }