import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Comment } from './components/Comment';

const CommentsContainer = ({ className, comments }) => {
  const [newComment, setNewComment] = useState('');

  const onChangeTextArea = ({ target }) => {
    setNewComment(target.value);
  };

  return (
    <div className={className}>
      <div className="new-comment">
        <textarea
          value={newComment}
          placeholder={'Комментарий...'}
          onChange={onChangeTextArea}
        />
        <Icon id={'fa-paper-plane-o'} margin={'0 0 0 20px'} size={'18px'} />
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
  }

  & .new-comment {
    display: flex;
  }
`;
