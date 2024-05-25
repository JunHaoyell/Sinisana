import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { Card, CardContent } from "@components/ui/card";

const InteractiveCarousel = () => {
  const cardTestimonial = [
    {
      name: "Jane Sponteen",
      description: "Businessman",
      image: "/person1.svg",
      comment:
        "Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
    },
    {
      name: "John Doe",
      description: "Entrepreneur",
      image: "/person2.svg",
      comment:
        "Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
    },
    {
      name: "Emily Smith",
      description: "CEO",
      image: "/person3.svg",
      comment:
        "Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
    },
    {
      name: "Michael Johnson",
      description: "Investor",
      image: "/farm.svg",
      comment:
        "Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
    },
    {
      name: "Samantha Lee",
      description: "Business Owner",
      image: "/person2.svg",
      comment:
        "Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
    },
    {
      name: "David Williams",
      description: "Manager",
      image: "/person3.svg",
      comment:
        "Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
    },
    {
      name: "Sophia Martinez",
      description: "Director",
      image: "/person1.svg",
      comment:
        "Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
    },
    {
      name: "Matthew Brown",
      description: "Founder",
      image: "/person2.svg",
      comment:
        "Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
    },
    {
      name: "Olivia Taylor",
      description: "Consultant",
      image: "/person3.svg",
      comment:
        "Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
    },
    {
      name: "William Clark",
      description: "Executive",
      image: "/person1.svg",
      comment:
        "Nisl rhoncus mattis rhoncus urna neque viverra. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum.",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=" max-w-[300px] lg:max-w-[1140px] ipad-pro:max-w-[800px] md:max-w-[800px] mb-20 "
    >
      <CarouselContent>
        {cardTestimonial.map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 ipad-pro:basis-1/2 lg:basis-1/3 "
          >
            <div className="p-1 flex justify-center items-center h-full">
              <Card className="lg:w-[370px] group md:w-[370px] w-full md:h-[419px] lg:h-[419px] items-center justify-center border-0 shadow-none border-t-8  bg-cardbg hover:scale-105 transform transition-transform duration-300 ">
                <CardContent className="flex aspect-square items-center justify-center">
                  <div className="items-center flex flex-col justify-center ">
                    <div className="items-center flex flex-col justify-center pb-40 group-hover:pb-[159px] bg-white w-[370px] mt-[-24px]">
                      <img src="/semicolIcon.svg" className="mt-10" />
                      <p className="mt-4 text-center text-xs lg:px-9 md:px-9 lg:text-base md:text-base px-20">
                        {item.comment}
                      </p>
                    </div>
                    <img src="/rating.svg" className="mt-[-80px]" />
                    {/* <img
                      src={`/images/${item.image}`}
                      alt={item.name}
                      className="mt-5"
                    /> */}
                    <div className="w-[67.08px] h-[73px] overflow-hidden rounded-full mt-5">
                      <img
                        src={`/images/${item.image}`}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-semibold ">{item.name}</h2>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:hidden md:hidden ml-14 mt-36 " />
      <CarouselNext className="lg:hidden md:hidden mr-14 mt-36" />
    </Carousel>
  );
};

export default InteractiveCarousel;
