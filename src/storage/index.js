const STORAGE_KEY = 'mall'

//取得sessionStorage中某个键的值
function getItem(key, moduleName) {
    if (moduleName) {
        let val = this.getItem(moduleName)
        return val[key] || ''
    } else {
        return this.getStorage()[key]
    }
}

//设置或增加sessionStorage中的键值对
function setItem(key,value,moduleName) {
    if(moduleName){
        let val = this.getItem(moduleName) || {}
        val[key] = value
        this.setItem(moduleName,val)
    }else{
        let val = this.getStorage()
        val[key] = value
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
}

//清除sessionStorage中的某个键的值
function clearItem(key,moduleName) {
    let val = this.getStorage();
    if(moduleName){
        delete val[moduleName][key]
    }else{
        delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
}

//获得sessionStorage对象
function getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}")
}

export default {
    getItem, setItem, clearItem, getStorage
}