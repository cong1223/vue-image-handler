![](https://cdn.jsdelivr.net/gh/cong1223/cloudimg@master/img/20210625093228.jpg)
# vue-image-handler

### 一个支持图片自定义裁剪和去底色的插件

[github地址（感谢star）](https://github.com/cong1223/vue-image-handler.git)
### 预览效果
![](https://cdn.jsdelivr.net/gh/cong1223/cloudimg@master/img/20210625092422.gif)
### 安装
```cmd
npm install vue-image-handler
# 或者
yarn add vue-image-handler

```
### vue项目中使用
```javascript
// main.js
// 全局安装使用
import VueImageHandler from 'vue-image-handler'
Vue.use(VueImageHandler)

// 页面单独引入使用
import VueImageHandler from 'vue-image-handler'
// ...省略其他代码
components: { VueImageHandler }

```
### Attributes

| 名称 | 功能 | 默认值 | 类型 | 可选值
| ----- | ----- | ----- | ----- | ----- |
| canvas-width | 画布的宽度 | 380px | String | |
| canvas-height | 画布的高度 | 252px | String | |
|img-file | 图片资源 | | Blob/File/String||
|wipe-color| 要去除的底色||String|white/black|
|color-diff|去底色的容差值|20|Number|1-100|
|option|其他配置(具体配置参数见下表)||Object||

### Option

| 名称 | 功能 | 默认值 | 类型 | 可选值
| ----- | ----- | ----- | ----- | ----- |
| outputQuality | 处理后的图片质量 | 1 | Number | 0.1-1 |
| outputType | 处理后的图片格式 | png | String | jpeg/png/webp |
| canMove | 图片是否可以移动 | true | Boolean | true/false |
| fixedBox | 固定截图框大小 | false | Boolean | true/false |
| cropWidth | 截图框宽 | 380 | Number/String | 380 |
| cropHeight | 截图框高 | 252 | Number/String | 252 |

### Events（通过`this.$refs[your ref name].[method]`调用）
| 方法名 | 说明| 参数 |
| ----- | ----- | ----- |
| rotate | 旋转90° |  |
| download | 下载处理后的图片 |  |
| getImageUrl | 获取处理后的图片Base64 |  |
| clear | 清空画布和预览图 |  |
| refresh | 刷新画布 |  |

## 快速上手
```vue
<template>
  <VueImageHandler
   ref="vueImageHandler"
   :canvas-width="width"
   :canvas-height="height"
   :img-file="imgFile"
   :wipe-color="wipeColor"
   :color-diff="colorDiff"
  />
</template>
<script>
 export default {
  data() {
    return {
      imgFile: 'https://cdn.jsdelivr.net/gh/cong1223/cloudimg@master/img/20210613092202.png',
      wipeColor: '',
      colorDiff: 20,
      width: '380px',
      height: '252px'
    };
  },
  methods: {
   changeCanvasWidth(e) { // 动态修改画布和预览图的宽度
      this.width = e.target.value + 'px';
      this.$refs.vueImageHandler.refresh();
    },
    changeCanvasHeight(e) { // 动态修改画布和预览图的高度
      this.height = e.target.value + 'px';
      this.$refs.vueImageHandler.refresh();
    },
    changeWipeColor(e) { // 动态修改要去的底色（white or black）
      this.wipeColor = e;
    },
    changeColorDiff(e) { // 动态修改去底色的容差值
      this.colorDiff = +e.target.value;
    },
    pickImage() { // 从本地选择图片（input file）
      this.$refs.filElem.dispatchEvent(new MouseEvent('click'));
    },
    handleRotate() { // 原图旋转
      this.$refs.vueImageHandler.rotate();
    },
    getFile() { // 从本地选择图片后获取文件信息
      const inputFile = this.$refs.filElem.files[0];
      if (inputFile) {
        this.imgFile = inputFile;
        this.$refs.filElem.value = '';
      } else {
        return;
      }
    },
    download() { // 下载图片
      this.$refs.vueImageHandler.download();
    },
    getUrl() {
      this.$refs.vueImageHandler.getImageUrl(url => {
        console.log('处理后的图片', url);
      });
    },
    clear() { // 清空画布
      this.$refs.vueImageHandler.clear();
    }
  }
 }
</script>
```
## 更新日志

### 1.2.9
```
支持页面内单独引用：`import VueImageHandler from 'vue-image-handler'`
```
## 即将更新
#### 1. download和getImageUrl支持自定义图片格式输出