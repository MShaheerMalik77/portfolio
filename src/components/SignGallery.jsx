import { useState } from 'react'
import signClips from '../data/signClips.js'

export default function SignGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [missing, setMissing] = useState({})
  const active = signClips[activeIndex]
  const activeMissing = missing[active.file]

  return (
    <div className="demo-panel">
      <p className="demo-label">Pick a sign</p>

      <div className="sign-picker">
        {signClips.map((clip, i) => (
          <button
            key={clip.word}
            className={`sign-btn${i === activeIndex ? ' active' : ''}`}
            onClick={() => setActiveIndex(i)}
            type="button"
          >
            {clip.word}
          </button>
        ))}
      </div>

      <div className="sign-media">
        {!activeMissing ? (
          <img
            src={`${import.meta.env.BASE_URL}signs/${active.file}`}
            alt={`PSL sign for "${active.word}"`}
            onError={() => setMissing((m) => ({ ...m, [active.file]: true }))}
          />
        ) : (
          <div className="sign-placeholder">
            <span>No clip yet for "{active.word}"</span>
            <span className="sign-placeholder-note">
              drop {active.file} into public/signs/
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
