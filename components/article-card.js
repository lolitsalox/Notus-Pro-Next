import React from 'react'

import PropTypes from 'prop-types'

const ArticleCard = (props) => {
  return (
    <>
      <div className="container">
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <div className="container1">
          <h3 className="text healine">{props.title}</h3>
          <div className="container2">
            <span className="text1">{props.description}</span>
          </div>
          <div className="container3">
            <img
              alt={props.avatar_alt}
              src={props.avatar_src}
              className="image1"
            />
            <div className="container4">
              <span className="text2">{props.name}</span>
              <div className="container5">
                <span className="text3 textSM">{props.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .image {
            width: 33%;
            object-fit: cover;
            border-radius: 0px;
            border-top-left-radius: var(--dl-radius-radius-radius75);
            border-bottom-left-radius: var(--dl-radius-radius-radius75);
          }
          .container1 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .text {
            color: var(--dl-color-secondary-300);
            font-weight: 600;
          }
          .container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text1 {
            color: var(--dl-color-secondary-500);
            font-size: 1.125rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .image1 {
            width: 48px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-round);
          }
          .container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text2 {
            color: var(--dl-color-secondary-500);
            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
          }
          .container5 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .text3 {
            color: var(--dl-color-secondary-500);
          }
          @media (max-width: 991px) {
            .container {
              flex-direction: column;
            }
            .image {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

ArticleCard.defaultProps = {
  avatar_src: '15958451-f790-4024-a70e-cc38b82637f2',
  name: 'Laura Hanks',
  title: 'Portofino one of the best for remote working',
  image_src: '/playground_assets/city-1-1200h.jpg',
  time: 'Published 3 days ago',
  avatar_alt: 'avatar',
  description:
    "Finding temporary housing should be as easy as renting an Airbnb. That's th e idea behinf portofino, which raised $65 million to expand its pet sitting businesses. This come as the right move for the investment while the planet is moving on work from home...",
  image_alt: 'image',
}

ArticleCard.propTypes = {
  avatar_src: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  time: PropTypes.string,
  avatar_alt: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ArticleCard
