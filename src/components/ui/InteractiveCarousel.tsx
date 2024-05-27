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
        "Sinisana's services have significantly enhanced our food security measures. We trust their expertise completely.",
    },
    {
      name: "John Doe",
      description: "Entrepreneur",
      image: "/person2.svg",
      comment:
        "The blockchain technology used by Sinisana ensures our products are sustainably sourced and ethically produced.",
    },
    {
      name: "Emily Smith",
      description: "CEO",
      image: "/person3.svg",
      comment:
        "We have seen a marked improvement in our lifecycle tracking since partnering with Sinisana. Highly recommended.",
    },
    {
      name: "Michael Johnson",
      description: "Investor",
      image: "/person4.jpg",
      comment:
        "Sinisana's halal compliance solutions are second to none. They have helped us maintain the highest standards.",
    },
    {
      name: "Samantha Lee",
      description: "Business Owner",
      image: "/person5.jpg",
      comment:
        "Since we started using Sinisana, we've noticed a significant boost in our customer trust levels. Their innovative approach to supply chain transparency is a game changer.",
    },
    {
      name: "David Williams",
      description: "Manager",
      image: "/person6.jpg",
      comment:
        "Sinisana's advanced data analytics have provided us with invaluable insights into our product lifecycle. Their technology is a must-have for any forward-thinking brand.",
    },
    {
      name: "Sophia Martinez",
      description: "Director",
      image: "/person7.jpg",
      comment:
        "Working with Sinisana has revolutionized our supply chain management. Their ability to provide real-time data has streamlined our operations and improved efficiency.",
    },
    {
      name: "Matthew Brown",
      description: "Founder",
      image: "/person8.jpg",
      comment:
        "The transparency Sinisana provides has been instrumental in building our brand's reputation for integrity. Consumers love knowing the full story behind our products.",
    },
    {
      name: "Olivia Taylor",
      description: "Consultant",
      image: "/person9.jpg",
      comment:
        "Thanks to Sinisana, we can confidently assure our customers of our sustainability practices. Their blockchain solutions are unmatched in the industry.",
    },
    {
      name: "William Clark",
      description: "Executive",
      image: "/person10.jpg",
      comment:
        "Partnering with Sinisana has been a pivotal decision for our brand. Their expertise in ensuring product authenticity and ethical sourcing is truly exceptional.",
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
              <Card className="lg:w-[370px] group md:w-[370px] select-none w-full md:h-[419px] lg:h-[419px] items-center justify-center border-0 shadow-none border-t-8  bg-cardbg hover:scale-105 transform transition-transform duration-300 ">
                <CardContent className="flex aspect-square items-center justify-center">
                  <div className="items-center flex flex-col justify-center ">
                    <div className="items-center flex flex-col justify-center pb-40 group-hover:pb-[159px] bg-white w-[370px] mt-[-24px]">
                      <img src="/semicolIcon.svg" className="mt-10" />
                      <p className="mt-4 text-center text-xs lg:px-5 md:px-5 lg:text-base md:text-base px-14">
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
                        src={`/testimonial-profile/${item.image}`}
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
