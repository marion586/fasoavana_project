export function getConfig() {
    const lang = navigator.language?.substring(0, 2)?.toLowerCase();
    
    const ls = localStorage.getItem("I18N_CONFIG_KEY")
    if (ls) return ls
    return ( lang || 'fr')
  }
  
  export function setLanguage(lang: string) {
    localStorage.setItem("I18N_CONFIG_KEY", lang)
  }