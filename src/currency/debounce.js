//函数防抖  因为频繁的调用scroll中的refresh方法需要进行防抖
  export function debounce(fun, time) {
    let timer = null
    return function(args) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fun.apply(this, args)
      }, time)
    }
  }
