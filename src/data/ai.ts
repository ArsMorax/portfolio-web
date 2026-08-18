/**
 * The AI section. This is the part of the site that is actually differentiated
 * — everything else on a portfolio is table stakes — so it gets real content
 * rather than a list of buzzwords.
 */

export interface FocusArea {
  index: string;
  title: string;
  body: string;
  keywords: string[];
}

export const focusAreas: FocusArea[] = [
  {
    index: "01",
    title: "Behaviour over function",
    body: "What holds my attention is not what a model outputs but how it got there — how it learns, where its reasoning stays coherent and where it quietly stops, and how it adapts through interaction with both data and people.",
    keywords: ["Reasoning traces", "Adaptation", "Failure modes"],
  },
  {
    index: "02",
    title: "Prompting & agentic workflows",
    body: "The same model behaves like a different system depending on how the task is framed and how much autonomy it is given. I spend a lot of time on framing, decomposition, and the point at which an agentic loop starts compounding its own mistakes.",
    keywords: ["Framing", "Decomposition", "Tool use"],
  },
  {
    index: "03",
    title: "Training & domain efficacy",
    body: "Working through training and fine-tuning to push models on narrow, difficult domains — and testing alternative approaches when the obvious one plateaus rather than accepting the ceiling.",
    keywords: ["Fine-tuning", "Narrow domains", "Alternatives"],
  },
  {
    index: "04",
    title: "Evaluation & reliability",
    body: "One impressive answer proves nothing. I care about consistency across repeated runs, and about metrics defined before the experiment rather than chosen afterwards to fit the result.",
    keywords: ["Metrics", "Consistency", "Repeatability"],
  },
];

/**
 * A real, first-hand comparison — the kind of concrete opinion that is worth
 * more on a portfolio than another paragraph of generic AI enthusiasm.
 */
export interface ModelNote {
  name: string;
  role: string;
  strength: string;
  observation: string;
  signals: string[];
}

export const modelComparison: {
  intro: string;
  subjects: [ModelNote, ModelNote];
  takeaway: string;
} = {
  intro:
    "Putting two systems on the same task surfaces things neither reveals alone. Claude Code and Codex are the pair I have spent the most time with, and they fail and succeed in genuinely different places.",
  subjects: [
    {
      name: "Claude Code",
      role: "Coding agent",
      strength: "Large, computationally heavy work",
      observation:
        "Its strengths really show when the task is big or computationally heavy — the kind of work that spans a lot of surface area at once and would otherwise need to be broken up by hand.",
      signals: ["Breadth of task", "Sustained context", "Heavy workloads"],
    },
    {
      name: "Codex",
      role: "Coding agent",
      strength: "Analytical reasoning toward an implementation",
      observation:
        "It can genuinely astonish me in how it analyses a problem and reasons its way toward a solution in implementation — the path it takes is often more interesting than the diff at the end.",
      signals: ["Problem analysis", "Reasoning path", "Implementation depth"],
    },
  ],
  takeaway:
    "The useful signal is not which one wins. It is where they diverge — because that boundary tells you what each is actually good for, and that is the thing worth knowing.",
};

export const aiStatement = [
  "I am driven by wanting to understand modern AI systems' cognitive process: how they learn, reason, adapt, and improve through interaction with both data and humans.",
  "In practice that means I am frequently running and evaluating open-source models such as Qwen and other LLMs — digging into model training, fine-tuning, prompting strategies, agentic workflows, evaluation metrics, and alternative approaches for pushing their efficacy on specific, challenging domains.",
  "I relish deconstructing the intricacies of how a model tackles a problem, analysing its strengths and weaknesses, and exploring techniques that improve its capability, consistency and reliability.",
];
