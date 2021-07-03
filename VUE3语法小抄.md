```
  setup (props) {
    return {}
  },
```

### ref 响应式 API 基本类型

```

   import { ref } from 'vue'
   setup (props) {
       const list = ref([])
       list.value = [];
    return {}
  },

```

### reactive 响应式 API 引用类型

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

> Props 不能解构必须使用特殊 api 进行取值 <br/>
> const { title } = toRefs(props) <br/>
> const title = toRef(props, 'title')

> setup 的 context <br/>
> setup(props, { attrs, slots, emit }) {}

### 钩子函数语法对吧

选项式 API Hook inside setup
beforeCreate Not needed*
created Not needed*
beforeMount onBeforeMount
mounted onMounted
beforeUpdate onBeforeUpdate
updated onUpdated
beforeUnmount onBeforeUnmount
unmounted onUnmounted
errorCaptured onErrorCaptured
renderTracked onRenderTracked
renderTriggered onRenderTriggered
activated onActivated
deactivated onDeactivated

### 获取 vite 的环境变量

import.meta.env
process.cwd() 方法返回 Node.js 进程的当前工作目录。
