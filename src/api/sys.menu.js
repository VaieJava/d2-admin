import request from '@/plugin/axios'

export function GetMenuInfo (data) {
    return request({
        url: '/member/menu/findMenusByUserId',
        method: 'get',
        params:data,
    })
}
export function MenuList (data) {
    return request({
        url: '/member/menu/findMenus',
        method: 'get',
        params:data,
    })
}
export function GetMenuListByMenuId (data) {
    return request({
        url: '/member/menu/findSubMenuByParentId',
        method: 'get',
        params:data,
    })
}