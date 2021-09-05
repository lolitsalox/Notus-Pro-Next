import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <div className={`header ${props.rootClassName} `}>
        <div className="container">
          <Link href="/">
            <a className="link">
              <h1 className="heading textSM thqLink">{props.heading1}</h1>
            </a>
          </Link>
          <Link href="/profile">
            <a className="link1">
              <div className="container1 thqLink">
                <svg viewBox="0 0 1024 1024" className="icon">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
                <span className="text textSM">PROFILE</span>
              </div>
            </a>
          </Link>
          <Link href="/blog-post">
            <a className="link2">
              <div className="container2 thqLink">
                <svg viewBox="0 0 1024 1024" className="icon02">
                  <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
                  <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                  <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                  <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
                </svg>
                <span className="text1 textSM">BLOG</span>
              </div>
            </a>
          </Link>
        </div>
        <svg viewBox="0 0 1024 1024" className="icon07">
          <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
        </svg>
        <div className="container3">
          <svg viewBox="0 0 877.7142857142857 1024" className="icon09">
            <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="icon11">
            <path d="M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"></path>
          </svg>
          <svg viewBox="0 0 877.7142857142857 1024" className="icon13">
            <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
          </svg>
        </div>
      </div>
      <style jsx>
        {`
          .header {
            flex: 0 0 auto;
            width: 100%;
            height: 75px;
            display: flex;
            padding: var(--dl-space-space-unitandhalf);
            z-index: 1;
            max-width: 1320px;
            align-items: center;
            margin-bottom: 0.75rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link {
            display: contents;
          }
          .heading {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link1 {
            display: contents;
          }
          .container1 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
            text-decoration: none;
          }
          .icon {
            fill: var(--dl-color-gray-900);
            width: 13px;
          }
          .text {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-halfunit);
          }
          .link2 {
            display: contents;
          }
          .container2 {
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            flex-direction: row;
            text-decoration: none;
          }
          .icon02 {
            fill: var(--dl-color-gray-900);
            width: 13px;
          }
          .text1 {
            color: var(--dl-color-gray-white);
            margin-left: var(--dl-space-space-halfunit);
          }
          .icon07 {
            width: 24px;
            height: 24px;
            display: none;
          }
          .container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .icon09 {
            fill: var(--dl-color-gray-900);
            width: 24px;
            height: 24px;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: 0.75rem;
            margin-right: 0.75rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .icon11 {
            fill: var(--dl-color-gray-900);
            width: 24px;
            height: 24px;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: 0.75rem;
            margin-right: 0.75rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .icon13 {
            fill: var(--dl-color-gray-900);
            width: 24px;
            height: 24px;
            margin-top: var(--dl-space-space-halfunit);
            margin-left: 0.75rem;
            margin-right: 0.75rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .rootClassName {
            margin-bottom: 0px;
          }
          @media (max-width: 991px) {
            .header {
              max-width: 1320px;
              margin-bottom: var(--dl-space-space-triplequarter);
            }
            .icon09 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .icon11 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .icon13 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .header {
              background-color: var(--dl-color-gray-white);
            }
            .heading {
              color: var(--dl-color-secondary-400);
            }
            .container1 {
              display: none;
            }
            .container2 {
              display: none;
            }
            .icon07 {
              fill: var(--dl-color-secondary-400);
              display: flex;
            }
            .container3 {
              display: none;
            }
            .rootClassName {
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  rootClassName: '',
  heading1: 'NOTUS PRO',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
}

export default Header