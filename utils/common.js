export const naviTo = (path) => {
    if (!path) {
        return;
    }
    if (typeof path == 'function') {
        path();
        return;
    }
    uni.navigateTo({
        url: path,
        fail() {
            uni.showToast({
                title: '页面不存在，或网络错误',
                icon: 'closeempty'
            })
        }
    })
};