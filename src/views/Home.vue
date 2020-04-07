<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ItemsList></ItemsList>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemsList from '@/components/ItemsList.vue';

export default {
  name: 'Home',
  components: {
    ItemsList,
  },
};
</script>
