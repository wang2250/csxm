//路由器对象
import Vue from 'vue';
import Router from 'vue-router';
import Msite from '../pages/Msite/Msite.vue';
import tz from '../pages/Profile/tz.vue';
import tz_xq from '../pages/Profile/tz_xq.vue';
import phone from '../pages/Profile/phone.vue';
import jianyi from '../pages/Profile/jianyi.vue';
import banben from '../pages/Profile/banben.vue';
import Profile from '../pages/Profile/Profile.vue';
import login_index from '../pages/login_index/login_index.vue';
import reg_index from '../pages/reg/reg.vue';
import join_class from '../components/join_class/join_class.vue'
import creat_class from '../components/creat_class/creat_class.vue'
import class_list from '../pages/class_list/class_list.vue'
import punch_in_teacher from "../pages/punch_in/punch_in_teacher.vue"
import punch_in_student from "../pages/punch_in/punch_in_student.vue"
import pun_xq from "../pages/punch_in/pun_xq.vue"
import punch_in from "../pages/punch_in/punch_in.vue"
import order from "../pages/order/order.vue"
import go_click from "../pages/go_click/go_click.vue"
import go_generate from "../pages/go_click/go_generate.vue"
import day_jou_teacher from "../pages/day_jou/day_jou_teacher.vue"
import zb_student from "../pages/Msite/zb_student.vue"
import zb_teacher from "../pages/Msite/zb_teacher.vue"
import leave from "../pages/nav/leave.vue";
import leave_to from "../pages/nav/leave_to.vue";
import infr from "../pages/Profile/infr.vue";
import punch_xq from "../pages/punch_in/punch_xq.vue"
import success from "../pages/punch_in/success.vue"
import msg from "../pages/order/msg.vue"
import leave_reason from "../pages/nav/leave_reason.vue";
import  classR from "../pages/nav/class_r.vue";
import  classRst from "../pages/nav/class_rst.vue";
import  classC from "../pages/nav/class_creat.vue";
import  confirm from "../pages/nav/confirm.vue";
import class_rea from '../pages/class_list/cla_rea.vue'
import shouji_tea from "../pages/shouji/shouji_tea.vue"
import bl from "../pages/order/bl.vue"
Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/msite',
            component:Msite
        },
        {
            path:'/Profile',
            component:Profile
        },
        
        {
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/login',
            component:login_index
        },
        {
            path:'/reg',
            component:reg_index
        },
        {
            path:'/join_class',
            component:join_class
        },
        {
            path:'/creat_class',
            component:creat_class
        },
        {
            path:'/class_list',
            component:class_list
        },
        {
            path:'/punch_in_teacher',
            component:punch_in_teacher
        },
        {
            path:'/punch_in_student',
            component:punch_in_student
        },
        {
            path:'/punch_in',
            component:punch_in
        },
        {
            path:'/order',
            component:order
        },
        {
            path:'/go_click',
            component:go_click
        },
        {
            path:'/go_generate',
            component:go_generate
        },
        {
            path:'/day_jou_teacher',
            component:day_jou_teacher
        }
        ,
        {
            path:'/leave',
            component:leave
        }
        ,
        {
            path:'/leave_to',
            component:leave_to
        }
        ,
        {
            path:'/infr',
            component:infr
        },
        {
            path:'/punch_xq',
            component:punch_xq
        }
        ,
        {
            path:'/msg',
            component:msg
        }
        ,
        {
            path:'/leave_reason',
            component:leave_reason
        } ,
        {
            path:'/class_r',
            component:classR
        } ,
        {
            path:'/class_rea',
            component:class_rea
        } ,
        {
            path:'/class_rst',
            component:classRst
        }
        ,
        {
            path:'/class_creat',
            component:classC
        },
        ,
        {
            path:'/confirm',
            component:confirm
        }
        ,
        {
            path:'/shouji_tea',
            component:shouji_tea
        }
        ,
        {
            path:'/success',
            component:success
        }
        ,
        {
            path:'/tz',
            component:tz
        },
        
        {
            path:'/tz_xq',
            component:tz_xq
        },
        {
            path:'/pun_xq',
            component:pun_xq
        },
        {
            path:'/zb_student',
            component:zb_student
        },
        {
            path:'/zb_teacher',
            component:zb_teacher
        },
        {
            path:'/phone',
            component:phone
        },
        {
            path:'/jianyi',
            component:jianyi
        },
        {
            path:'/banben',
            component:banben
        },
        ,
        {
            path:'/bl',
            component:bl
        },

        

        
    ]
})

