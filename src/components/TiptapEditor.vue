<template>
  <editor-content class="tiptap-editor" :editor="editor" />
</template>

<script setup>
import { onUnmounted } from 'vue'

import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import PageExtension from '@/components/nodes/PageExtension.js'

const editor = new Editor({
  extensions: [StarterKit, PageExtension],
  editorProps: {
    attributes: {
      class: 'page-container'
    }
  },
  content: `
    <div class="tiptap-page">
      <p>Contenido inicial de la página 1.</p>
    </div>
  `,
  onUpdate({ editor }) {
    addNewPage(editor)
  }
})

function addNewPage(editor) {
  const PAGE_CLASS = 'tiptap-page'
  const CONTAINER_CLASS = '.page-container'

  const pageElements = document.querySelectorAll(`.${PAGE_CLASS}`)
  pageElements.forEach((pageElement) => {
    if (isPageOverflow(pageElement)) {
      /*editor.commands.insertContent({
        type: 'page',
        content: '<p>Nuevo contenido en la página</p>'
      })*/
    }
  })
}

function isPageOverflow(pageElement) {
  console.log(pageElement, pageElement.scrollHeight > pageElement.clientHeight)
  return pageElement.scrollHeight > pageElement.clientHeight
}

function moveOverflowContent(pageElement, newPageElement) {
  const pageChildren = Array.from(pageElement.childNodes)

  while (isPageOverflow(pageElement)) {
    const lastChild = pageChildren.pop()
    if (lastChild) {
      newPageElement.insertBefore(lastChild, newPageElement.firstChild)
    }
  }
}

onUnmounted(() => {
  editor.destroy()
})
</script>
