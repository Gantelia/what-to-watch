import {RATINGS, REQUEST_TIMEOUT} from '../../const';
import React, {useState, ChangeEvent, FormEvent} from 'react';
import { UserReview } from '../../types/reviews';
import { useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { addReviewAction } from '../../store/api-actions/api-comments-actions';
import { validateText } from '../../utils';
import CSS from 'csstype';

const errorTextStyle: CSS.Properties = {
  color: 'darkred',
};

function AddReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();

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

  return (
    <form action="#" className="add-review__form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (formData.rating < 1) {
          setIsRating(false);
          setIsTextValid(true);
          return;
        } else if (!validateText(formData.comment)) {
          setIsRating(true);
          setIsTextValid(false);
          return;
        }
        setIsTextValid(true);
        setIsRating(true);
        setIsSubmitting(true);
        dispatch(addReviewAction({id: Number(id), review: formData}));
        setTimeout(() => setIsSubmitting(false), REQUEST_TIMEOUT);
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
                  onChange={({target}: ChangeEvent<HTMLInputElement>) => setFormData({...formData, rating: +target.value})}
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
