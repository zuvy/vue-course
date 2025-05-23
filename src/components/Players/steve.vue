<template>
  <h3>Steve is on</h3>
  <Teleport to="#dialog_here">
    <dialog open>
      <h3>I am a modal</h3>
    </dialog>
    <Modal/>
  </Teleport>
</template>

<script setup>
import Modal from '@/components/Utils/modal.vue';
import { onUnmounted } from 'vue';
onUnmounted(() => {
  console.log("Steve Unmounted");
});
</script>
