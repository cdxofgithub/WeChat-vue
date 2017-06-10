import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/chat',
      component: require('@/page/chat/chat.vue')
    },
    {
      path: '/friend',
      component: require('@/page/friend/friend.vue')
    },
    {
      path: '/my',
      component: require('@/page/resume/resume.vue')
    }
  ],
  linkActiveClass: 'active' //用 active 替换点击时添加的class
})
router.push({path: '/chat'});
export default router
