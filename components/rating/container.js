import { RatingCard } from './card'
import { RatingForm } from './form'

export function RatingsContainer({ ratings }) {
  return (
    <div className="tile is-parent is-12 is-vertical container">
        <RatingForm />
        {
          ratings?.map((rating) => <RatingCard rating={rating} /> )
        }
    </div>
  )
}
