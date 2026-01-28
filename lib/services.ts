export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  hero: string;
  outcome: string;
  signs: string[];
  focus: string[];
  howIWork: string[];
  expect: string[];
  fit: string[];
  notFit: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const services: Service[] = [
  {
    slug: "identity-shame",
    title: "Identity and Shame",
    shortDescription:
      "Gentle, affirming counselling for people feeling stuck in shame, self-criticism, or not good enough.",
    hero:
      "Loosen the grip of shame and make room for a steadier, kinder relationship with yourself.",
    outcome:
      "Together we explore what is underneath the shame and build practical ways to reconnect with your values and sense of belonging.",
    signs: [
      "Harsh inner critic or feeling like you never quite measure up",
      "Carrying a sense of not belonging in family, work, or community",
      "Hiding parts of yourself to avoid rejection or judgment",
      "Difficulty accepting care, praise, or intimacy",
      "Feeling split between who you are and who you think you should be"
    ],
    focus: [
      "Understanding how shame developed and what keeps it going",
      "Building self-compassion that feels grounded, not performative",
      "Creating language for your identity and lived experience",
      "Strengthening boundaries and choices that reflect your values",
      "Practising small, safe risks toward authenticity"
    ],
    howIWork: [
      "Relational and trauma-informed, with pacing that respects your nervous system",
      "Clear structure when helpful, with space for reflection and meaning-making",
      "Affirming of LGBTQ+ and neurodivergent identities",
      "Practical tools alongside deeper emotional work"
    ],
    expect: [
      "We start by understanding what brings you here and what matters most",
      "Early sessions focus on safety, trust, and steadying your self-talk",
      "Over time we work toward choices that feel more aligned and less fear-driven"
    ],
    fit: [
      "You want a warm, grounded approach rather than quick fixes",
      "You are open to exploring patterns with curiosity and care",
      "You want counselling that is affirming of identity and culture"
    ],
    notFit: [
      "You need urgent crisis support or intensive risk management",
      "You are seeking formal diagnosis or court reports"
    ],
    faq: [
      {
        question: "Do I have to talk about my past?",
        answer:
          "Only as much as feels useful. We can focus on what is happening now and explore history gently if it helps."
      },
      {
        question: "Is this only for LGBTQ+ clients?",
        answer:
          "No. I offer LGBTQ+ affirming counselling, and I work with adults from many backgrounds."
      }
    ]
  },
  {
    slug: "relationships",
    title: "Relationships",
    shortDescription:
      "Support for communication, attachment patterns, conflict, and rebuilding trust with yourself and others.",
    hero:
      "Find steadier ground in how you connect, communicate, and repair with the people who matter.",
    outcome:
      "We focus on patterns that show up in your relationships and the practical skills that help you respond differently.",
    signs: [
      "Recurring conflict or shutdown in close relationships",
      "Feeling anxious, avoidant, or stuck in people-pleasing",
      "Struggling to set boundaries without guilt",
      "Repair feels hard after hurt or misunderstanding",
      "Loneliness even when you are not alone"
    ],
    focus: [
      "Attachment patterns and how they shape your reactions",
      "Clearer communication and conflict repair",
      "Self-trust and boundaries that protect your energy",
      "Understanding what you need to feel safe and connected",
      "Practising new responses in a low-pressure way"
    ],
    howIWork: [
      "We slow down patterns to see what is really happening",
      "I offer practical tools alongside emotional insight",
      "We keep the work realistic and aligned with your values"
    ],
    expect: [
      "We clarify the situations that feel most difficult",
      "You will learn concrete ways to communicate and repair",
      "We track small changes and celebrate progress without overpromising"
    ],
    fit: [
      "You want to understand patterns, not just manage symptoms",
      "You are open to practising new skills between sessions",
      "You want a balanced blend of warmth and structure"
    ],
    notFit: [
      "You are looking for couples therapy (I currently work with individuals)",
      "You need crisis intervention or immediate safety planning"
    ],
    faq: [
      {
        question: "Do you offer couples counselling?",
        answer:
          "Not at this stage. I work with individuals on relationship patterns and skills."
      },
      {
        question: "Can we talk about dating or intimacy concerns?",
        answer:
          "Yes. We can explore dating, intimacy, and sexual wellbeing in a respectful, affirming way."
      }
    ]
  },
  {
    slug: "burnout",
    title: "Burnout and Work Stress",
    shortDescription:
      "Counselling for professionals navigating burnout, overwhelm, perfectionism, and work stress.",
    hero:
      "Move from depletion and overwhelm toward steadier energy, clearer boundaries, and sustainable work life.",
    outcome:
      "We map the pressures you are carrying and build a practical plan to protect your wellbeing without losing your edge.",
    signs: [
      "Persistent exhaustion, even after rest",
      "Irritability, cynicism, or feeling numb at work",
      "Perfectionism or people-pleasing driving your day",
      "Difficulty switching off or sleeping well",
      "A sense of dread about meetings, deadlines, or emails"
    ],
    focus: [
      "Clarifying the cost of current patterns",
      "Building realistic boundaries and recovery practices",
      "Working with identity tied to performance or achievement",
      "Navigating change, restructuring, or role transitions",
      "Creating a plan that fits your values and obligations"
    ],
    howIWork: [
      "I draw on corporate experience to understand work realities",
      "We blend practical strategies with deeper emotional insight",
      "Sessions balance clear action steps with compassionate pacing"
    ],
    expect: [
      "We identify the core stressors and patterns first",
      "You will leave with a small, achievable plan each session",
      "We review progress and adjust without judgment"
    ],
    fit: [
      "You want practical clarity and emotional support",
      "You feel stuck between responsibility and exhaustion",
      "You want to make changes without burning everything down"
    ],
    notFit: [
      "You need immediate medical support for acute burnout symptoms",
      "You require specialist workplace assessments or reports"
    ],
    faq: [
      {
        question: "Can you help if I am still working full time?",
        answer:
          "Yes. We can focus on realistic changes that work alongside your current workload."
      },
      {
        question: "Do you provide work-related reports?",
        answer:
          "No. I do not provide formal workplace or diagnostic reports."
      }
    ]
  }
];
