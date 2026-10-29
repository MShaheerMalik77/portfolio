const projects = [
  {
    id: 'signify',
    name: 'SIGNiFy',
    subtitle: 'Pakistan Sign Language to 3D Animation',
    period: '2026 | Final Year Project',
    videoId: '4v_GoJkKQic?si=VTmcgM-gvavbXUzG',
    thumbnail: 'signify.png',
    videoVertical: true,
    summary:
      'A Dual Transformer pipeline which turns Pakistan Sign Language gloss tokens into real time 3D animations.',
    description:
      'SIGNiFy generates continuous PSL animation from text or speech in under a second, end to end. A 45MB Seq2Seq pose generator handles full-body motion while a lightweight 6MB FingerRefiner works only on the hands, and the two run together through a FastAPI server into a Flutter app with an embedded Unity avatar.',
    highlights: [
      'Designed a Dual Transformer pipeline. A Seq2Seq pose generator and a lightweight FingerRefiner produce anatomically accurate PSL animation from gloss tokens.',
      'Built a custom data generation pipeline (MediaPipe Holistic + Hands) by extracting hand poses frame by frame  to develop training data.',
      'Expanded 526 source signs into 8,526 training samples through sentence stitching, following PSL topic-comment structure.',
      'Engineered phrase-level inference with sign tokenization, adaptive joint blending, and momentum preservation for smooth continuous animation.',
      'Shipped a FastAPI inference server which serves a Flutter client and Unity avatar while achieving sub-second latency from input to output.',
    ],
    tech: ['Flutter', 'Unity (C#)', 'FastAPI', 'PyTorch', 'MediaPipe'],
    links: [],
  },
  {
    id: 'aissistant',
    name: 'AIssistant',
    subtitle: 'On-Device Task Parser',
    period: 'June 2025',
    videoId: '6-T4Bw1ouGc?si=tiiouy-hB9qojlfW',
    thumbnail: 'aisisstant.png',
    videoVertical: true,
    summary:
      'An Android app that turns spoken or typed requests into structured tasks, categorizing them by subject and recurrence. This is handled entirely offline, without a server.',
    description:
      "This project was initially a SOFTEC prototype. During my summer break, it became an offline NLP pipeline. Two fine-tuned transformer models run directly on-device via ONNX Runtime. They are a part of an Android app built on MVVM with Firebase Auth and live speech recognition.",
    highlights: [
      'Benchmarked BERT, TinyBERT, and DistilBERT for on-device NLP, and selected DistilBERT as the most suitable of the three considering size and performance as trade-offs, reaching 99.5% task-classification accuracy.',
      'Fine-tuned two transformer models on a synthetic dataset of 3,000 labeled samples across 7 task categories, using BIO tagging and sequence level evaluation with seqeval.',
      'Exported both models to ONNX and integrated onnxruntime-android with a custom Kotlin WordPiece tokenizer for fully offline inference.',
      'Built the Android app on MVVM with Firebase Authentication, SpeechRecognizer, and real-time database sync.',
    ],
    tech: ['Kotlin', 'PyTorch', 'ONNX', 'Hugging Face', 'Firebase'],
    links: [],
  },
]

export default projects
