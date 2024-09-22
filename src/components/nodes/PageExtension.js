import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import TiptapPage from '@/components/nodes/TiptapPage.vue'

export default Node.create({
  priority: 2,
  name: 'page',
  content: `block*`,
  group: 'block',
  isolating: true,
  selectable: false,
  parseHTML() {
    return [{ tag: 'div[class=tiptap-page]' }]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { class: 'tiptap-page' }), 0]
  },

  addNodeView() {
    return VueNodeViewRenderer(TiptapPage)
  }
})
