const Footer = () => {
  return (
    <div className="grid grid-cols-12 gap-y-10 lg:gap-0 items-center text-white bg-zinc-800 p-5 lg:py-8">
      <div className="flex flex-col gap-y-10 col-span-12 lg:col-start-2 lg:col-end-6 xl:col-start-2 xl:col-end-7">
        <div className="flex items-center gap-x-2">
          <img className="w-[40px] lg:w-[50px]" src="/whiteLogo.png" alt="" />
          <h3 className="text-3xl lg:text-4xl font-bold cursor-pointer">Mekar Jaya</h3>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="font-normal">+62-8127066036</p>
          <p className="font-normal">+62-82162895791</p>
          <p className="font-normal">kalpin2201@gmail.com</p>
        </div>
        <p className="text-gray-400">© PT Mekar Jaya | All right reserved</p>
      </div>
      <iframe
        className="col-start-1 col-end-13 lg:col-start-9 lg:col-end-13 xl:col-start-10 xl:col-end-13 h-[300px] bg-black"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0646563380624!2d98.56770300000001!3d3.5726042999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031291aba7ca573%3A0xdff44f9b98c32287!2sPondok!5e0!3m2!1sen!2sid!4v1706695275568!5m2!1sen!2sid"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Footer;
