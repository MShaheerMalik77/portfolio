import { useMemo, useState } from 'react'
import { parseTask } from '../utils/parseTask.js'

const EXAMPLES = [
  'remind me to call mom every sunday at 6pm',
  'buy groceries tomorrow morning',
  'submit the assignment at 11:59pm',
  'standup meeting every day at 9am',
]

export default function AissistantDemo() {
  const [value, setValue] = useState(EXAMPLES[0])
  const result = useMemo(() => parseTask(value), [value])

  return (
    <div className="demo-panel">
      <p className="demo-label">Try it — type a task</p>

      <input
        className="demo-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="e.g. call the dentist every monday at 10am"
        aria-label="Task text to parse"
      />

      <div className="demo-examples">
        {EXAMPLES.map((ex) => (
          <button
            key={ex}
            className="demo-example-btn"
            onClick={() => setValue(ex)}
            type="button"
          >
            {ex}
          </button>
        ))}
      </div>

      {result && (
        <div className="demo-output" aria-live="polite">
          <div className="demo-output-row">
            <span className="demo-output-label">Task</span>
            <span className="demo-output-value">{result.title}</span>
          </div>
          <div className="demo-output-row">
            <span className="demo-output-label">Category</span>
            <span className="pill">{result.category}</span>
          </div>
          <div className="demo-output-row">
            <span className="demo-output-label">Recurrence</span>
            <span className="pill">{result.recurrence}</span>
          </div>
          <div className="demo-output-row">
            <span className="demo-output-label">Time</span>
            <span className="pill">{result.time ?? 'Not specified'}</span>
          </div>
          <div className="demo-output-row">
            <span className="demo-output-label">Confidence</span>
            <span className="demo-output-value">{Math.round(result.confidence * 100)}%</span>
          </div>
        </div>
      )}

      <p className="demo-disclaimer">
        This is a rule-based simulation running in your browser — it mimics
        the shape of the real output. The production app parses this on-device
        with a fine-tuned DistilBERT model exported to ONNX, not in a webpage.
      </p>
    </div>
  )
}
