<template>
  <div>
    <iframe ref="inner" style="width:100%;height:100%;"></iframe>
  </div>
</template>

<script>
export default {
  props: ['doc'],
  watch: {
    doc() {
      const doc = this.$refs.inner.contentWindow.document
      doc.open()
      doc.write(`${this.doc}`)
      doc.close()
    }
  }
}
</script>