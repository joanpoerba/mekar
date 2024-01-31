const Tentang = () => {
  return (
    <div id="tentang" className="grid grid-cols-12 items-center py-10 lg:py-52 px-5 lg:px-0">
      <div className="col-span-12 md:col-span-9 lg:col-start-2 lg:col-end-7 xl:col-start-2 xl:col-end-6 text-xl text-slate-500">
        <p className="text-base lg:text-xl">Halo! selamat datang di</p>
        <p className="font-bold my-3 text-3xl lg:text-4xl">Mekar Jaya</p>
        <p className="text-base lg:text-xl">
          Merupakan perusahaan Painting Contractor dan Supplier cat berbagai
          jenis merek ternama yang berpengalaman selama 12 tahun baik di bidang
          Cat Dekoratif (perumahan), Cat Epoxy Floor Coating dan Sandblasting
          untuk keperluan dunia industri.
        </p>
      </div>
      <img className="col-span-12 sm:col-span-6 lg:col-start-9 lg:col-end-12 xl:col-start-9 xl:col-end-12 mt-12 lg:mt-0" src="/tentang.png" alt="" />
    </div>
  );
}

export default Tentang;