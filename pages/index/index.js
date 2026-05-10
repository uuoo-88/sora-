Page({
  data: {
    theme: '',
    grades: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
    selectedGrade: '',
    styles: ['卡通风', '简约风', '手绘风'],
    selectedStyle: '',
    hotThemes: [
      {
        name: '劳动节',
        image: '/assets/topic-labor.png',
        coverClass: 'cover-labor',
        figureClass: 'figure-kids'
      },
      {
        name: '世界地球日',
        image: '/assets/topic-earth.png',
        coverClass: 'cover-earth',
        figureClass: 'figure-earth'
      },
      {
        name: '端午节',
        image: '/assets/topic-dragon.png',
        coverClass: 'cover-dragon',
        figureClass: 'figure-dragon'
      },
      {
        name: '中国航天日',
        image: '/assets/topic-space.png',
        coverClass: 'cover-space',
        figureClass: 'figure-rocket'
      },
      {
        name: '阅读小报',
        image: '/assets/topic-reading.png',
        coverClass: 'cover-reading',
        figureClass: 'figure-reading'
      }
    ]
  },

  onThemeInput(event) {
    this.setData({
      theme: event.detail.value
    })
  },

  onGradeChange(event) {
    const index = Number(event.detail.value)

    this.setData({
      selectedGrade: this.data.grades[index]
    })
  },

  onStyleChange(event) {
    const index = Number(event.detail.value)

    this.setData({
      selectedStyle: this.data.styles[index]
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
      content: `正在为${this.data.selectedGrade || '孩子'}生成「${theme}」${this.data.selectedStyle || '卡通风'}手抄报，完成后可保存并打印。`,
      confirmText: '知道了',
      showCancel: false
    })
  }
})
