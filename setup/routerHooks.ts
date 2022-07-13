export default () => {

  if(process.client) {
    const router = useRouter()

    router.beforeEach((to) => {

      const pageHeader = document.getElementById('page-header')
      if(pageHeader) {
        if(to.path == '/') {
          pageHeader.classList.add('page-header-home')
        } else {
          pageHeader.classList.remove('page-header-home')
        }
      }
      /**
       * Scroll to top on route change
      */
      setTimeout(() => {
        const mainContent = document.getElementById('body')
        if(mainContent) {
          document.getElementById('body').scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        }
      }, 100)

    })
  }
}