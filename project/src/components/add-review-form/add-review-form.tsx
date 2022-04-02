import {RATINGS} from '../../const';
import React, {useState, ChangeEvent, FormEvent} from 'react';
import { UserReview } from '../../types/reviews';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { addReviewAction } from '../../store/api-actions/api-comments-actions';
import { validateRating, validateText } from '../../utils';
import CSS from 'csstype';

const errorTextStyle: CSS.Properties = {
  color: 'darkred',
};

function AddReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const {error} = useAppSelector(({ERRORS}) => ERRORS);

  const {id} = useParams();
  const [formData, setFormData] = useState<UserReview>(
    {
      comment: '',
      rating: 0,
    },
  );

  const [isTextValid, setIsTextValid] = useState(true);
  const [isRating, setIsRating] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (error) {
    setIsSubmitting(false);
  }

  return (
    <form action="#" className="add-review__form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const isRatingValid = validateRating(formData.rating);
        const isCommentValid = validateText(formData.comment);
        if (!isRatingValid) {
          setIsRating(false);
          setIsTextValid(true);
          return;
        }
        if (!isCommentValid) {
          setIsRating(true);
          setIsTextValid(false);
          return;
        }
        if (isRatingValid && isCommentValid) {
          setIsTextValid(true);
          setIsRating(true);
          setIsSubmitting(true);
          dispatch(addReviewAction({id: Number(id), review: formData}));
        }
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {
            RATINGS.map((rating) => (
              <React.Fragment  key={rating}>
                <input className="rating__input"
                  id={`star-${rating}`}
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={formData.rating === rating}
                  onChange={({target}: ChangeEvent<HTMLInputElement>) => setFormData({...formData, rating: Number(target.value)})}
                  disabled={isSubmitting}
                />
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </React.Fragment>
            ))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          value={formData.comment}
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, comment: target.value})}
          disabled={isSubmitting}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post
          </button>
        </div>
      </div>
      {!isRating && <p style={errorTextStyle}>Please, choose rating</p>}
      {!isTextValid && <p style={errorTextStyle}>Please, enter min 50 and max 400 characters</p>}
    </form>
  );
}

export default AddReviewForm;
