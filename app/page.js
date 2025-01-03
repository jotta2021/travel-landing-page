'use client'
import Image from "next/image";
import Header from "./components/header";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Github,
  Instagram,
  Locate,
  LocateFixed,
  LocateIcon,
  PlayCircle,
  Star,
  Twitter,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef } from "react";

export default function Home() {
  const praias = [
    {
      id: 1,
      src: "/praia1.jpg",
      title: "Forest Wild Life",
      locale: "NRT, Indonesia",
      note: 4.7,
    },
    {
      id: 2,
      src: "/praia2.jpg",
      title: "Forest Wild Life",
      locale: "NRT, Indonesia",
      note: 4.7,
    },
    {
      id: 3,
      src: "/praia3.jpg",
      title: "Forest Wild Life",
      locale: "NRT, Indonesia",
      note: 4.7,
    },
    {
      id: 4,
      src: "/praia1.jpg",
      title: "Forest Wild Life",
      locale: "NRT, Indonesia",
      note: 4.7,
    },
    {
      id: 5,
      src: "/praia2.jpg",
      title: "Forest Wild Life",
      locale: "NRT, Indonesia",
      note: 4.7,
    },
    {
      id: 6,
      src: "/praia3.jpg",
      title: "Forest Wild Life",
      locale: "NRT, Indonesia",
      note: 4.7,
    },
  ];
  const refNextSlide = useRef()
  const refBackSlide = useRef()

  return (
    <div className="w-full h-full ">
      <Header />
      <div className="px-44 max-md:px-3">
        <div className="absolute z-50 px-6 mt-[10%] flex gap-8 max-md:relative max-md:justify-start  ">
          <div className="relative  flex flex-col items-center justify-between max-md:hidden">
            {/* Linha vertical */}
            <div
              className="absolute h-full border-l-2 border-gray-300"
              style={{ left: "50%" }}
            ></div>

            {/* Passo 1 */}
            <div className="relative z-10 bg-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold">
              <p>1</p>
            </div>
            <div className="relative z-10 border border-white bg-gray-400 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold">
              <p>2</p>
            </div>
            <div className="relative z-10 border border-white bg-gray-400 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold">
              <p>3</p>
            </div>
          </div>

          <div>
            <p className="text-sm">ELEVATE YOUR TRAVEL JOURNEY</p>
            <div className="font-bold text-[4rem] max-md:text-[3rem]">
              <h1>Experience</h1>
              <h1>The Magic Of</h1>
              <h1>Flight!</h1>
            </div>
            <div className="flex items-center gap-2 ">
              <Button className="bg-blue rounded-full px-10 py-4 hover:bg-sky-600 duration-300 min-h-12">
                Book A Trip Now
              </Button>
              <Button
                size="icon"
                className="bg-white rounded-full hover:bg-gray-200 duration-300 min-h-12 min-w-12"
              >
                <PlayCircle className="text-blue" size={24} />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center max-md:my-4 relative max-md:flex-col">
          <div className="w-[90vw] h-[70vh] relative max-md:h-[30vh]">
            <Image
              src={"/aviao.jpg"}
              alt="aviao"
              fill
              className="object-cover rounded-[6rem]"
            />
          </div>

          {/**card */}

          <Card className="absolute bottom-0 right-0 bg-gray-50 p-7 rounded-full max-md:hidden max-md:mt-4">
            <CardTitle className="flex items-center gap-2">
              KNOW MORE
              <ArrowRight />
            </CardTitle>
            <CardContent>
              <div className="flex gap-4 mt-4">
                <div className="flex gap-1">
                  {praias.map((item) => (
                    <Image
                      key={item.id}
                      src={item.src}
                      alt="praias"
                      width={60}
                      height={60}
                      className="rounded-full "
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sm">Awesome Places </p>
                  <p className="text-gray-500 text-sm">
                    Discover The World One
                  </p>
                  <p className="text-gray-500 text-sm">Adventure At A Time!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex py-8 gap-10 items-center justify-center  max-md:flex-col">
          <Card className="rounded-full flex items-center justify-center p-0 ">
            <CardContent className="text-dark flex items-center gap-6 justify-center p-5">
              <p>Follow</p>
              <div className="border p-1 rounded-full">
                <Twitter size={18} />
              </div>
              <div className="border p-1 rounded-full">
                <Facebook size={18} />
              </div>
              <div className="border p-1 rounded-full">
                <Instagram size={18} />
              </div>
              <div className="border p-1 rounded-full">
                <Github size={18} />
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center gap-20 max-md:grid max-md:grid-cols-2 max-md:gap-4">
            <Image src={"/airbnb.png"} width={130} height={100} alt="airbnb" />
            <Image src={"/trivago.png"} width={130} height={100} alt="airbnb" />
            <Image src={"/booking.png"} width={130} height={100} alt="airbnb" />
            <Image src={"/expedia.png"} width={130} height={100} alt="airbnb" />
          </div>
        </div>

        {/**Segunda seção */}

        <section className="my-8 px-32 max-md:px-3">
          <div className="flex justify-between items-center max-md:flex-col max-md:items-start max-md:justify-start">
          <div>
             <h2 className="font-semibold text-[2rem] ">Popular Destination</h2>
          <p className="font-semibold text-muted-foreground text-sm">
            Unleash Your Wnaderlust With SkyWings
          </p>
          </div>
         
            <div className="flex items-center gap-4 max-md:my-2">
            <Button className='bg-white text-dark rounded-full hover:text-white p-8' size={'icon'}
            onClick={()=> refBackSlide.current.click()}>
              <ChevronLeft />
            </Button>
            <Button className='bg-white text-dark rounded-full p-8 hover:text-white ' size={'icon'}
            onClick={()=> refNextSlide.current.click()}
            >
              <ChevronRight />
            </Button>
          </div>

          </div>
         

          
          <Carousel className="flex items-center my-8 justify-center gap-20">
            <CarouselPrevious ref={refBackSlide} className='hidden'/>
            <CarouselNext ref={refNextSlide} className='hidden'/>
              <CarouselContent>
              
           
            {praias.map((item,index) => {
             
              return(
              <CarouselItem key={item.id}  className="md:basis-1/2 lg:basis-1/3">
                <div className="relative w-[350px] h-48 rounded-full">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="rounded-[2rem] object-cover"
                  />
                </div>
                <div className="flex justify-between mt-4 px-4 text-muted-foreground">
                  <div className="">
                    <h3 className="font-bold  text-lg text-black">
                      {item.title}
                    </h3>
                    <div className=" flex items-center gap-1 ">
                      <MapPin size={18} />
                      <p className="text-sm">{item.locale}</p>
                    </div>
                  </div>

                  <div className="bg-blue text-white flex items-center gap-1 rounded-full p-2 px-3 ">
                    <Star size={20} />
                    <p className="text-sm">{item.note}</p>
                  </div>
                </div>
              </CarouselItem>
            )})}
              </CarouselContent>
          </Carousel>
        </section>
      </div>
    </div>
  );
}
