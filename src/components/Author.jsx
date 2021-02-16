import React from 'react'
import PropTypes from 'prop-types'
import { IonAvatar } from '@ionic/react'
import cx from 'classnames';
import styles from '../styles/Author.module.css'

const Author = ({author}) => {

  return (
    <div className={cx(styles.Author)}>
      <IonAvatar>
        <img 
          src={author.avatar} 
          alt={author.avatar}>
        </img>
      </IonAvatar> 
      <h4 className={cx(styles.AuthorHeading)}>{author.name}</h4>
    </div>
  )
}

Author.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string

}

export default Author

