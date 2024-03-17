import { Context } from "@/components/context.js";
import { useContext, useEffect, useState } from "react";
import MyCarousel from "@/components/Carousel";

export default function Home() {
  const { name } = useContext(Context);
  const [index, setIndex] = useState(0); 

  const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
  const bestOf = ["мундаг", "хичээнгүй", "хөгжилтэй", "нөхөрсөг"];
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(() => {
    console.log(index);
    console.log(bestOf[index]);
    setIndex(getRandomNumber(0, 3));
    console.log("useeffect ajillaa");
  }, [index]);

  useEffect(() => {
    const pElement = document.querySelector(".scrolling-text");
    if (pElement) {
      pElement.classList.add("scrolling-text");
      setTimeout(() => {
        pElement.classList.remove("scrolling-text");
      }, 70000); // Remove the class after 
    }
  }, []);
  return (
    <div className="bg-black bg-[url('/greetingbg2.jpg')] h-[100vh]">
      <div className="h-[100vh] max-w-screen-xl m-auto">
        <div className="relative w-full h-full container m-auto">
          <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full h-[150px] flex justify-center items-center max-[400px]:mt-[70px] max-[400px]:mb-[20px]">
              <svg
                viewBox="0 0 414 99"
                id="head-title"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-10 max-[400px]:mt-3 w-[350px] h-[80px] max-[400px]:w-[300px] max-[400px]:h-[60px]"
              >
                <path
                  d="M412.163 6.784V5.284H410.663H360.231H358.731V6.784V96V97.5H360.231H371.879H373.379V96V57.308H403.367H404.867V55.808V46.336V44.836H403.367H373.379V17.756H410.663H412.163V16.256V6.784Z"
                  stroke="white"
                  stroke-width="3"
                />
                <path
                  d="M312.739 14.08V15.58H314.239H325.027V96V97.5H326.527H338.303H339.803V96V3.45599V1.95599H338.303H314.239H312.739V3.45599V14.08Z"
                  stroke="white"
                  stroke-width="3"
                />
                <path
                  d="M263.991 52.5348L263.992 52.5345C269.418 47.2893 272.129 40.7072 272.129 32.896C272.129 24.8308 269.332 18.1486 263.713 12.9799C258.133 7.7686 250.071 5.284 239.781 5.284H210.981H209.481V6.784V96V97.5H210.981H222.629H224.129V96V60.252H239.781C250.394 60.252 258.566 57.7757 263.991 52.5348ZM253.103 43.8223C250.427 46.2757 246.092 47.652 239.781 47.652H224.129V17.884H239.781C245.911 17.884 250.229 19.2242 253.003 21.6428C255.739 24.0269 257.225 27.6809 257.225 32.896C257.225 37.7931 255.791 41.3582 253.103 43.8223Z"
                  stroke="white"
                  stroke-width="3"
                />
                <path
                  d="M131.387 97.5H132.44L132.798 96.5097L139.608 77.66H176.414L183.224 96.5097L183.582 97.5H184.635H196.923H199.062L198.333 95.4892L166.205 6.78517L165.847 5.79599H164.795H151.355H150.304L149.945 6.78338L117.689 95.4874L116.957 97.5H119.099H131.387ZM144.013 65.188L158.011 26.0828L172.009 65.188H144.013Z"
                  stroke="white"
                  stroke-width="3"
                />
                <path
                  d="M104.766 46.08V44.58H103.266H72.254V17.756H107.106H108.606V16.256V6.65601V5.15601H107.106H59.106H57.606V6.65601V96V97.5H59.106H107.106H108.606V96V86.4V84.9H107.106H72.254V57.18H103.266H104.766V55.68V46.08Z"
                  stroke="white"
                  stroke-width="3"
                />
                <path
                  d="M48.236 86.528V85.028H46.736H17.004V6.784V5.284H15.504H3.85602H2.35602V6.784V96V97.5H3.85602H46.736H48.236V96V86.528Z"
                  stroke="white"
                  stroke-width="3"
                />
              </svg>
            </div>
            <div className="relative max-[400px]:mb-0 max-[390px]:w-[300px] max-[380px]:h-[100px] sm:w-[700px] h-[200px] text-white text-center p-5 max-[400px]:p-0 overflow-hidden">
              <p
                className="font-bold text-5xl mt-8 max-[400px]:mt-0 text-gray-300"
                style={{ fontFamily: "Tangerine, serif" }}
              >
                Hi {name} ?
              </p>
              <div className="relative w-full min-[400px]:h-[30px] h-[78px] overflow-hidden mt-5">
                <div className="max-[400px]:hidden absolute top-[95px] left-0 w-full h-[20px]"></div>
                <div className="max-[400px]:hidden absolute top-[115px] left-0 w-full h-[100px] bg-red-200"></div>
                <div className=" w-full text-center flex flex-col justify-center items-center ">
                  <div className="scrolling-text w-[500px] max-[400px]:w-[300px]">
                    <p className="text-gray-200">
                      Ангийн хамгийн {bestOf[index]} залуу чамд "Монгол цэргийн
                      өдөр"-ийн баярын мэндчилгээг дэвшүүлж, ажил алба, сурлага
                      хөдөлмөрийн их үйлсд нь арвин их амжилт, эрүүл энх, аз
                      жаргал, хамгийн сайн сайхан бүхнийг хүсэн ерөөе.
                    </p>
                    <br className="hidden max-[400px]:block" />
                    <p className="max-[400px]:hidden block text-white">
                      May god of programming bless you forever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[0px] max-[400px]:mb-20 max-w-screen-xl max:[400px]:mt-8 h-[500px] max-[400px]:h-[250px] text-white flex *:w-full *:h-[500px] overflow-hidden">
              <MyCarousel images={images} />
            </div>
            <div className="w-full flex justify-center items-center mb-10">
              <p className="max-[400px]:block hidden text-gray-50 text-center">
                May god of programming bless you forever
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
