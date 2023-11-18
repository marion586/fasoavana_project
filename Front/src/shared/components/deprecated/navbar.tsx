
const Navbar = () => {
  return (
    <header
      id="header"
      className="navbar navbar-expand-lg navbar-fixed kl-header navbar-height navbar-container navbar-bordered lv-ml-14"
    >
      <div className="navbar-nav-wrap kl-color-">
     {/* <a className="navbar-brand" href="./index.html" aria-label="Front">
          <img
            className="navbar-brand-logo"
            src={toAbsoluteUrl("dashboard/img/logo/Spider.png")}
            alt="Logo"
            data-hs-theme-appearance="default"
          />
          <img
            className="navbar-brand-logo-mini"
            src={toAbsoluteUrl("dashboard/img/logo/Spider.png")}
            alt="Logo"
            data-hs-theme-appearance="default"
          />
  </a>*/}
      <div className="navbar-nav-wrap-content-start">
        <button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
          <i className="bi-arrow-bar-left navbar-toggler-short-align"
            data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
            data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
          <i className="bi-arrow-bar-right navbar-toggler-full-align"
            data-bs-template='<div class="tooltip d-none d-md-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
            data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
        </button>
        <div className="dropdown ms-2">
          <div className="d-none d-lg-block">
            <div
              className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
              <div className="input-group-prepend input-group-text">
                <i className="charm_search-icon"></i>
              </div>
              <input type="search" className="js-form-search form-control kl-search-input" placeholder="Recherche"
                aria-label="Recherche"/>
              <a className="input-group-append input-group-text">
                <i id="clearSearchResultsIcon" className="bi-x-lg" style={{display: "none"}}></i>
              </a>
            </div>
          </div>

          <button
            className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none"
            type="button">
            <i className="charm_search-icon"></i>
          </button>
        </div>
      </div>
      <div className="navbar-nav-wrap-content-end">
        <ul className="navbar-nav">
          <li className="nav-item d-none d-sm-inline-block">
            <div className="dropdown">
              <button type="button" className="btn btn-ghost-secondary kl-notif-btn btn-icon rounded-circle"
                id="navbarNotificationsDropdown" data-bs-toggle="dropdown" aria-expanded="false"
                data-bs-auto-close="outside" data-bs-dropdown-animation={true}>
                <i className="bi bi-bell"></i>
                <span className="btn-status btn-sm-status btn-status-danger"></span>
              </button>

              <div
                className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless"
                aria-labelledby="navbarNotificationsDropdown" style={{width: "25rem"}}>
                <div className="card-header card-header-content-between">
                  <h4 className="card-title mb-0">Notifications</h4>
                </div>
                <div className="card-body-height">
                  <div className="" id="notificationTabContent">
                    <div className="" id="notificationNavTwo" role="" aria-labelledby="notificationNavTwo-tab">
                      <ul className="list-group list-group-flush navbar-card-list-group">
                        <li className="list-group-item form-check-select">
                          <div className="row">
                            <div className="col-auto">
                              <div className="d-flex align-items-center">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="notificationCheck6" />
                                  <label className="form-check-label" htmlFor="notificationCheck6"></label>
                                  <span className="form-check-stretched-bg"></span>
                                </div>
                                <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                  <span className="avatar-initials">A</span>
                                </div>
                              </div>
                            </div>
                            <div className="col ms-n2">
                              <h5 className="mb-1">Anne Richard</h5>
                              <p className="text-body fs-5">accepted your invitation to join Notion</p>
                            </div>
                            <small className="col-auto text-muted text-cap">1dy</small>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </li>
                        <li className="list-group-item form-check-select">
                          <div className="row">
                            <div className="col-auto">
                              <div className="d-flex align-items-center">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="notificationCheck7"/>
                                  <label className="form-check-label" htmlFor="notificationCheck7"></label>
                                  <span className="form-check-stretched-bg"></span>
                                </div>
                                <div className="avatar avatar-sm avatar-circle">
                                  <img className="avatar-img" src="./assets/img/160x160/img5.jpg" alt="Image Description" />
                                </div>
                              </div>
                            </div>
                            <div className="col ms-n2">
                              <h5 className="mb-1">Finch Hoot</h5>
                              <p className="text-body fs-5">left Slack group HS projects</p>
                            </div>
                            <small className="col-auto text-muted text-cap">1dy</small>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </li>
                        <li className="list-group-item form-check-select">
                          <div className="row">
                            <div className="col-auto">
                              <div className="d-flex align-items-center">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="notificationCheck8"/>
                                  <label className="form-check-label" htmlFor="notificationCheck8"></label>
                                  <span className="form-check-stretched-bg"></span>
                                </div>
                                <div className="avatar avatar-sm avatar-dark avatar-circle">
                                  <span className="avatar-initials">HS</span>
                                </div>
                              </div>
                            </div>
                            <div className="col ms-n2">
                              <h5 className="mb-1">Htmlstream</h5>
                              <p className="text-body fs-5">you earned a "Top endorsed" <i
                                  className="bi-patch-check-fill text-primary"></i> badge</p>
                            </div>
                            <small className="col-auto text-muted text-cap">6dy</small>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </li>
                        <li className="list-group-item form-check-select">
                          <div className="row">
                            <div className="col-auto">
                              <div className="d-flex align-items-center">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="notificationCheck9"/>
                                  <label className="form-check-label" htmlFor="notificationCheck9"></label>
                                  <span className="form-check-stretched-bg"></span>
                                </div>
                                <div className="avatar avatar-sm avatar-circle">
                                  <img className="avatar-img" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                                </div>
                              </div>
                            </div>
                            <div className="col ms-n2">
                              <h5 className="mb-1">Linda Bates</h5>
                              <p className="text-body fs-5">Accepted your connection</p>
                            </div>
                            <small className="col-auto text-muted text-cap">17dy</small>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </li>
                        <li className="list-group-item form-check-select">
                          <div className="row">
                            <div className="col-auto">
                              <div className="d-flex align-items-center">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="notificationCheck10" />
                                  <label className="form-check-label" htmlFor="notificationCheck10"></label>
                                  <span className="form-check-stretched-bg"></span>
                                </div>
                                <div className="avatar avatar-sm avatar-soft-dark avatar-circle">
                                  <span className="avatar-initials">L</span>
                                </div>
                              </div>
                            </div>
                            <div className="col ms-n2">
                              <h5 className="mb-1">Lewis Clarke</h5>
                              <p className="text-body fs-5">completed <i className="bi-journal-bookmark-fill text-primary"></i>
                                FD-134 task</p>
                            </div>
                            <small className="col-auto text-muted text-cap">2mts</small>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a className="card-footer text-center" href="#">
                  View all notifications <i className="bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <a className="navbar-dropdown-account-wrapper" id="accountNavbarDropdown"
                data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" data-bs-dropdown-animation>
                <div className="avatar avatar-sm avatar-circle">
                  <img className="avatar-img" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="Image Description" />
                  <span className="avatar-status d-none avatar-sm-status avatar-status-success"></span>
                </div>
                <div className="kl-user-pseudo">
                  <span>Thomas Kelly</span>
                </div>
              </a>

              <div
                className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account"
                aria-labelledby="accountNavbarDropdown">

                <a className="dropdown-item" href="#">
                  <i className="bi-person-circle"></i>
                  Profil
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bi-reply-fill"></i>
                  Déconnexion
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </header>
  );
};

export default Navbar;
