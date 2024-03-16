import { useContext } from "react";
import { Context } from "@/components/context";
import { useRouter } from "next/router";


export default function Home() {
  const { name, setName } = useContext(Context);
  const {push} = useRouter()
  const handleSubmit = () => {
    console.log("submit darlaa");
    push("/second-step")
  };
  console.log(name);
  return (
    <div className="bg-black h-[100vh]">
      <div className="flex flex-col justify-center items-center h-full max-w-screen-xl m-auto">
        <div className="flex flex-col justify-center items-center ">
          <div>
            {" "}
            <img src="/whoAreU.gif" />
          </div>
          <div>
            <input
              className="rounded-md min-w-[250px] h-[40px] mt-4"
              placeholder="Name"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={name === ""}
            className="min-w-[250px] h-[25px] bg-green-200 rounded-md active:scale-95 mt-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
