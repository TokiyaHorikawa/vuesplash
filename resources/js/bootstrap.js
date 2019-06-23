import { getCookieValue } from './util'

windows.axios = require('axios')

// Ajaxリクエストであることを示すヘッダーを付与する
windows.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

windows.axios.interceptors.request.use(config => {
  // クッキーからトークンを取り出してヘッダーに添付する
  config.headers['X-XSRF-TOKEN'] = getCookieValue('XSRF-TOKEN')

  return config
})
