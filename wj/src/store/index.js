import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

 export default  new Vuex.Store({
  strict: false,
    state:{
      login:true,
      footer_on:true,
      name:'请登录',
      num:'',
      img:"http://huangfufu.top:8080/qiluweb/upload/item/default.jpg",
      student:'',
      lass_num:'',
      login_key:true,
      msg_nums:"",
      per_list:[],
      cla_name:"",
      key_msg_web:true,
      msg_list:[],
      class_list:[],
      last_num:[],
      cla_number:"",
      cl_list:[],
      class_na:[],
      cla_reason:"",
      msg_list_arr:[]
      
   
    },
    mutations:{
    //    change_login(state){
    //       state.login = true;
    //    }
    footer_on(state,on){
        state.footer_on = on;
    },
    login_on(state,on){
      state.login = on;
    },
 

    },
    actions:{
//       add({commit},n){
//          commit('add',n);
//       },
//       addA({commit},n){
//         commit('addA',n);
//      },
//    async readUser({commit}){
//       let res = await fetch('http://localhost:8081/user.txt');
//       let users = await res.json();
//       console.log(users);
//      }
        //  to_login({commit}){
        //    //commit('change_login')
        //  }
        footer_on({commit},on){
       commit('footer_on',on);
        },
        login_on({commit},on){
          commit('login_on',on)
        },
     

    },
    getters:{//数据发生变化执行
        // count(state,getters){
        //      return state.a+2;
        // }
    },
    modules:{
       
    }
   })