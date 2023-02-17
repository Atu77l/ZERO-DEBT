import React from 'react'
import ReviewCard from './ReviewCard'

const Review = () => {
  return (
    <div className="mt-5 flex flex-row bg-black">
    <div className="text-white m-10 text-center justify-center">
     <h4 className="text-2xl text-green-600">TRUSTED REVIEWS</h4>
     <h4 className="text-xl">what they say with our</h4>
     <h4 className="text-xl">services?</h4>
    </div>
    <div className="m-5">
    <ReviewCard/><br></br><ReviewCard/>
    </div>
    <div className="">
    <ReviewCard/><br></br>
    <ReviewCard/>
    </div>
    </div>
  )
}

export default Review