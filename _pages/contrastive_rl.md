---
layout: page
permalink: /contrastive_rl/
title: Contrastive Learning As a Reinforcement Learning Algorithm
description:
nav: false
nav_order: 1
---

<p><center><a href="https://ben-eysenbach.github.io/">Benjamin Eysenbach</a>, &emsp; <a href="https://tianjunz.github.io/">Tianjun Zhang</a>, &emsp; <a href="https://www.cs.cmu.edu/~rsalakhu/">Ruslan Salakhutdinov</a>, &emsp; <a href="https://people.eecs.berkeley.edu/~svlevine/">Sergey Levine</a></center></p>
<p><center><b><a href="https://arxiv.org/abs/2206.07568">Paper</a>, &emsp; <a href="https://github.com/google-research/google-research/tree/master/contrastive_rl">Code</a>, &emsp;  <a href="https://youtu.be/5_eGcprfw60">Video</a></b></center></p>

<p align="center">
<img src="../assets/contrastive_rl/method_figure.png" width="80%" />
</p>

*__tldr__*:
Representation learning is an integral part of successful reinforcement learning (RL) algorithms, and most prior methods treat representation learning as a perception problem. These representations are typically learned by perception-specific auxiliary losses (e.g., VAE) or data augmentations (e.g., random cropping). In this paper, we take an alternative tack, showing how representation learning can emerge from reinforcement learning. To do this, we build upon prior work and apply contrastive representation learning to action-labeled trajectories, in such a way that the (inner product of) learned representations exactly corresponds to a goal-conditioned value function. Across a range goal-conditioned RL tasks, we demonstrate that our method achieves higher success rates and is more sample efficient than prior methods, with especially large gains on image-based tasks.

Below, we show examples of contrastive RL (NCE) solving some of the image-based tasks in the paper. In each video, the left shows what the agent is observing, and the right shows the desired goal image.

{% include video.html path="../assets/contrastive_rl/sawyer_drawer_image.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="Opening the drawer" %}

{% include video.html path="../assets/contrastive_rl/sawyer_window_image.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="Sliding the window" %}

{% include video.html path="../assets/contrastive_rl/sawyer_bin_image.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="Bin picking. Note that we do not use any demonstrations, reward functions, or reward shaping." %}

{% include video.html path="../assets/contrastive_rl/sawyer_push_image_partial.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="Pushing an object. This task is challenging because of partial observability: the agent cannot see the object at the start of the episode." %}