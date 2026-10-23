# Content sources

## Research

- [RESETTLE, arXiv:2610.12185](https://arxiv.org/abs/2610.12185), version 1 (8 October 2026).
- [Full paper HTML](https://arxiv.org/html/2610.12185v1).
- [Official research repository](https://github.com/JIA-Lab-research/RESETTLE).

Authors, affiliations, equal-contribution marks, method descriptions, and experimental values were checked against the paper. The website does not assert conference acceptance or availability of unreleased benchmark integrations.

## Metrics

- **LIBERO-Plus:** overall success across 10,030 evaluation cases, weighted by perturbation-category case counts. Table 1.
- **Meta-World:** an unweighted average of four difficulty-group success rates; not overall episode success. 50 tasks and 500 episodes per configuration. Table 2.
- **RoboCasa Tabletop:** 24 GR1 tasks, 50 episodes per task, task-average success. Table 3.
- **Real world:** 20 trials per task and configuration, 320 total. Three tasks use binary success; Use Spoon uses normalized three-stage completion. The four-task average combines these metrics and uses unrounded values. Table 5 / Appendix E.
- **Latency:** measured QwenPI implementations; excludes nominal policy inference, polling, and physical execution. RESETTLE outputs one action, while VoLoAgent plans a trajectory. Recovery breakdown: 50.8 ms encoder, 32.0 ms retrieval, 0.2 ms servo, 0.6 ms residual.
- **Harness VLA:** LIBERO-Pro Swap, 100 matched trials per configuration; 42% without RESETTLE, 50% with RESETTLE, using the same planner and policy.
- All success/completion gains use **percentage points (pp)**, not relative percentages.

## Media

The demo is the author's original `RESETTLE_demo.mp4` from the official research repository. The poster is extracted from that video. Scientific figures are rendered from the authors' original figure PDFs without changing their content:

| Web asset | Paper figure source |
| --- | --- |
| `method.webp` | `method.pdf` |
| `action-disagreement.webp` | Official code repository `assets/action_disagreement.png` (paper Figure 1) |
| `recovery-analysis.webp` | `recovery_analysis-1_cropped.pdf` |
| `real-world-recovery.webp` | `real_world_infer_image_cropped.pdf` |
| `experiment-setup.webp` | `exp_setting.pdf` |

Qualitative real-world images show QwenPI + RESETTLE rollouts; they do not annotate individual recovery frames. In the simulation comparison figure, yellow is baseline, green is base-policy execution in the RESETTLE rollout, and red is recovery. Paired rollouts share task/layout/seed but need not remain time-aligned after intervention.

## Visual references

- [Zero-WAM](https://robbyant-research.github.io/Zero-WAM/): warm paper background, serif publication title, restrained typography, section navigation.
- [VisualPrompt-VLA website repository](https://github.com/VisualPrompt-VLA/visualprompt-vla.github.io): self-contained static academic project page and organized media assets.

Only the visual approach and organization are referenced; website implementation is original, and reference-site fonts, images, and source code are not copied.
