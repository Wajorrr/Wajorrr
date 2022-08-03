<template>
    <div class="header">
        头部
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
import { reactive } from 'vue';

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
    height: 150px;
    text-align: center;
    background-color: azure;
}
</style>