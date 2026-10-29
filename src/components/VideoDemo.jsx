import { useState } from 'react'

export default function VideoDemo({ videoId, title, thumbnail, vertical = false }) {
  const [playing, setPlaying] = useState(false)
  if (!videoId) return null

  return (
    <div className={`video-demo${vertical ? ' vertical' : ''}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
          title={`${title} demo video`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="video-thumb"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title} demo video`}
        >
          <img
  src={
    thumbnail
      ? `${import.meta.env.BASE_URL}${thumbnail}`
      : `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
  }
  alt=""
/>
          <span className="video-play">▶ Watch demo</span>
        </button>
      )}
    </div>
  )
}