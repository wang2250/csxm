//路由器对象
import Vue from 'vue';
import Router from 'vue-router';
import Msite from '../pages/Msite/Msite.vue';

import Profile from '../pages/Profile/Profile.vue';
import login_index from '../pages/login_index/login_index.vue';
import reg_index from '../pages/reg/reg.vue';
import join_class from '../components/join_class/join_class.vue'
import creat_class from '../components/creat_class/creat_class.vue'
import class_list from '../pages/class_list/class_list.vue'
import punch_in_teacher from "../pages/punch_in/punch_in_teacher.vue"
import punch_in_student from "../pages/punch_in/punch_in_student.vue"
import nav from "../pages/nav/nav.vue"
import punch_in from "../pages/punch_in/punch_in.vue"
import order from "../pages/order/order.vue"
import go_click from "../pages/go_click/go_click.vue"
import go_generate from "../pages/go_click/go_generate.vue"
import day_jou_teacher from "../pages/day_jou/day_jou_teacher.vue"
import day_jou_student from "../pages/day_jou/day_jou_student.vue"
import day_jou from "../pages/day_jou/day_jou.vue"
import leave from "../pages/nav/leave.vue";
import leave_to from "../pages/nav/leave_to.vue";
import infr from "../pages/Profile/infr.vue";
import punch_xq from "../pages/punch_in/punch_xq.vue"
import shezhi from "../pages/Profile/shezhi.vue";
import msg from "../pages/order/msg.vue"
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
            path:'/nav',
            component:nav
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
        },
        {
            path:'/day_jou_student',
            component:day_jou_student
        },
        {
            path:'/day_jou',
            component:day_jou
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
        },
        {
            path:'/shezhi',
            component:shezhi
        }
        ,
        {
            path:'/msg',
            component:msg
        }


        

        
    ]
})