export type Status = "Live" | "In development" | "Exploring";

export type Product = {
  slug: string;
  name: string;
  status: Status;
  category: string;
  summary: string;
  description: string;
  href?: string;
};

export type LabEntry = { status: "Exploring" | "Prototype" | "Question"; code: string; title: string; description: string; detail: string };
export type ArticleBlock = { type: "heading" | "paragraph" | "quote" | "callout"; text: string };
export type Article = { slug: string; category: string; title: string; description: string; publishedAt: string; image: string; imageAlt: string; relatedProduct?: boolean; blocks: ArticleBlock[] };

export const products: Product[] = [
  { slug: "electricaldyev", name: "Electrical.Dyev", status: "Live", category: "Engineering", summary: "Transparent electrical calculation tools for preliminary engineering workflows.", description: "Practical calculators, supporting articles, and a browser-private project workspace designed for transparent, traceable workflows.", href: "https://electrical.dyev.in/" },
  { slug: "boq-workspace", name: "BOQ / Estimation Workspace", status: "In development", category: "Workflows", summary: "Structured quantity, scope, and estimation workflows for project teams.", description: "A product study into clearer project information, quantity, and scope workflows. It is not yet a released product." },
  { slug: "product-lab", name: "Product Lab", status: "Exploring", category: "Experiments", summary: "Prototypes, studies, and practical questions in progress.", description: "A place to examine early product ideas before they are ready to become standalone tools." },
];

export const labEntries: LabEntry[] = [
  { status: "Exploring", code: "LAB-01", title: "Clearer BOQ workflows", description: "A study of how project information can move from drawing to estimate with less ambiguity.", detail: "Structured scope and quantity" },
  { status: "Prototype", code: "LAB-02", title: "A quieter project dashboard", description: "A concept for making project signals visible without turning work into a wall of notifications.", detail: "Focused project signals" },
  { status: "Question", code: "LAB-03", title: "Where should a calculator stop?", description: "Exploring the boundary between a helpful preliminary tool and a decision that needs expert review.", detail: "Tool boundaries and accountability" },
];

export const articles: Article[] = [
  { slug: "why-assumptions-matter", category: "Engineering", title: "Why assumptions matter in early-stage calculations", description: "The point of an early estimate is to make uncertainty easier to discuss—not to hide it behind a precise-looking number.", publishedAt: "2026-09-16", image: "/images/dyev/article-assumptions.jpg", imageAlt: "Tracing paper and a pencil beside a small technical sketch", relatedProduct: true, blocks: [
    { type: "paragraph", text: "Early calculations are often asked to do more than they can. A project is still forming, inputs are incomplete, and important choices have not yet been made. Yet somebody still needs a useful starting point. The answer is not to pretend uncertainty has disappeared; it is to make the assumptions visible." },
    { type: "heading", text: "Precision is not the same as clarity" },
    { type: "paragraph", text: "A number with two decimal places can feel authoritative even when the inputs behind it are provisional. In an early conversation, that impression can be unhelpful. A clearer tool distinguishes what is known, what is assumed, and what should be confirmed next. It makes the estimate easier to challenge for the right reasons." },
    { type: "quote", text: "A good preliminary estimate does not hide uncertainty. It gives uncertainty a useful shape." },
    { type: "heading", text: "Show the working" },
    { type: "paragraph", text: "When a tool exposes the factors and intermediate steps behind an output, the calculation becomes a shared object for a project team to review. A reviewer can see where a diversity choice matters, where a missing input changes the result, and which question should be carried into the next discussion." },
    { type: "heading", text: "What clarity enables" },
    { type: "paragraph", text: "Clearer early calculations support better conversations: which load is driving the result, which assumption deserves another look, and what information would improve confidence. That is more useful than a false sense of certainty, because it gives a team a next step." },
  ] },
  { slug: "why-useful-software-wins", category: "Product thinking", title: "Why useful software wins", description: "Software earns its place when it makes a real task easier to understand, complete, or revisit.", publishedAt: "2026-09-16", image: "/images/dyev/article-useful-software.jpg", imageAlt: "A small cobalt-blue utility object arranged on a warm desk", blocks: [
    { type: "paragraph", text: "Useful software rarely announces itself with a grand promise. More often, it earns trust in a quiet moment: a confusing task becomes legible, a repeated step takes less effort, or a handoff becomes less likely to lose context. That small improvement is not trivial. It is where a product begins to belong to someone’s work." },
    { type: "heading", text: "Start with a job, not a category" },
    { type: "paragraph", text: "A product category tells you what competitors look like. A job tells you what a person is trying to get done. The distinction keeps a team from building a bundle of familiar features before it has understood the friction that prompted the work in the first place." },
    { type: "heading", text: "Make the next step obvious" },
    { type: "paragraph", text: "Clarity is not empty minimalism. It means showing the right amount of information at the moment it is needed, naming actions plainly, and leaving enough context for a user to understand an outcome. A focused interface can still carry detail when the detail has a job." },
    { type: "callout", text: "A useful tool reduces hesitation without hiding the conditions that matter." },
    { type: "heading", text: "Keep earning the shortcut" },
    { type: "paragraph", text: "A product does not become useful once and remain useful automatically. Work changes, edge cases appear, and a shortcut can turn into a blind spot. Small feedback loops, careful writing, and a willingness to remove clutter keep a useful thing useful as it grows." },
  ] },
  { slug: "designing-for-clarity-at-scale", category: "Building", title: "Designing products that stay clear as they grow", description: "Growth should add capability without making the core task harder to see.", publishedAt: "2026-09-16", image: "/images/dyev/article-clarity-scale.jpg", imageAlt: "Modular blue interface blocks growing from a simple ordered grid", blocks: [
    { type: "paragraph", text: "Many products become difficult not because any one feature is wrong, but because each reasonable addition arrives without a clear relationship to the last. Over time, the original task gets buried beneath options, panels, and exceptions. Designing for clarity means treating structure as part of the product, not as a finishing layer." },
    { type: "heading", text: "Preserve the centre of gravity" },
    { type: "paragraph", text: "Every product needs a small set of ideas that remain easy to find. They might be the primary workflow, a project record, or the explanation behind a calculation. New capability should strengthen that centre of gravity, not make users hunt for it again." },
    { type: "heading", text: "Use components as agreements" },
    { type: "paragraph", text: "A component system is not only a way to draw consistent cards. It is an agreement about hierarchy, spacing, actions, and states. When common patterns behave predictably, a user can spend attention on the work rather than on relearning the interface." },
    { type: "heading", text: "Let complexity appear when it is earned" },
    { type: "paragraph", text: "Progressive disclosure works when it does not conceal essential limits. The simple path should be simple, while the deeper path remains available, named clearly, and connected to the decision it affects. This makes a product friendlier to newcomers without patronising experienced users." },
  ] },
  { slug: "case-for-local-first-software", category: "Workflow design", title: "The case for local-first software", description: "For some work, keeping data in the browser is a practical design decision—not a slogan.", publishedAt: "2026-09-16", image: "/images/dyev/article-local-first.jpg", imageAlt: "A local device, document, and cobalt-blue connection shown without a cloud", relatedProduct: true, blocks: [
    { type: "paragraph", text: "A browser can be more than a thin doorway to someone else’s servers. For focused, personal, or early-stage work, it can be a capable place to calculate, organise, and retain a project without making an account or sending every detail away. That is the useful part of local-first design." },
    { type: "heading", text: "Privacy can make a workflow lighter" },
    { type: "paragraph", text: "An account requirement can be a barrier when a person simply wants to test an approach, sketch a project, or work with information that should stay on their device. Local storage changes the first experience: it lets the work begin before a user has to decide what to share." },
    { type: "heading", text: "Local-first still needs honest boundaries" },
    { type: "paragraph", text: "Browser-local data is not a promise of permanent backup, team synchronisation, or universal access. Good local-first software explains where information lives, offers clear export options where appropriate, and does not imply recovery guarantees it cannot provide." },
    { type: "quote", text: "The point is not to reject the cloud. It is to choose the lightest architecture that serves the work." },
    { type: "heading", text: "Choose the model deliberately" },
    { type: "paragraph", text: "Some products need collaboration and shared records. Others become more useful by staying close to the person using them. The right architecture follows the task, its risk, and its need for continuity—not a fashionable label." },
  ] },
  { slug: "what-makes-a-small-tool-useful", category: "Product thinking", title: "What makes a small digital tool genuinely useful", description: "A focused tool does not have to solve an entire workflow to make a meaningful difference.", publishedAt: "2026-09-16", image: "/images/dyev/article-small-tool.jpg", imageAlt: "A compact technical tool with a single cobalt-blue control", blocks: [
    { type: "paragraph", text: "Small tools are easy to underestimate because they do not look like platforms. But a good utility can save a person from repeated uncertainty, a fragile spreadsheet, or the interruption of switching between systems. Its value comes from a precise fit, not from the number of screens it contains." },
    { type: "heading", text: "Be specific about the moment" },
    { type: "paragraph", text: "A useful tool knows the moment it serves. It might help someone turn a known value into a needed one, compare two plausible options, or prepare a question for a colleague. The narrower that moment is described, the easier it is to decide what should be included and what should stay out." },
    { type: "heading", text: "Respect the user’s judgement" },
    { type: "paragraph", text: "Small tools work best when they support judgement instead of pretending to replace it. They can show a calculation, preserve a choice, or make assumptions visible. They should not turn a preliminary input into an overconfident answer merely because a button was pressed." },
    { type: "heading", text: "Finish the edges" },
    { type: "paragraph", text: "A modest feature can feel considered when its labels are clear, its error states are useful, and its result can be understood later. These edges are not decoration. They are the difference between a tool that demonstrates an idea and one people can return to." },
  ] },
  { slug: "why-transparency-matters-in-calculation-tools", category: "Engineering", title: "Why transparency matters in calculation tools", description: "Visible formulas, assumptions, and limits make a calculation more useful to review.", publishedAt: "2026-09-16", image: "/images/dyev/article-transparency.jpg", imageAlt: "Visible formula cards connected from inputs through working steps to an output", relatedProduct: true, blocks: [
    { type: "paragraph", text: "Calculation tools are often valued for speed, but speed alone can create a problem. A result that appears instantly can feel more certain than its inputs deserve. In technical work, the ability to inspect the route to an answer is frequently as important as the answer itself." },
    { type: "heading", text: "A result should have a trail" },
    { type: "paragraph", text: "A transparent tool makes the factors behind its output available: what was entered, which assumptions were applied, and where a value was derived. This does not require overwhelming a first-time user. It requires giving a reviewer a clear path when a result needs to be questioned." },
    { type: "heading", text: "Transparency improves the conversation" },
    { type: "paragraph", text: "When the working is visible, a technical conversation can focus on the part that matters. A team can ask whether an input is still valid, whether a constraint has changed, or whether the result is appropriate for the decision at hand. The tool becomes a better shared reference." },
    { type: "callout", text: "Transparent does not mean final. Preliminary tools still need their limitations stated plainly." },
    { type: "heading", text: "Trust is a product behaviour" },
    { type: "paragraph", text: "Trust grows when a product says what it does, shows how it got there, and avoids claims it cannot support. In calculation tools, that behaviour is not an optional layer of polish. It is part of the core usefulness of the tool." },
  ] },
];

export function getArticle(slug: string) { return articles.find((article) => article.slug === slug); }
export function readingTime(article: Article) { return Math.max(1, Math.ceil(article.blocks.map((block) => block.text).join(" ").trim().split(/\s+/).length / 200)); }
export function formatDate(date: string) { return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`)); }
