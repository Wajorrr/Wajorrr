import { promiseTimeout } from "@vueuse/core";
import { defineStore } from "pinia";
import { Names } from "./store_name";

type User = {
    name: String,
    age: number,
}

let result: User = {
    name: "Wajorrr",
    age: 999
}

const Login = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Wajorrr111",
                age: 999999
            })
        }, 2000)
    })
}

export const useTestStore = defineStore(Names.Test, {
    state: () => {
        return {
            user: <User>{},
            current: 1,
            name: "wajorrr",
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters: {
        newName(): string {
            return `${this.name}-${this.getUserAge}`
        },
        getUserAge(): number {
            return this.user.age;
        }
    },
    //可以操作异步 和 同步提交state
    actions: {
        setCurrent(num: number) {
            this.current = num
        },
        increment() {
            this.current++
        },
        randomizeCounter() {
            this.current = Math.round(100 * Math.random())
        },
        setName(name: string) {
            this.name = name;
        },
        setUser() {
            this.user = result;
            this.setName("wajor");
        },
        async asycn_setUser() {
            const temp = await Login();
            this.user = temp;
            this.setName("rojaw");
        },
    },
});
