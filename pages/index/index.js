Page({
  data: {
    topic: "",
    selectedGrade: "",
    selectedStyle: "",
    showGradePicker: false,
    showStylePicker: false,
    gradeOptions: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
    styleOptions: ["温馨插画", "简洁排版", "节日主题", "国风元素", "卡通手绘"],
    hotTopics: ["劳动节", "阅读小报", "端午节", "安全教育", "我的梦想", "环保宣传", "传统文化"]
  },

  onTopicInput(e) {
    this.setData({
      topic: e.detail.value
    });
  },

  onHotTopicTap(e) {
    this.setData({
      topic: e.currentTarget.dataset.topic
    });
  },

  openGradePicker() {
    this.setData({
      showGradePicker: true
    });
  },

  closeGradePicker() {
    this.setData({
      showGradePicker: false
    });
  },

  selectGrade(e) {
    this.setData({
      selectedGrade: e.currentTarget.dataset.value,
      showGradePicker: false
    });
  },

  openStylePicker() {
    this.setData({
      showStylePicker: true
    });
  },

  closeStylePicker() {
    this.setData({
      showStylePicker: false
    });
  },

  selectStyle(e) {
    this.setData({
      selectedStyle: e.currentTarget.dataset.value,
      showStylePicker: false
    });
  },

  onGenerate() {
    const { topic, selectedGrade, selectedStyle } = this.data;
    if (!topic.trim()) {
      wx.showToast({
        title: "请先输入主题",
        icon: "none"
      });
      return;
    }

    if (!selectedGrade || !selectedStyle) {
      wx.showToast({
        title: "请选择年级和风格",
        icon: "none"
      });
      return;
    }

    wx.showToast({
      title: "正在生成...",
      icon: "loading",
      duration: 1200
    });
  },

  noop() {}
});
