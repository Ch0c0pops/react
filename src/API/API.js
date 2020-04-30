import * as axios from "axios";
import warning from "react-redux/lib/utils/warning";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY': '110834f4-4de1-441e-9bfb-f3d1fda8381b'}
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
        warning('метод устарел. Используйте profileAPI.getUserProfile')
        return profileAPI.getUserProfile(userId);
    }
};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
};


export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                    return response.data
                }
            )
    }
};
