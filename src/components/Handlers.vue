<template>
  <div id="handlers">
    <h2>Handlers</h2>

    <p
      v-for="(handler, i) in handlers"
      :key="i"
    >
      <input
        v-model="handlers[i].event"
        type="text"
        placeholder="event"
      />

      <input
        v-model="handlers[i].color"
        type="color"
        placeholder="color"
      />

      <button
        v-if="i === handlers.length - 1"
        @click="add"
        class="primary"
      >&plus;</button>

      <button
        v-else
        @click="remove(i)"
        class="danger"
      >&times;</button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Handlers',
  props: {
    handlers: {
      required: true,
      type: Array
    }
  },
  methods: {
    add () {
      this.handlers.push({
        event: '',
        color: ''
      })
    },
    remove (i: number) {
      this.handlers.splice(i, 1)
    }
  }
})
</script>
