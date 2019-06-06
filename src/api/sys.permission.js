import request from '@/plugin/axios'

export function PermissionList (data) {
    return request({
        url: '/member/permission/findPermissions',
        method: 'get',
        params:data,
    })
}