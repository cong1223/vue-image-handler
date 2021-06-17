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
      canvas-width="380px"
      canvas-height="252px"
      :img-file="imgFile"
      :wipe-color="wipeColor"
      :color-diff="colorDiff"
    />
    <div class="tools">
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
      <input id="colorDiff" type="number" value="20" @input="changeColorDiff" />
      <button @click="getUrl" style="margin-left: 16px">控制台打印出处理后的图片</button>
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
      imgFile: '',
      wipeColor: '',
      colorDiff: 20
    };
  },
  methods: {
    changeWipeColor(e) {
      this.wipeColor = e;
    },
    changeColorDiff(e) {
      this.colorDiff = +e.target.value;
    },
    pickImage() {
      this.$refs.filElem.dispatchEvent(new MouseEvent('click'));
    },
    getFile() {
      const inputFile = this.$refs.filElem.files[0];
      if (inputFile) {
        // 文件大小不能超过5M
        const isGT5M = inputFile.size / 1024 / 1024 > 5;
        if (isGT5M) {
          alert('对不起您上传的文件大于5M, 请重新选择图片');
        }
        let reader = new FileReader();
        reader.readAsDataURL(inputFile);
        reader.onload = e => {
          this.imgFile = e.target.result;
        };
      } else {
        return;
      }
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
  display: flex;
  margin-top: 16px;
}
</style>
