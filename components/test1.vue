
<template>
  <div id="menu-overlay">
    <div class="mask"></div>
    <div class="menu-links">
      <div class="item"><p>css clip path</p></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const mask = document.querySelector(".mask");
  const items = document.querySelectorAll(".item p");

  // เปิด mask
  setTimeout(() => {
    mask.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
  }, 300);

  // ลอยขึ้นแบบ stagger
  items.forEach((el, i) => {
    setTimeout(() => {
      el.style.transform = "translateY(0)";
    }, 600 + i * 120);
  });
});
</script>


<style scoped>
.mask {
  position: absolute;
  inset: 0;
  z-index: 5;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  transition: clip-path 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.menu-links {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.item {
  overflow: hidden;
}

.item p {
  font-size: 80px;
  margin: 0;
  transform: translateY(110%);
  transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-font-smoothing: antialiased;
}

</style>
