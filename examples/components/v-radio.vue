<template>
    <div class="radio-component">
        <input class="v-radio-input" type="radio"
         :id="id" 
         :name="name" 
         :value="value" 
         :class="className" 
         :required="required" 
         :disabled="disabled" 
         @change="onChange" 
         :checked="state">
         <label class="v-radio-label" :for="id">
             <slot name="input-box">
                 <span class="input-box">
                    <span class="input-box-circle"></span>
                </span>
             </slot>
             <slot></slot>
         </label>
    </div>
</template>
<script>
export default {
  name: "vRadio",
  model: {
      prop: 'modelValue',
      event: 'input'
  },
  props: {
      modelValue: {
          default: undefined
      },
      id: {
          type: String,
          default: function() {
              return 'radio-id-' + this._uid;
          }
      },
      name: {
          type: String,
          default: ''
      },
      value: {
          default:''
      },
      className: {
          type: String,
          default: null
      },
      required: {
          type: Boolean,
          default:false
      },
      disabled: {
          type: Boolean,
          default: false
      },
      checked: {
          type: Boolean,
          default: false
      }
  },
  computed: {
      state() {
        if (this.modelValue === undefined) {
            return this.checked;
        }
        return this.modelValue === this.value;
      }
  },
  mounted () {
      if(this.checked && !this.state) {
          this.toggle()
      }
  },
  methods: {
      onChange() {
          this.toggle()
      },
      toggle() {
          this.$emit('input', this.state ? '' : this.value);
      }
  },
  watch: {
      checked(newValue) {
          if(newValue !== this.state) {
              this.toggle()
          }
      }
  },
}
</script>
<style lang="css" scoped>
.radio-component .v-radio-input {
  position: absolute;
  opacity: 0;
}
.radio-component .v-radio-label {
  cursor: pointer;
}
.radio-component .input-box {
  display: inline-block;
  border: 1px solid #dcdee2;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  width: 1em;
  height: 1em;
  background-color: #fff;
  overflow: hidden;
  vertical-align: -15%;
  user-select: none;
  line-height: 1;
  vertical-align: middle;
  cursor: pointer;
}
.radio-component .input-box .input-box-circle {
  display: block;
  margin: 50%;
  width: 0%;
  height: 0%;
  background-color: #000;
  border-radius: 50%;
  opacity: 0;
  transition: width 0.15s ease-in, height 0.15s ease-in, margin 0.15s ease-in;
}
.radio-component > input:checked + .v-radio-label .input-box {
  border-color: #2d8cf0;
}
.radio-component > input:checked + .v-radio-label .input-box .input-box-circle {
  opacity: 1;
  margin: 22%;
  width: 56%;
  height: 56%;
  background-color: #2d8cf0;
}
.radio-component > input:focus + .v-radio-label .input-box {
  box-shadow: 0 0 2px 1px #73b9ff;
}
.radio-component > input:disabled + .v-radio-label {
  opacity: 0.7;
}
</style>