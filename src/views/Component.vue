<template>
  <div class="home">
    <my-comp msg="Parent Child Components" />
    <global-comp />
  </div>
</template>

<script>
// @ is an alias to /src
import MyComp from '@/components/MyComponent.vue';

export default {
  name: 'components',
  components: {
    MyComp,
  },
};
</script>
