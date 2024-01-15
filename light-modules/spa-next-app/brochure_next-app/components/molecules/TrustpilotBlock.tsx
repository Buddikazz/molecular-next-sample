'use client'

import { fetchTrustpilotData } from '@/services/trustpilot/trustpilot';
import { useEffect, useState } from 'react'
import Trustpilot from '../atoms/Trustpilot/Trustpilot'



export const TrustpilotBlock = ({ link, type }: any) => {
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    Promise.resolve(fetchTrustpilotData('en')).then(
      (res) => {
        setData(res);
      }
    );
  }, []);


  useEffect(() => {
    if (!data) {
      console.log('[TrustpilotBlock]: No Trustpilot data found. Skip rendering.')
    }
  }, []);

  

  return (
    data&&<div className="flex flex-col justify-center items-start w-full">
      <div className="w-1/2" >
        <Trustpilot rating={data.score}/>
      </div>
      {/* <div style={{position: 'relative', height: 0, width: '100%', padding: 0, padding-bottom: '18.326693227091635%'}}> */}
      
      <p className='text-sm mt-1 underline'>{`TrustScore ${ data.score }`}</p>

      <p className='text-sm underline'>
        <a href={link} target={ '_self'} rel={undefined}>
          {`${data.totalReviews} reviews`}
        </a>

        {/* <Tooltip message={t('TRUSTPILOT_REVIEWS_DISCLAIMER')}>
          <button>
            <InfoIcon size="1em" color={theme.colors.textSecondary} />
          </button>
        </Tooltip> */}
      </p>
    </div>
  )
}



TrustpilotBlock.blockName = 'trustpilot'
