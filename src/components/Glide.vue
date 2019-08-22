<template>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide type="button" v-on:click.native.self="slideClick(slide, index)"  v-for="(slide, index) in boxOffice" :key="index">
          {{slide.rank}}위 {{slide.movieNm}}
          <span class="slide-inside-button">
              <router-link to=${dd} type="button">Go to {{index}}</router-link>
              <router-link to="/foo" type="button">Go to Foo</router-link>
          </span>
          </swiper-slide>
        <!-- <swiper-slide>Slide 1</swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next"  slot="button-next"></div>
      </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import Constant from '../store/constant'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      getSlides: [{'title':'slide1'}, {'title':'slide2'}, {'title':'slide3'}, {'title':'slide4'}] 

    }
  },
  computed: mapState({
    // 화살표 함수는 코드를 매우 간결하게 만들어 줍니다!
    boxOffice: state => state.movie.boxOffice,

    // 문자열 값 'count'를 전달하는 것은 `state => state.count`와 같습니다.
    countAlias: 'boxOffice',

    // `this`를 사용하여 로컬 상태에 액세스하려면 일반적인 함수를 사용해야합니다
    countPlusLocalState (state) {
      return state.boxOffice;
    }
  }),
  methods : {
    clicked(){
      console.log('clicked');
    },
    slideClick(slide, index){
      this.$emit('slideClicked', slide, index);
      this.changeCommentList(slide);
      console.log('slideClicked')
    },
    ...mapActions('comment', {
      changeCommentList: Constant.Act_COMMENTLIST // this.add()을 this.$store.dispatch('increment')에 매핑
    }),
    
  },
  updated() {
    console.log('updated')

  }
}
</script>
<style scoped>
  .slide-inside-button {
    position: relative;
    top: 200px;
    left: 50px;
  }
  .swiper-slide {
    width: 100%;
    height: 300px;
    background: rgb(92, 145, 6);
  }
  .swiper-slide-next {
    width: 100%;
    height: 300px;
    background: rgb(150, 128, 32);
  }
  .test {
    width: 100%;
  }
</style>