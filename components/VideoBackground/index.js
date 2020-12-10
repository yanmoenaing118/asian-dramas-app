import { Video, VideoSource } from "./VideoBackgroundElements";

export default function VideoBackground(props) {
  return (
    <Video autoPlay muted loop>
      <VideoSource src="images/bg-video-3.mp4" type="video/mp4"></VideoSource>
    </Video>
  );
}
