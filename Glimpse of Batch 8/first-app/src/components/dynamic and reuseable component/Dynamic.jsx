import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp, faComment, faShare } from "@fortawesome/free-solid-svg-icons";

import moment from 'moment/moment';

const Dynamic = (props) => {
  return (
    <>
      <div className='page'>
        <div className="class1">
          <div className="postHeader">
            <img
              className="profilePhoto"
              src={props.profilePhoto}
              alt="profile"
            />
            <div>
              {props.name} <br />
              {moment(props.postDate).fromNow()}
            </div>
          </div>

          <div className="postText">{props.postText}</div>

          <img className="postImage" src={props.postImage} alt="postimge" />
          <hr />
          <div className="postFooter">
            <div>
              <FontAwesomeIcon icon={faThumbsUp} />
              Like
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              Comment
            </div>
            <div>
              <FontAwesomeIcon icon={faShare} />
              Share
            </div>
          </div>
          <hr />

          {/* <img src="./" alt="like" />
          <img src="./" alt="comment" />
            <img src="./" alt="share" /> */}
        </div>
      </div>
    </>
  );
}

export default Dynamic;