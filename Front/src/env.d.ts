/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_APP_API_URL: string
    readonly VITE_APP_API_URL_MOCK: string
    readonly VITE_APP_API_URL_DEV: string
    readonly VITE_APP_API_URL_PROD: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
