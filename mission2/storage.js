window.storage = (function () {
  function save(key, data) {
    try{
      window.localStorage.setItem(key, JSON.stringify(data))
    } catch(e) {
      alert("스토리지 용량이 초과했습니다.")
    }
    
  }
  function load(key, defaultData) {
    const loadedData = window.localStorage.getItem(key);
    try{
      if (loadedData) {
        return JSON.parse(loadedData);
      }
      return defaultData
    } catch (e) {
      return defaultData
    }
  }

  return {
    save,
    load
  }
})()