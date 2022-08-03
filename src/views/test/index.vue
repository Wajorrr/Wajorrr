<template>
    <div style="display:flex;flex-direction: column;">
        <Header ref="header" @submit-data2="getData2" @submit-data="getData" :data="list" title="这是头部(父组件传递)"></Header>
        <div class="container">
            <div class="container-left">
                container-left
            </div>
            <div class="container-right">
                <div class="container-right-up">
                    container-right-up
                </div>
                <div class="container-right-down">
                    <div class="container-right-down-items" :key="item" v-for="item in 100">
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Header from '../../components/test/Header.vue';

//向子组件传参
let msg = ref("");
let list = reactive<number[]>([1, 2, 3])

//接受子组件传参
const getData = (list: number[], flag: boolean) => {
    console.log(list, '我是子组件传过来的list', flag)
}
const getData2 = (list: number[], flag: boolean) => {
    console.log(list, flag)
}

//通过子组件的引用获取子组件暴露出来的属性
const header = ref(null)
console.log(header)




</script>

<style lang="scss" scoped>
.container {
    background-color: rgb(208, 205, 205);
    height: 100%;
    display: flex;
    overflow: hidden;

    &-left {
        width: 200px;
        border: 1px solid;
    }

    &-right {
        flex: 1;
        display: flex;
        flex-direction: column;

        &-up {
            height: 60px;
        }

        &-down {
            flex: 1;
            margin: 20px;
            border: 1px solid;
            overflow: auto;

            &-items {
                padding: 20px;
                border: 1px solid;
            }
        }
    }
}
</style>
