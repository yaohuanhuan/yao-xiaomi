let MyPlugin = {};
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
    console.log("添加全局方法或属性");

  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind(el, binding, vnode, oldVnode) {
      // 逻辑...
    }
  })
  // filter
  Vue.filter('time', function (value) {
    return new Date(parseInt(value) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
  })

  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
  })
  /**
   * 带动画的hover显示隐藏
   * @param selectId '#id'
   * @param showId '#id'
   * @param width '100px'
   * @param height '100px'
   * @param duration 180
   */
  Vue.prototype.displayAnimInit = function (selectId, showId, width, height, duration) {

    let cartTimeout;
    let cartHintTimeout;
    let cart = false;
    let cartHint = false;

    $(showId).hide();
    $(selectId).hover((data) => {
      if (data.type === 'mouseenter') {
        cart = true
        cartHint = false
        clearTimeout(cartHintTimeout)
        clearTimeout(cartTimeout)
        let param;
        if (width != null && height != null) {
          param = {width: width, height: height}
        }
        if (width == null && height != null) {
          param = {height: height}
        }
        if (width != null && height == null) {
          param = {width: width}
        }
        if (width == null && height == null) {
          param = {width: '0px', height: '0px'}
        }
        $(showId).show();
        $(showId).animate(param, duration)
      } else if (data.type === 'mouseleave') {
        cart = false
        cartTimeout = setTimeout(() => {
          $(showId).animate(
            width == null ? {
              height: '0px'
            } : {
              width: '0px'
            }
            , duration, () => {
              $(showId).hide();
            })
        }, 200)
      }
    })
    $(showId).hover((data) => {
      if (data.type === 'mouseenter') {
        cart = false
        cartHint = true
        clearTimeout(cartHintTimeout)
        clearTimeout(cartTimeout)
        $(showId).show();
        $(showId).animate(
          width === null ? {
            height: height
          } : {
            width: width
          }, duration)
      } else if (data.type === 'mouseleave') {
        cart = false
        cartHint = true
        cartHintTimeout = setTimeout(() => {
          $(showId).animate(
            width === null ? {
              height: '0px'
            } : {
              width: '0px'
            }, duration, () => {
              $(showId).hide();
            })
        }, 200)
      }
    })
  }

  /**
   * 没有动画的显示隐藏
   * @param selectId
   * @param showId
   */
  Vue.prototype.displayInit = function (selectId, showId) {

    let cartTimeout;
    let cartHintTimeout;
    let cart = false;
    let cartHint = false;

    $(showId).hide();
    $(selectId).hover((data) => {
      if (data.type === 'mouseenter') {
        cart = true
        cartHint = false
        clearTimeout(cartHintTimeout)
        clearTimeout(cartTimeout)
        $(showId).show();
      } else if (data.type === 'mouseleave') {
        cart = false
        cartTimeout = setTimeout(() => {
          $(showId).hide();
        }, 200)
      }
    })
    $(showId).hover((data) => {
      if (data.type === 'mouseenter') {
        cart = false
        cartHint = true
        clearTimeout(cartHintTimeout)
        clearTimeout(cartTimeout)
        $(showId).show();
      } else if (data.type === 'mouseleave') {
        cart = false
        cartHint = true
        cartHintTimeout = setTimeout(() => {
          $(showId).hide()
        }, 200)
      }
    })
  }

}
export default MyPlugin
