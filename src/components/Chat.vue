<template>
  <div>
    <kindeditor-emoji :parent-text-content.sync="textContent1"></kindeditor-emoji>
    <div style="padding-top: 20px; text-align: left">
      <button type="button" v-on:click="sendMes" data-type="clear">发送</button>
      <button type="button" data-type="clear">清空</button>
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
      textContent1: '',
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
      this.contentArr.push(this.textContent1)
    }
  },
  components: {
    KindeditorEmoji
  }
}
</script>
