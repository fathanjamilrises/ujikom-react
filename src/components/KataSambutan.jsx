import React from "react";

const KataSambutan = () => {
  return (
    <section className="py-15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl  font-[Inter]">
            Sambutan <span className="font-bold">Kepala Sekolah</span>
          </h2>
          <p className="text-gray-600 px-8">SMK Negeri 4 Tasikmalaya</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0 w-full md:w-1/3 ">
            <img
              src="./assets/kepsek.png"
              className="w-full object-cover h-auto bg-[#0265af] rounded-lg shadow-sm"
              alt=""
            />
            <span className="block text-center mt-3 font-bold text-3xl ">
              Kurniawan S.Pd
            </span>
            <span className="block text-center text-gray-600">
              Kepala Sekolah
            </span>
          </div>
          <div className="max-w-2xl">
            <h1 className="mb-4 text-2xl md:text-3xl font-bold">
              Assalamualaikum Wr Wb
            </h1>
            <p className="text-md font-[Satoshi]">
              Selamat datang di SMKN 4 Tasikmalaya. Segala puji dan syukur kita
              panjatkan kehadirat Allah SWT, semoga kita semua ada dalam
              lindungan-Nya. Dan atas perkenan-Nya pula kami dapat menghadirkan
              website SMK Negeri 4 Tasikmalaya ini. <br /> <br /> Kami berharap
              dengan adanya website di SMK Negeri 4 Tasikmalaya ini para
              pengunjung dapat mengenal lebih jauh tentang sekolah kami sehingga
              dapat mempererat tali silaturrahmi antara sekolah dengan
              masyarakat demi kemajuan kita bersama. <br /> <br /> Tiada gading
              yang tak retak, website kami ini masih dalam proses pengembangan,
              masih banyak kekurangan yang harus kami perbaiki. Kritik dan
              sarannya yang membangun sangat kami harapkan untuk pengembangan ke
              depan. Akhirnya, saya mengucapkan terimakasih yang
              sebesar-besarnya kepada semua pihak yang tidak dapat disebutkan
              satu segala bantuan dan persatu atas fasilitasnya yang telah
              diberikan semoga semua yang kita lakukan bermanfaat bagi
              masyarakat. <br /> <br /> Waalaikumsalam Wr Wb
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KataSambutan;
