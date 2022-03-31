import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '..';
import { APIRoute } from '../../const';
import { handleError } from '../../services/handle-error';
import { Comment, Comments, ServerComment, ServerComments, UserReview } from '../../types/reviews';
import { redirectToRoute } from '../action';
import { getComments } from '../film-process/film-process';

type UserComment = {
  id: number;
  review: UserReview;
}

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

export const fetchCommentsAction = createAsyncThunk(
  'film/fetchComments',
  async (id: number) => {
    try {
      const {data} = await api.get<ServerComments>(`${APIRoute.Comments}/${id}`);
      const adaptedComments: Comments = data.map((comment: ServerComment) => adaptToClient(comment));
      store.dispatch(getComments(adaptedComments));
    } catch (error) {
      handleError (error);
    }
  },
);


export const addReviewAction = createAsyncThunk<void, UserComment>(
  'film/addReview',
  async ({id, review: {rating, comment}}: UserComment) => {
    try {
      const {data} = await api.post<ServerComments>(`${APIRoute.Comments}/${id}`, {rating, comment});
      const adaptedComments: Comments = data.map((review: ServerComment) => adaptToClient(review));
      store.dispatch(getComments(adaptedComments));
      store.dispatch(redirectToRoute(`/films/${id}`));
    } catch (error) {
      handleError (error);
    }
  },
);
