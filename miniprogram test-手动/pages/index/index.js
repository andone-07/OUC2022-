const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
      src: '/images/logo.jpg',
      name: 'Hello World'
  },

  onLoad() {
      if(wx.getUserProfile) {
          this.setData({
              canIUseGetUserProfile: true
          })
      }
  },
  /**
   * 自定义函数--获取微信用户信息
   */
  getMyInfo: function(e) {
      wx.getUserProfile({
        desc: '展示用户信息',
        success: (res) => {
            console.log(res)
            this.setData({
                src: res.userInfo.avatarUrl,
                name: res.userInfo.nickName
            })
        }
      })
  }
})