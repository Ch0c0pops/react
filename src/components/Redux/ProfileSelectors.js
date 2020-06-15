
export const profileSelector = (state) => {
    return state.profilePage.profile
};
export const statusSelector = (state) => {
    return state.profilePage.status
};
export const userIdSelector = (state) => {
    return state.auth.id
};
export const avatarSelector = (state) => {
    return state.profilePage.avatar
};
export const errorSelector = (state) => {
    return state.profilePage.error
};


