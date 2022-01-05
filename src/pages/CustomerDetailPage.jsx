import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import Detail from '../components/Detail'


export default function CustomerDetailPage() {
    const param = useParams()
  return (
      <>
      <div className="container-fluid p-0">
        <Banner textWhite>Customer Detail Page</Banner>
        <Detail index={param.id} />
        
      </div>
      </>
    );
}
