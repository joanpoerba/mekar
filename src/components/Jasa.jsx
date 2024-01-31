const Jasa = () => {
  const jasa = [
    {
      img: "/banner 1.png",
      title: "Floor coating",
      text: "Floor Coating adalah kegiatan pengecatan menggunakan bahan cat khusus untuk melindungi lantai, agar kuat dan tahan lama. Seiring dengan perkembangan industri makanan, farmasi, elektronik dan industri lainnya yang bersertifikat ISO,dimana salah satu standart ISO adalah lantai pabrik yang bersih dan indah maka kami selaku Painting Contractor yang didukung oleh pabrik produsen Floor Coating serta tenaga profesional dalam bidang Epoxy Floor Coating berkomitmen memberikan hasil kerja maksimal,konsisten dalam mempertahankan kualitas, mengedepankan efisiensi dalam meningkatkan hasil kerja.",
    },
    {
      img: "/banner 2.png",
      title: "Pengecetan rumah / gedung",
      text: "PT Mekar Jaya adalah perusahaan terkemuka di bidang jasa cat rumah dan gedung. Dengan pengalaman yang telah teruji, kami menyediakan layanan berkualitas tinggi untuk memenuhi kebutuhan pelanggan. Tim profesional kami terampil dalam menciptakan solusi cat yang estetis dan tahan lama, sehingga memberikan sentuhan indah dan melindungi properti Anda dari cuaca eksternal. Berfokus pada keunggulan dan kepuasan pelanggan, PT Mekar Jaya menawarkan berbagai pilihan warna dan jenis cat yang sesua dengan selera dan gaya arsitektur. Kami menggunakan bahan cat berkualitas tinggi untuk hasil akhir yang halus dan taha lama.",
    },
    {
      img: "/banner 3.png",
      title: "Renovasi rumah",
      text: "Kami adalah perusahaan yang berdedikasi untuk memberikan layanan renovasi rumah berkualitas tinggi, dengan fokus pada kepuasan pelanggan. Dengan tim profesional yang berpengalaman, PT Mekar Jaya siap membantu mewujudkan impian Anda dalam mengubah rumah menjadi tempat tinggal yang lebih nyaman dan menarik. Layanan renovasi kami mencakup berbagai aspek, mulai dari perencanaan desain hingga pelaksanaan proyek. Kami menawarka solusi yang sesuai dengan kebutuhan dan anggaran Anda. Apakah Anda menginginkan pembaruan interior, penambahan ruangan atau perbaikan struktural, PT Mekar Jaya memiliki keahlian dan pengalaman untuk menangani berbagai jenis proyek renovasi.",
    },
    {
      img: "/banner 4.png",
      title: "Design rumah",
      text: "Tim desain kami terdiri dari para profesional berpengalaman yang siap membantu Anda merancang rumah impian Anda. Kami memahami bahwa setiap rumah adalah unik, dan itulah mengapa kami menawarkan layanan desain yang disesuaikan dengan kebutuhan dan gaya hidup Anda. Dalam proses desain, kami bekerja erat dengan Anda untuk memahami preferensi estetika, kebutuhan fungsional, dan anggara yang tersedia. Dari tata letak ruangan hingga pemilihan material dan warna, setiap detail dirancang dengan cermat untu menciptakan ruang yang mencerminkan kepribadian dan keinginan Anda.",
    },
  ];
  return (
    <div>
      {jasa.map((element, key) => (
        <div key={key} className="grid grid-cols-12 items-center px-5 py-12 lg:py-28 lg:p-0 gap-x-5">
          <img
            className="w-[100%] h-[400px] object-contain col-span-8 md:col-span-3 lg:col-start-2 lg:col-end-5 xl:col-start-2 xl:col-end-4 rounded-xl"
            src={element.img}
            alt=""
          />
          <div className="col-span-12 lg:col-start-5 lg:col-end-12 xl:col-start-4 xl:col-end-12 text-xl text-white">
            <p className="text-3xl lg:text-4xl font-bold">{element.title}</p>
            <p className="font-normal mt-5 text-base">{element.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jasa;
