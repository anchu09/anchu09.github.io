export interface Project {
  slug: string
  title: string
  year: string
  badges?: string[]
  tagline: string
  description: string
  context: string
  highlights: string[]
  tags: string[]
  github?: string
  githubRepos?: { label: string; url: string }[]
  liveUrl?: string
  heroImage?: string
  metricsLabel?: string
  metrics?: { label: string; value: string }[]
  images?: { url: string; caption: string }[]
}

export const projects: Project[] = [
  // Row 1: warm · cool · warm
  {
    slug: 'astronomia',
    title: 'AstronomIA',
    year: '2026',
    badges: ['Generative AI', 'Computer Vision'],
    tagline: 'Agentic multimodal system for conversational astronomical image analysis',
    description:
      'Full-stack agentic system for interactive astronomical analysis. Resolves galaxy names and coordinates via SIMBAD/NED, fetches multi-band imagery (optical, IR, UV, X-ray, radio) from the Hubble Legacy Archive and MAST, runs an attention-based morphological analysis pipeline, and streams LLM-generated summaries to the client via SSE — all through a single conversational interface with an embedded interactive sky viewer.',
    context:
      'Personal project at the intersection of computer vision and astrophysics, built entirely from scratch. Architected as three independent services: a Galaxy API handling astrometry, multi-catalog retrieval, and image analysis; a FastAPI BFF with SSE streaming; and a React/TypeScript frontend with Aladin Lite embedded for real-time sky navigation. The system includes an observation planning module with real-time weather, moon phase, and altitude visibility data.',
    highlights: [
      'Multi-catalog image retrieval across 10+ surveys: DSS2, SDSS, PanSTARRS, 2MASS, WISE, GALEX, XMM, NVSS and more',
      'Morphological analysis pipeline: ellipticity, effective radius, Sérsic index, and isophotal contours via Astropy/PhotoUtils',
      'Agentic LLM layer orchestrating tool calls for name resolution, image fetch, analysis, and natural-language summary generation',
      'Observation planning module: altitude curves, visibility windows, moon phase, and weather conditions per location',
      'SSE streaming architecture for progressive response delivery from FastAPI to React frontend',
      'Aladin Lite sky viewer integration with coordinate locking and multi-band layer switching',
    ],
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'LangChain', 'Astropy', 'SSE', 'Aladin Lite', 'SIMBAD', 'HLA', 'MAST'],
    heroImage: '/astronomia-hero.png',
    images: [
      { url: '/astronomia-screenshot-m82.png', caption: 'Galaxy M-82 — multi-band retrieval with interactive Aladin sky viewer' },
      { url: '/astronomia-screenshot-morphology.png', caption: 'M-82 morphological analysis — HST/WFPC2 F555W with contour segmentation overlay' },
      { url: '/astronomia-screenshot-andromeda.png', caption: 'M-31 observation planning — visibility window, altitude, moon phase and sky quality from Barcelona' },
      { url: '/astronomia-screenshot-planificacion.png', caption: 'M-31 full planning card — altitude curve, sky trajectory, weather conditions and hourly cloud coverage' },
    ],
    metricsLabel: 'Highlights',
    metrics: [
      { label: 'Three-service architecture — Galaxy API, FastAPI BFF, and React frontend', value: '3 repos' },
      { label: 'Multi-band imagery from 10+ astronomical surveys (optical, IR, UV, X-ray, radio)', value: '10+ surveys' },
      { label: 'Agentic LLM orchestrating tool calls for retrieval, analysis, and natural-language summaries', value: 'AI agent' },
      { label: 'Observation planner with altitude curves, moon phase, weather, and visibility windows', value: 'Planning' },
    ],
    githubRepos: [
      { label: 'Galaxy API', url: 'https://github.com/anchu09/astronomia-galaxy-api' },
      { label: 'Backend (BFF)', url: 'https://github.com/anchu09/astronomia-ui-backend' },
      { label: 'Frontend', url: 'https://github.com/anchu09/astronomia-ui-frontend' },
    ],
  },
  {
    slug: 'rag-studio',
    title: 'RAG Studio',
    heroImage: '/rag-studio-hero.png',
    year: '2025',
    badges: ['Generative AI'],
    tagline: 'Production-grade document intelligence platform with RAG and multimodal ingestion',
    description:
      'End-to-end document intelligence platform built to production standards. Ingests PDF, DOCX, and HTML through a multimodal ETL pipeline with content extraction, chunking, and embedding; indexes into a vector store with hybrid semantic search; and exposes an LLM-powered chat interface with streaming responses. Designed with the same architectural constraints as enterprise systems: async task queues, LangSmith observability, schema-managed persistence, and Docker-based deployment.',
    context:
      'Personal project translating production patterns from AstraZeneca\'s enterprise GenAI systems — document ingestion, multimodal extraction, RAG orchestration, and platform observability — into an open, reusable platform. The goal is a deployable, well-instrumented baseline for document intelligence use cases, built to be open-sourced on completion.',
    highlights: [
      'Multimodal ETL pipeline: PDF, DOCX, HTML extraction with layout-aware chunking and metadata enrichment',
      'Hybrid retrieval combining dense vector search (embeddings) and BM25 sparse retrieval',
      'LangChain RAG orchestration with LangSmith tracing for latency, token usage, and retrieval quality monitoring',
      'Async ingestion queue via Celery + Redis decoupling document processing from the API layer',
      'Schema-managed PostgreSQL store with Alembic migrations for document metadata and conversation history',
      'React/TypeScript chat interface with SSE streaming, document upload, and retrieval source attribution',
    ],
    tags: ['Python', 'LangChain', 'LangSmith', 'RAG', 'Embeddings', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'Alembic', 'Docker', 'TypeScript', 'React'],
    metricsLabel: 'Highlights',
    metrics: [
      { label: 'Async ETL pipeline — ingests PDF, DOCX and HTML with layout-aware chunking via Celery + Redis', value: 'Multimodal ETL' },
      { label: 'Hybrid search combining dense vector embeddings and BM25 sparse retrieval', value: 'RAG' },
      { label: 'LLM-powered chatbot with real-time SSE streaming and retrieval source attribution', value: 'AI chatbot' },
      { label: 'LangSmith tracing across the full pipeline — latency, token usage, and retrieval quality', value: 'LLM tracing' },
    ],
  },
  {
    slug: 'multiplex-analysis',
    title: 'Multiplex Analysis Program',
    year: '2025',
    badges: ['Computer Vision'],
    tagline: 'Spatial biology pipeline for multiplex immunofluorescence analysis at single-cell resolution',
    description:
      'Modular computer vision pipeline for spatial biology, developed at CNIO for the analysis of cyclic immunofluorescence (cycIF) and H&E images of head and neck squamous cell carcinoma (HNSCC). The system covers the full analysis chain: nucleus detection with Cellpose, instance segmentation, per-cell intensity extraction across a 22-marker panel, tumor compartment phenotyping, and spatial statistics including Voronoi tessellation and signed-distance infiltration analysis. A separate deep learning module trains and evaluates a CNN-based attention-enhanced U-Net for automated tumor invasion front detection in H&E.',
    context:
      'Developed as Computer Vision Engineer at CNIO (2024–2025) in close collaboration with multidisciplinary oncology teams. The pipeline was applied to HNSCC biopsies for tumor microenvironment characterization and regulatory T cell (Treg) spatial analysis. Presented at the Spanish & Portuguese Advanced Optical Microscopy Conference 2024 and published as a research software tool for translational cancer research.',
    highlights: [
      'Instance segmentation with Cellpose + adaptive thresholding for 22-channel fluorescence images at single-cell resolution',
      'Per-cell phenotyping for CK⁺, CD3⁺, CD4⁺, FOXP3⁺ Treg, NGFR, Ki-67, PD-L1, and IFN-γ populations',
      'Tumor microenvironment quantification: immune infiltration, cell–cell proximity, and Voronoi-based spatial statistics',
      'Signed-distance analysis from Treg centroids to CK boundary for infiltration vs. exclusion classification',
      'Attention-enhanced U-Net (SE blocks) trained on 2,003 annotated H&E patches for invasion front segmentation',
      'Nextflow workflow orchestration for scalable HPC/GPU processing of large-scale microscopy datasets',
    ],
    tags: ['Python', 'PyTorch', 'OpenCV', 'Cellpose', 'U-Net', 'Nextflow', 'HPC', 'Spatial Analysis', 'Voronoi', 'scikit-image'],
    github: 'https://github.com/anchu09/MultiplexAnalysisProgram',
    heroImage: '/multiplex-hero.jpg',
    metricsLabel: 'Highlights',
    metrics: [
      { label: 'Dual pipeline — multiplex immunofluorescence analysis + H&E deep learning', value: 'cycIF + H&E' },
      { label: 'Single-cell phenotyping across a 22-marker panel at cell-level resolution', value: '22 markers' },
      { label: 'Attention-enhanced U-Net for automated tumor invasion front detection', value: 'AUC > 0.90' },
      { label: 'Applied to HNSCC biopsies — revealed NGFR⁺ tumor subniches and Treg spatial patterns', value: 'CNIO' },
    ],
    images: [
      { url: '/multiplex-hero.jpg', caption: 'Multiplex immunofluorescence — Pan-CK (magenta), DAPI (blue), CD3 T cells (green), CD4 (red), FOXP3 Tregs (yellow)' },
      { url: 'https://raw.githubusercontent.com/anchu09/MultiplexAnalysisProgram/main/docs/images/fig05_labeled_mask.png', caption: 'Instance segmentation — Cellpose outlines (left) and pseudo-colored cell mask (right)' },
      { url: 'https://raw.githubusercontent.com/anchu09/MultiplexAnalysisProgram/main/docs/images/fig28_interactive_validation.png', caption: 'Cell-level validation — IFN-γ⁺ overlays for CK⁺ NGFR⁺ and CK⁺ NGFR⁻ compartments (ROI 11)' },
      { url: 'https://raw.githubusercontent.com/anchu09/MultiplexAnalysisProgram/main/docs/images/fig29_treg_overlay.png', caption: 'Treg spatial infiltration — signed-distance vectors to CK boundary (green = infiltrating, red = excluded)' },
      { url: 'https://raw.githubusercontent.com/anchu09/MultiplexAnalysisProgram/main/docs/images/fig31_voronoi_results.png', caption: 'Voronoi tessellation — Tregs colored by distance to nearest tumor cell (dark red = close, yellow = far)' },
      { url: 'https://raw.githubusercontent.com/anchu09/MultiplexAnalysisProgram/main/docs/images/fig40_hne_three_panel_overlay.png', caption: 'Model output — H&E original · prediction · expert ground truth (orange = background, red = invasion front, green = stroma)' },
    ],
  },
  // Row 2: cool · warm · cool
  {
    slug: 'easton-royal',
    title: 'Easton Royal',
    year: '2024',
    badges: ['Virtual Reality'],
    tagline: 'First-person VR escape room for Oculus Quest set in Victorian England',
    description:
      'Full C# / Unity codebase for a standalone VR escape room published on SideQuest. The player wakes up amnesiac and imprisoned in a Victorian dungeon, and must solve a chain of interconnected puzzles across two hand-crafted environments — a stone dungeon and a Victorian library / study — to uncover the truth behind their captivity.',
    context:
      'Built end-to-end: environment design, C# scripted puzzle logic, save system, spatial audio, and VR interaction layer targeting the Oculus Quest standalone platform.',
    highlights: [
      'Two hand-crafted environments: stone dungeon and Victorian library/study',
      '15+ interlocking puzzles: fire chains, sliding blocks, bottle chemistry, corkboard, statue assembly',
      'Component-based C# architecture with Singleton managers and JSON save persistence',
      'Spatial VR interaction: physics-based object pick-up, tilt detection, trigger zones',
      'Published and playable on SideQuest (Oculus Quest)',
    ],
    tags: ['C#', 'Unity', 'VR', 'Oculus Quest', 'XR', '3D', 'Real-time Rendering'],
    github: 'https://github.com/anchu09/EastonRoyal',
    liveUrl: 'https://sidequestvr.com/app/41224/easton-royal',
    heroImage: '/easton-royal/library-overview.png',
    metricsLabel: 'Highlights',
    metrics: [
      { label: 'Built end-to-end in Unity — C# puzzle logic, save system, spatial audio, VR interactions', value: 'Unity + C#' },
      { label: 'Stone dungeon and Victorian library — fully hand-crafted environments', value: '2 worlds' },
      { label: 'Interconnected puzzle chain — fire, chemistry, corkboard, statues and more', value: '15+ puzzles' },
      { label: 'Published and playable on SideQuest for Oculus Quest', value: '500+ downloads' },
    ],
    images: [
      { url: '/easton-royal/dungeon.png',        caption: 'Stone dungeon — the opening environment' },
      { url: '/easton-royal/match-lantern.png',  caption: 'Lighting the lantern — match and fire puzzle' },
      { url: '/easton-royal/bookshelf.png',      caption: 'Circular library — book and shelf puzzles' },
      { url: '/easton-royal/globe-puzzle.png',   caption: 'Globe and vintage postcard — corkboard clue' },
      { url: '/easton-royal/bottles-puzzle.png', caption: 'Bottle chemistry puzzle and clue diagram' },
      { url: '/easton-royal/library-books.png',  caption: 'Victorian library — colored bookshelf detail' },
    ],
  },
  {
    slug: 'gait-analysis',
    title: 'Gait Analysis',
    year: '2024',
    badges: ['Data Science'],
    tagline: 'EMG and ROM signal analysis pipeline for robotic-assisted gait research in frail older adults',
    description:
      'Data analysis pipeline and co-authored pilot study examining how walking speed and body weight support (BWS) affect gait mechanics and muscle activation in older adults using the SWalker overground rehabilitation robot. A 3×3 controlled design (speeds: 0.058, 0.225, 0.4 m/s; BWS: 0%, 25%, 50%) was applied across 112 trials with 13 geriatric participants (mean age 85.4 ± 6.8 years). Signals from wireless sEMG sensors and integrated hip ROM potentiometers were processed end-to-end to extract spatiotemporal gait parameters and neuromuscular activation metrics. Statistical analysis confirmed significant effects of speed and BWS on cadence, hip kinematics, limb support phases, and muscle activation patterns.',
    context:
      'Developed as Data Scientist & Researcher at Werium Solutions (2022–2024). Study conducted at Albertia nursing home (Majadahonda, Madrid) under Research Ethics Committee approval (San Pablo-CEU, code 636/22/64; ClinicalTrials.gov NCT06025981). Co-authored paper in preparation for submission to IEEE Transactions on Neural Systems and Rehabilitation Engineering: Costa V., Anchuela D., et al., "Effects of Speed and Body Weight Support on Gait and Muscle Activity in Older Adults Using an Overground Robotic Platform: A Pilot Study."',
    highlights: [
      'End-to-end signal processing pipeline: ROM peak detection, sEMG envelope extraction, gait event segmentation, and coactivation analysis',
      'Even small speed and unloading changes produced measurable neuromechanical adaptations in frail 85+ year-old adults — a vastly underrepresented group in the literature',
      'Speed increased cadence and step length while promoting more phase-specific muscle activation — supporting progressive speed as a rehabilitation strategy',
      'Partial body weight support improved stance stability and hip extension without compromising safety — validating early-stage unloading protocols',
      'Coactivation between tibialis anterior and gastrocnemius decreased with speed, suggesting more efficient neuromuscular recruitment',
      'Overground robotic protocol (not treadmill) — closer to real-world rehabilitation conditions and more ecologically valid',
    ],
    tags: ['Python', 'SciPy', 'NumPy', 'Signal Processing', 'EMG', 'Biomechanics', 'RStudio', 'ANOVA', 'Matplotlib'],
    github: 'https://github.com/anchu09/gaitAnalysis',
    heroImage: '/gait-hero.png',
    metricsLabel: 'Highlights',
    metrics: [
      { label: 'Frail geriatric cohort (85+ yr) — underrepresented in rehab research', value: '13 patients' },
      { label: 'Dual biosignal pipeline — sEMG muscle activation + hip ROM kinematics', value: 'EMG + ROM' },
      { label: 'Full factorial design — 3 speeds × 3 body weight support levels', value: '9 conditions' },
      { label: 'Co-authored for IEEE Trans. Neural Systems & Rehab Engineering', value: 'Paper' },
    ],
    images: [
      { url: 'https://raw.githubusercontent.com/anchu09/gaitAnalysis/main/docs/images/fig_swalker_device.png', caption: 'Participant during a robotic-assisted gait trial on the SWalker platform' },
      { url: 'https://raw.githubusercontent.com/anchu09/gaitAnalysis/main/docs/images/result_gait_cycle_rom.png', caption: 'Left and right hip ROM across 112 trials — swing/stance phases and peak flexion/extension marked' },
      { url: 'https://raw.githubusercontent.com/anchu09/gaitAnalysis/main/docs/images/result_sls_dls_on_rom.png', caption: 'Single and double limb support phases overlaid on the ROM signal — blue: left SLS, green: right SLS, red: DLS' },
      { url: 'https://raw.githubusercontent.com/anchu09/gaitAnalysis/main/docs/images/result_emg_coactivation.png', caption: 'EMG envelopes (normalized 0–1) — purple area represents tibialis/gastrocnemius co-contraction (Coactivation Index)' },
      { url: 'https://raw.githubusercontent.com/anchu09/gaitAnalysis/main/docs/images/result_rom_boxplot.png', caption: 'Hip ROM by body weight support — at 50% unloading, ROM drops ~30% vs unsupported walking' },
      { url: 'https://raw.githubusercontent.com/anchu09/gaitAnalysis/main/docs/images/result_cadence.png', caption: 'Cadence increases progressively with speed — higher BWS slightly reduces cadence at low/medium speeds' },
    ],
  },
  {
    slug: 'heartbeat-classifier',
    title: 'Heartbeat Classifier',
    year: '2023',
    badges: ['Deep Learning'],
    tagline: 'Dilated 1D CNN for per-sample ECG arrhythmia classification on MIT-BIH',
    description:
      'End-to-end pipeline for automatic beat-by-beat cardiac arrhythmia classification from raw ECG signals, evaluated against the ANSI/AAMI EC57:1998 standard for ambulatory arrhythmia monitoring. A dilated 1D convolutional encoder-decoder (8.6M parameters) classifies every sample of a two-channel ECG recording into five standard arrhythmia classes (N, S, V, F, Q). The pipeline covers signal preprocessing, ANSI/AAMI annotation mapping, windowed segmentation, data augmentation (bandpass filtering, white noise, baseline wander, 50 Hz interference), balanced class weighting, and moving-average post-processing for smooth probability decoding. Resulted in an academic publication.',
    context:
      'Cardiovascular diseases are the leading cause of death worldwide. This project tackles automatic arrhythmia detection from ambulatory ECG recordings — training and evaluating on the MIT-BIH Arrhythmia Database (48 half-hour two-channel recordings at 360 Hz), the standard benchmark used across the cardiology AI literature.',
    highlights: [
      'Per-sample classification approach — classifies every individual ECG sample rather than isolated beats, enabling continuous real-time monitoring',
      'Competitive with published CNN, LSTM, and GRU baselines on MIT-BIH — the standard benchmark in the cardiac AI literature',
      'Reliably detects life-threatening ventricular ectopic beats with near-zero false alarm rate — the clinically critical class for sudden cardiac death risk',
      'Evaluated under the ANSI/AAMI EC57:1998 standard — the same protocol used to certify commercial ambulatory arrhythmia monitors',
      'Robust to real-world recording noise thanks to a 6-transform augmentation pipeline simulating electrode drift, power-line interference, and motion artifacts',
      'Published as academic paper: Detection and classification of heartbeats with neural networks (2023)',
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'SciPy', 'Signal Processing', 'CNN', 'ECG', 'MIT-BIH', 'WFDB'],
    github: 'https://github.com/anchu09/heartbeat-classifier',
    heroImage: '/heartbeat-hero.png',
    metricsLabel: 'Highlights',
    metrics: [
      { label: 'Dilated 1D CNN encoder-decoder trained on MIT-BIH', value: '8.6M params' },
      { label: 'Per-sample arrhythmia classification — N, S, V, F, Q', value: '5 classes' },
      { label: 'Competitive with state-of-the-art CNN, LSTM and GRU on same benchmark', value: '97.3% acc' },
      { label: 'Published academic paper (2023)', value: 'Paper' },
    ],
    images: [
      { url: '/heartbeat-classification-demo.png', caption: 'Beat-by-beat classification — each colored region marks a heartbeat classified by the model (N, S, V, F)' },
      { url: '/heartbeat-architecture.png', caption: 'Dilated 1D CNN encoder-decoder architecture — feature extraction, upsampling, and classification blocks' },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
