import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Home() {
  const { push } = useRouter();
  const [randomTop, setRandomTop] = useState("35");
  const [randomLeft, setRandomLeft] = useState("14");
  const [index, setIndex] = useState(0);
  const [showClassName, setShowClassName] = useState(false);
  const [className, setClassName] = useState("");

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(randomTop, randomLeft, " top, left");
  const gif = [
    "/classmate.gif",
    "/are-you-sure.jpg",
    "/really.jpg",
    "/tellMe.gif",
  ];
  const yes = ["Yesss", "Yeah", "Ummhn"];

  const handleYes = () => {
    if (index == 2) {
      setIndex(index + 1);
      setShowClassName(true);
      setRandomTop(35);
      setRandomLeft(14);
      console.log(showClassName, "showclassname");
    } else if (index == 3) {
    } else {
      setIndex(index + 1);
      setRandomTop(getRandomNumber(10, 55));
      setRandomLeft(getRandomNumber(5, 27));
    }

    console.log("index", index);
  };
  const handleSubmit = () => {
    console.log(className, "classname");
    const changedName = className.toLowerCase();
    console.log(changedName, "changedname");
    if (
      changedName === "leap1f" ||
      changedName === "leap 1f" ||
      changedName === "leap-1f"
    ) {
      push("/greeting");
    } else {
      push("/byee");
    }
  };
  const handleNo = () => {
    push("/bye");
  };
  useEffect(() => {}, [index]);
  return (
    <div className="bg-black h-[100vh]">
      <div className="flex flex-col justify-center items-center h-full max-w-screen-xl m-auto">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full  min-[400px]:w-[1000px] h-full relative">
            <div
              style={{
                display: "absolute",
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
              }}
              className="max-w-[500px] max-h-[200px] absolute"
            >
              <div className="relative">
                <img
                  className="max-[400px]:max-w-[280px] max-[400px]:max-h-[200px] sm:w-[500px] sm:h-[300px] rounded-t-md"
                  style={{ borderRadius: index === 3 ? "6px" : null }}
                  src={gif[index]}
                  alt=""
                />
                {index == 0 && (
                  <p className="text-black font-bold absolute top-2 left-5">
                    Are you our classmate or teacher?
                  </p>
                )}
                {!showClassName && (
                  <div className="w-full *:min-[400px]:h-[50px]">
                    <button
                      onClick={handleYes}
                      className="w-1/2 h-[30px] bg-black text-white border border-white active:scale-95 rounded-bl-md"
                    >
                      {yes[index]}
                    </button>
                    <button
                      onClick={handleNo}
                      className="w-1/2 h-[30px] bg-black text-white border border-white active:scale-95 rounded-br-md"
                    >
                      No
                    </button>
                  </div>
                )}
                {showClassName && (
                  <div className="w-full">
                    <input
                      className="rounded-md w-full h-[40px] mt-4 p-2  min-[400px]:h-[60px]"
                      placeholder=" Classname?"
                      type="text"
                      onChange={(event) => setClassName(event.target.value)}
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={className === ""}
                      className="w-full h-[30px] min-[400px]:h-[40px] bg-black text-white border border-white rounded-md active:scale-95 mt-2"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
