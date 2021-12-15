import { Rating } from 'react-simple-star-rating'

export function RatingForm() {
  return (
    <div className="tile is-child ">
      <article className="media box">
        <figure className="media-left">
          <Rating />
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea className="textarea" placeholder="Add your review"></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button">Post comment</button>
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
