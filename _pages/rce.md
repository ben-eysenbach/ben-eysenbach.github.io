---
layout: page
permalink: /rce/
title: "Replacing Rewards with Examples: Example-Based Policy Search via Recursive Classification"
description:
nav: false
nav_order: 1
---


<p><center>NeurIPS 2021, Oral (<1%)</center></p>
<p><center><a href="https://ben-eysenbach.github.io/">Benjamin Eysenbach</a>, &emsp; <a href="https://people.eecs.berkeley.edu/~svlevine/">Sergey Levine</a>, &emsp; <a href="https://www.cs.cmu.edu/~rsalakhu/">Ruslan Salakhutdinov</a></center></p>
<p><center><b><a href="https://arxiv.org/abs/2103.12656">Paper</a>, &emsp; <a href="https://github.com/google-research/google-research/tree/master/rce">Code</a>, &emsp; <a href="https://ai.googleblog.com/2021/03/recursive-classification-replacing.html">Blog post</a></b></center></p>

<p align="center">
<img src="../assets/rce/teaser.png" width="80%" />
</p>

*__tldr__:
In many scenarios, the user is unable to describe the task in words or numbers, but can readily provide examples of what the world would look like if the task were solved. Motivated by this observation, we derive a control algorithm that learns a policy for solving tasks, given only examples of successful outcome states. Our method, based on recursive classification, learns a value function directly from transitions and success examples. Our method outperforms prior methods at learning from success examples. The key difference from prior work is that our method does not learn an auxiliary reward function, and therefore requires fewer hyperparameters to tune and lines of code to debug. We show that our method satisfies a new data-driven Bellman equation, where examples take the place of the typical reward function term.*

### Videos of Learned Policies
Below, we visualize examples of the behavoir learned by our method. The green images shown on the left are examples of the success examples our method uses to learn these tasks. Note that these success examples are not expert trajectories, but rather examples of states where the task is solved (e.g., where the nail is hammered into the wall). We emphasize that our method does not use any reward function.

**TASK:** Hammer the nail into the board.
<!-- ![Success Examples. <br> Note that the nail has already been inserted in all examples.](images/hammer.gif width="100%") ![SQIL (best prior method)](videos/sqil_hammer.mp4 width="100%") ![RCE (our method)](videos/hammer.mp4 width="100%") -->


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="../assets/rce/hammer.gif" class="img-fluid rounded z-depth-1" caption="Success Examples. <br> Note that the nail has already been inserted in all examples." %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sqil_hammer.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="SQIL (best prior method)" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/hammer.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="RCE (our method)" %}
    </div>
</div>

**TASK:** Put the green object in the blue bin.
<!-- ![Success Examples](images/sawyer_bin_picking.gif width="100%") ![SQIL (best prior method)](videos/sqil_sawyer_bin_picking.mp4 width="100%") ![RCE (our method)](videos/sawyer_bin_picking.mp4 width="100%") -->

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="../assets/rce/sawyer_bin_picking.gif" class="img-fluid rounded z-depth-1" caption="Success Examples." %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sqil_sawyer_bin_picking.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="SQIL (best prior method)" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sawyer_bin_picking.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="RCE (our method)" %}
    </div>
</div>

**TASK:** Place the lid on the box.
<!-- ![Success Examples](images/sawyer_box_close.gif width="100%") ![SQIL (best prior method)](videos/sqil_sawyer_box_close.mp4 width="100%") ![RCE (our method)](videos/sawyer_box_close.mp4 width="100%") -->
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="../assets/rce/sawyer_box_close.gif" class="img-fluid rounded z-depth-1" caption="Success Examples" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sqil_sawyer_box_close.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="SQIL (best prior method)" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sawyer_box_close.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="RCE (our method)" %}
    </div>
</div>

**TASK:** Open the door.
<!-- ![Success Examples](images/door.gif width="100%") ![SQIL (best prior method)](videos/sqil_door.mp4 width="100%") ![RCE (our method)](videos/door.mp4 width="100%") -->
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="../assets/rce/door.gif" class="img-fluid rounded z-depth-1" caption="Success Examples" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sqil_door.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="SQIL (best prior method)" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/door.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="RCE (our method)" %}
    </div>
</div>

**TASK:** Open the drawer.
<!-- ![Success Examples](images/sawyer_drawer_open.gif width="100%") ![SQIL (best prior method)](videos/sqil_sawyer_drawer_open.mp4 width="100%") ![RCE (our method)](videos/sawyer_drawer_open.mp4 width="100%") -->
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="../assets/rce/sawyer_drawer_open.gif" class="img-fluid rounded z-depth-1" caption="Success Examples" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sqil_sawyer_drawer_open.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="SQIL (best prior method)" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sawyer_drawer_open.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="RCE (our method)" %}
    </div>
</div>

**TASK:** Lift the object. (The colored spheres are irrelevant.)
<!-- ![Success Examples](images/sawyer_lift.gif width="100%") ![SQIL (best prior method)](videos/sqil_sawyer_lift.mp4 width="100%") ![RCE (our method)](videos/sawyer_lift.mp4 width="100%") -->
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="../assets/rce/sawyer_lift.gif" class="img-fluid rounded z-depth-1" caption="Success Examples" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sqil_sawyer_lift.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="SQIL (best prior method)" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sawyerlift.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="RCE (our method)" %}
    </div>
</div>

**TASK:** Push the red object to the green sphere.
<!-- ![Success Examples](images/sawyer_push.gif width="100%") ![SQIL (best prior method)](videos/sqil_sawyer_push.mp4 width="100%") ![RCE (our method)](videos/sawyer_push.mp4 width="100%") -->
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="../assets/rce/sawyer_push.gif" class="img-fluid rounded z-depth-1" caption="Success Examples" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sqil_sawyer_push.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="SQIL (best prior method)" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sawyer_push.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="RCE (our method)" %}
    </div>
</div>


### Additional videos of behaviors learned by RCE

**TASK:** Close the drawer.
<!-- ![Success Examples](images/sawyer_drawer_close.gif width="100%") ![RCE (our method)](videos/sawyer_drawer_close.mp4 width="100%") -->
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="../assets/rce/sawyer_drawer_close.gif" class="img-fluid rounded z-depth-1" caption="Success Examples" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sawyer_drawer_close.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="RCE (our method)" %}
    </div>
</div>

**TASK:** Clear the object from the table. (image observations)
<!-- ![Success Examples](images/sawyer_clear_image.gif width="100%") ![RCE (our method)](videos/sawyer_clear_image.mp4 width="100%") -->
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="../assets/rce/sawyer_clear_image.gif" class="img-fluid rounded z-depth-1" caption="Success Examples" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sawyer_clear_image.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="SQIL (best prior method)" %}
    </div>
</div>

**TASK:** Reach for the red object. (image observations)
<!-- ![Success Examples](images/sawyer_reach_image.gif width="100%") ![RCE (our method)](videos/sawyer_reach_image.mp4 width="100%") -->

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="../assets/rce/sawyer_reach_image.gif" class="img-fluid rounded z-depth-1" caption="Success Examples" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/sawyer_reach_image.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="RCE (our method)" %}
    </div>
</div>

### Failure Cases

For the task below, the agent makes some headway on solving the task, but is unable to keep the object in the desired location.

**TASK:** Pick up the ball.
<!-- ![Success Examples](images/relocate.gif width="100%") ![RCE (our method)](videos/relocate.mp4 width="100%") -->
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="../assets/rce/relocate.gif" class="img-fluid rounded z-depth-1" caption="Success Examples" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include video.html path="../assets/rce/relocate.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true caption="RCE (our method)" %}
    </div>
</div>