import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const marqueeCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 10];
  return (
    <div className="w-[95%] mx-auto border-t-2 border-b-2">
      <Marquee className="">
        {" "}
        <div className="flex gap-6  font-extrabold">
          {marqueeCount.map((data, key) => (
            <div key={key}>STAY INDOORS!</div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
