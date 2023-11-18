/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/*export const exportExcelRequest = async (url: any, state: any) => {
  try {
    // const newToken = await getFreshToken()
    // let accesssToken = ''
    // if (newToken && newToken?.Status?.Success && newToken?.data && newToken?.data?.AccessToken) {
    //   accesssToken = newToken?.data?.AccessToken
    // }
    let config: any = {
      headers: {
        Authorization: '',
        AccessToken: '',
        Lang: 'FR',
      },
    }
    // const reduxState = store.getState()
    const auth = getAuth() || null
    const userLang = auth && auth.data && auth.data.Lang ? auth.data.Lang.toUpperCase() : 'FR'
    config.headers.Lang = userLang
    if (auth && auth.data && auth.data.AccessToken) {
      config.headers.Authorization = `Bearer ${
        auth.data.AccessToken
      }`
      config.headers.AccessToken = auth.data.AccessToken
    }

    return fetch(`${url}?` + new URLSearchParams(state), {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/vnd.ms-excel',
      },
    })
      .then(async (response) => {
        console.log('response', response)
        if (response?.status === 401) {
          const newToken = await getFreshToken()
          let accesssToken = ''
          if (
            newToken &&
            newToken?.Status?.Success &&
            newToken?.data &&
            newToken?.data?.AccessToken
          ) {
            saveAuth(newToken)
            accesssToken = newToken?.data?.AccessToken
          }
          let config: any = {
            headers: {
              Authorization: '',
              AccessToken: '',
              Lang: 'FR',
            },
          }
          // const reduxState = store.getState()
          const auth = getAuth() || null
          const userLang = auth && auth.data && auth.data.Lang ? auth.data.Lang.toUpperCase() : 'FR'
          config.headers.Lang = userLang
          if (auth && auth.data && auth.data.AccessToken) {
            config.headers.Authorization = `Bearer ${
              accesssToken !== '' ? accesssToken : auth.data.AccessToken
            }`
            config.headers.AccessToken = accesssToken !== '' ? accesssToken : auth.data.AccessToken
          }
          return fetch(`${url}?` + new URLSearchParams(state), {
            ...config,
            headers: {
              ...config.headers,
              'Content-Type': 'application/vnd.ms-excel',
            },
          }).then (res => res)
        }
        return response
      })
      .catch((error) => {
        console.log('error.response', error)
        if (error.response) {
        }
        return error?.response
      })
  } catch (error) {
    console.log(error)
  }
}*/

import { postRefreshToken } from "@/modules/auth/core/services/_request";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "./LocalStorageHelpers";
import { store } from "@/apps/store";
import { setCurrentUser } from "@/modules/auth/core/actions";

/*export const exportHandler = async ({
  state,
  onStart,
  onEnd,
  exportAPICAllFunction,
}: {
  state: any
  onStart?: Function
  onEnd?: Function
  exportAPICAllFunction?: (state: any) => Promise<Response>
}) => {
  try {
    if (onStart) {
      onStart()
    }
    if (exportAPICAllFunction) {
      const res = await exportAPICAllFunction({
        ...state,
        Filter: JSON.stringify(state.Filter),
      })
      const atached = res.headers?.get('content-disposition')
      const indexTo = atached ? atached?.indexOf('filename=') + 'filename='.length : 0
      const fileName = atached?.substring(indexTo, atached?.length)
      var bb = await res?.blob()
      var a = document.createElement('a')
      a.download = fileName || 'test.txt'
      a.href = window.URL.createObjectURL(bb)
      a.click()
    }
    if (onEnd) {
      onEnd()
    }
  } catch (error) {
    if (onEnd) {
      onEnd()
    }
  }
}*/

/*export const export2ZipRequest = async (url: any, CompanyGuid: String, VatGuid: String) => {
  try {
    // const newToken = await getFreshToken()
    // let accesssToken = ''
    // if (newToken && newToken?.Status?.Success && newToken?.data && newToken?.data?.AccessToken) {
    //   accesssToken = newToken?.data?.AccessToken
    // }
    let config: any = {
      headers: {
        Authorization: '',
        AccessToken: '',
        Lang: 'FR',
      },
    }
    // const reduxState = store.getState()
    const auth = getAuth() || null
    const userLang = auth && auth.data && auth.data.Lang ? auth.data.Lang.toUpperCase() : 'FR'
    config.headers.Lang = userLang
    if (auth && auth.data && auth.data.AccessToken) {
      config.headers.Authorization = `Bearer ${
        auth.data.AccessToken
      }`
      config.headers.AccessToken = auth.data.AccessToken
    }

    return fetch(`${url}?CompanyGuid=${CompanyGuid}&VatGuid=${VatGuid}`, {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/zip', // application/zip
      },
      
    })
      .then(async (response) => {
        console.log('response', response)
        if (response?.status === 401) {
          const newToken = await getFreshToken()
          let accesssToken = ''
          if (
            newToken &&
            newToken?.Status?.Success &&
            newToken?.data &&
            newToken?.data?.AccessToken
          ) {
            saveAuth(newToken)
            accesssToken = newToken?.data?.AccessToken
          }
          let config: any = {
            headers: {
              Authorization: '',
              AccessToken: '',
              Lang: 'FR',
            },
          }
          // const reduxState = store.getState()
          const auth = getAuth() || null
          const userLang = auth && auth.data && auth.data.Lang ? auth.data.Lang.toUpperCase() : 'FR'
          config.headers.Lang = userLang
          if (auth && auth.data && auth.data.AccessToken) {
            config.headers.Authorization = `Bearer ${
              accesssToken !== '' ? accesssToken : auth.data.AccessToken
            }`
            config.headers.AccessToken = accesssToken !== '' ? accesssToken : auth.data.AccessToken
          }
          return fetch(`${url}?CompanyGuid=${CompanyGuid}&VatGuid=${VatGuid}`, {
            ...config,
            headers: {
              ...config.headers,
              'Content-Type': 'application/zip',
            },
          }).then (res => res)
        }
        return response
      })
      .catch((error) => {
        console.log('error.response', error)
        if (error.response) {
        }
        return error?.response
      })
  } catch (error) {
    console.log(error)
  }
}*/

/*export const export2ZipHandler = async ({
  state,
  onStart,
  onEnd,
  exportZipAPICAllFunction,
}: {
  state: any
  onStart?: Function
  onEnd?: Function
  exportZipAPICAllFunction?: () => Promise<Response>
}) => {
  try {
    if (onStart) {
      onStart()
    }
    if (exportZipAPICAllFunction) {
      const res = await exportZipAPICAllFunction()
      const atached = res.headers?.get('content-disposition')
      const indexTo = atached ? atached?.indexOf('filename=') + 'filename='.length : 0
      const fileName = atached?.substring(indexTo, atached?.length)
      var bb = await res?.blob()
      var a = document.createElement('a')
      a.download = fileName || 'test.zip'
      a.href = window.URL.createObjectURL(bb)
      a.click()
    }
    if (onEnd) {
      onEnd()
    }
  } catch (error) {
    if (onEnd) {
      onEnd()
    }
  }
}
*/
export const exportPDFRequest = async (url: any) => {
  try {
    const config = {
      headers: {
        Authorization: "",
        AccessToken: "",
      },
    };
    // const reduxState = store.getState()
    const auth = getItemFromLocalStorage("current_user") || null;
    const token = auth ? JSON.parse(auth)?.token : null;
    const refreshToken = auth ? JSON.parse(auth)?.refresh_token : null;
    if (auth && token) {
      config.headers.Authorization = `Bearer ${token}`;
      // config.headers.AccessToken = auth.data.AccessToken
    }

    return fetch(`${url}`, {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "application/pdf", // application/zip
      },
    })
      .then(async (response) => {
        console.log("response", response);
        if (response?.status === 401) {
          const newToken = await postRefreshToken({
            refresh_token: refreshToken,
          });
          console.log(newToken);
         
         // const accesssToken = "";
          if (
            newToken 
          ) {
            setItemToLocalStorage("current_user", JSON.stringify(newToken.data));
            store.dispatch(setCurrentUser(newToken.data));
          }
          const config: any = {
            headers: {
              Authorization: "",
              AccessToken: "",
            },
          };
          return fetch(`${url}`, {
            ...config,
            headers: {
              ...config.headers,
              "Content-Type": "application/pdf",
            },
          }).then((res) => res);
        }
        return response;
      })
      .catch((error) => {
        console.log("error.response", error);
        if (error.response) { /* empty */ }
        return error?.response;
      });
  } catch (error) {
    console.log(error);
  }
};
export const exportPDFHandler = async ({
  state,
  onStart,
  onEnd,
  exportPDFAPICAllFunction,
}: {
  state: any;
  onStart?: Function;
  onEnd?: Function;
  exportPDFAPICAllFunction?: () => Promise<Response>;
}) => {
  console.log("state",state);
  
  try {
    if (onStart) {
      onStart();
    }
    if (exportPDFAPICAllFunction) {
      const res = await exportPDFAPICAllFunction();
      if (res.status === 500) {
        alert("Data not found for this invoice .")
        if (onEnd) onEnd();
        return;
      }
      const atached = res.headers?.get("content-disposition");
      console.log("res",res);
      
      const arrayContent = atached ? atached.split("=") : [];
      const fileName =
        arrayContent.find((content: string) => content.includes(".pdf")) ||
        `Article714fdff-8efd-4c31-b50a-9e${Math.random() * 10}c80f6b3${
          Math.random() * 10
        }e.pdf`;
      const bb = await res?.blob();
      const a = document.createElement("a");
      a.target = "_blank";
      a.download = fileName;
      a.href = window.URL.createObjectURL(bb);
      alert(44)
      a.click();
    }
    if (onEnd) {
      onEnd();
    }
  } catch (error) {
    if (onEnd) {
      onEnd();
    }
  }
};
