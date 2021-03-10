import * as request from './utils/request';
App({
  globalData: {
    userInfo: null,
    baseurl: request.host,
  },
  onLaunch: function () {
    this.autoUpdate();
  },
  //解决首页onload先加载问题
  wxqlogin: function () {
    return new Promise((resolve, reject) => {
      wx.login({
        success: res => {
          console.log("登录成功，并获取用户信息");
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          const code = res.code;
        }
      })
    })
  },
  //自动更新检测
  autoUpdate: function () {
    var self = this
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()     
      // 检查小程序是否有新版本发布
      updateManager.onCheckForUpdate(function (res) {      
        // 请求完新版本的信息回调
        if (res.hasUpdate) {         
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: function (res) {
              if (res.confirm) {
                // 下载
                self.downloadAndUpdate(updateManager)
              } else if (res.cancel) {
                // 点击取消，做强制更新操作
                wx.showModal({
                  title: '温馨提示',
                  content: '一定要更新哦，旧版本无法正常使用',
                  showCancel: false, //隐藏取消按钮
                  confirmText: '确定更新',
                  success: function (res) {
                    if (res.confirm) {
                      // 再次调用下载，并重启
                      self.downloadAndUpdate(updateManager)
                    }
                  }
                })
              }
            }
          })
        }
      })
    } else {
      // 增加用户体验，给出友好提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级后重试。'
      })
    }
  },
  //下载新版本并重启
  downloadAndUpdate: function (updateManager) {
    var self = this
    wx.showLoading();
    // 监听小程序有版本更新事件，客户端主动触发
    updateManager.onUpdateReady(function () {
      wx.hideLoading();
      // 新版本下载好，调用applyUpdate
      updateManager.applyUpdate()
    })
    // 监听小程序更新失败事件
    updateManager.onUpdateFailed(function () {
      wx.showModal({
        title: '已经有新版了哦',
        content: '请你删除当前小程序，进行升级哦'
      })
    })
  }
})