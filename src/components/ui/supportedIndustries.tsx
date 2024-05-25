import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { Card, CardContent } from "@components/ui/card";

const SupportedIndustries = () => {
  const cardTestimonial = [
    {
      name: "Labor-Intensive",
      image: "/industries/labor-intensive.svg",
    },
    {
      name: "Halal Production",
      image: "/industries/halal-production.svg",
    },
    {
      name: "Aquaculture",
      image: "/industries/aquaculture.svg",
    },
    {
      name: "Food Manufacturing",
      image: "/industries/FoodManufacturing.jpg",
    },
    {
      name: "Plantations",
      image: "/industries/Plantination.jpg",
    },
    {
      name: "Agriculture",
      image: "/industries/agriculture.jpg",
    },
    {
      name: "UNDP Access & Benefits Sharing",
      image: "/industries/UNDPAccessBenefitsSharing.jpg",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=" max-w-[300px] lg:max-w-[1140px] ipad-pro:max-w-[800px] md:max-w-[800px] mb-20 lg:px-10 md:px-10 "
    >
      <CarouselContent>
        {cardTestimonial.map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 ipad-pro:basis-1/3 lg:basis-1/3 "
          >
            <div className=" flex justify-center items-center w-auto h-auto">
              <Card className="lg:w-[340px] group md:w-auto w-full md:h-auto lg:h-auto items-center justify-center border-0 shadow-none   bg-cardbg hover:scale-105 transform transition-transform duration-300 ">
                <CardContent className="flex aspect-square items-center justify-center">
                  <div className="items-center flex flex-col justify-center ">
                    <div className="lg:w-[340px] lg:h-[240px] md:h-[130px] ipad-pro:w-[200px] ipad-pro:h-[140px] w-auto h-[170px] overflow-hidden ">
                      <img
                        src={`${item.image}`}
                        alt={item.name}
                        className="w-auto h-auto object-cover  "
                      />
                    </div>
                    <div className="bg-white w-full text-center p-3 group-hover:bg-primarylogoColor group-hover:text-white font-header lg:text-xl md:text-base ipad-pro:text-base text-base font-semibold shadow-md border">
                      <h1>{item.name}</h1>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" lg:hidden md:hidden ml-20 mt-32 lg:ml-0 lg:mt-0 md:ml-28 md:mt-28" />
      <CarouselNext className=" mr-20 mt-32 lg:mr-0 lg:mt-0 md:mr-28 md:mt-28 " />
    </Carousel>
  );
};

export default SupportedIndustries;
