export default function Home() {
  return (
    <div className="bg-black h-[100vh]">
      <div className="flex flex-col justify-center items-center h-full max-w-screen-xl m-auto">
        <div className="relative">
          <img src="/bye.gif" alt="" />
          <div className=" absolute top-5 left-6">
            <p className="text-white"> Тэгсэн ч баярын мэнд </p>
            <img className="w-5 h-5" src="/emojiHug.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
