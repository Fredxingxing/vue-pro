<template>
    <div class="homeCarousel">
        <div class="content-image" @click="toNews">
            <Carousel v-model="active" loop dots="none" autoplay arrow="never" :autoplay-speed="autoPlay">
                <CarouselItem v-for="(banner,index) in list">
                    <img class="carousel-item" :src="banner.thumbnail" width="100%"/>
                </CarouselItem>
            </Carousel>
            <div class="content-image-text" id="content-image-text">{{list[active].title}}</div>
        </div>
        <div class="content-list" data-aos="fade-up">
            <div class="list-icon" id="left-icon" @click="arrow(-1)">
                <span><</span>
            </div>
            <div class="content-image-list">
                <div class="content-image-item"
                     v-for="(item,index) in list"
                     :class="{'image-active':index===active}"
                     :key="`image-${index}`"
                     @click="imageClick(index)"
                >
                    <img :src="item.thumbnail" width="100%" height="100%">
                </div>
            </div>
            <div class="list-icon" id="right-icon" @click="arrow(1)">
                <span>></span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'HomeCarousel',
    props: {
      list: Array,
    },
    data () {
      return {
        active: 0,
        autoPlay: 10000
      }
    },
    computed: {
      imageListClass: function (index) {
        return index === this.active ? 'content-image-list image-active' : 'content-image-list'
      }
    },
    methods: {
      arrow: function (step) {
        if (this.active === 0) {
          this.active = step === 1 ? this.active + 1 : 0
          return
        }
        if (this.active === (this.list.length - 1)) {
          this.active = step === 1 ? 0 : this.active + step
          return
        }
        this.active += step
      },
      imageClick: function (index) {
        this.active = index
      },
      toNews:function () {
        this.$router.push({path:'/news/detail',query:{id:this.list[this.active].id}})
      }
    }
  }
</script>

<style scoped>
    .HomeCarousel {
        display: flex;
        flex-direction: column;
    }

    .content-list {
        margin-top: 20px;
        height: 140px;
        display: flex;
    }

    .list-icon {
        cursor: pointer;
        width: 40px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        background: #E4E4E4;
        color: #fff;
    }

    .list-icon:hover {
        transition: 0.6s;
        background: #c4c4c4;
        color: #eee;
    }

    .carousel-item {
        height: 600px;
        width: 100%;
    }

    .content-image-list {
        flex: 1;
        height: 140px;
        margin: 0 12px;
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
    }

    .content-image-item {
        cursor: pointer;
        width: 224px;
        height: 140px;
        display: inline-block;
        overflow: hidden;
    }

    .content-image-item img:hover {
        transition: 0.8s;
        transform: scale(1.2);
    }

    .image-active {
        border: 1px solid #CE2122;
    }

    .content-image-item + .content-image-item {
        margin-left: 14px;
    }
    .content-image {
        position: relative;
        cursor: pointer;
        margin-bottom: 22px;
    }
    .content-image-text {
        position: absolute;
        bottom: 6px;
        height: 50px;
        width: 100%;
        background: rgba(0, 0, 0, 0.7);
        font-size: 18px;
        line-height: 50px;
        padding: 0 20px;
        color: #fff;
    }
</style>
