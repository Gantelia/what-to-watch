import { AppRoute, AuthorizationStatus, HTTP_CODE } from '../const';

import { ErrorType } from '../types/error';
import { redirectToRoute } from '../store/action';
import request from 'axios';
import { requireAuthorization } from '../store/user-process/user-process';
import { store } from '../store';
import { toast } from 'react-toastify';

export const handleError = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        toast.info(response.data.error);
        store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.info(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.NotFound));
        break;
    }
  }
};
