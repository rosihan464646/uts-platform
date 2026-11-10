// Validasi Form Penyewaan - Autobot Rental | Ahmad Rosihan Efendi (NIM ...001)
const form = document.getElementById("form-sewa");
const kotakPesan = document.getElementById("pesan");

function tampilkanPesan(teks, jenis) {
  kotakPesan.textContent = teks;          // tampil di DOM, bukan alert()
  kotakPesan.className = "pesan " + jenis; // "error" atau "sukses"
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // cegah form terkirim / halaman reload

  const nama = document.getElementById("nama").value.trim();
  const mobil = document.getElementById("mobil").value;
  const lama = Number(document.getElementById("lama").value);

  if (nama === "" || mobil === "") {
    tampilkanPesan("Error: Nama Lengkap dan Pilihan Mobil wajib diisi.", "error");
    return;
  }
  if (!lama || lama < 1) {
    tampilkanPesan("Error: Lama sewa minimal 1 hari.", "error");
    return;
  }
  tampilkanPesan("Sukses: " + nama + " menyewa " + mobil + " selama " + lama + " hari.", "sukses");
  form.reset();
});
