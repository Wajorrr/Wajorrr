import axios from "axios";

const server = axios.create({
    // baseURL: "http://localhost:3333"
    baseURL: "https://api.inews.qq.com"
})

export const getApiList = () => {
    // return server.get('/api/list').then(res => res.data)
    return server.get('/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf').then(res => res.data.data)
}