---
layout: page
permalink: /rpc/
title: Robust Predictable Control
description:
nav: false
nav_order: 1
---

<p><center>NeurIPS 2021, Spotlight (<3%)</center></p>
<p><center><a href="https://ben-eysenbach.github.io/">Benjamin Eysenbach</a>, &emsp; <a href="https://people.eecs.berkeley.edu/~svlevine/">Sergey Levine</a>, &emsp; <a href="https://www.cs.cmu.edu/~rsalakhu/">Ruslan Salakhutdinov</a></center></p>
<p><center><b><a href="https://arxiv.org/abs/2109.03214">Paper</a>, &emsp; <a href="https://github.com/google-research/google-research/tree/master/rpc">Code</a>,  &emsp; <a href="https://www.youtube.com/watch?v=6efUoVvhmpQ">Video</a></b></center></p>

*__Abstract__*:
Many of the challenges facing today's reinforcement learning (RL) algorithms, such as robustness, generalization, transfer, and computational efficiency, are symptoms of a an underlying problem: RL agents use too many bits of information from the observations. Prior work has convincingly argued why minimizing information is useful in the supervised learning setting. The RL setting is unique because (1) its sequential nature allows an agent to use past information to avoid looking at future observations and (2) the agent can optimize its behavior to prefer states where decision making requires few bits. We take advantage of these properties to propose a method for learning *simple* policies. This method brings together ideas from information bottlenecks, model-based RL, and bits-back coding into a simple and theoretically-justified algorithm. Our method jointly optimizes a latent-space model and policy to be *self-consistent*, such that the policy avoids states where the model is inaccurate. We demonstrate that our method achieves higher reward per bit than prior methods, and learns compressed policies that are (provably and empirically) more robust and generalize better to new tasks.


### Videos of Learned Policies

**Driving with Traffic**: The agent controls the green car and is rewarded for moving to the right. Agents trained with tighter bitrate constraints (bottom) are more conservative and pass fewer cars.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/two_way_100.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="100 bits"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/two_way_1.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="1 bit" %}
    </div>
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/two_way_0.1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="0.1 bits" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"></div>
</div>

<!-- ![100 bits](videos/two_way_100.0.mp4 width="100%")
![1 bit](videos/two_way_1.0.mp4 width="100%")
![0.1 bits](videos/two_way_0.1.mp4 width="100%") -->

**Active Cruise Control**: The agent controls the green car and is rewarded for moving to the right; this agent cannot pass other cars.
In the videos below, the bottom frames visualize when the agent is observing many bits of input; darker frames indicate that the agent is ignoring most of the observation. Observe that the policy trained with a larger bitrate constraint (1 bit on left vs 0.1 bits on right) observes fewer bits. Both policies use more bits when tailgating.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/acc_1.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="1 bit"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/acc_0.1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="0.1 bits" %}
    </div>
</div>

**Hopper-v2**

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Hopper-v2-10.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="10 bits"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Hopper-v2-3.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="3 bits" %}
    </div>
     <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Hopper-v2-1.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="1 bit" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Hopper-v2-0.3.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="0.3 bits"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Hopper-v2-0.1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="0.1 bits" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"></div>
</div>

**Walker2d-v2**

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Walker2d-v2-10.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="10 bits"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Walker2d-v2-3.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="3 bits" %}
    </div>
     <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Walker2d-v2-1.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="1 bit" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Walker2d-v2-0.3.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="0.3 bits"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Walker2d-v2-0.1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="0.1 bits" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"></div>
</div>

**HalfCheetah-v2**

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/HalfCheetah-v2-10.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="10 bits"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/HalfCheetah-v2-3.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="3 bits" %}
    </div>
     <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/HalfCheetah-v2-1.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="1 bit" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/HalfCheetah-v2-0.3.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="0.3 bits"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/HalfCheetah-v2-0.1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="0.1 bits" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"></div>
</div>

**Ant-v2**

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Ant-v2-10.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="10 bits"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Ant-v2-3.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="3 bits" %}
    </div>
     <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Ant-v2-1.0.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="1 bit" %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Ant-v2-0.3.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="0.3 bits"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rpc/Ant-v2-0.1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="0.1 bits" %}
    </div>
    <div class="col-sm mt-3 mt-md-0"></div>
</div>