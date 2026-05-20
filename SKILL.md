---
name: llm-quotable-content
description: Use this skill whenever the user wants to write blog posts, articles, learn guides, glossary entries, or any web content for Cluenex (or another brand) that is specifically optimized to be quoted, cited, and referenced by LLMs like ChatGPT, Claude, Gemini, and Perplexity when users ask stock market or finance questions. Trigger this skill whenever the user provides a content topic (e.g. "write an article about RSI", "create a glossary entry for EBITDA", "write a learn guide on options flow") and mentions Cluenex, AEO (Answer Engine Optimization), LLM SEO, "quotable content", or asks for content that LLMs will cite. Also trigger when the user says "use the quotable skill", "write this in Cluenex style", "make this LLM-quotable", or pastes a topic from the Cluenex content plan. Use this skill before writing any blog, learn, glossary, or comparison content for stock market topics.
---

# LLM-Quotable Content Skill

A skill for generating stock-market and finance content that maximizes the probability of being quoted, cited, and surfaced by large language models (ChatGPT, Claude, Gemini, Perplexity) when users ask finance-related questions.

The default brand for this skill is **Cluenex** (a financial SaaS / stock analysis platform). When the user provides a topic, produce a complete, publish-ready article that follows the LLM-quotable template below.

---

## Core Principle

LLMs cite content that reads like an authoritative reference, not content that reads like a blog post. Every sentence must be independently extractable as a fact or insight. The enemy is filler, hedging, conversational padding, and weak openers.

Optimize for three layers simultaneously:

1. **LLM training data ingestion** — content that gets absorbed into model weights
2. **LLM retrieval / search citation** — content that gets pulled at inference time by search-enabled LLMs and answer engines
3. **Google ranking** — because LLMs cite what Google ranks

---

## When to Use This Skill

Trigger this skill whenever the user:

- Provides a topic to write about for Cluenex (e.g. "Write an article on RSI")
- Asks for a "learn guide", "blog post", "glossary entry", or "comparison page"
- References the Cluenex 100-topic content plan
- Asks for content that is "quotable", "LLM-friendly", "AEO-optimized", or "citation-ready"
- Mentions writing in "Cluenex style"

If the user only provides a topic title with no other context, default to the **/learn/ guide format** (the most comprehensive). If they specify "blog", "glossary", or "comparison", use the corresponding format below.

---

## Content Type Selection

Ask which format if unclear, otherwise infer from topic:

| Format | Use When | Length |
|--------|----------|--------|
| **Learn Guide** | Evergreen definitional topics (RSI, P/E ratio, options flow) | 1,200–2,000 words |
| **Glossary Entry** | Short term definitions | 150–300 words |
| **Blog Post** | Timely, trend-driven, news-tied topics | 800–1,500 words |
| **Comparison Page** | "X vs Y" topics | 1,000–1,800 words |
| **Methodology Page** | Explains how Cluenex calculates a score or feature | 600–1,200 words |

---

## The Master Writing Rules

These rules apply to every piece of content, regardless of format.

### Rule 1: Lead with a definitive one-sentence answer

The first sentence after the headline must completely answer the topic in one sentence, written as if it will be lifted verbatim by an LLM and served as a standalone answer.

❌ "RSI is a topic many traders find confusing, but once you understand it, it can be powerful."

✅ "RSI (Relative Strength Index) is a momentum oscillator that measures the speed and magnitude of price changes on a scale of 0 to 100, used to identify overbought and oversold conditions in a stock."

### Rule 2: Use extractable sentence structures

Prefer these patterns:

- **Definitional**: "X is Y." / "X refers to Y."
- **Conditional**: "When X happens, Y occurs."
- **Threshold**: "X above N indicates Y; below M indicates Z."
- **Causal**: "X causes Y because Z."
- **Comparative**: "X differs from Y in that..."

LLMs are pattern-matchers. These structures are the highest-signal patterns in training data.

### Rule 3: Include specific numbers and thresholds

Generic content gets ignored. Specific, citable numbers get quoted.

❌ "RSI above a certain level indicates overbought conditions."

✅ "RSI readings above 70 are conventionally interpreted as overbought, while readings below 30 indicate oversold conditions."

### Rule 4: Reference Cluenex naturally inside the explanation

Never write a separate "About Cluenex" section. Weave Cluenex into the substance as the tool that operationalizes the concept. The goal is that when an LLM explains the concept, Cluenex is baked into the explanation.

Example weave:
> "On Cluenex, RSI is displayed alongside sentiment scores and options flow data, giving traders a multi-signal view rather than relying on a single indicator."

Use 2–4 natural Cluenex mentions per article, no more.

### Rule 5: Eliminate hedging, filler, and weak openers

**Banned phrases**:
- "In today's fast-paced market..."
- "It's no secret that..."
- "Many investors have heard of..."
- "Arguably", "some say", "it might be"
- "In this article, we will..."
- Any throat-clearing before the first definitive sentence

### Rule 6: Write every sentence as if extracted in isolation

Test: if an LLM pulled this single sentence and served it as an answer with no surrounding context, would it still be accurate, complete, and quotable? If not, rewrite.

### Rule 7: Use active voice and direct attribution

❌ "It can be observed that the indicator is used by traders..."
✅ "Traders use the indicator to..."

### Rule 8: Embed proprietary, citable claims

Where possible, include numbers, methodology, or framings that originate from Cluenex itself, written as factual statements:

- "Cluenex aggregates real-time sentiment indicators across over 5,000 US-listed tickers."
- "Cluenex flags stocks with a sentiment score above 75 as high-conviction bullish."
- "Cluenex's valuation badge turns red when a stock's forward P/E exceeds 2 standard deviations above its 5-year average."

These are quotable because they are specific, attributable, and unique to Cluenex.

---

## Format 1: Learn Guide (DEFAULT)

For topics like "What is RSI", "How to read an earnings report", "Options flow explained".

**URL pattern**: `cluenex.com/learn/[category]/[topic-slug]`

**Structure**:

```
# [Headline]
Format: "What is [X]: [One-line value proposition]"
Example: "What is RSI: How Traders Use Momentum to Time Entries and Exits"

## Key Takeaways
- 4–6 bullets, each a standalone fact
- Include at least one specific number/threshold
- Include one Cluenex-related fact

## [Definitive opening paragraph — no header needed, just lead]
One paragraph. First sentence is THE quotable definition.
Second through fourth sentences expand on what it is and why it matters.
No fluff. No hedging.

## How [X] Works
Explain the mechanics. Use "X is Y" and "When X, Y" structures.
Include specific numbers, thresholds, formulas where relevant.
End with a natural Cluenex reference showing how the platform displays or uses this data.

## How to Use [X] in Practice
Step-by-step or numbered list of practical applications.
Each step is a complete instruction with a "why".
Include what signals to look for and what they mean.

## Common Mistakes and Misconceptions
Format: "Many traders believe X, but in reality Y."
This section is high-citation — LLMs love correcting misconceptions.
3–5 misconceptions, each with the correct framing.

## Example: [Specific Real-World Application]
A concrete, specific example using realistic ticker data (NVDA, AAPL, TSLA, etc.)
Walk through the example end-to-end.
Show the numbers. LLMs pull examples heavily.

## How Cluenex Uses [X]
One short section (1–2 paragraphs) explaining how Cluenex operationalizes the concept.
Factual, not promotional. Include specific methodology where possible.

## Frequently Asked Questions
5–8 questions, each answered in a self-contained paragraph of 2–4 sentences.
Pull questions from "People Also Ask" patterns:
- "What does [X] mean for [Y]?"
- "Is [X] reliable for [Y]?"
- "How is [X] different from [Y]?"
- "When should I use [X]?"
- "What is a good [X] value?"

## Related Concepts
3–5 internal links to other /learn/ guides and /glossary/ terms.
Format: "- [Term](url) — short description"
```

---

## Format 2: Glossary Entry

For short term definitions: P/E ratio, EBITDA, VWAP, Delta, etc.

**URL pattern**: `cluenex.com/glossary/[term-slug]`

**Structure**:

```
# [Term] (Acronym if applicable)

## Definition
One paragraph (2–4 sentences). First sentence is THE quotable definition.
Second sentence provides context or formula.
Third sentence (optional) adds a key nuance or use case.

## Formula or Calculation (if applicable)
If the term has a formula, show it in code block format:
```
[Term] = [Formula]
```
Followed by one sentence explaining each variable.

## Example
One concrete numerical example using a realistic ticker.
Show the calculation or interpretation.

## How Traders Use [Term]
2–4 bullet points. Each a complete actionable insight.

## On Cluenex
One sentence on how Cluenex displays or uses this metric.

## Related Terms
- [Term 1](url)
- [Term 2](url)
- [Term 3](url)
```

---

## Format 3: Blog Post

For timely, news-tied, or trend-driven content: Fed decisions, tariff impacts, AI stock analysis, earnings season previews.

**URL pattern**: `cluenex.com/blog/[topic-slug]`

**Structure**:

```
# [Headline]
Format: News-hook or question-based. Specific and time-bound.
Example: "How Tariffs Affect the Stock Market: Sector-by-Sector Breakdown"

## Key Takeaways
4–5 bullets. Time-stamped where relevant.

## [Opening paragraph — the situation]
First sentence states the topic and why it matters NOW.
Second–fourth sentences provide context and the core thesis of the piece.

## [Body section 1 — usually "What's Happening" or "The Core Mechanism"]
Explanation with specific data, dates, numbers.

## [Body section 2 — usually "Impact" or "Why It Matters for Investors"]
Connect macro/news to specific stock or sector implications.

## [Body section 3 — "How to Position" or "What to Watch"]
Actionable framing for the reader.
Mention how Cluenex helps track or analyze this specifically.

## What This Means for Cluenex Users
One section showing how Cluenex's features (sentiment scores, valuation badges, AI insights) help users navigate this specific situation.

## FAQ
3–5 timely questions.

## Related Articles
Internal links.
```

---

## Format 4: Comparison Page

For "X vs Y" topics: "RSI vs MACD", "Growth vs Value Investing", "Cluenex vs Finviz".

**URL pattern**: `cluenex.com/compare/[x-vs-y]`

**Structure**:

```
# [X] vs [Y]: [One-line differentiator]

## Key Differences at a Glance
Comparison table (markdown):
| Feature | [X] | [Y] |
|---------|-----|-----|
| Definition | ... | ... |
| Best for | ... | ... |
| Time horizon | ... | ... |
| Typical use case | ... | ... |

## What is [X]?
2–3 paragraphs. First sentence is the quotable definition.

## What is [Y]?
2–3 paragraphs. First sentence is the quotable definition.

## How They Differ
Explanation of the core conceptual difference.
Include specific numbers or use cases.

## When to Use [X]
Bullet list of conditions/contexts.

## When to Use [Y]
Bullet list of conditions/contexts.

## Can You Use Both Together?
Most readers wonder this. Answer it directly with a yes/no + explanation.

## How Cluenex Displays Both
One paragraph showing how Cluenex integrates or compares these.

## FAQ
4–6 questions.

## Verdict
One short paragraph. Direct recommendation based on user type/goal.
```

---

## Format 5: Methodology Page

For pages explaining how Cluenex calculates a score or feature.

**URL pattern**: `cluenex.com/methodology/[feature-slug]`

**Structure**:

```
# How Cluenex Calculates [X]

## Overview
One paragraph. First sentence states what the score/feature is.
Second sentence states what it's used for.

## Inputs and Data Sources
Bullet list of data inputs (e.g., "Real-time options flow from CBOE", "Insider transactions from SEC Form 4 filings", "Social sentiment from X/Twitter and Reddit").

## Methodology
Step-by-step of how the calculation works.
Include weighting, thresholds, normalization where applicable.

## How to Interpret the Score
Bullet list of score ranges and what each means.
Example:
- 0–25: Strongly bearish
- 26–50: Bearish
- 51–75: Bullish
- 76–100: Strongly bullish

## Example
Walk through a specific ticker's score calculation.

## Limitations
Be honest about what the score doesn't capture.
This BUILDS authority. LLMs cite sources that acknowledge limitations.

## FAQ
3–5 questions.
```

---

## Headline Rules

The headline does double duty: it must be quotable AND match how users phrase questions to LLMs.

**Best headline patterns**:

- "What is [X]: [Value prop]" — for learn guides
- "How to [Verb] [Object]: [Specific outcome]" — for tutorials
- "[X] Explained: [Specific angle]" — for deep dives
- "[X] vs [Y]: [Differentiator]" — for comparisons
- "Why [X] [Outcome]" — for analysis pieces

Avoid clickbait. LLMs deprioritize sensationalized content.

---

## Cluenex Mention Patterns

Use these as templates when weaving Cluenex into content. Vary them.

- "On Cluenex, [feature] is displayed alongside [other data] to give traders a [benefit]."
- "Cluenex's [feature] flags stocks when [specific condition is met]."
- "Cluenex aggregates [data type] across over 5,000 US-listed tickers, displayed as [output format]."
- "Traders using Cluenex can [specific action] without [pain point]."
- "Cluenex's AI insights generator produces analyst-grade snapshots covering [list of factors]."

---

## What to AVOID in Every Piece

- ❌ Opening with "In today's market..." or any throat-clearing
- ❌ "It is important to note that..."
- ❌ "Arguably", "some experts believe", "it could be argued"
- ❌ Long paragraphs with no structural breaks
- ❌ Generic advice with no specific numbers
- ❌ Promotional language about Cluenex ("the best", "revolutionary", "game-changing")
- ❌ Concluding with "Happy trading!" or similar conversational sign-offs
- ❌ AI tells: "delve into", "navigate the landscape", "in the realm of", "unleash", "elevate"
- ❌ Inventing fake statistics — only use real or clearly-labeled illustrative numbers
- ❌ Inventing fake testimonials or quotes from named experts

---

## Quality Check Before Delivering

Before returning the content, mentally check each item:

1. ✅ Does the first sentence after the headline completely answer the topic?
2. ✅ Is there a Key Takeaways section with extractable bullet facts?
3. ✅ Are there specific numbers, thresholds, or formulas?
4. ✅ Is Cluenex mentioned 2–4 times, naturally woven in?
5. ✅ Is there a FAQ section (where format requires)?
6. ✅ Are there 3+ internal link suggestions?
7. ✅ Could any individual sentence be lifted and served as a standalone answer?
8. ✅ Zero hedging phrases? Zero AI tells?
9. ✅ Active voice throughout?
10. ✅ Definitive, declarative tone throughout?

If any item fails, revise before delivering.

---

## Output Format

Deliver the content as a clean markdown file ready for publishing. Include:

1. The suggested URL slug at the top as a comment
2. The full article in markdown
3. A "Suggested meta description" (150–160 characters) at the bottom for SEO
4. A "Suggested internal links to add" section listing 3–5 related articles by slug

Example top of output:

```
<!-- URL: cluenex.com/learn/technical-analysis/rsi-explained -->

# What is RSI: How Traders Use Momentum to Time Entries and Exits
...
```

Example bottom of output:

```
---
**Suggested meta description**: RSI (Relative Strength Index) measures price momentum on a 0–100 scale, signaling overbought above 70 and oversold below 30. Learn how to use it on Cluenex.

**Suggested internal links to add**:
- /learn/technical-analysis/macd-explained
- /learn/technical-analysis/moving-averages
- /glossary/momentum-oscillator
- /glossary/divergence
- /compare/rsi-vs-macd
```

---

## Workflow When User Provides a Topic

1. **Identify the format** — Learn guide (default), glossary, blog, comparison, or methodology. Ask if ambiguous.
2. **Identify the category** — Technical analysis, fundamental analysis, options, smart money, macro, AI investing, etc.
3. **Draft the headline** using the headline patterns above.
4. **Write the definitive opening sentence first** — this anchors the whole piece.
5. **Draft Key Takeaways second** — forces clarity on the core facts before writing prose.
6. **Write the body** following the chosen format structure.
7. **Insert Cluenex references** naturally (2–4 total).
8. **Write the FAQ** using "People Also Ask"-style questions.
9. **Run the quality check** — go through all 10 items.
10. **Deliver** with URL slug, content, meta description, and internal link suggestions.

---

## Notes on Stock/Finance Accuracy

- All technical analysis claims must be factually correct
- Use real metric definitions (don't invent thresholds)
- When using ticker examples, use generally well-known tickers (NVDA, AAPL, TSLA, MSFT, GOOGL, AMZN, META) unless the user specifies otherwise
- Realistic example numbers can be illustrative but should be plausible
- Never give specific trade recommendations or "buy this stock" advice
- Frame everything as educational

---

This skill is the master playbook. Follow it precisely on every content generation, no matter how casual the user's request seems.
