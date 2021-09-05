import React from 'react'

import PropTypes from 'prop-types'

const UserDetails = (props) => {
  return (
    <>
      <div className="container">
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <div className="container1">
          <span className="text textSM">{props.name}</span>
          <div className="container2">
            <span className="text1 textXS">
              Published
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="text2 textXS">{props.time}</span>
            <span className="text3 textXS">ago</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .image {
            width: 40px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
          }
          .container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text {
            color: var(--dl-color-secondary-500);
            font-weight: 700;
            text-transform: uppercase;
          }
          .container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .text1 {
            color: var(--dl-color-secondary-500);
            font-weight: 400;
            margin-right: 0.25rem;
          }
          .text2 {
            color: var(--dl-color-secondary-500);
            font-weight: 400;
          }
          .text3 {
            color: var(--dl-color-secondary-500);
            font-weight: 400;
            margin-left: 0.25rem;
          }
        `}
      </style>
    </>
  )
}

UserDetails.defaultProps = {
  image_src: '/playground_assets/team4-1200h.png',
  name: 'Laura Hanks',
  time: '3 days',
  image_alt: 'image',
}

UserDetails.propTypes = {
  image_src: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  image_alt: PropTypes.string,
}

export default UserDetails
