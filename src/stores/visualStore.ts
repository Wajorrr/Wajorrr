import { defineStore } from "pinia";
import { Names } from "./store_name";
import { getApiList } from "../server";
import type { Children, ChinaAdd, ChinaTotal, RootObject, StatisGradeCityDetail } from "./type";

export const useVisualStore = defineStore(Names.Visual, {
    state: () => ({
        list: <RootObject>{},
        item: <Children[]>[],
        chinaAdd: <ChinaAdd>{},
        chinaTotal: <ChinaTotal>{},
        cityDetail: <StatisGradeCityDetail[]>[],
    }),
    //类似于computed 可以帮我们去修饰我们的值
    getters: {
    },
    //可以操作异步 和 同步提交state
    actions: {
        async getList() {
            const res = await getApiList();
            this.list = res;
            this.chinaAdd = this.list.diseaseh5Shelf.chinaAdd;
            this.chinaTotal = this.list.diseaseh5Shelf.chinaTotal;
            this.cityDetail = this.list.statisGradeCityDetail.sort((a, b) => b.nowConfirm - a.nowConfirm).slice(0, 10);
        }
    },
})