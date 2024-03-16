import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Home() {
  const { push } = useRouter();
  const [randomTop, setRandomTop] = useState("300");
  const [randomLeft, setRandomLeft] = useState("50");
  const [index, setIndex] = useState(0);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(randomTop, randomLeft, " top, left");
  const gif = ["/classmate.gif", "/uSure.gif", "/really.gif"];

  const handleYes = () => {
    if (index == 2) {
      push("/greeting");
    } else {
      setIndex(index + 1);
      setRandomTop(getRandomNumber(1, 500));
      setRandomLeft(getRandomNumber(1, 190));
    }

    console.log("index", index);
  };
  const handleNo = () => {
    push("/bye");
  };
  useEffect(() => {}, [index]);
  return (
    <div className="bg-black h-[100vh]">
      <div className="flex flex-col justify-center items-center h-full max-w-screen-xl m-auto">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full h-full relative">
            <div
              style={{
                display: "absolute",
                top: `${randomTop}px`,
                left: `${randomLeft}px`,
              }}
              className="max-w-[500px] max-h-[200px] bg-red-200 absolute"
            >
              <div className="relative">
                <img
                  className="max-w-[300px] max-h-[200px]"
                  src={gif[index]}
                  alt=""
                />
                {index == 0 && (
                  <p className="text-black font-bold absolute top-2 left-5">
                    Are you our classmate or teacher?
                  </p>
                )}
                <div className="w-full">
                  <button
                    onClick={handleYes}
                    className="w-1/2 h-[30px] bg-green-200 active:scale-95"
                  >
                    Yes
                  </button>
                  <button
                    onClick={handleNo}
                    className="w-1/2 h-[30px] bg-red-200 active:scale-95"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
