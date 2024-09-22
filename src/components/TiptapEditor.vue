<template>
  <editor-content :editor="editor" />
</template>

<script setup>
import { onUnmounted } from 'vue'

import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import PageExtension from '@/components/nodes/PageExtension.js'

const editor = new Editor({
  extensions: [StarterKit, PageExtension],
  content: `
    <div class="tiptap-page">
      <p>Contenido inicial de la página.</p>
    </div>
  `
})

onUnmounted(() => {
  editor.destroy()
})
</script>
