/*
 * @Description: http封装请求
 * @CreationTime: 2020-02-20 17:56:50
 * @Author: 鲁岩奇
 * @有问题找百度，实在不行就删库
 */
const host = "http://192.168.2.41:44355"; // 本地baseUrl
///POST请求
function Post(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url,
      method: 'POST',
      data: data,
      header: {
        "content-type": "application/json;charset=UTF-8"
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error);
      }
    })
  })
}
///Get请求
function Get(url) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url,
      method: 'GET',
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error);
      }
    })
  })
}
///上传接口
function Upload(url, file, type) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: host + url,
      filePath: file,
      name: 'file',
      formData: {
        type: type
      },
      header: {
        "Content-Type": "multipart/form-data"
      },
      success(res) {
        resolve(res)
      },
      fail(error) {
        reject(error)
      },
    });
  })
}
export {
  Post,
  Get,
  Upload,
  host
};