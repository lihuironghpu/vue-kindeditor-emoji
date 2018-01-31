<template>
  <div>
    <p>聊天界面</p>
    <kindedit-emoji></kindedit-emoji>
  </div>
</template>
<script>
import KindeditEmoji from './KindeditEmoji.vue'
export default {
  name: 'Chat',
  data () {
    return {

    }
  },
  components: {
    KindeditEmoji
  }
}
</script>
