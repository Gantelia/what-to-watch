import {RATINGS} from '../../const';
import {useState, ChangeEvent, FormEvent} from 'react';
import { UserReview } from '../../types/types';

type AddReviewFormProps = {
    onFormSubmit: (formData:UserReview) => void;
}

function AddReviewForm({onFormSubmit}: AddReviewFormProps): JSX.Element {
  const [formData, setFormData] = useState<UserReview>(
    {
      comment: '',
      rating: null,
    },
  );


  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            RATINGS.map((rating) => (
              <>
                <input key={`rating-${rating}`} className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating}
                  checked={formData.rating === rating}
                  onChange={({target}: ChangeEvent<HTMLInputElement>) => setFormData({...formData, rating: +target.value})}
                />
                <label key={rating} className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </>
            ))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          value={formData.comment}
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, comment: target.value})}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit"
            onClick={(evt: FormEvent<HTMLButtonElement>) => {
              evt.preventDefault();
              onFormSubmit(formData);
            }}
          >Post
          </button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
