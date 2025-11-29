interface videoPropsWithoutCaptions {
  src: string;
  poster: string;
  captionsSrc?: never;
  captionsLabel?: never;
  captionsLang?: never;
}

interface videoPropsWithCaptions {
  src: string;
  poster: string;
  captionsSrc: string;
  captionsLabel: string;
  captionsLang: string;
}

type videoProps = videoPropsWithoutCaptions | videoPropsWithCaptions;

const Video = ({
  src,
  poster,
  captionsSrc,
  captionsLabel,
  captionsLang,
}: videoProps) => {
  return (
    <video
      className="w-full max-w-md rounded-lg"
      controls
      preload="none"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      {captionsSrc && (
        <track
          src={captionsSrc}
          kind="subtitles"
          srcLang={captionsLang}
          label={captionsLabel}
        />
      )}
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
