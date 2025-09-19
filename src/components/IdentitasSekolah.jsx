import React from 'react'

const IdentitasSekolah = () => {
  return (
    <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Judul */}
          <h2 className="text-3xl md:text-4xl  mb-8">
            Identitas <span className="font-bold ">Sekolah</span>
          </h2>

          <div className="bg-white shadow-lg p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Kolom Kiri */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0265af]">Profil</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Nama Sekolah:</strong> SMK Negeri 4 Kota Tasikmalaya
                  </li>
                  <li>
                    <strong>NPSN:</strong> 20279663
                  </li>
                  <li>
                    <strong>Nomor Statistik Sekolah:</strong> 401327810004
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0265af] mt-6">
                  Alamat
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Jalan:</strong> Jl Depok RT 02 RW 05
                  </li>
                  <li>
                    <strong>Kelurahan:</strong> Sukamenak
                  </li>
                  <li>
                    <strong>Kecamatan:</strong> Purbaratu
                  </li>
                  <li>
                    <strong>Kota:</strong> Tasikmalaya
                  </li>
                  <li>
                    <strong>Provinsi:</strong> Jawa Barat
                  </li>
                  <li>
                    <strong>Telp/Faks:</strong> (0265) 7528881
                  </li>
                  <li>
                    <strong>Website:</strong> www.smkn4-tsm.sch.id
                  </li>
                  <li>
                    <strong>Email:</strong> info@smkn4-tsm.sch.id
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0265af] mt-6">
                  Pendirian
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Tahun Berdiri/Operasi:</strong> 2010
                  </li>
                  <li>
                    <strong>Nomor SK Pendirian:</strong> 420/Sk.BPPT/2012
                  </li>
                  <li>
                    <strong>Tanggal:</strong> 06 Februari 2012
                  </li>
                </ul>
              </div>

              {/* Kolom Kanan */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0265af]">
                  Lahan/Bangunan
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Kepemilikan:</strong> Pemerintah Daerah
                  </li>
                  <li>
                    <strong>Status Tanah:</strong> Sertifikat Hak Milik
                  </li>
                  <li>
                    <strong>Luas Tanah:</strong> 13.222 m²
                  </li>
                  <li>
                    <strong>Status Bangunan:</strong> Milik Pemerintah
                  </li>
                  <li>
                    <strong>Luas Bangunan:</strong> 2.400 m²
                  </li>
                  <li>
                    <strong>Nomor Rekening:</strong> 010001100048306
                  </li>
                  <li>
                    <strong>Nama Bank:</strong> BRI Cabang Tasikmalaya
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0265af] mt-6">
                  Akreditasi
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>No Sertifikat:</strong> 728/BAN-SM/SK/2019
                  </li>
                  <li>
                    <strong>Lembaga:</strong> BAN-SM
                  </li>
                  <li>
                    <strong>Berlaku Sampai:</strong> 17 September 2024
                  </li>
                  <li>
                    <strong>Nilai:</strong> A (UNGGUL) dengan Nilai 92
                  </li>
                  <li>
                    <strong>Nilai Satuan Pendidikan:</strong> 92
                  </li>
                  <li>
                    <strong>Prog. Keahlian T. Otomotif:</strong> 91
                  </li>
                  <li>
                    <strong>Prog. Keahlian T. Komputer & Informatika:</strong>{" "}
                    92
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-[#0265af] mt-6">
                  Kepala Sekolah
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Nama:</strong> Kurniawan, S.Pd, M.Pd.
                  </li>
                  <li>
                    <strong>NIP:</strong> 19780209 197202 1 002
                  </li>
                  <li>
                    <strong>Pangkat/Golongan:</strong> Pembina IV/a
                  </li>
                  <li>
                    <strong>No SK Pengangkatan:</strong>{" "}
                    821.2/Kepeg.373.BKD/2020
                  </li>
                  <li>
                    <strong>Tanggal:</strong> 10 Juli 2020
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default IdentitasSekolah