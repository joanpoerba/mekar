import { Carousel } from "flowbite-react";

const Projek = () => {
  return (
    <div id="projek" className="grid grid-cols-12 text-white">
      <div className="col-span-12 lg:col-start-2 lg:col-end-12 px-5 lg:p-0">
        <h1 className="text-3xl lg:text-4xl font-bold">Projek</h1>
        <p className="font-normal mt-2">
          Karya yang sudah dan sedang kami kerjakan
        </p>
        <Carousel className="mx-auto w-full h-[350px] sm:h-[400px] md:h-[600px] lg:w-[950px] lg:h-[600px]" slideInterval={5000}>
          <img className="w-[800px]" src="/projek 1.png" alt="..." />
          <img className="w-[800px]" src="/projek 2.png" alt="..." />
          <img className="w-[800px]" src="/projek 3.png" alt="..." />
          <img className="w-[800px]" src="/projek 4.png" alt="..." />
          <img className="w-[800px]" src="/projek 5.png" alt="..." />
          <img className="w-[800px]" src="/projek 6.png" alt="..." />
        </Carousel>
      </div>
    </div>
  );
};

export default Projek;
