import React, { useEffect } from 'react'
import UserId from './UserId';
import { LoggedInUser } from '../App';
import { useContext } from 'react';
import { fetchData } from '../utils/helperFunctions';

export default function Footer() {

    const {setCurrentUser } = useContext(LoggedInUser);
    const currentUserUrl = "https://frebi.willandskill.eu/api/v1/me";
    useEffect(() => {
    fetchData(currentUserUrl,setCurrentUser)
    }, [])
    

    return (
      <>
        <footer className="d-flex justify-content-center bg-dark position-absolute bottom-0 pt-3 border">
          <UserId />
        </footer>
      </>
    );
}
