<script setup>
defineProps({
    nama: String,
    level: String,
    icon: Object,
});
</script>

<template>
  <div class="skill-card">
    <h3>{{ nama }}:   <span v-if="level === 'Mahir'" class="badge badge--mahir">Mahir</span>
    <span v-else class="badge badge--pemula">Pemula</span></h3>
    <img :src="icon" :alt="nama" v-if="icon" />
  </div>
</template>

<style scoped>  
.skill-card {
  border: 1px solid #040000;
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 8px;
}
.badge {
  padding: 4px 8px;
  margin-bottom: 4px;
  border-radius: 666px;
  font-size: 1rem;
}
.badge--mahir {
  background-color: #0ac956;
  color: rgb(246, 246, 246);
}
.badge--pemula {
  background-color: #d10707;
  color: rgb(244, 244, 241); 
}       
</style>