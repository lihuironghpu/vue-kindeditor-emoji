<template>
  <div>
    <kindeditor-emoji :parent-text-content.sync="textContent"></kindeditor-emoji>
    <div style="padding-top: 20px; text-align: left">
      <button type="button" v-on:click.stop="sendMes">发送</button>
      <button type="button" v-on:click.stop="clearMes">清空</button>
    </div>
    <div v-for="item in contentArr" v-bind:key="item">
      <p v-html="item" style="text-align:left"></p>
    </div>
  </div>
</template>
<script>
import KindeditorEmoji from './KindeditorEmoji.vue'
export default {
  name: 'Chat',
  data () {
    return {
      textContent: '123',
      contentArr: []
    }
  },
  methods: {
    // 点击发送
    sendMes: function (event) {
      if (document.all) {
        document.click()
      } else {
        var e1 = document.createEvent('MouseEvents')
        e1.initEvent('click', true, true)
        document.dispatchEvent(e1)
      }
      this.contentArr.push(this.textContent)
      this.textContent = ''
    },
    // 点击清空
    clearMes: function (event) {
      this.textContent = ''
    }
  },
  components: {
    KindeditorEmoji
  }
}
</script>
