---
title: "What is RSI: How Traders Use Momentum to Time Entries and Exits"
description: "RSI (Relative Strength Index) measures price momentum on a 0–100 scale. Learn how traders use RSI to identify overbought/oversold conditions and time entries and exits with high-probability signals."
excerpt: "RSI is a momentum oscillator that measures buying and selling pressure on a scale of 0 to 100. Traders use it to identify overbought and oversold conditions, time entries and exits, and detect divergences before trend reversals."
keywords:
  - RSI
  - Relative Strength Index
  - momentum
  - technical analysis
  - overbought
  - oversold
  - divergence
  - trading signals
category: "Technical Analysis"
breadcrumbs:
  - "Technical Analysis"
  - "technical-analysis"
author: "Cluenex"
date: 2024-05-19
dateModified: 2024-05-19
readingTime: 8
keyTakeaways:
  - "<strong>RSI (Relative Strength Index)</strong> is a momentum oscillator measuring price changes on a scale of <data value=\"0\">0</data> to <data value=\"100\">100</data>."
  - "RSI above <data value=\"70\">70</data> = overbought (potential sell); below <data value=\"30\">30</data> = oversold (potential buy). Context matters — not the number alone."
  - "Standard period is <strong>14 bars</strong>. Use 7–9 for day trading; 21–28 for weekly charts."
  - "<strong>Divergence</strong> — price hits a new extreme but RSI does not — is the highest-probability RSI signal and often precedes trend reversals."
  - "On Cluenex, RSI is displayed alongside real-time sentiment scores and options flow to confirm momentum shifts across 5,000+ US tickers."
layout: base.njk
permalink: /learn/technical-analysis/rsi-explained/
---

## Definition

<div class="def-box">
<p class="definition-text">
<dfn id="rsi-def"><strong>RSI (Relative Strength Index)</strong></dfn> is a momentum oscillator that measures the speed and magnitude of price changes on a scale of <data value="0">0</data> to <data value="100">100</data>, used to identify overbought and oversold conditions in a security.
</p>
<div class="def-source">Source: Wilder, J.W. (1978). <em>New Concepts in Technical Trading Systems.</em></div>
</div>

Developed by J. Welles Wilder in 1978, RSI quantifies buying and selling pressure by comparing the average magnitude of recent gains to recent losses. The indicator oscillates between 0 and 100, with readings above 70 conventionally interpreted as overbought and readings below 30 as oversold.

Unlike price-based indicators, RSI measures only *momentum* — the rate of change. This means RSI can reveal underlying weakness in a rising stock or hidden strength in a falling one before the price action makes the shift visible.

## How RSI Works
RSI calculates the ratio of average gains to average losses over a specified lookback period, typically **14 bars**. The formula:

```
RSI = 100 − [100 ÷ (1 + RS)]
RS  = Average Gain (14 periods) ÷ Average Loss (14 periods)
```

Period selection affects sensitivity vs. reliability:

- **7–9 periods** — faster, more signals, more false signals. Suited for day trading and scalping.
- **14 periods (default)** — standard for swing trading (days to weeks).
- **21–28 periods** — slower, fewer but higher-confidence setups. Suited for position trading and weekly charts.

RSI is mean-reverting: extreme readings above 80 or below 20 rarely persist. On Cluenex, RSI is calculated in real time across over 5,000 US-listed tickers, displayed alongside sentiment intensity and options flow.

## RSI Threshold Reference
Each RSI zone carries a distinct interpretation:

<div class="threshold-grid" role="list" aria-label="RSI threshold zones">
<div class="tc tc-1" role="listitem">
<div class="tc-range">0–20</div>
<div class="tc-label">Extreme Oversold<br><small>Reversal likely</small></div>
</div>
<div class="tc tc-2" role="listitem">
<div class="tc-range">20–30</div>
<div class="tc-label">Oversold<br><small>Buy signal zone</small></div>
</div>
<div class="tc tc-3" role="listitem">
<div class="tc-range">30–70</div>
<div class="tc-label">Neutral<br><small>Follow trend</small></div>
</div>
<div class="tc tc-4" role="listitem">
<div class="tc-range">70–80</div>
<div class="tc-label">Overbought<br><small>Sell signal zone</small></div>
</div>
<div class="tc tc-5" role="listitem">
<div class="tc-range">80–100</div>
<div class="tc-label">Extreme OB<br><small>Sharp reversal risk</small></div>
</div>
</div>

<div class="callout callout-teal">
<div class="callout-label">Crypto Adjustment</div>
<p class="callout-text">Crypto assets stay overbought/oversold longer than equities. Shift thresholds to <strong>80/20</strong> instead of 70/30 for BTC, ETH, and high-beta altcoins to reduce false signals.</p>
</div>

## How to Use RSI in Practice
### Entry and Exit Signals

<div class="tbl-wrap">
<table class="dtbl">
<thead>
<tr>
<th>Signal Type</th>
<th>RSI Trigger</th>
<th>Confirmation</th>
<th>Action</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Oversold Bounce</strong></td>
<td>RSI drops below <data value="30">30</data></td>
<td>RSI crosses back above 30</td>
<td>Enter long on close above 30</td>
</tr>
<tr>
<td><strong>Overbought Pullback</strong></td>
<td>RSI rises above <data value="70">70</data></td>
<td>RSI crosses back below 70</td>
<td>Enter short on close below 70</td>
</tr>
<tr>
<td><strong>Exit Long</strong></td>
<td>RSI exceeds <data value="80">80</data></td>
<td>Extreme overbought confirmed</td>
<td>Exit half or set trailing stop</td>
</tr>
<tr>
<td><strong>Exit Short</strong></td>
<td>RSI falls below <data value="20">20</data></td>
<td>Extreme oversold confirmed</td>
<td>Cover half or set buy stop</td>
</tr>
<tr>
<td><strong>Bullish Divergence</strong></td>
<td>Price new low; RSI does not</td>
<td>Price bounces above swing high</td>
<td>Enter long</td>
</tr>
<tr>
<td><strong>Bearish Divergence</strong></td>
<td>Price new high; RSI does not</td>
<td>Price breaks below swing low</td>
<td>Enter short</td>
</tr>
</tbody>
</table>
</div>

### Why Divergence Is the High-Probability Signal

Divergence is the most reliable RSI signal because it reveals a momentum shift before price confirms it.

**Bullish Divergence:** Price makes a new low, but RSI does not. Selling pressure is weakening even as price falls. Enter long when price bounces and closes above the swing high between the two lows.

**Bearish Divergence:** Price makes a new high, but RSI does not. Buying pressure is fading despite price reaching a new high. Enter short when price breaks below the swing low between the two highs.

## Common Mistakes
<div class="callout callout-red">
<div class="callout-label">✗ Mistake 1</div>
<p class="callout-text"><strong>"RSI above 70 means short immediately."</strong><br>
Stocks in strong uptrends remain above 70 for extended periods. RSI 70+ is a warning — tighten stops, take partial profits. Wait for bearish divergence or a close back below 70 before shorting.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">✗ Mistake 2</div>
<p class="callout-text"><strong>"RSI below 30 is always a buy."</strong><br>
Stocks in steep downtrends stay below 30 for weeks. Blindly buying at RSI 30 catches falling knives. Wait for bullish divergence or a confirmed close above 30 before entering long.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">✗ Mistake 3</div>
<p class="callout-text"><strong>"14-period default works on all timeframes."</strong><br>
A 14-period RSI on a 1-minute chart is too slow. Use 5–7 periods for sub-hourly timeframes; 21–28 for weekly/monthly charts.</p>
</div>

<div class="callout callout-red">
<div class="callout-label">✗ Mistake 4</div>
<p class="callout-text"><strong>"I should trade RSI in isolation."</strong><br>
RSI alone leads to whipsaws. Pair with volume, trend direction, support/resistance, or — on Cluenex — real-time sentiment and options flow.</p>
</div>

## Example: Bearish Divergence on NVDA
Bearish divergence signal on **NVDA** daily chart, November 2024:

<div class="trade-log">
<div class="tl-header">
<span class="tl-title">Trade Log — Bearish Divergence</span>
<span class="tl-ticker">NVDA · Daily · RSI(14)</span>
</div>
<table>
<thead>
<tr>
<th>Date</th>
<th>Price</th>
<th>RSI</th>
<th>Signal / Action</th>
<th>P&L</th>
</tr>
</thead>
<tbody>
<tr>
<td><time datetime="2024-11-08">Nov 8</time></td>
<td data-price="143.50">$143.50</td>
<td><span class="rsi-val" style="color:#f97316">65</span></td>
<td>Approaching overbought. Sentiment bullish (72).</td>
<td>—</td>
</tr>
<tr class="signal-row">
<td><time datetime="2024-11-12">Nov 12</time></td>
<td data-price="148.20"><strong>$148.20 ↑ new high</strong></td>
<td><span class="rsi-val" style="color:#f97316">76 ↓ lower</span></td>
<td>🔴 <strong>Bearish Divergence</strong> — price new high, RSI lower high. Signal confirmed.</td>
<td>—</td>
</tr>
<tr>
<td><time datetime="2024-11-13">Nov 13</time></td>
<td data-price="147.80">$147.80</td>
<td><span class="rsi-val" style="color:var(--text-2)">68</span></td>
<td>RSI drops below 70. <strong>Enter short.</strong> Stop: $149.00.</td>
<td>—</td>
</tr>
<tr>
<td><time datetime="2024-11-14">Nov 14</time></td>
<td data-price="145.30">$145.30</td>
<td><span class="rsi-val" style="color:var(--text-2)">52</span></td>
<td>Exit half position for profit.</td>
<td><span class="pos">+2.5%</span></td>
</tr>
<tr>
<td><time datetime="2024-11-15">Nov 15</time></td>
<td data-price="142.10">$142.10</td>
<td><span class="rsi-val" style="color:#34d399">38</span></td>
<td>Exit remaining position at $142.50.</td>
<td><span class="pos">+4.0% total</span></td>
</tr>
</tbody>
</table>
</div>

<div class="callout callout-teal">
<div class="callout-label">Key Insight</div>
<p class="callout-text">The divergence signal captured a <data value="6.10">$6.10</data> move ($148.20 → $142.10) with defined risk via stop at $149.00. A trader shorting at RSI 70 on Nov 12 without divergence confirmation would have entered a day too early and likely been stopped out before the move materialized.</p>
</div>

## How Cluenex Uses RSI
Cluenex displays RSI alongside real-time sentiment scores and options flow data. When RSI above 70 aligns with a sentiment drop and options flow shows heavy put-call ratios, the probability of a reversal increases significantly.

Cluenex's <abbr title="Artificial Intelligence">AI</abbr> snapshot generator also flags *momentum divergences* — situations where RSI and sentiment readings diverge, signaling a potential reversal before price action becomes obvious. This multi-signal approach reduces whipsaws and improves entry quality across 5,000+ US-listed tickers.

## Frequently Asked Questions
- **What's the difference between a 14-period RSI and a 7-period RSI?**
  A 14-period RSI is slower and less responsive, producing fewer signals and fewer false positives. A 7-period RSI reacts faster to recent price action, producing more signals but also more false signals. Use 14 for swing trading (days to weeks) and 7 or 9 for day trading or scalping.

- **Is RSI more effective on stocks or crypto?**
  RSI works on both, but crypto exhibits more extreme moves. Cryptoassets stay above RSI 70 and below RSI 30 longer than equities, so crypto traders often adjust thresholds to 80/20 instead of 70/30. Equities tend to respect the traditional 70/30 levels more consistently.

- **Can RSI predict a crash?**
  RSI cannot predict the magnitude or timing of crashes, but extreme RSI readings (above 85 or below 15) combined with bearish divergence often precede sharp reversals. During market crashes, RSI may hit 5–10, but trying to bottom-pick with only RSI is dangerous. Always use stop losses.

- **Should I use RSI on a 1-minute chart?**
  Yes, but use a 5 or 7-period RSI instead of 14. Shorter timeframes require shorter lookback windows. A 14-period RSI on a 1-minute chart is too slow and lags price moves, making entries late.

- **What's the success rate of RSI overbought/oversold signals?**
  Overbought and oversold signals alone have a roughly 50% win rate — little better than a coin flip. When combined with divergence, price action confirmation, or additional indicators (volume, sentiment, options flow), the win rate climbs to 65–75%.

- **Does RSI work on all stocks or only liquid ones?**
  RSI works best on liquid, heavily-traded stocks (AAPL, MSFT, NVDA, TSLA). Illiquid or low-volume stocks produce choppy RSI that whipsaws frequently. Always check average daily volume before relying on RSI signals.
