import { AppRoute, AuthorizationStatus, HttpCode } from '../const';

import { ErrorType } from '../types/error';
import { redirectToRoute } from '../store/action';
import request from 'axios';
import { requireAuthorization } from '../store/user-process/user-process';
import { store } from '../store';
import { toast } from 'react-toastify';
import { setError } from '../store/errors-process/errors-process';
import { clearErrorAction } from '../store/api-actions/api-error-actions/api-error-actions';

export const handleError = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
        toast.info(response.data.error);
        store.dispatch(setError(response.data.error));
        store.dispatch(clearErrorAction());
        break;
      case HttpCode.UNAUTHORIZED:
        toast.info(response.data.error);
        store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        break;
      case HttpCode.NOT_FOUND:
        toast.info(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.NotFound));
        break;
    }
  }
};
