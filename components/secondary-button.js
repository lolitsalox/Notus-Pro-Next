import React from 'react'

import PropTypes from 'prop-types'

const SecondaryButton = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <button className="button textXS thqButton">{props.button}</button>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .button {
            color: var(--dl-color-gray-white);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            transition: 0.3s;
            line-height: 1;
            padding-top: var(--dl-space-space-halfunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
            background-color: var(--dl-color-secondary-300);
          }
          .button:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .button:active {
            background-color: var(--dl-color-secondary-100);
          }
          .rootClassName {
            margin-top: var(--dl-space-space-unitandhalf);
          }
        `}
      </style>
    </>
  )
}

SecondaryButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

SecondaryButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SecondaryButton
