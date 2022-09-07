<template>
    <div class="header">
        头部
        <br>
        pinia:{{ Test.current }}——{{ Test.name }}
        <br>
        user:{{ Test.user }}
        <br>
        <button @click="synchronize_change">同步change</button>
        <br>
        <br>
        pinia:{{ Test.current }}——{{ Test.name }}
        <br>
        user:{{ Test.user }}
        <br>
        <button @click="asnyc_change">异步change</button>
        <br>
        <br>
        getters:{{ Test.newName }}
        <br>
        <button @click="reset">reset</button>
        <br>
        {{ title }}
        <br>
        {{ data }}
        <br>
        <button @click="clickTap">给父组件派发参数</button>
        <br>
        <button @click="clickTap2">给父组件派发参数</button>
    </div>
</template>

<script setup lang="ts">
import { useTestStore } from '../../stores';
import { reactive } from 'vue';


const Test = useTestStore()

//====API====
//类似于Vuex 的abscribe  只要有state 的变化就会走这个函数
// Test.$subscribe((args, state) => {
//     console.log('==========>', args);
//     console.log('==========>', state);
// }, {
//     detached: true,
//     deep: true,
//     flush: "post",
// })

//只要有actions被调用就会走这个函数
// Test.$onAction((args) => {
//     args.after(() => {
//         console.log('after');
//     })
//     console.log(args);
// }, true)


//修改pinia中state的值的5种方式：
//1 Test.current++
//2 Test.$patch({current:888,name:"娃娃"})
//3 Test.$patch((state)=>{state.current=999 state.name = "娃娃"})
//4 Test.$state={current:2000,name:"娃娃"}
//5 action Test.setCurrent(567)

//同步写法
const synchronize_change = () => {
    Test.setUser();
    Test.setCurrent(567);
    // Test.$patch((state) => {
    //     state.current = 999
    //     state.name = "娃娃"
    // })
    // Test.$state = { current: 2000, name: "娃娃" }
}

//异步写法
const asnyc_change = () => {
    Test.asycn_setUser();
}

//reset
const reset = () => {
    Test.$reset();
}

//接受父组件传参
// type props = {
//     title: string,
//     data: number[]
// }
// defineProps<props>()
//设置可选传参以及默认值
type props = {
    title?: string,
    data?: number[]
}
withDefaults(defineProps<props>(), {
    title: "我是默认值",
    data: () => [1, 2, 3, 4]
})


//向父组件传参
let list = reactive<number[]>([1, 2, 3, 4, 5])
const emit = defineEmits(['submit-data', 'submit-data2'])
const clickTap = () => {
    emit('submit-data', list, false)
}
const clickTap2 = () => {
    emit('submit-data2', list, true)
}

//向父组件暴露自身含有的属性
defineExpose({
    list,
})

</script>

<style lang="scss" scoped>
.header {
    height: 350px;
    text-align: center;
    background-color: azure;
}
</style>