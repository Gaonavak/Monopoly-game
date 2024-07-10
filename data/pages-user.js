import {
    ref
} from 'vue'

export const rowCardData = ref([{
        title: '打卡点',
        icon: '/static/user/flag.png',
        path: '/pages_user/about/about'
    },
    {
        title: '足迹',
        icon: '/static/user/map.png',
        path: '/pages_user/timeline/timeline'
    },
    {
        title: '收藏',
        icon: '/static/user/star.png',
        path: '/pages_user/about/about'
    }
]);

export const colCardData = ref([{
        title: '用户反馈',
        leftIcon: '/static/user/phone.png',
        rightIcon: '/static/user/arrowright.png',
        path: '/pages_user/contact/contact'
    }, {
        title: '联系我们',
        leftIcon: '/static/user/personadd.png',
        rightIcon: '/static/user/arrowright.png',
        path: '/pages_user/contact/contact'
    },
    {
        title: '关于我们',
        leftIcon: '/static/user/info.png',
        rightIcon: '/static/user/arrowright.png',
        path: '/pages_user/about/about'
    }
]);

const clean = () => {
    uni.showToast({
        title: '清理完成',
        icon: 'none'
    })
}

export const cleanCacheCard = ref([{
    title: '清理缓存',
    leftIcon: '/static/user/trash.png',
    rightIcon: '/static/user/arrowright.png',
    path: clean
}])