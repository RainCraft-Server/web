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

  <!-- <div><h1 style="text-align:center;font-size:28px;font-weight:bolder">管理团队</h1></div> -->
  <div>
  <CardGrid>
    <ImageCard
        image="/images/info-01.png"
        title="友好的社区"
    />
    <ImageCard
        image="/images/info-02.png"
        title="华丽的建筑"
    />
    <ImageCard
        image="/images/info-03.png"
        title="佛系的玩家"
    />
    <ImageCard
        image="/images/info-04.png"
        title="自由放松的世界"
    />
  </CardGrid>
  </div>
  </VPHomeBox>
</template>