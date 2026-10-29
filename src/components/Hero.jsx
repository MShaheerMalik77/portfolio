function JointGraphic() {

  const joints = [
    [64, 96], // wrist
    [50, 66], [40, 40], [33, 20], // thumb
    [58, 50], [56, 24], [55, 6], // index
    [66, 48], [66, 20], [66, 2], // middle
    [74, 50], [76, 26], [77, 10], // ring
    [82, 56], [88, 36], [92, 22], // pinky
  ]
  const bones = [
    [0, 1], [1, 2], [2, 3],
    [0, 4], [4, 5], [5, 6],
    [0, 7], [7, 8], [8, 9],
    [0, 10], [10, 11], [11, 12],
    [0, 13], [13, 14], [14, 15],
  ]

  return (
    <svg
      className="hero-graphic"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Hand joint-tracking illustration"
    >
      <g className="hand-wave">
      <g stroke="var(--surface-border)" strokeWidth="1.5">
        {bones.map(([a, b], i) => (
          <line
            key={i}
            x1={joints[a][0]}
            y1={joints[a][1]}
            x2={joints[b][0]}
            y2={joints[b][1]}
          />
        ))}
      </g>
      <g fill="var(--accent)">
        {joints.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 0 ? 3.5 : 2.4} className="joint-dot">
            <animate
              attributeName="opacity"
              values="0.55;1;0.55"
              dur="3.2s"
              begin={`${(i % 5) * 0.25}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">FAST NUCES Lahore '26- BS(Computer Science)</p>
          <h1>Welcome to my Work</h1>
          <p className="hero-sub">
            I build machine learning systems end to end, from model
            training to the mobile applications that utilize them. My latest project is {' '}
            <a href="#signify">SIGNiFy</a>, a real-time Pakistan Sign Language
            animation pipeline, which is my final year project.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#work">
              Check out the work
            </a>
            <a className="btn" href="https://github.com/mshaheermalik77" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <JointGraphic />
      </div>
    </section>
  )
}
