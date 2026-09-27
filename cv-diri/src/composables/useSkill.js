// Mengimpor fungsi ref dari Vue untuk membuat data reaktif
import { ref } from "vue";

// Meng-export fungsi composable useSkill agar bisa diimpor di komponen lain
export function useSkill() {
  // Membuat state reaktif berisi daftar array object skill
  const daftarSkill = ref([
    { id: 1, nama: "JavaScript", level: "Mahir" },
    { id: 2, nama: "Vue.js", level: "Mahir" },
    { id: 3, nama: "HTML", level: "Pemula" },
    { id: 4, nama: "CSS", level: "Pemula" },
  ]);

  // Membuat state reaktif berisi pemetaan URL ikon berdasarkan nama skill
  const iconSkill = ref({
    JavaScript: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    "Vue.js": "https://cdn-icons-png.flaticon.com/512/5968/5968672.png", // Diubah dari "Vue" ke "Vue.js"
    HTML: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    CSS: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  });

  // Mengembalikan data agar bisa di-destructure di dalam komponen Vue (seperti App.vue)
  return {
    daftarSkill,
    iconSkill,
  };
}