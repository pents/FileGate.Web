import React from 'react'
import GitLogo from '../Images/githubLogo.png'

export function Footer(){
    return (
        <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">FileGate DEMO</h5>
              <p className="grey-text text-lighten-4">Demo version of simple file sharing service</p>
            </div>
            <div className="col l2 offset-l3">
                <a className="grey-text text-lighten-3" href="https://github.com/pents/FileGate">
                    <img src={GitLogo} alt="Github" />
                </a>
            </div>
          </div>
        </div>
      </footer>
    )
}