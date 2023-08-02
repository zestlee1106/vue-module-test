<template>
  <div>
    <button v-bind="$attrs"><slot /></button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
button {
  background-color: mediumaquamarine;
  border: 1px solid #000;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
}
</style>
