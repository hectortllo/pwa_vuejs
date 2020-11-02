<template>
  <div class="foot">
    <copyright />
  </div>
</template>

<script>
import Copyright from './Copyright'

export default {
  name: 'Footer',
  components: {
    Copyright
  }
}
</script>

<style scoped>
  .foot {
    margin: 0;
    margin-top: 50px;
    height: 68px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>