 <template>
 <div class="row">
   <div class="col-sm"  v-for="(comment, index) in commentList" :key="index">
      <b-card bg-variant="primary" text-variant="white">
        <blockquote class="card-blockquote">
          <p>. {{comment.description}}.</p>
          <footer>
            <small>{{comment.star}} <cite title="Source Title">Source Title</cite></small>
          </footer>
        </blockquote>
      </b-card>
  </div>
 </div>
 </template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Maincommentcard',
  data () {
    return {
      msg: 'test',
    }
  },
   computed: mapState({
    commentList: state => state.comment.commentList,
  }),
}
</script>
<style scoped>
.card-body {
  background: rgb(238, 220, 220);
  color: black;
  height: 200px;
}
.col-sm {
  margin-top: 30px;
  padding: 10px 10px 10px 10px;

}
.card {
  background: rgb(238, 220, 220);
  border: none;
}
</style>
 