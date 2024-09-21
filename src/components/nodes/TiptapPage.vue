<template>
  <node-view-wrapper class="tiptap-page text-editor relative" :id="node.attrs.id">
    <node-view-content class="tiptap-page__content" />
  </node-view-wrapper>
</template>

<script setup>
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
</script>

<style>
.page-content {
  background: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  padding: 20px;
}
</style>
