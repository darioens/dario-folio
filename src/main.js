import BaseLayout from '@/layouts/BaseLayout'
import PortfolioLayout from '@/layouts/PortfolioLayout'
import DefaultLayout from '@/layouts/DefaultLayout'
import PortfolioPage from '@/components/PortfolioPage'
import PortfolioMenu from '@/components/PortfolioMenu'
import Flare from '@lkmx/flare-legacy/src/main'

import '@/sass/styles.scss'

export default async function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Flare)
  Vue.component('BaseLayout', BaseLayout)
  Vue.component('PortfolioLayout', PortfolioLayout)
  Vue.component('DefaultLayout', DefaultLayout)
  Vue.component('PortfolioPage', PortfolioPage)
  Vue.component('PortfolioMenu', PortfolioMenu)

}
