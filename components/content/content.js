// components/content.js
Component({
      /**
       * 组件的属性列表
       */
      properties: {
        refreshStatus: {
          type: Boolean
        },
        ///页面位置  0：tab页面 1：普通页面
        type: {
          type: Number,
          value: 0
        }
      },
      observers: {
        "refreshStatus": function (new_val) {
          this.setData({
            refreshStatus: new_val
          })
        }
      },
      /**
       * 组件的初始数据
       */
      data: {
        view_height: "",
      },
      lifetimes: {
        attached: function () {
          this.render_content_height_handler();
          // 在组件实例进入页面节点树时执行
        },
        detached: function () {
          // 在组件实例被从页面节点树移除时执行
        },
      },

      /**
       * 组件的方法列表
       */
      methods: {
        render_content_height_handler() {
          let systemInfo = wx.getSystemInfoSync();
          // 设备底部安全高度
          let bottomHeight = systemInfo.screenHeight - systemInfo.safeArea.bottom;
          // tabbar高度
          let barHeight = 50;
          this.setData({
           view_height: `calc(${systemInfo.windowHeight}px  - ${bottomHeight}px - ${barHeight}px)`
        }
      )
    },
    ///上拉刷新
    upperRefresh() {
      this.triggerEvent('upperRefresh', {}, {})
    },
    ///下拉加载更多
    loadMore() {
      this.triggerEvent('loadMore', {}, {})
    }
  }
})