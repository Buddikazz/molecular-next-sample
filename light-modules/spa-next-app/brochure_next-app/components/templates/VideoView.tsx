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
        <div className="flex  flex-col justify-center content-center mt-4 mb-4 pl-40 pr-40 2xl:pl-72 2xl:pr-72">
            <div className="">
                {videoHeadline && <EditableArea content={videoHeadline} />}
            </div>
            <div className="">
                {videoSubHeadline && <EditableArea content={videoSubHeadline} />}
            </div>
            <div className="">
                {videoParagraph && <EditableArea content={videoParagraph} />}
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