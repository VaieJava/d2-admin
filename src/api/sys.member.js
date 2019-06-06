import request from '@/plugin/axios'

export function MemberList (data) {
    return request({
        url: '/member/member/findUsers',
        method: 'get',
        params:data,
    })
}