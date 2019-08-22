import Constant from './constant';

export default {
    namespaced: true,
    state: {
        'boxOffice' :[
            {
                rank: "1",
                movieNm: "미션임파서블:고스트프로토콜",
            },
            {
                rank: "2",
                movieNm: "마이 웨이",
            },
            {
                rank: "3",
                movieNm: "미션임파서블3:고스트프로토콜",
            },
            {
                rank: "4",
                movieNm: "마이 웨이4",
            },
            {
                rank: "5",
                movieNm: "마이 웨이5",
            },
            {
                rank: "6",
                movieNm: "마이 웨이6",
            },
        ],
        chosenMovieIndex: 2,
    },
           
    mutations: {
        [Constant.Set_BOXOFFICE] : (store, payload) => {
            store.boxOffice = payload.boxOffice;
        },
        [Constant.Set_MOVIEINDEX] : (store, payload) => {
            console.log(payload)
            store.chosenMovieIndex = payload.chosenMovieIndex;
        }
    },
    actions: {
        [Constant.Act_BOXOFFICE] : (store, payload) => {
            store.commit(Constant.Set_BOXOFFICE, {boxOffice: 'test'});
        },
        [Constant.Act_MOVIEINDEX] : (store, payload) => {
            store.commit(Constant.Act_MOVIEINDEX);
        }
    },
}
  