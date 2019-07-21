<template>
  <div class="my" v-bind:style="[style1, style2, marginStyle]">
    <div>{{ msg }}</div>
    <child-comp @child-event="myMethod" />
  </div>
</template>

<script>
import ChildComp from './ChildComponent.vue';

export default {
  name: 'my-comp',
  data() {
    return {
      style1: {
        fontSize: '12px',
        color: 'grey',
      },
      style2: {
        width: '100%',
      },
      marginStyle: {
        margin: '5px 10px 5px',
      },
    };
  },
  props: {
    msg: String,
  },
  components: {
    ChildComp,
  },
  methods: {
    myMethod: function(payload) {
      alert(payload.message);
    },
  },
};
</script>
