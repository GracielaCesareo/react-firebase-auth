import React, {useEffect, useState} from 'react'
import { MutatingDots } from  'react-loader-spinner'

const Loading = () => {

  const [loading, setLoading] = useState(false)

  return (
    <MutatingDots 
      height="100"
      width="100"
      color="#ffffff"
      secondaryColor= '#ffffff'
      radius='12.5'
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  )
}

export default Loading