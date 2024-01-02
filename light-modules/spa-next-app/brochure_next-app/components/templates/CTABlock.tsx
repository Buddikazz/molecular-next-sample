
import { EditableArea } from '@magnolia/react-editor';

export interface CTABlockViewProps {
    ctaHeadline: object | null,
    ctaButton: object | null,
}

const CTABlockView = ({
    ctaHeadline = null,
    ctaButton = null,
}: CTABlockViewProps): JSX.Element => {
    const containerStyle = {
        backgroundColor: '#65509c',
        backgroundImage: 'url("https://www.staysure.co.uk/wp-content/webp-express/webp-images/themes/staysure-wdr/assets/new-theme/images/icon-banner.png.webp")', // Replace with your image URL
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'

    };
    return (
        <div className="custom-bg mt-10 text-white flex flex-col items-center justify-center" style={containerStyle}>
            <div className="p-20">  {ctaHeadline && <EditableArea content={ctaHeadline} />}</div>
            <div className='pb-10'>
                {ctaButton && <EditableArea content={ctaButton} />}
            </div>
        </div>
    );
}

export {
    CTABlockView
}
