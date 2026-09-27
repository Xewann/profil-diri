<script setup>
// Mendefinisikan properti (props) yang diterima oleh komponen CardRate
const props = defineProps({
  id: Number,     // ID unik item/layanan
  name: String,   // Nama item/layanan
  price: Number,  // Harga item/layanan
});

// Mendefinisikan penampung event kustom yang dikirimkan ke komponen induk (parent)
const emit = defineEmits(['add-to-cart']);

// Fungsi yang dijalankan saat tombol "Add to Cart" diklik
function handleAddToCart() {
  // Memicu event 'add-to-cart' ke parent sambil membawa data props.id
  emit('add-to-cart', props.id);
}
</script>

<template>
  <!-- Wadah utama untuk kartu rate/harga -->
  <div class="rate-card">
    <!-- Menampilkan nama item/layanan -->
    <h3>{{ name }}</h3>
    
    <!-- Menampilkan harga dengan format angka ribuan sesuai standar USD -->
    <p class="price">Price: ${{ price.toLocaleString('en-US') }}</p>
    
    <!-- Tombol untuk menambahkan item ke keranjang -->
    <button class="btn-cart" @click="handleAddToCart">Add to Cart</button>
  </div>
</template>

<style scoped>
/* Mengatur tampilan wadah utama kartu rate */
.rate-card {
  border: 1px solid #e2e8f0; /* Garis pinggir abu-abu halus */
  padding: 16px; /* Ruang dalam kartu sebesar 16px */
  border-radius: 12px; /* Lengkungan di setiap sudut kartu */
  background-color: #ffffff; /* Latar belakang warna putih */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); /* Bayangan halus di bawah kartu */
  display: flex; /* Menggunakan flexbox */
  flex-direction: column; /* Menyusun isi kartu ke bawah secara vertikal */
  gap: 8px; /* Jarak antar elemen di dalam kartu 8px */
}

/* Mengatur tampilan judul nama layanan */
.rate-card h3 {
  margin: 0; /* Menghilangkan margin bawaan tag h3 */
  font-size: 1.1rem; /* Ukuran font judul */
  color: #1e293b; /* Warna teks abu-abu gelap */
}

/* Mengatur tampilan teks harga */
.price {
  margin: 0; /* Menghilangkan margin bawaan tag p */
  font-size: 0.95rem; /* Ukuran font harga */
  color: #64748b; /* Warna teks abu-abu sedang */
  font-weight: 500; /* Ketebalan font sedang */
}

/* Mengatur tampilan tombol "Add to Cart" */
.btn-cart {
  margin-top: 8px; /* Memberi jarak dari teks harga */
  padding: 8px 16px; /* Ruang dalam tombol */
  background-color: #4f46e5; /* Warna dasar tombol (indigo/ungu kebiruan) */
  color: #ffffff; /* Warna teks tombol putih */
  border: none; /* Menghilangkan garis pinggir bawaan tombol */
  border-radius: 6px; /* Melengkungkan sudut tombol */
  font-weight: 600; /* Teks tombol tebal */
  cursor: pointer; /* Mengubah kursor menjadi bentuk tangan saat diarahkan */
  transition: background-color 0.2s ease; /* Efek animasi perpindahan warna tombol */
}

/* Mengatur warna tombol saat kursor diarahkan (hover) */
.btn-cart:hover {
  background-color: #4338ca; /* Warna tombol menjadi sedikit lebih gelap */
}
</style>