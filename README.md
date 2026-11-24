# Funniest Autocorrect Fail

[![make.fun](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/Skyzo07/funniest-autocorrect-fail/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![Reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/Skyzo07/funniest-autocorrect-fail/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154)

Entry for [Funniest Autocorrect Fail](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154) — one line under 200 characters that reads as a hilarious autocorrect fail.

## The line

> I have a job intervention at 10am, wish me luck.

"interview" autocorrected to "intervention" — a job interview suddenly sounds like a very different kind of meeting.

## How it works

`main.ts` (Node 22, deterministic, no network/clock/randomness) writes the line exactly to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), and fails loudly if the line is not 1–199 characters or not a single line.

## Selection

24 original candidates were drafted and scored against the brief's five criteria in order (see `../candidates.md`). The top 3 went to a CrowLLM judge panel (`../panel.py`, `../panel-results.json`); the panel returned a partial verdict (1 of 3 judges — the other two hit gateway 429/500 errors after retries) picking this line with 144/150, ahead of the other finalists (118 and 123).
