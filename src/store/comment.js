import Constant from './constant';

export default {
    namespaced: true,
    state: {
        'commentList' :[
            {
                star: 1,
                description: "Good",
            },
            {
                star: 2,
                description: "Bad",
            },
            {
                star: 3,
                description: "SSOO",
            },
            {
                star: 4,
                description: "SSOO",
            },
            {
                star: 5,
                description: "as",
            },
        ]
    },
           
    mutations: {
        [Constant.Set_COMMENTLIST] : (store, payload) => {
            store.commentList[0].description = payload.movieNm +"good";
        },
    },
    actions: {
        [Constant.Act_COMMENTLIST] : (store, payload) => {
            console.log("actions");
            console.log(store);
            console.log(payload);
            store.commit(Constant.Set_COMMENTLIST, payload);
        }
    },
}
  