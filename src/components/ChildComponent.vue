<template>
  <div>
    <div>Child Componnent</div>
    <div>
      TEXT:
      <input type="text" v-model="childText" />
      BUTTON:
      <button @click="childMethod">Child to Parent</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'child-comp',
  props: {
    msg: String,
  },
  methods: {
    childMethod: function() {
      this.$emit('child-event', { message: this.childText }); //Trigger a customized event
    },
  },
};
</script>
