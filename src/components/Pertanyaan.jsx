import { Accordion } from "flowbite-react";

const Pertanyaan = () => {
  return (
    <div className="grid grid-cols-12 py-20 text-white">
      <div className="flex flex-col items-center col-start-2 col-end-12">
        <h1 className="text-4xl font-bold">
          Pertanyaan yang sering ditanyakan
        </h1>
        <p className="font-light mt-3">Ini mungkin dapat membantu mu</p>
        <Accordion className="w-[700px] mt-20" collapseAll>
          <Accordion.Panel>
            <Accordion.Title className="bg-white focus:ring-0 text-black">
              PT Mekar Jaya itu apa?
            </Accordion.Title>
            <Accordion.Content className="bg-white">
              <p className="mb-2 text-gray-600 dark:text-gray-400">
                Merupakan perusahaan Painting Contractor dan Supplier cat
                berbagai jenis merek ternama yang berpengalaman selama 12 tahun
                baik di bidang Cat Dekoratif (perumahan), Cat Epoxy Floor
                Coating dan Sandblasting untuk keperluan dunia industri.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white focus:ring-0 text-black">
              Berapa lama proses floor coating?
            </Accordion.Title>
            <Accordion.Content className="bg-white">
              <p className="mb-2 text-gray-600 dark:text-gray-400">
                Lama proses floor coating bervariasi tergantung pada jenis
                coating yang digunakan, kondisi permukaan, dan faktor-faktor
                lainnya. Namun, secara umum, prosesnya dapat memakan waktu
                beberapa hari hingga beberapa minggu, tergantung
                kompleksitasnya.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-white focus:ring-0 text-black">
              Harga untuk floor coating berapa?
            </Accordion.Title>
            <Accordion.Content className="bg-white">
              <p className="mb-2 text-gray-600 dark:text-gray-400">
                Harga untuk floor coating bervariasi tergantung pada beberapa
                faktor, seperti jenis coating yang digunakan, luas area yang
                akan dilapisi, kondisi permukaan, dan lokasi geografis.
                Sebaiknya Anda menghubungi penyedia jasa floor coating lokal
                untuk mendapatkan perkiraan harga yang lebih akurat sesuai
                dengan kebutuhan spesifik Anda.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default Pertanyaan;
