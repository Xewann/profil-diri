<script setup>
// Mengimpor fungsi ref dari Vue untuk membuat variabel reaktif
import { ref } from "vue";
// Mengimpor komponen SkillCard dari folder components
import SkillCard from "./components/SkillCard.vue";
// Mengimpor composable useSkill yang mengelola data skill & ikon
import { useSkill } from "./composables/useSkill";

// Mengambil data daftarSkill dan iconSkill dari composable useSkill
const { daftarSkill, iconSkill } = useSkill();

// State reaktif untuk menyimpan nama pengguna
const namaUser = ref("Xewann");

// State reaktif untuk menyimpan URL gambar profil
const gambarProfil = ref(
  "https://avatars.githubusercontent.com/u/12345678?v=4"
);

// State reaktif untuk menentukan menu navbar yang sedang aktif
const menuAktif = ref("beranda");
</script>

<template>
  <!-- Navigation Bar Utama di bagian paling atas halaman -->
  <nav class="navbar">
    <div class="nav-container">
      <!-- Judul / Brand di sebelah kiri navbar -->
      <span class="nav-brand">Portfolio</span>

      <!-- Daftar menu navigasi di sebelah kanan navbar -->
      <div class="nav-links">
        <!-- Tombol Beranda -->
        <a
          href="#"
          class="nav-item"
          :class="{ active: menuAktif === 'beranda' }"
          @click.prevent="menuAktif = 'beranda'"
        >
          Beranda
        </a>
        <!-- Tempat untuk menambah menu halaman lainnya nanti (contoh: Tentang, Kontak, dll) -->
      </div>
    </div>
  </nav>

  <!-- Pembungkus kontainer utama isi konten -->
  <div class="container">
    
    <!-- Bagian Header Profil Pengguna -->
    <header class="profile-header">
      <!-- Foto profil berbentuk lingkaran -->
      <img :src="gambarProfil" alt="Gambar Profil" class="profile-img" />
      
      <!-- Informasi Teks Profil -->
      <div class="profile-info">
        <!-- Menampilkan nama pengguna (Xewann) -->
        <h1 class="profile-name">{{ namaUser }}</h1>
        <!-- Subtitle / Peran Singkat -->
        <p class="profile-title">Web Developer</p>
      </div>
    </header>

    <!-- Bagian Utama yang berisi Daftar Skill -->
    <main class="skill-section">
      <!-- Judul Bagian Skill -->
      <h2>Daftar Keahlian</h2>
      
      <!-- Grid wrapper untuk menyusun SkillCard secara menyamping -->
      <div class="skill-list">
        <SkillCard
          v-for="skill in daftarSkill"
          :key="skill.id"
          :nama="skill.nama"
          :level="skill.level"
          :icon="iconSkill[skill.nama]"
        />
      </div>
    </main>

  </div>
</template>

<style scoped>
/* Mengatur tampilan umum Navigation Bar paling atas */
.navbar {
  width: 100%; /* Memenuhi lebar layar */
  background-color: #ffffff; /* Warna latar navbar putih */
  border-bottom: 1px solid #e2e8f0; /* Garis pembatas abu-abu di bawah navbar */
  position: sticky; /* Membuat navbar menempel di atas saat di-scroll */
  top: 0; /* Posisi teratas */
  z-index: 100; /* Memastikan navbar berada di atas elemen lain */
}

/* Mengatur wadah di dalam navbar agar konten terpusat */
.nav-container {
  max-width: 900px; /* Lebar maksimal navbar disamakan dengan konten */
  margin: 0 auto; /* Memposisikan di tengah */
  padding: 14px 24px; /* Ruang dalam atas-bawah 14px, kiri-kanan 24px */
  display: flex; /* Menggunakan flexbox untuk layout menyamping */
  justify-content: space-between; /* Memberi jarak antara brand dan menu navigasi */
  align-items: center; /* Meratakan posisi secara vertikal di tengah */
}

/* Mengatur gaya teks judul/brand di navbar */
.nav-brand {
  font-weight: 700; /* Teks tebal */
  font-size: 1.1rem; /* Ukuran font brand */
  color: #0f172a; /* Warna teks gelap */
}

/* Mengatur kelompok tombol menu navigasi */
.nav-links {
  display: flex; /* Menyusun menu navigasi berjejer ke samping */
  gap: 16px; /* Jarak antar menu navigasi */
}

/* Mengatur gaya dasar setiap item link navigasi */
.nav-item {
  text-decoration: none; /* Menghilangkan garis bawah link */
  color: #64748b; /* Warna teks abu-abu */
  font-weight: 500; /* Ketebalan font sedang */
  font-size: 0.95rem; /* Ukuran font menu */
  padding: 6px 12px; /* Ruang dalam tombol menu */
  border-radius: 6px; /* Melengkungkan sudut tombol */
  transition: all 0.2s ease; /* Animasi perpindahan status menu */
}

/* Efek saat kursor diarahkan ke menu navigasi */
.nav-item:hover {
  color: #2563eb; /* Warna teks berubah jadi biru */
  background-color: #eff6ff; /* Latar belakang biru muda tipis */
}

/* Tampilan khusus untuk menu navigasi yang sedang aktif */
.nav-item.active {
  color: #2563eb; /* Warna teks biru */
  font-weight: 600; /* Font lebih tebal */
  background-color: #eff6ff; /* Latar belakang biru muda */
}

/* Membatasi lebar seluruh isi halaman utama */
.container {
  max-width: 900px; /* Lebar maksimal konten */
  margin: 0 auto; /* Memposisikan konten di tengah layar */
  padding: 32px 24px; /* Ruang dalam konten */
  font-family: system-ui, -apple-system, sans-serif; /* Font standar modern */
}

/* Mengatur tata letak bagian header profil */
.profile-header {
  display: flex; /* Menyusun foto profil dan nama berjejer ke samping */
  align-items: center; /* Meratakan posisi foto dan teks di tengah vertikal */
  gap: 20px; /* Jarak antara foto profil dan teks nama */
  padding-bottom: 24px; /* Ruang di bawah header */
  margin-bottom: 28px; /* Jarak dari header ke daftar skill */
  border-bottom: 1px solid #e2e8f0; /* Garis pemisah horizontal */
}

/* Mengatur ukuran foto profil */
.profile-img {
  width: 80px; /* Lebar foto 80px */
  height: 80px; /* Tinggi foto 80px */
  border-radius: 50%; /* Membuat foto lingkaran */
  object-fit: cover; /* Memastikan gambar tidak terdistorsi */
  border: 2px solid #e2e8f0; /* Garis lingkaran di sekeliling foto */
}

/* Mengatur tata letak teks profil */
.profile-info {
  display: flex;
  flex-direction: column; /* Menyusun nama dan title ke bawah */
  gap: 4px; /* Jarak antara nama dan title */
}

/* Mengatur tampilan teks nama Xewann */
.profile-name {
  margin: 0; /* Menghilangkan margin bawaan tag h1 */
  font-size: 1.5rem; /* Ukuran teks nama */
  font-weight: 700; /* Teks tebal */
  color: #0f172a; /* Warna teks gelap */
}

/* Mengatur tampilan teks profesi/subtitle */
.profile-title {
  margin: 0; /* Menghilangkan margin bawaan tag p */
  font-size: 0.95rem; /* Ukuran font subtitle */
  color: #64748b; /* Warna abu-abu */
}

/* Mengatur gaya judul section skill */
.skill-section h2 {
  font-size: 1.2rem;
  color: #0f172a;
  margin-bottom: 16px;
}

/* Mengatur grid agar kartu skill tersusun menyamping (responsif) */
.skill-list {
  display: grid; /* Menggunakan CSS Grid */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Minimal lebar kartu 200px */
  gap: 16px; /* Jarak antarkartu sebesar 16px */
}
</style>