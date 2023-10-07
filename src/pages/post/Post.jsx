import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Comments, PostContent } from './components';
import { useParams } from 'react-router-dom';
import { loadPostAsyncAction } from '../../store/actions';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../store/selectors';

const PostContainer = ({ className }) => {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const params = useParams();
  const request = useServerRequest();

  useEffect(() => {
    dispatch(loadPostAsyncAction(request, params.id));
  }, [dispatch, request]);

  console.log(post);

  return (
    <div className={className}>
      <PostContent post={post} />
      <Comments comments={post.comments} />
    </div>
  );
};

export const Post = styled(PostContainer)`
  padding: 0 80px 40px;
`;
