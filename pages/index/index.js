Page({
  data: {
    theme: '',
    grades: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
    selectedGrade: '一年级',
    styles: ['卡通风', '简约风', '手绘风'],
    selectedStyle: '卡通风',
    hotThemes: [
      '劳动节',
      '安全教育',
      '阅读小报',
      '垃圾分类',
      '端午节',
      '防溺水',
      '爱护眼睛',
      '春天来了'
    ]
  },

  onThemeInput(event) {
    this.setData({
      theme: event.detail.value
    })
  },

  selectGrade(event) {
    this.setData({
      selectedGrade: event.currentTarget.dataset.grade
    })
  },

  selectStyle(event) {
    this.setData({
      selectedStyle: event.currentTarget.dataset.style
    })
  },

  selectHotTheme(event) {
    this.setData({
      theme: event.currentTarget.dataset.theme
    })
  },

  handleGenerate() {
    const theme = this.data.theme.trim()

    if (!theme) {
      wx.showToast({
        title: '请输入主题',
        icon: 'none'
      })
      return
    }

    wx.showModal({
      title: '开始生成',
      content: `正在为${this.data.selectedGrade}生成「${theme}」${this.data.selectedStyle}手抄报，完成后可保存并打印。`,
      confirmText: '知道了',
      showCancel: false
    })
  }
})
