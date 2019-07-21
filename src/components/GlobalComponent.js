import Vue from 'vue';

Vue.component('global-comp', {
  data: function() {
    return {
      message1: 'Global',
      message2: 'Component',
      style1: {
        fontSize: '12px',
        color: 'grey',
      },
      style2: {
        width: '100%',
      },
    };
  },
  template:
    '<div v-bind:style="[style1, style2]"><p>{{message1}} {{message2}}</p></div>',
});
