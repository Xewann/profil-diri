<script setup>
import { ref } from "vue";
import SkillCard from "./components/SkillCard.vue";
const gambarProfil = ref(
  "https://avatars.githubusercontent.com/u/12345678?v=4",
);
const linkAktif = ref(true);
const daftarSkill = ref([
  { id: 1, nama: "JavaScript", level: "Mahir" },
  { id: 2, nama: "Vue.js", level: "Mahir" },
  { id: 3, nama: "HTML", level: "Pemula" },
  { id: 4, nama: "CSS", level: "Pemula" },
]);
const stok = ref(10);

const iconSkill = ref({
  JavaScript: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  Vue: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  HTML: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  CSS: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
});
</script>

<template>
  <img :src="gambarProfil" alt="Gambar Profil" />
  <a :class="{ active: linkAktif }" href="#">Beranda</a>
  <ul>
    <li v-for="(item, index) in skill" :key="index">{{ item }}</li>
  </ul>
  <p v-if="stok > 0">Stok BBM Tersedia: {{ stok }}</p>

  <!-- Skill Cards -->
  <div class="skill-list">
    <SkillCard
      v-for="skill in daftarSkill"
      :key="skill.id"
      :nama="skill.nama"
      :level="skill.level"
      :icon="iconSkill[skill.nama]"
    />
  </div>
</template>

