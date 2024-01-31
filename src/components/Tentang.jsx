const Tentang = () => {
  return (
    <div id="tentang" className="grid grid-cols-12 items-center py-52">
      <div className="col-start-2 col-end-6 text-xl text-slate-500">
        <p>Halo! selamat datang di</p>
        <p className="font-bold my-3 text-4xl">Mekar Jaya</p>
        <p>
          Merupakan perusahaan Painting Contractor dan Supplier cat berbagai
          jenis merek ternama yang berpengalaman selama 12 tahun baik di bidang
          Cat Dekoratif (perumahan), Cat Epoxy Floor Coating dan Sandblasting
          untuk keperluan dunia industri.
        </p>
      </div>
      <img className="col-start-9 col-end-12" src="/tentang.png" alt="" />
    </div>
  );
}

export default Tentang;