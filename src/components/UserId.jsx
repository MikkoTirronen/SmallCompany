import React, { useContext} from "react";
import { LoggedInUser } from "../App";


export default function UserId() {
 
  const { currentUser} = useContext(LoggedInUser);
  

 
  return (
    <div>
      {LoggedInUser ?
        
        <>
          
        <div key={currentUser.id}>
            <p>
              Logged in as: <br />
              {`${currentUser.firstName} ${currentUser.lastName}`}<br/>
              {currentUser.email}
            </p>
        </div>
        </>
        :"Not Found"
      }
      
    </div>
  );
}
