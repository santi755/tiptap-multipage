<template>
  <node-view-wrapper class="tiptap-page relative" :id="node.attrs.id">
    <node-view-content class="tiptap-page__content" />
  </node-view-wrapper>
</template>

<script setup>
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
</script>

<style>
.tiptap-page {
  width: 210mm;
  height: 297mm;
  background: white;
  margin: 0 auto;
  padding: 20mm;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  font-family: Arial, sans-serif;
}
</style>
