import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由懒加载
const Home = () =>
    import ('../components/Home.vue')
const ForgetPassword = () =>
    import ('../components/ForgetPassword.vue')
const successful = () =>
    import ('../components/successful.vue')

// const subscriptions = () =>
//     import ('../components/subscriptions.vue')
const Subscription = () =>
    import ('../components/Subscription.vue')
const termsService = () =>
    import ('../components/termsService.vue')
const privacy = () =>
    import ('../components/privacy.vue')
const agreePrivacy = () =>
    import ('../components/agreePrivacy.vue')
    // const month = () =>
    //     import ('../components/month.vue')
    // const year = () =>
    //     import ('../components/year.vue')
    // const quarterly = () =>
    //     import ('../components/quarterly.vue')
const login = () =>
    import ('../components/login.vue')
const UserPurch = () =>
    import ('../components/UserPurch.vue')
const userinformation = () =>
    import ('../components/userinformation.vue')
const purchaseHistory = () =>
    import ('../components/purchaseHistory.vue')
const discount = () =>
    import ('../components/discount.vue')
    // const discounts = () =>
    //     import ('../components/discounts.vue')
const successfulSub = () =>
    import ('../components/successfulSub.vue')
const returnPolicy = () =>
    import ('../components/returnPolicy.vue')
const Intelictual = () =>
    import ('../components/Intelictual.vue')
const shipinformation = () =>
    import ('../components/shipinformation.vue')
const about = () =>
    import ('../components/about.vue')
const aboutus = () =>
    import ('../components/aboutus.vue')
const contactus = () =>
    import ('../components/contactus.vue')
const filterDetail = () =>
    import ('../components/filterDetail.vue')
Vue.use(VueRouter)
const routes = [
    { path: '/', redirect: '/home' },

    {
        path: '/login',
        component: login,
        children: [
            { path: '/home', component: Home, meta: { title: 'PDFMaster' } },
            { path: '/discount', component: discount, meta: { title: 'Discount' } },
            // { path: '/discounts', component: discounts, meta: { title: 'Discounts' } },

            {
                path: '/subscription',
                component: Subscription,
                meta: { title: 'Subscription' }
            },
            // {
            //     path: '/subscriptions',
            //     component: subscriptions,
            //     meta: { title: 'Subscriptions' }
            // },


            { path: '/forgetPassword', component: ForgetPassword, meta: { title: 'ForgetPassword' } },
            {
                path: '/agreePrivacy',
                component: agreePrivacy,
                children: [
                    { path: '/privacy', component: privacy, meta: { title: 'privacy' } },
                    { path: '/termsService', component: termsService, meta: { title: 'termsService' } },
                    { path: '/returnPolicy', component: returnPolicy, meta: { title: 'returnPolicy' } },
                    { path: '/Intelictual', component: Intelictual, meta: { title: 'Intelictual' } },
                    { path: '/shipinformation', component: shipinformation, meta: { title: 'ShippingInformation' } }
                ]
            },
            {
                path: '/about',
                component: about,
                meta: { title: 'about' },
                children: [
                    { path: '/aboutus', component: aboutus, meta: { title: 'about us' } },
                    { path: '/contactus', component: contactus, meta: { title: 'contact us' } }
                ]
            },
            {
                path: '/UserPurch',
                component: UserPurch,
                children: [{
                        path: '/userinformation',
                        component: userinformation,
                        meta: { title: 'userinformation' }
                    },
                    {
                        path: '/purchaseHistory',
                        component: purchaseHistory,
                        meta: { title: 'purchaseHistory' }
                    }
                ]
            },
        ]
    },

    { path: '/successfulSub', component: successfulSub, meta: { title: 'successful' } },
    { path: '/successful', component: successful, meta: { title: 'successful' } },
    { path: '/filterDetail', component: filterDetail }


]

const router = new VueRouter({
    // mode: 'history',
    routes,
    mode: 'history'
})
export default router