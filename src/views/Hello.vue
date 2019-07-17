<template>
  <div id="app" v-bind:style="[style1, style2]">
    <p>
      <input type="text" v-model="message" />
      => {{ message }}
    </p>
    <p>
      <!-- <button v-on:click="showMessage">Button</button> -->
      <button @click="showMessage">Button</button>
      => {{ msg }}
    </p>
    <div
      class="msg"
      v-bind:style="[styles, marginStyle]"
      @mouseover="overMessage"
      @mouseout="outMessage"
    >
      <p>{{ styleMsg }}</p>
    </div>
    <div class="show" v-bind:style="marginStyle">
      <button @click="clickShow">Show Button</button>
      <div v-show="show" v-bind:style="marginStyle">Counter Show?</div>
    </div>
    <div v-if="$store.state.count > 2" v-bind:style="marginStyle">Counter is larger than 2</div>
    <div v-else-if="$store.state.count < 2" v-bind:style="marginStyle">Counter is less than 2</div>
    <div v-else v-bind:style="marginStyle">Counter equals to 2</div>
    <div class="show" v-bind:style="marginStyle">
      <table>
        <thead>
          <tr v-bind:style="tableStyle">
            <th v-bind:style="tableStyle">id</th>
            <th v-bind:style="tableStyle">title</th>
            <th v-bind:style="tableStyle">author</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" v-bind:key="book.id">
            <td v-bind:style="tableStyle">{{ book.id }}</td>
            <td v-bind:style="tableStyle">{{ book.title }}</td>
            <td v-bind:style="tableStyle">{{ book.author }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-bind:style="[styles, marginStyle]">
      <p>
        <input type="text" v-model="reverse" />
      </p>
      <p>{{ methodReverse() }}</p>
      <p>{{ computedReverse }}</p>
    </div>
    <div v-bind:style="marginStyle">
      <p>
        Last name:
        <input type="text" v-model="lastName" />
        First name:
        <input type="text" v-model="firstName" />
      </p>
      <p>Full name: {{ fullName.lastName }} {{ fullName.firstName }}</p>
    </div>
    <div v-bind:style="marginStyle">
      <p>
        <button @click="changeFlag">Switch</button>
        : {{ flag }}
      </p>
    </div>
    <div v-bind:style="marginStyle">
      <div v-for="book in books" v-bind:key="book.id">
        <input type="text" v-model="book.title" />
      </div>
    </div>
    <div v-bind:style="marginStyle">
      <p>
        Filter toUppercase:
        <input type="text" v-model="filterMsg" />
        => {{ filterMsg | uppercase | reverse }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
      reverse: "",
      msg: "",
      // lastName: "",
      // firstName: "",
      fullName: { lastName: "", firstName: "" },
      show: true,
      styleMsg: "",
      filterMsg: "",
      styles: {
        backgroundColor: "#66CCCC",
        textAlign: "center",
        width: "200px",
        height: "40px",
        display: "inline-block"
      },
      style1: {
        fontSize: "12px",
        color: "grey"
      },
      style2: {
        width: "100%"
      },
      marginStyle: {
        margin: "5px 10px 5px"
      },
      tableStyle: {
        border: "thin groove"
      },
      books: [
        { id: 1, title: "Star Wars", author: "George Lucas" },
        { id: 2, title: "Mad Max", author: "George Miller" },
        { id: 3, title: "Avatar", author: "James Cameron" }
      ],
      flag: true
    };
  },
  //set calculated properties
  computed: {
    computedReverse: function() {
      return this.reverse
        .split("")
        .reverse()
        .join("");
    },
    lastName: {
      get: function() {
        return this.fullName.lastName;
      },
      set: function(value) {
        this.fullName.lastName = value;
      }
    },
    firstName: {
      get: function() {
        return this.fullName.firstName;
      },
      set: function(value) {
        this.fullName.firstName = value;
        // // console.log(value, value.split(" "));
        // const vals = value.split(" ");
        // console.log(vals);
        // this.lastName = vals.length > 1 ? vals[1] : "";
        // // vals.length === 2 ? vals[0] : vals.length > 1 ? vals[0] : "";
        // this.firstName = vals.length > 1 ? vals[2] : "";
      }
    }
  },
  methods: {
    showMessage: function() {
      this.msg = `Current Count: ${this.$store.state.count}`;
    },
    overMessage: function() {
      this.styleMsg = "Mouseover...";
    },
    outMessage: function() {
      this.styleMsg = "Mouseout...";
    },
    clickShow: function() {
      this.show = !this.show;
    },
    methodReverse: function() {
      return this.reverse
        .split("")
        .reverse()
        .join("");
    },
    changeFlag: function() {
      this.flag = !this.flag;
    }
  },
  watch: {
    // watch the property flag
    flag: function(newFlag, oldFlag) {
      console.log(newFlag, oldFlag);
    },
    // watch the object books
    books: {
      handler: function() {
        console.log("A book changed.", this.books);
      },
      deep: true
    }
  }
};
</script>
