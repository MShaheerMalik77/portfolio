const pipelineStages = [
  {
    id: 'input',
    label: 'Input',
    title: 'Gloss tokens',
    detail:
      'Text or speech is tokenized into PSL gloss sequences. Gloss is the sign language equivalent of words, ready for phrase level inference.',
  },
  {
    id: 'pose',
    label: 'Stage 1',
    title: 'Seq2Seq pose generator',
    detail:
      'A 45MB Transformer predicts full body pose sequences (75 joints) from the gloss tokens, trained on 8,526 augmented samples with joint weighted and velocity based losses.',
  },
  {
    id: 'fingers',
    label: 'Stage 2',
    title: 'FingerRefiner',
    detail:
      'A lightweight 6MB model refines hand detail on top of the body pose, adding 42 hand joints reconstructed via a dual MediaPipe Holistic and Hands detector pipeline.',
  },
  {
    id: 'blend',
    label: 'Stage 3',
    title: 'Adaptive joint blending',
    detail:
      'Sign transitions are smoothed with adaptive joint blending and momentum preservation, with automatic re-inference to keep continuous phrases fluid instead of choppy.',
  },
  {
    id: 'serve',
    label: 'Stage 4',
    title: 'FastAPI inference server',
    detail:
      'The blended animation is served via FastAPI backend to the Flutter client. The process achieves this in 1 second end-to-end latency from text/speech input to the animation being played.',
  },
  {
    id: 'render',
    label: 'Output',
    title: 'Unity avatar',
    detail:
      'An embedded Unity avatar inside the Flutter app shows the final animation in real time.',
  },
]

export default pipelineStages
