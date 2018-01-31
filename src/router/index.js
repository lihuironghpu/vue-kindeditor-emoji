import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import KindeditEmoji from '@/components/KindeditEmoji'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/emoji',
      name: 'KindeditEmoji',
      component: KindeditEmoji
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
