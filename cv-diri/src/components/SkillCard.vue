<script setup>
defineProps({
  nama: String,
  level: String,
  icon: String, // Diubah ke String karena mengoper URL gambar
});
</script>

<template>
  <div class="skill-card">
    <div class="icon-container">
      <img :src="icon" :alt="nama" v-if="icon" />
    </div>
    <div class="skill-info">
      <h3>{{ nama }}</h3>
      <span
        class="badge"
        :class="level === 'Mahir' ? 'badge--mahir' : 'badge--pemula'"
      >
        {{ level }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.skill-card {
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid #e2e8f0;
  padding: 16px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.icon-container {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}

.skill-info h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
}

.badge {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.badge--mahir {
  background-color: #dcfce7;
  color: #15803d;
}

.badge--pemula {
  background-color: #fee2e2;
  color: #b91c1c;
}
</style>