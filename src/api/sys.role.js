import request from '@/plugin/axios'

export function RoleList (data) {
    return request({
        url: '/member/role/findRoles',
        method: 'get',
        params:data,
    })
}