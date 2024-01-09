import { EditableArea } from '@magnolia/react-editor';

export interface VideoViewProps {
    videoHeadline: object | null
    videoSubHeadline: object | null
    videoParagraph: object | null
    videoView: object | null
}

const VideoView = ({
    videoHeadline = null, videoSubHeadline = null, videoParagraph = null, videoView = null,
}: VideoViewProps): JSX.Element => {
    return (
        <div className="flex  flex-col justify-center items-center py-8 my-4 bg-white">
            <div className='px-10 pb-10'>
                <div className="">
                    {videoHeadline && <EditableArea content={videoHeadline} />}
                </div>
                <div className="">
                    {videoSubHeadline && <EditableArea content={videoSubHeadline} />}
                </div>
                <div className="">
                    {videoParagraph && <EditableArea content={videoParagraph} />}
                </div>
            </div>
            <div className="">
                {videoView && <EditableArea content={videoView} />}
            </div>
        </div>
    );
}

export {
    VideoView
}