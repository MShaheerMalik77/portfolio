import { useState } from 'react'
import pipelineStages from '../data/pipelineStages.js'

export default function PipelineExplorer() {
  const [activeId, setActiveId] = useState(pipelineStages[0].id)
  const active = pipelineStages.find((s) => s.id === activeId)

  return (
    <div className="demo-panel">
      <p className="demo-label">Explore the pipeline by selecting any stage</p>

      <div className="pipeline" role="tablist" aria-label="SIGNiFy pipeline stages">
        {pipelineStages.map((stage, i) => (
          <div className="pipeline-stage-wrap" key={stage.id}>
            <button
              className={`pipeline-stage${stage.id === activeId ? ' active' : ''}`}
              onClick={() => setActiveId(stage.id)}
              role="tab"
              aria-selected={stage.id === activeId}
              type="button"
            >
              <span className="pipeline-stage-label">{stage.label}</span>
              <span className="pipeline-stage-title">{stage.title}</span>
            </button>
            {i < pipelineStages.length - 1 && <span className="pipeline-arrow">→</span>}
          </div>
        ))}
      </div>

      {active && (
        <div className="demo-output" aria-live="polite">
          <p className="pipeline-detail">{active.detail}</p>
        </div>
      )}
    </div>
  )
}
