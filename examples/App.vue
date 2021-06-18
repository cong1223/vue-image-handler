<template>
  <div id="app">
    <button type="primary" @click="pickImage">选择图片</button>
    <input
      ref="filElem"
      type="file"
      class="upload-file"
      style="display: none"
      @change="getFile(this)"
    />
    <VueImageHandler
      ref="vueImageHandler"
      :canvas-width="width"
      :canvas-height="height"
      :img-file="imgFile"
      :wipe-color="wipeColor"
      :color-diff="colorDiff"
    />
    <div class="tools">
      <label for="colorDiff" style="margin-right: 8px">长: </label>
      <input id="colorDiff" type="number" value="380" style="margin-right: 16px" @input="changeCanvasWidth" />
      <label for="colorDiff" style="margin-right: 8px">宽: </label>
      <input id="colorDiff" type="number" value="252" style="margin-right: 16px" @input="changeCanvasHeight" />
      <br/>
      <vRadio
        id="myradio1"
        name="myradio"
        value="white"
        style="margin-right: 8px"
        @input="changeWipeColor"
      >
        去白底
      </vRadio>
      <vRadio
        id="myradio2"
        name="myradio"
        value="black"
        style="margin-right: 8px"
        @input="changeWipeColor"
      >
        去黑底
      </vRadio>
      <vRadio
        id="myradio2"
        name="myradio"
        value=""
        style="margin-right: 16px"
        checked
        @input="changeWipeColor"
      >
        原图
      </vRadio>
      <label for="colorDiff" style="margin-right: 8px">容差值: </label>
      <input id="colorDiff" type="number" value="20" style="margin-right: 16px" @input="changeColorDiff" />
      <button @click="handleRotate" style="margin-right: 16px">旋转90°</button>
      <button @click="getUrl" style="margin-right: 16px">控制台打印出处理后的图片</button>
      <button @click="download">下载图片</button>
    </div>
  </div>
</template>

<script>
import vRadio from './components/v-radio.vue';

export default {
  name: 'App',
  components: {
    vRadio
  },
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
    changeCanvasWidth(e) {
      this.width = e.target.value + 'px';
      this.$refs.vueImageHandler.refresh();
    },
    changeCanvasHeight(e) {
      this.height = e.target.value + 'px';
      this.$refs.vueImageHandler.refresh();
    },
    changeWipeColor(e) {
      this.wipeColor = e;
    },
    changeColorDiff(e) {
      this.colorDiff = +e.target.value;
    },
    pickImage() {
      this.$refs.filElem.dispatchEvent(new MouseEvent('click'));
    },
    handleRotate() {
      this.$refs.vueImageHandler.rotate();
    },
    getFile() {
      const inputFile = this.$refs.filElem.files[0];
      if (inputFile) {
        // 文件大小不能超过5M
        const isGT5M = inputFile.size / 1024 / 1024 > 5;
        if (isGT5M) {
          alert('对不起您上传的文件大于5M, 请重新选择图片');
        }
        this.imgFile = inputFile;
        this.$refs.filElem.value = ''
        // let reader = new FileReader();
        // reader.readAsDataURL(inputFile);
        // reader.onload = e => {
        //   this.imgFile = e.target.result;
        // };
      } else {
        return;
      }
    },
    download() {
      this.$refs.vueImageHandler.download();
    },
    getUrl() {
      this.$refs.vueImageHandler.getImageUrl(url => {
        console.log('处理后的图片', url);
      });
    }
  },
};
</script>

<style scoped lang="css">
.tools {
  margin-top: 16px;
}
.tools > * {
  display: inline-block;
  margin-bottom: 16px;
}
</style>
