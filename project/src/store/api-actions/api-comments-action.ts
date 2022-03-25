import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '..';
import { APIRoute } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { AdaptingComment, Comment, Comments, ServerReview, ServerReviews } from '../../types/reviews';
import { getComments } from '../action';

const adaptToClient = (comment: ServerReview): Comment => {
  const adaptedComment: AdaptingComment = {
    ...comment,
    author: comment['user']['name'],
    userId: comment['user']['id'],
    text: comment['comment'],
    rating: comment['rating'].toString(),
  };
  delete adaptedComment['comment'];
  delete adaptedComment['user'];

  return adaptedComment;
};

export const fetchComments = (id: number) => createAsyncThunk(
  'data/fetchComments',
  async () => {
    try {
      const {data} = await api.get<ServerReviews>(`${APIRoute.Comments}/${id}`);
      const adaptedComments: Comments = data.map((comment: ServerReview) => adaptToClient(comment));
      store.dispatch(getComments(adaptedComments));
    } catch (error) {
      errorHandle (error);
    }
  },
);

