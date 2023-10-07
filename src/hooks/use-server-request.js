import { useSelector } from 'react-redux';
import { selectUserSession } from '../store/selectors';
import { server } from '../BFF';
import { useCallback } from 'react';

export const useServerRequest = (operation, ...params) => {
  const userSession = useSelector(selectUserSession);

  return useCallback(
    (operation, ...params) => {
      const request = ['registration', 'authorization', 'fetchPost'].includes(operation)
        ? params
        : [userSession, ...params];
      return server[operation](...request);
    },
    [userSession],
  );
};
