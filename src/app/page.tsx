import Hero from "@/components/Hero";
import Kartu from "@/components/Kartu";
import SkillCard from "@/components/Skillcard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwalBelajar = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Selasa", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Rabu", waktu: "19.30 - 20.30", kegiatan: "Merekam video dan menulis laporan" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-6 py-10 md:px-12">
      <Hero
        nama="Mario Hyuuga Reza Angga Pratama"
        tagline="Siswa kelas X SMK dan calon Junior Web Developer di Kelas Industri UBIG."
      />

      <Kartu judul="Tentang Saya" id="tentang-saya">
        <p className="text-sm leading-relaxed text-slate-600">
          Saya adalah siswa SMK yang sedang belajar membuat website dan
          mengembangkan keterampilan di bidang teknologi.
        </p>
      </Kartu>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Kartu judul="Hobi" id="hobi">
          <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
            <li>sepak bola</li>
            <li>bermain game</li>
            <li>bersepeda</li>
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita" id="cita-cita">
          <p className="mb-2 text-sm text-slate-600">
            Menjadi <span className="font-bold text-utama">Full Stack Web Developer</span>.
          </p>
          <ol className="list-inside list-decimal space-y-1 text-sm text-slate-600">
            <li>Menuntaskan Kelas Industri UBIG</li>
            <li>Magang di perusahaan teknologi</li>
            <li>Bekerja sebagai Web Developer</li>
          </ol>
        </Kartu>
      </div>

      <Kartu judul="Keahlian" id="keahlian">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </Kartu>

      <Kartu judul="Jadwal Belajar" id="jadwal-belajar">
        <div className="overflow-x-auto rounded-lg border border-slate-100">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-utama text-white">
                <th className="p-3 font-semibold">Hari</th>
                <th className="p-3 font-semibold">Waktu</th>
                <th className="p-3 font-semibold">Kegiatan</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {jadwalBelajar.map((item) => (
                <tr key={item.hari} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-3 font-medium">{item.hari}</td>
                  <td className="p-3">{item.waktu}</td>
                  <td className="p-3">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>
    </main>
  );
}