import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
   
  export function ClientCard(client) {
    console.log(client.talent)
    return (
      <Card className="max-w-[34rem] max-h-[36rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none "
        >
          <img
            src={client.talent.img}
            alt={client.talent.title}
            className="h-full w-full object-middle object-cover"
          />
        </CardHeader>
        <CardBody className="h-auto">
          <Typography variant="h4" color="blue-gray">
            {client.talent.title}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal text-sm">
            {client.talent.description}
          </Typography>
        </CardBody>
       
      </Card>
    );
  }