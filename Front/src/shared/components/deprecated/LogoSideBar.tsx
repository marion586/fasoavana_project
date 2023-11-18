import { toAbsoluteUrl } from "../../libs/AssetHelpers"

function LogoSideBar() {
  return (
    <a className="navbar-brand" aria-label="Front">
          <img className="navbar-brand-logo" src={toAbsoluteUrl("dashboard/img/logo/Spider.png")} alt="Logo" data-hs-theme-appearance="default"/>
          <img className="navbar-brand-logo-mini"src={toAbsoluteUrl("dashboard/img/logo/Spider.png")} alt="Logo" data-hs-theme-appearance="default"/>
    </a>
  )
}

export default LogoSideBar