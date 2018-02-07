<template>
  <div>
    <p>聊天界面</p>
    <kindeditor-emoji :parent-text-content.sync="textContent1"></kindeditor-emoji>
    <div>
      <button type="button" v-on:click="sendMes">发送</button>
      <!--<button type="button" v-on:click="clearMes">清空</button>-->
    </div>
  </div>
</template>
<script>
import KindeditorEmoji from './KindeditorEmoji.vue'
export default {
  name: 'Chat',
  data () {
    return {
      textContent1: '1'
    }
  },
  methods: {
    // 点击发送
    sendMes: function (event) {
      console.log(this.textContent1)
    }
  },
  components: {
    KindeditorEmoji
  }
}
</script>
