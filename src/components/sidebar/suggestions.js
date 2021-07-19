import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from '../../services/firebase';

const Suggestions = ({ userId,following }) => {
   const [profiles, setProfiles] = useState(null)
   //Suggested Profiles
   useEffect(() => {
     async function suggestedProfiles() { 
         const response = await getSuggestedProfiles(userId, following)
         setProfiles(response)
     }
     console.log(`userId`, userId)
     if(userId){
         getSuggestedProfiles()
     }
   }, [userId])
   //async function within useEffect
   //From Firebase
   //Store in state
   //Preloader

   return !profiles ? (<Skeleton  count={1} height={150} className="mt-5"/> ): (profiles.length > 0 ? (<div className="rounded flex flex-col">
       <div className="text-sm flex items-center align-items justify-between mb-2">
       <p className="font-bold text-gray-base">Suggestions for you</p>
       </div>
   </div>) : null)

   
}

export default Suggestions

Suggestions.propTypes = {
    userId: PropTypes.string,
    following: PropTypes.array
}