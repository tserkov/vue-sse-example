<template>
  <div id="logs" ref="logs">
    <div
      v-for="(l, i) in logs"
      :key="i"
      :style="{ color: l[2], fontStyle: l[2] === 'system' ? 'italic' : 'normal' }"
    >
      <time>{{ l[0] }}</time>&gt;
      <span>{{ l[1] }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LogDisplay',
  props: {
    logs: {
      required: true,
      type: Array
    }
  },
  watch: {
    logs () {
      this.$nextTick(() => {
        const el = this.$refs.logs as Element
        el.scrollTop = el.scrollHeight
      })
    }
  }
})
</script>

<style>
#logs {
  background: #222831;
  border-radius: 0.25rem;
  color: #e7e6e1;
  height: calc(100vh - 4rem);
  overflow-y: scroll;
  padding: 1rem;
}

#logs > div {
  padding-bottom: 0.5em;
}

#logs time {
  font-weight: bold;
  padding-right: 0.5em;
}

#logs span {
  padding-left: 0.5em;
}
</style>
