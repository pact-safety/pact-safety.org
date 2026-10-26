// Open tools other people built. Every field was checked against the source
// repository on the date below; re-check before changing a license or owner.
export const VERIFIED_ON = "2026-10-26";

export type Category =
  | "Evaluation"
  | "Auditing & control"
  | "Red teaming"
  | "Interpretability"
  | "Learning & data";

export interface Resource {
  name: string;
  maintainer: string;
  category: Category;
  description: string;
  license: string; // SPDX id as declared in the repo, or "No license file"
  repo: string; // owner/name on github.com
  docs?: { href: string; label: string };
  cite?: string;
  note?: string;
}

export const categories: Category[] = [
  "Evaluation",
  "Auditing & control",
  "Red teaming",
  "Interpretability",
  "Learning & data",
];

export const resources: Resource[] = [
  { name: "Inspect", maintainer: "UK AI Security Institute", category: "Evaluation", description: "A framework for large language model evaluations, with datasets, solvers, scorers and agent tooling in one Python package.", license: "MIT", repo: "UKGovernmentBEIS/inspect_ai", docs: { href: "https://inspect.aisi.org.uk/", label: "Docs" } },
  { name: "Inspect Evals", maintainer: "UK AI Security Institute and contributors", category: "Evaluation", description: "A collection of ready-to-run evaluations written for Inspect.", license: "MIT", repo: "UKGovernmentBEIS/inspect_evals", docs: { href: "https://ukgovernmentbeis.github.io/inspect_evals/", label: "Docs" } },
  { name: "LM Evaluation Harness", maintainer: "EleutherAI", category: "Evaluation", description: "A framework for few-shot evaluation of language models across a large shared set of tasks.", license: "MIT", repo: "EleutherAI/lm-evaluation-harness" },
  { name: "HELM", maintainer: "Stanford Center for Research on Foundation Models", category: "Evaluation", description: "Holistic Evaluation of Language Models: a framework for reproducible, transparent evaluation of language and multimodal models.", license: "Apache-2.0", repo: "stanford-crfm/helm", docs: { href: "https://crfm.stanford.edu/helm", label: "Leaderboards" } },
  { name: "Petri", maintainer: "Meridian Labs", category: "Auditing & control", description: "An alignment auditing agent that probes a target model through multi-turn conversations with simulated users and tools. Built on Inspect.", cite: "Released by Anthropic in October 2025 and transferred to Meridian Labs in May 2026.", license: "MIT", repo: "meridianlabs-ai/inspect_petri", docs: { href: "https://meridianlabs-ai.github.io/inspect_petri/", label: "Docs" } },
  { name: "Bloom", maintainer: "Anthropic", category: "Auditing & control", description: "Generates an evaluation suite for one behavior you specify, then measures how often and how severely it appears across models.", cite: "Released December 2025.", license: "MIT", repo: "safety-research/bloom", docs: { href: "https://www.anthropic.com/research/bloom", label: "Announcement" } },
  { name: "ControlArena", maintainer: "UK AI Security Institute", category: "Auditing & control", description: "Settings, model organisms and protocols for running AI control experiments.", license: "MIT", repo: "UKGovernmentBEIS/control-arena", docs: { href: "https://control-arena.aisi.org.uk", label: "Docs" } },
  { name: "garak", maintainer: "NVIDIA", category: "Red teaming", description: "An LLM vulnerability scanner that probes models for failures such as prompt injection, jailbreaks and data leakage.", license: "Apache-2.0", repo: "NVIDIA/garak" },
  { name: "PyRIT", maintainer: "Microsoft", category: "Red teaming", description: "The Python Risk Identification Tool, an open framework for security teams to find risks in generative AI systems.", license: "MIT", repo: "microsoft/PyRIT", docs: { href: "https://microsoft.github.io/PyRIT/", label: "Docs" } },
  { name: "HarmBench", maintainer: "Center for AI Safety", category: "Red teaming", description: "A standardized evaluation framework for automated red teaming and robust refusal.", cite: "Mazeika et al., ICML 2024. arXiv:2402.04249", license: "MIT", note: "Last updated Aug 2024", repo: "centerforaisafety/HarmBench", docs: { href: "https://arxiv.org/abs/2402.04249", label: "Paper" } },
  { name: "TransformerLens", maintainer: "TransformerLens contributors", category: "Interpretability", description: "A library for mechanistic interpretability of GPT-style language models: load a model, cache activations, edit them.", license: "MIT", repo: "TransformerLensOrg/TransformerLens", docs: { href: "https://transformerlensorg.github.io/TransformerLens/", label: "Docs" } },
  { name: "nnsight", maintainer: "National Deep Inference Fabric (NDIF)", category: "Interpretability", description: "Interpret and manipulate the internals of deep learning models, locally or on remote NDIF hardware.", license: "MIT", repo: "ndif-team/nnsight", docs: { href: "https://nnsight.net/", label: "Docs" } },
  { name: "SAELens", maintainer: "Decode Research", category: "Interpretability", description: "Train and analyze sparse autoencoders on language models.", license: "MIT", repo: "decoderesearch/SAELens", docs: { href: "https://decoderesearch.github.io/SAELens/", label: "Docs" } },
  { name: "Neuronpedia", maintainer: "Johnny Lin and contributors", category: "Interpretability", description: "An open-source interpretability platform for browsing, searching and testing model features.", license: "Apache-2.0", repo: "hijohnnylin/neuronpedia", docs: { href: "https://neuronpedia.org", label: "neuronpedia.org" } },
  { name: "Sparsify", maintainer: "EleutherAI", category: "Interpretability", description: "Train sparse autoencoders and transcoders on transformer activations.", license: "MIT", repo: "EleutherAI/sparsify" },
  { name: "ARENA", maintainer: "ARENA", category: "Learning & data", description: "Exercises and course materials from the ARENA alignment research engineering program, covering transformers, interpretability, RL and evals.", license: "No license file", repo: "ARENA-education/ARENA_materials" },
  { name: "Sycophancy evaluation datasets", maintainer: "Meg Tong and co-authors", category: "Learning & data", description: "The datasets released with \"Towards Understanding Sycophancy in Language Models\".", cite: "Sharma et al., 2023. arXiv:2310.13548", license: "No license file", repo: "meg-tong/sycophancy-eval", docs: { href: "https://arxiv.org/abs/2310.13548", label: "Paper" } },
  { name: "HH-RLHF", maintainer: "Anthropic", category: "Learning & data", description: "Human preference data from \"Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback\".", cite: "Bai et al., 2022. arXiv:2204.05862", license: "MIT", note: "Archived, still downloadable", repo: "anthropics/hh-rlhf", docs: { href: "https://arxiv.org/abs/2204.05862", label: "Paper" } },
];
