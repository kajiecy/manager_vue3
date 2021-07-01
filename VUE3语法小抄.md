```
  setup (props) {
    return {}
  },
```
### ref响应式API 基本类型
```

   import { ref } from 'vue'
   setup (props) {
       const list = ref([])
       list.value = [];
    return {}
  },

```
### reactive响应式API 引用类型
```
 const book = reactive({ title: 'Vue 3 Guide' })

```

### onMounted
```
   import { onMounted } from 'vue'
   setup (props) {
    onMounted(()=>{

    }) 
    return {}
  },
```
### watch 
```
   import { watch } from 'vue'

    const counter = ref(0)
    watch(counter, (newValue, oldValue) => {
        console.log('The new counter value is: ' + counter.value)
    })
```

### computed  
```
   import { computed } from 'vue'

    const twiceTheCounter = computed(() => counter.value * 2)

```

> Props 不能解构必须使用特殊api进行取值 <br/>
const { title } = toRefs(props) <br/>
const title = toRef(props, 'title')

> setup的context <br/>
setup(props, { attrs, slots, emit }) {}


选项式 API      	Hook inside setup
beforeCreate     	Not needed*
created         	Not needed*
beforeMount	        onBeforeMount
mounted	            onMounted
beforeUpdate     	onBeforeUpdate
updated	            onUpdated
beforeUnmount	    onBeforeUnmount
unmounted	        onUnmounted
errorCaptured	    onErrorCaptured
renderTracked	    onRenderTracked
renderTriggered	    onRenderTriggered
activated	        onActivated
deactivated	        onDeactivated