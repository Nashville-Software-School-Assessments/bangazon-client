import { RatingsContainer } from './container'
import { Header } from './header'

export function Ratings({ average_rating, ratings = [], number_purchased, likes = [] }) {
  return (
    <div className="tile is-ancestor is-flex-wrap-wrap">
      <Header 
        averageRating={average_rating}
        ratingsLen={ratings.length}
        numberPurchased={number_purchased}
        likesLength={likes.length}
      />
      <RatingsContainer ratings={ratings} />
    </div>
  )
}
