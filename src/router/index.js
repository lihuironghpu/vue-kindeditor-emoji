import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import KindeditorEmoji from '@/components/KindeditorEmoji'
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
      name: 'KindeditorEmoji',
      component: KindeditorEmoji
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
