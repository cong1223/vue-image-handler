//将base64转换为blob
export function dataURLtoBlob(dataUrl) {
  let arr = dataUrl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n --) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
//将blob转换为file
export function blobToFile(theBlob, fileName){
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}
// base64转File
export function dataUrl2File(base64Data, imgName) {
  return this.blobToFile(this.dataURLtoBlob(base64Data), imgName);
}
// blob转base64
export function blobToDataURI(blob, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = function (e) {
    callback(e.target.result);
  }
}
// File转base64
export function file2DataURI(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = e => {
    callback(e.target.result);
  };
}