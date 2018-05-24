<template>
  <div class="box">
    <input v-model="msg">
    <p>{{msg}}</p>
    <p>Computed: {{computedMsg}}</p>
    <p>Props: {{name}}</p>
    <Button @click="greet" type="primary">Primary</Button>
    <div class="bot"></div>
  </div>
</template>
<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'
import axios from 'axios';
import {MyMixin} from '../../mixin/demo1.js';
import { mixins } from 'vue-class-component';

@Component
export default class HelloWorld extends mixins(MyMixin) {
    // prop
    @Prop ({default: '默认值'})
    name: string

    // 监听属性变化
    @Watch('name')
    onNameChanged() {
        console.log('变化');
    }
    // data
    msg = 'hello';

    //生命周期函数
    mounted() {
        console.log("mounted");
    }			

    // 计算属性
    get computedMsg() {
        return "computed" + this.msg;
    }

    // 触发父组件方法
    @Emit('changeName')
    greet(){
        console.log('触发方法')
        console.log(this.mixinValue);
        var a = JSON.stringify([{a:1}, {b:2}]);
        // axios.post('aaa', {name:2, a})

    };
}
</script>
<style lang="scss">
.box {
    .bot {
        height: 100px;
        width: 100px;
        background: red;
    }
}
</style>
