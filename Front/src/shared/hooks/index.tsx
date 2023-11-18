import {useContext} from 'react'
import { I18nContext } from '../i18n/core/TranslateProvider'
export const useLang = () =>  useContext(I18nContext)
export const useBaseUrl = () => {
  return  import.meta.env.PROD ? import.meta.env.VITE_APP_API_URL_PROD : import.meta.env.VITE_APP_API_URL_DEV
}