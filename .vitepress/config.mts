import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "猎魔村物语脚本",
    description: "使用文档",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: '简介',
                items: [
                    { text: '快速上手', link: '/quick-starter' },
                    { text: '常见问题', link: '/other/problems' },
                    { text: '模块状态', link: '/other/module-status' },
                ]
            },
            {
                text: '模块',
                items: [
                    { text: '功能列表', link: '/modules/function-list' },
                    { text: '自然力', link: '/modules/elemental' },
                    { text: '探险', link: '/modules/journey' },
                    { text: '签到', link: '/modules/attendance' },
                    { text: '地下副本', link: '/modules/dungeon' },
                    { text: '委托所', link: '/modules/bounty-hut' },
                    { text: '任务', link: '/modules/quest' },
                    { text: '每日重启游戏', link: '/modules/daily-restart' },
                    { text: '奖励箱子', link: '/modules/bonus-chest' },
                    { text: '魔王城生物', link: '/modules/darkness-creature' },
                    { text: '探险队管理', link: '/modules/manage-fellowship' },
                    { text: '分解装备', link: '/modules/dismantle-equip' },
                    { text: '遗址挖掘', link: '/modules/ruins-excavation' },
                    { text: '广告', link: '/modules/ad' },
                    { text: '驱逐猎人', link: '/modules/banish-hunter' },
                    { text: '牧场', link: '/modules/ranch' },
                    { text: '兑换优惠券', link: '/modules/register-coupon' },
                    { text: '领取邮件', link: '/modules/receive-mail' },
                    { text: '装备制作', link: '/modules/equip-craft' },

                    { text: '全局刷新', link: '/modules/global-reset' },
                    { text: '超级大师联赛', link: '/modules/grand-master-league' },
                    { text: '精英联赛', link: '/modules/elite-league' },
                    { text: '世界boss', link: '/modules/world-boss' },

                    { text: '公会突袭', link: '/modules/guild-raid' },
                    { text: '魔王城前院', link: '/modules/darkness-front' },
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    }
})
