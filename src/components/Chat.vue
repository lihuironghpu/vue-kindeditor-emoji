<template>
  <div>
    <p>聊天界面</p>
    <kindeditor-emoji></kindeditor-emoji>
  </div>
</template>
<script>
import KindeditorEmoji from './KindeditorEmoji.vue'
export default {
  name: 'Chat',
  data () {
    return {

    }
  },
  components: {
    KindeditorEmoji
  }
}
</script>
