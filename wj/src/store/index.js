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
      img:"https://huangfufu.top:8080/qiluweb/upload/item/default.jpg",
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
      msg_list_arr:[],
      msg_teacher_arr:[],
      creat_numss:"",
      class_list_fist:"",
      leave_data:"",
      week_list_to:"",
      week_list:[],
      week_num:1,
      c_r_key:true,
      num_list:[],
      now_table:"",
      in_fi:1,
      data_pun_stu:"",
      obj_msg:null,
      tz_obj:null,
      lo:"117.19155228719286",
      la:"36.799263035350215",
      shouji:"",
      baolu_arr:[],
      bl_con:"",
      dom_top:""
      
   
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

        footer_on({commit},on){
       commit('footer_on',on);
        },
        login_on({commit},on){
          commit('login_on',on)
        },
     

    },
    getters:{//数据发生变化执行
     
    },
    modules:{
       
    }
   })