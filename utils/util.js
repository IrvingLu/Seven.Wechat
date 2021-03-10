const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [hour, minute, second].map(formatNumber).join(':')
}
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('/') 
}
//判断图片是否存在
function checkImgExists(imgurl) {
  console.log(imgurl);
  
  var ImgObj = new Image();  
  ImgObj.src = imgurl;  
  console.log(ImgObj);
  
  //存在图片
  if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {  
       return true;
  } else {  
       return false;
   }   
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//生成随机 GUID 数
const guid = function () {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
const guidFormat= function(guidStr) {
  var str1 = guidStr.slice(0, 8) + '-',
    str2 = guidStr.slice(8, 12) + '-',
    str3 = guidStr.slice(12, 16) + '-',
    str4 = guidStr.slice(16, 20) + '-',
    str5 = guidStr.slice(20);
  return str1 + str2 + str3 + str4 + str5;
}

module.exports = {
  formatTime: formatTime,
  formatDate:formatDate,
  guid: guid,
  guidFormat,
  checkImgExists
}

