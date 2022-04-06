import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../../const';
import { handleError } from '../../../services/handle-error';
import { Comment, Comments, ServerComment, ServerComments, UserComment } from '../../../types/reviews';
import { AppDispatch, State } from '../../../types/state';
import { redirectToRoute } from '../../action';
import { getComments } from '../../film-process/film-process';

const adaptToClient = (comment: ServerComment): Comment => (
  {
    id: comment.id,
    author: comment.user.name,
    date: comment.date,
    rating: comment.rating.toString(),
    text: comment.comment,
    userId: comment.user.id,
  }
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/fetchComments',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<ServerComments>(`${APIRoute.Comments}/${id}`);
      const adaptedComments: Comments = data.map((comment: ServerComment) => adaptToClient(comment));
      dispatch(getComments(adaptedComments));
    } catch (error) {
      handleError (error);
    }
  },
);


export const addReviewAction = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'film/addReview',
  async ({id, review: {rating, comment}}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<ServerComments>(`${APIRoute.Comments}/${id}`, {rating, comment});
      const adaptedComments: Comments = data.map((review: ServerComment) => adaptToClient(review));
      dispatch(getComments(adaptedComments));
      dispatch(redirectToRoute(`/films/${id}`));
    } catch (error) {
      handleError (error);
    }
  },
);
