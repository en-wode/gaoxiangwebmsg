/** Created by wanan on 2018\10\29 0029
 *作者:wanan
 */
import axios from 'axios';
let base1 = '';
if (process.env.NODE_ENV === 'development') {
    base1 = '/api';
}
export const requestLogin = params => { return axios.post(`${base1}/user/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base1}/user/list`, { params: params }); };

export const getUserById = params => { return axios.get(`${base1}/user/getUserById`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base1}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base1}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base1}/user/batchremove`, { params: params }); };

// 编辑用户
export const editUser = params => { return axios.get(`${base1}/user/edit`, { params: params }); };

// addUser

export const setUserJsc = params => { return axios.post(`${base1}/user/setUserJsc`, params).then(res => res.data); };

export const addUserOrUpdate = params => { return axios.post(`${base1}/user/addUserOrUpdate`, params).then(res => res.data); };

export const addJsc = params => { return axios.post(`${base1}/jurisdiction/addJsc`, params).then(res => res.data); };

export const addVideo = params => { return axios.post(`${base1}/video/addVideo`, params).then(res => res.data); };

export const videoList = params => { return axios.get(`${base1}/video/list`, { params: params }); };

export const jurisdictionList = params => { return axios.get(`${base1}/jurisdiction/list`, { params: params }); };

// 设备观看
export const getAllEquipment = params => { return axios.get(`${base1}/equipment/getAllList`, { params: params }); };

export const addEquipmentsWatchers = params => { return axios.post(`${base1}/userEquipment/addEquipmentsWatchers`, params).then(res => res.data); };

export const getListByEquipmentId = params => { return axios.get(`${base1}/userEquipment/getListByEquipmentId`, { params: params }); };

export const getEquipmenInfoByEquipmentId = params => { return axios.get(`${base1}/equipment/getById1`, { params: params }); };

// 摄像头管理
export const getListCamera = params => { return axios.get(`${base1}/cameraManagement/getListCamera`, { params: params }); };

export const addCamera = params => { return axios.post(`${base1}/cameraManagement/addCamera`, params).then(res => res.data); };

//设备信息
export const equipmentList = params => { return axios.get(`${base1}/equipment/list`, { params: params }); };

//历史数据
export const getByEquipmentId = params => { return axios.get(`${base1}/equipmentArametersHistory/getByEquipmentId`, { params: params }); };
//logs
export const getLogs = params => { return axios.get(`${base1}/logs/getLogs`, { params: params }); };
//isConnect
export const getConnect = params => { return axios.get(`${base1}/isConnect/getConnect`, { params: params }); };
//io
export const getIoData = params => { return axios.get(`${base1}/io/getData`, { params: params }); };