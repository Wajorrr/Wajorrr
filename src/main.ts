import { createApp, toRaw } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia, PiniaPluginContext } from 'pinia'

type Options = {
    key?: string;
}

const __piniaKey__: string = 'Wajor';

const setStorage = (key: string, value: any) => {//将数据以JSON的形式存入localstorage
    localStorage.setItem(key, JSON.stringify(value));
}

const getStorage = (key: string) => {//根据key在localstorage中查找数据，若没找到则返回空对象列表
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}

const PiniaPlugin = (options: Options) => {//自定义插件
    return (context: PiniaPluginContext) => {
        const { store } = context;//store的信息
        const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`);//根据当前store的id信息获取相应的数据
        // console.log(data);
        store.$subscribe(() => {//当store中的数据改变时，实时改变localstorage中所保存的数据
            console.log('change');
            setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state));
        });
        // console.log(store, 'store');
        return {//返回保存的数据
            ...data
        }
    }
}
const store = createPinia()
// store.use(PiniaPlugin({//启用插件
//     key: "pinia",//存入localstorage中的key的前缀
// }))
let app = createApp(App)


app.use(store).use(router).mount('#app')
