<script lang="tsx">
import Vue, {CreateElement} from 'vue'
import {Component} from 'vue-property-decorator'


@Component
export default class Demo3 extends Vue {
    render(h: CreateElement) {
        return (
            <div class="demo3">
                测试
            </div>
        )
    }
}

</script>
