import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
    priority: 2,
    name: 'page',
    content: `block*`,
    group: "block",
    isolating: true,
    selectable: false,
