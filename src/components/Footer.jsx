const Footer = () => {
  return (
    <div className="grid grid-cols-12 items-center text-white bg-zinc-800 py-8">
      <div className="flex flex-col gap-y-10 col-start-2 col-end-7">
        <div className="flex items-center gap-x-2">
          <img className="w-[50px]" src="/whiteLogo.png" alt="" />
          <h3 className="text-4xl font-bold cursor-pointer">Mekar Jaya</h3>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="font-normal">+62-8127066036</p>
          <p className="font-normal">+62-82162895791</p>
          <p className="font-normal">kalpin2201@gmail.com</p>
        </div>
        <p className="text-gray-400">© PT Mekar Jaya | All right reserved</p>
      </div>
      <iframe
        className="col-start-10 col-end-13 h-[300px] bg-black"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0646563380624!2d98.56375775392307!3d3.5726042999999916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303129cd7372a157%3A0xa82ac4e7270100a1!2sJln%20pelita!5e0!3m2!1sen!2sid!4v1706690055318!5m2!1sen!2sid"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Footer;
