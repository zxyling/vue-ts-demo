<template>
    <div>
        <HelloWorld 
            :name="propName"
            v-on:changeName = 'changeName'
        ></HelloWorld>
    </div>
</template>
<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'
import HelloWorld from '@/components/demo/HelloWorld.vue';
import {Button} from 'iview';

Vue.component('Button', Button);

@Component({
    components: {
        HelloWorld
    }
})

export default class Home extends Vue {
    // data
    propName:String = '初始化';


    // 方法
    changeName() {
        this.propName = `${new Date().getTime()}`;
    }
}
</script>
