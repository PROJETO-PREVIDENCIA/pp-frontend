import Api from '@/util/Api'
import emitter from '@/util/emitter'
import dragAndDropTouchProxy from '@/util/functions/dragAndDropTouchProxy.js'
import generalErrorHandler from '@/setup/generalErrorHandler.js'

export default (vueInstance) => {
  vueInstance.config.globalProperties.emitter = emitter
  vueInstance.config.globalProperties.api = Api

  if(process.client) {
    dragAndDropTouchProxy()
    generalErrorHandler()
  }
}