/* eslint-disable @typescript-eslint/no-explicit-any */
export const toAbsoluteUrl: any = (pathname: string) => {
    return import.meta.env.BASE_URL + pathname
}
