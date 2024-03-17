import { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "@/components/context.js";

export default function Home() {
  const { name, setName } = useContext(Context);
  const { push } = useRouter();
  const handleSubmit = () => {
    console.log("submit darlaa");
    push("/second-step");
  };
  const myname = "jgdjhj";
  console.log(myname);
  return (
    <div className="bg-black h-[100vh]">
      <div className="flex flex-col justify-center items-center h-full max-w-screen-xl m-auto">
        <div className="flex flex-col justify-center items-center ">
          {/* <div className=" -mt-40 mb-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M5.11038 4.76815L0.806264 12.8243C0.269142 13.8325 0 14.939 0 16.0471C0 17.1553 0.269142 18.2616 0.806264 19.2699L5.11038 27.3261C5.9037 28.8142 7.45516 29.7435 9.14352 29.7435H13.7153V27.4614H13.7138C12.8704 27.4614 12.0946 26.9974 11.6979 26.2534L7.39543 18.1957C7.03585 17.524 6.85665 16.7864 6.85665 16.0471C6.85665 15.3078 7.03585 14.5701 7.39543 13.8986L11.6979 5.84087C12.0946 5.09678 12.8704 4.63292 13.7138 4.63292H13.7153V2.35059H9.14352C7.45516 2.35059 5.9037 3.28012 5.11038 4.76815Z"
                fill="white"
              />
              <path
                d="M31.1937 12.8243L26.8898 4.76821C26.0963 3.28002 24.545 2.35064 22.8567 2.35064H18.2847V4.63281H18.2864C19.1298 4.63281 19.9055 5.09683 20.3021 5.84076L24.6046 13.8985C24.9643 14.5702 25.1432 15.3078 25.1432 16.0471C25.1432 16.7864 24.9643 17.524 24.6046 18.1957L20.3021 26.2533C19.9055 26.9974 19.1298 27.4613 18.2864 27.4613H18.2847V29.7436H22.8567C24.545 29.7436 26.0963 28.8142 26.8898 27.326L31.1937 19.2699C31.7307 18.2617 32 17.1551 32 16.0471C32 14.9391 31.7307 13.8326 31.1937 12.8243Z"
                fill="white"
              />
            </svg>
          </div> */}
          <div>
            {" "}
            <img className="rounded-xl" src="/whoAreU.gif" />
          </div>
          <div className="rounded-md min-w-[250px] h-[40px] mt-4 flex ">
            <div className="text-lg">
              <span className="text-blue-700 mr-2">const</span>
              <span className="text-blue-400 mr-2">MyName</span>
              <span className="text-blue-200 mr-2">=</span>
              <span className="text-yellow-500 mr-2">"</span>
              <input
                className="rounded-md w-[150px] h-[20px] mt-4 mr-2 bg-black text-yellow-500"
                placeholder="         Name"
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
              <span className="text-yellow-500">"</span>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={name === ""}
            className="w-[200px] h-[30px] bg-black text-white border border-white rounded-md active:scale-95 mt-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
