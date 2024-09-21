<template>
  <editor-content :editor="editor" />
</template>

<script setup>
import { onUnmounted } from 'vue'

import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = new Editor({
  content: '<p>I’m asdh Vue.js. 🎉</p>',
  extensions: [StarterKit]
})

onUnmounted(() => {
  editor.destroy()
})
</script>
