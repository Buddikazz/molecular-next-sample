
import { EditableArea } from '@magnolia/react-editor';
import { useEffect, useState } from 'react';

export interface CTABlockViewProps {
    ctaHeadline: object | null,
    ctaButton: object | null,
}

const CTABlockView = ({
    ctaHeadline = null,
    ctaButton = null,
}: CTABlockViewProps): JSX.Element => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const containerStyleOne = {
        backgroundColor: '#65509c',
        backgroundImage: 'url("https://www.staysure.co.uk/wp-content/webp-express/webp-images/themes/staysure-wdr/assets/new-theme/images/icon-banner.png.webp")', // Replace with your image URL
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

    };

    const containerStyleTwo = {
        backgroundColor: '#65509c',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',


    };

    const bgStyle: any = screenWidth >= 768 ? containerStyleOne : containerStyleTwo

    return (
        <div className="custom-bg mt-10 h-52 text-white flex flex-col items-center justify-center text-center " style={bgStyle}>
            <div className="p-8">  {ctaHeadline && <EditableArea className="text-lg" content={ctaHeadline} />}</div>
            <div className='pb-10'>
                {ctaButton && <EditableArea content={ctaButton} />}
            </div>
            
        </div>
    );
}

export {
    CTABlockView
}
