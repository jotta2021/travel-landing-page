import Image from "next/image";
import Header from "./components/header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Home() {


  const praias = [
    {
      id:1,
      src:'/praia1.jpg',
    },
    {
      id:2,
      src:'/praia2.jpg',
    },
    {
      id:3,
      src:'/praia3.jpg',
    }
  ]
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
              <Card className='absolute bottom-0 right-0 bg-gray-50 p-7 rounded-full max-md:relative max-md:mt-4'>
                <CardTitle className='flex items-center gap-2'> 
                  KNOW MORE
                  <ArrowRight/>
                </CardTitle>
                <CardContent>
                  <div className="flex gap-4 mt-4">
                    <div className="flex gap-1">
                      {praias.map((item=> (
                        <Image key={item.id} src={item.src} alt="praias" width={60} height={60}
                        className="rounded-full "
                        />
                        )))}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Awesome Places </p>
                      <p className="text-gray-500 text-sm">Discover The World One</p>
                      <p className="text-gray-500 text-sm">Adventure At A Time!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
          
        </div>
      </div>
    </div>
  );
}
