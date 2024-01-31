import { Carousel } from "flowbite-react";

const Projek = () => {
  return (
    <div id="projek" className="grid grid-cols-12 text-white">
      <div className="col-start-2 col-end-12">
        <h1 className="text-4xl font-bold">Projek</h1>
        <p className="font-normal mt-2">
          Karya yang sudah dan sedang kami kerjakan
        </p>
        <Carousel className="mx-auto w-[950px] h-[600px]" slideInterval={5000}>
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
