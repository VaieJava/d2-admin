import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/oauths/oauth/token',
    method: 'post',
    data,
      transformRequest: [
          function (data) {
              let ret = ''
              for (let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              ret = ret.substring(0, ret.lastIndexOf('&'));
              return ret
          }
      ],
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
}

export function getUserInfo () {
  return request({
    url: '/oauths/user',
    method: 'get'

  })
}
