import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Comment } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../../../store/selectors';
import { addCommentAsyncAction } from '../../../../store/actions';
import { useServerRequest } from '../../../../hooks';

const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState('');
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const request = useServerRequest();

  const onChangeTextArea = ({ target }) => {
    setNewComment(target.value);
  };

  const onNewCommentAdd = (postId, userId, content) => {
    dispatch(addCommentAsyncAction(request, postId, userId, content));
    setNewComment('');
  };

  return (
    <div className={className}>
      <div className="new-comment">
        <textarea
          name={'comment'}
          value={newComment}
          placeholder={'Комментарий...'}
          onChange={onChangeTextArea}
        />
        <div onClick={() => onNewCommentAdd(postId, userId, newComment)}>
          <Icon id={'fa-paper-plane-o'} margin={'0 0 0 20px'} size={'18px'} />
        </div>
      </div>

      <div className="comments">
        {comments.map(({ id, author, content, publishedAt }) => (
          <Comment
            key={id}
            id={id}
            author={author}
            content={content}
            publishedAt={publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export const Comments = styled(CommentsContainer)`
  width: 580px;
  margin: 30px auto 0;

  & textarea {
    width: 100%;
    height: 120px;
    resize: none;

    font-size: 18px;
  }

  & .new-comment {
    display: flex;
  }
`;
