import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfile from "./suggested-profiles";

const Suggestions = ({ userId,following }) => {
   const [profiles, setProfiles] = useState(null)
   //Suggested Profiles
   useEffect(() => {
     async function suggestedProfiles() { 
         const response = await getSuggestedProfiles(userId, following)
         setProfiles(response)
     }
     
     if(userId){
        suggestedProfiles()
     }
     console.log('profiles',profiles);
   }, [userId])
   //async function within useEffect
   //From Firebase
   //Store in state
   //Preloader

   return !profiles ? (<Skeleton  count={1} height={150} className="mt-5"/> ): (profiles.length > 0 ? (<div className="rounded flex flex-col">
       <div className="text-sm flex items-center align-items justify-between mb-2">
       <p className="font-bold text-gray-base">Suggestions for you</p>
       </div>
       <div className="mt-4 grid gap-5">
           {profiles.map((profile) => 
               <SuggestedProfile 
               key={profile.docId}
               userDocId={profile.docId}
               username={profile.username}
               profileId={profile.userId}
               userId={userId}
               />
           )}
       </div>
   </div>) : null)

   
}

export default Suggestions

Suggestions.propTypes = {
    userId: PropTypes.string,
    following: PropTypes.array
}