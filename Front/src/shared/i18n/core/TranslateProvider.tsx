/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren, useMemo, useState, createContext } from "react"
import { IntlProvider } from "react-intl"
import frMessage from '../messages/fr.json'
import enMessage from '../messages/en.json'
import { getConfig } from "./helper";

interface Messages {
  [key: string]: string | any;
}
type Props = {
    local: string
    setLocale: Function
}
const initialState: Props = {
    local: 'fr',
    setLocale: Function,

}
const allMessages: Messages = {
    fr: frMessage,
    en: enMessage
}

export const I18nContext = createContext<Props>(initialState)

const TranslateProvider: FC<PropsWithChildren> = ({children}) => {
  const [locale,setLocale] = useState<string>(getConfig());
  const messages = useMemo(() => {
    if(locale){
       const lang = allMessages[locale]
       if(!lang) return allMessages["en"]
       return lang
    }
    return allMessages[locale]
 },[locale])
 
  return (
      <I18nContext.Provider value={{local:locale,setLocale:setLocale}}>
          <IntlProvider messages={messages} locale={locale} defaultLocale={locale}>
              {children}
          </IntlProvider>
      </I18nContext.Provider>
  )
}

export default TranslateProvider