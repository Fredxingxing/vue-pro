<template>
    <div class="home">
        <div class="title">Vue-Pro</div>
        <p class="introduction">我们集成了vuex vueRouter等，是一个开箱即用的vue框架</p>
        <Button @click="test" class="test" type="primary">test mock</Button>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import HomeCarousel from './components/HomeCarousel'

    export default {
        name: 'index',
        components: {
            HomeCarousel
        },
        data() {
            return {}
        },
        mounted() {
            const Init = async () => {
                // do some promise
            }
            Init()
        },
        computed: {
            ...mapState({
                home: state => state.home
            }),
        },
        methods: {
            test: function () {
                this.$store.dispatch({
                    type: 'home/getList',
                }).then(() => {
                    console.log('mockList',this.home.list)
                })
            },
        }
    }
</script>

<style lang="less" scoped>
    .home {
        display: flex;
        flex-direction: column;
    }

    .test {
        width: 120px;
        margin: auto;
    }

    .introduction {
        padding: 18px;
        text-indent: 2em;
        text-align: center;
    }

    .title {
        padding: 32px;
        font-size: 18px;
        text-align: center;
    }

    .bottom-bar {
        margin-top: 34px;
        width: 100%;
        min-width: 800px;
    }

</style>
