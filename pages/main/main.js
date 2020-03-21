var bmap = require('../../libs/bmap-wx.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherData: '',
    weatherCity: '',
    weathertemp: '',
    weatherWind: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.LoadInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  LoadInfo:function(){
    var page=this;
    var BMap = new bmap.BMapWX({
      ak: '1BmDssxHgWd7D5GculO3zMRk68WGAAqo'
    }); 
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      var weathertemp = weatherData.temperature + '\n';
      var weatherCity = weatherData.currentCity + '\n';
      var weatherWind = weatherData.wind + ' ' + weatherData.weatherDesc + '\n';

      var weatherOri = data.originalData.results[0];
      var arr = weatherOri.index[0];
      var weatherPrompt ='温馨提示：'+ arr.des + '\n';

      var future = weatherOri.weather_data;
      var today_weather_data = future.shift();

      console.log(future)

      page.setData({
        weathertemp: weathertemp,
        weatherCity: weatherCity,
        weatherWind: weatherWind,
        weatherPrompt: weatherPrompt,
        future: future

      });
    }        
    // 发起weather请求 
    BMap.weather({
      fail: fail,
      success: success
    });
  },
})