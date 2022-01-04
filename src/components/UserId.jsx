import React, { useContext} from "react";
import { LoggedInUser } from "../App";


export default function UserId() {
 
  const { currentUser} = useContext(LoggedInUser);
  

 
  return (
    <div>
      {LoggedInUser ?
        
        <>
          
        <div key={currentUser.id}>
        <p>Logged in as:</p>
        <p>{`${currentUser.firstName} ${currentUser.lastName}`}</p>
        <p>{currentUser.email}</p>
        </div>
        </>
        :"Not Found"
      }
      
    </div>
  );
}
