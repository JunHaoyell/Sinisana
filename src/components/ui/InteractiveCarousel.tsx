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
      image: "/person1.svg",
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
      className=" max-w-sm lg:max-w-[1140px] md:max-w-[800px] lg:ml-0 md:ml-0 ml-10"
    >
      <CarouselContent>
        {cardTestimonial.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1 flex justify-center items-center h-full">
              <Card className="lg:w-[370px] md:w-[370px] md:h-[419px] lg:h-[419px] items-center justify-center border-0 shadow-none border-t-8 pb-44 bg-cardbg ">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="items-center flex flex-col justify-center ">
                    <div className="items-center flex flex-col justify-center pb-40 bg-white w-[370px] mt-[-24px]">
                      <img src="/semicolIcon.svg" className="mt-10" />
                      <p className="mt-4 justify-center self-center px-9">
                        {item.comment}
                      </p>
                    </div>
                    <img src="/rating.svg" className="mt-[-80px]" />
                    <img
                      src={`/images/${item.image}`}
                      alt={item.name}
                      className="mt-5"
                    />
                    <h2 className="text-xl font-semibold ">{item.name}</h2>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:hidden md:hidden ml-14 mt-14 " />
      <CarouselNext className="lg:hidden md:hidden mr-14 mt-14" />
    </Carousel>
  );
};

export default InteractiveCarousel;
