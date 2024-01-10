'use client'

import { fetchTrustpilotData } from '@/services/trustpilot/trustpilot'
import { TrustpilotLogo } from '../atoms/TrustpilotLogo/TrustpilotLogo'
import { useEffect, useState } from 'react'



export const TrustpilotBlock = ({ link }: any) => {
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
    data&&<div className="flex flex-col justify-center items-center w-full">
      <div className="w-1/2" >
        <TrustpilotLogo />
      </div>
      {/* <div style={{position: 'relative', height: 0, width: '100%', padding: 0, padding-bottom: '18.326693227091635%'}}> */}
      <div className="flex flex-col">
    <svg fill="#ffffff" viewBox="-2.4 -2.4 28.80 28.80" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0">
      <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="0" fill="#6cda82" widths="10"></rect>
      </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier"><title>Trustpilot icon</title>
      <path d="M12,17.964l5.214-1.321l2.179,6.714L12,17.964z M24,9.286h-9.179L12,0.643L9.179,9.286 H0l7.429,5.357l-2.821,8.643l7.429-5.357l4.571-3.286L24,9.286L24,9.286L24,9.286L24,9.286z"></path>
      </g>
      </svg>
  
    </div>  
      <p>{`${ data.score } of 5`}</p>

      <p>
        <a href={link} target={ '_self'} rel={undefined}>
          {`Based on ${data.totalReviews} reviews`}
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
