<template>
  <div class="MainPage">
    <button @click="commenttoggle">test</button>
    <glide v-on:slideClicked="commenttoggle">dd</glide>
    <Maincommentcard v-if="commentshow">asas</Maincommentcard>
  </div>
</template>

<script>
import Constant from '../store/constant'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      commentshow: false,
      chosenMovieIndex: null,
    }
  },
  computed: mapState({
  }),
  components : {
  },
  methods : {
    
  },
  updated(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
