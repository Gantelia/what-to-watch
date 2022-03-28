import {RATINGS} from '../../const';
import React, {useState, ChangeEvent, FormEvent} from 'react';
import { UserReview } from '../../types/reviews';
import { useAppDispatch/*, useAppSelector*/ } from '../../hooks';
import { useParams } from 'react-router-dom';
import { addReviewAction } from '../../store/api-actions/api-comments-actions';
// import { validateText } from '../../utils';
/*eslint-disable*/

function AddReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const {id} = useParams();

  const [formData, setFormData] = useState<UserReview>(
    {
      comment: '',
      rating: 0,
    },
  );
  // const { error } = useAppSelector((state) => state);

  return (
    <form action="#" className="add-review__form"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        // if (!validateText(formData.comment)) {
        //   return;
        // }
        dispatch(addReviewAction({id: Number(id), review: formData}));
        console.log('hey');
        
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
                required
                checked={formData.rating === rating}
                onChange={({target}: ChangeEvent<HTMLInputElement>) => setFormData({...formData, rating: +target.value})}
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
          minLength={50}
          maxLength={400}
          required
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, comment: target.value})}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post
          </button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
