<script setup lang="ts">
import type { PlumeHomeConfigBase } from 'vuepress-theme-plume'

const props = defineProps<PlumeHomeConfigBase & {
  // 组件 props, frontmatter 中的属性将会传递给组件
}>()
</script>

<template>
  <VPHomeBox
    :type="type"
    class="title"
    :background-image="backgroundImage"
    :background-attachment="backgroundAttachment"
    :full="false"
  >

  <div><h1 style="text-align:center;font-size:28px;font-weight:bolder">管理团队</h1></div>
    <CardGrid :cols="{ sm: 1, md: 3, lg: 3 }">
        <Card title="GiriNeko" icon="https://crafatar.com/avatars/9df952a339884a06a5fa0407ab9f9b6a"></Card>
        <Card title="Kamisato_Kirara" icon="https://crafatar.com/avatars/4b5e4499e22142fe86eeebd493e1d114"></Card>
        <Card title="xiaocao" icon="https://crafatar.com/avatars/308a81ddafef406c8ddb271ecd9d640e"></Card>
    </CardGrid>
  </VPHomeBox>
</template>