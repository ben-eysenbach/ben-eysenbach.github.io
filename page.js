var data = {
    "research": [
    {
      img: 'images/contrastive_rl.png',
      title: 'Contrastive Learning as Goal-Conditioned Reinforcement Learning',
      authors: 'Benjamin Eysenbach, Tianjun Zhang, Sergey Levine, Ruslan Salakhutdinov',
      text: 'We show how contrastive learning can be viewed as a complete goal-conditioned RL algorithm. It turns out that existing contrastive learning algorithms, when applied to appropriate inputs, are already competitive with prior goal-conditioned RL methods. Intriguingly, they can solve high-dimensional tasks without the need for auxiliary representation learning, a requirement of many prior RL methods. In submission. [<a href="https://arxiv.org/pdf/2206.07568.pdf">paper</a>, <a href="https://ben-eysenbach.github.io/contrastive_rl">project website</a>, <a href="https://github.com/google-research/google-research/tree/master/contrastive_rl">code</a>]'
    },
    {
      img: 'images/mnm_lower_bound.gif',
      title: 'Mismatched No More: Joint Model-Policy Optimization for Model-Based RL',
      authors: 'Benjamin Eysenbach*, Alexander Khazatsky*, Sergey Levine, Ruslan Salakhutdinov',
      text: 'MnM is a model-based RL algorithm that jointly trains the model and the policy, such that updates to either component increase a lower bound on expected return. The practical algorithm is conceptually similar to a GAN: a classifier distinguishes between real and fake transitions, the model is updated to produce transitions that look realistic, and the policy is updated to avoid states where the model predictions are unrealistic. In submission. [<a href="https://arxiv.org/abs/2110.02758">paper</a>, <a href="https://github.com/ben-eysenbach/mnm/blob/main/experiments.ipynb">code</a>]'
    },
    {
      img: 'images/info_geometry.gif',
      title: 'The Information Geometry of Unsupervised Reinforcement Learning',
      authors: 'Benjamin Eysenbach, Ruslan Salakhutdinov, Sergey Levine',
      text: 'Skill learning algorithms based on mutual information, such as DIAYN are often useful, but are they optimal? We show that these methods do not learn skills that are optimal for every possible reward function. Even if you tried to learn a very large number of skills, you would start getting repeats of old skills rather than learning some of these reward-maximizing behaviors. However, the distribution over skills provides an optimal initialization adapting to unknown reward functions using an idealized adaptation procedure, under some assumptions. ICLR 2022 (oral, <2%). [<a href="https://arxiv.org/abs/2110.02719">paper</a>, <a href="https://github.com/ben-eysenbach/info_geometry/blob/main/experiments.ipynb">code</a>]'
    },
    {
      img: 'images/rce.gif',
      title: 'Replacing Rewards with Examples: Example-Based Policy Search via Recursive Classification',
      authors: 'Benjamin Eysenbach, Sergey Levine, Ruslan Salakhutdinov',
      text: 'We teach agents to perform tasks by providing examples of success, rather than reward functions. NeurIPS 2021 (oral, <1%). [<a href="https://arxiv.org/abs/2103.12656">paper</a>, <a href="https://ben-eysenbach.github.io/rce">website</a>, <a href="https://github.com/google-research/google-research/tree/master/rce">code</a>, <a href="https://ai.googleblog.com/2021/03/recursive-classification-replacing.html">blog post</a>]'
    },
    {
      img: 'images/rpc_teaser.gif',
      title: 'Robust Predictable Control',
      authors: 'Benjamin Eysenbach, Ruslan Salakhutdinov, Sergey Levine',
      text: 'By making agents pay for observing bits of information, we learn policies that are more robust and generalize more broadly. Intriguingly, these agents automatically acquire an internal model of the world, and change their actions to be self-consistent with this model. NeurIPS 2021 (spotlight, <3%). [<a href="https://arxiv.org/abs/2109.03214">paper</a>, <a href="https://ben-eysenbach.github.io/rpc">website</a>, <a href="https://github.com/google-research/google-research/tree/master/rpc">code</a>]'
    },
    {
      img: 'images/maxent_robust.gif',
      title: 'Maximum Entropy RL (Provably) Solves Some Robust RL Problems',
      authors: 'Benjamin Eysenbach, Sergey Levine',
      text: 'MaxEnt RL is not necessarily better than purpose-designed robust RL methods, but it is very simple and has appealing formal robustness guarantees. ICLR 2022. [<a href="https://arxiv.org/abs/2103.06257">paper</a>, <a href="https://bair.berkeley.edu/blog/2021/03/10/maxent-robust-rl/">blog post</a>]'
    },
    {
      img: 'images/c_learning_sawyer.gif',
      title: 'C-Learning: Learning to Achieve Goals via Recursive Classification',
      authors: 'Benjamin Eysenbach, Ruslan Salakhutdinov, Sergey Levine',
      text: 'C-learning is a state-of-the-art algorithm for goal-conditioned RL. The key idea is to view RL as a problem of predicting the future. Intriguing, hindsight relabeling emerges automatically, and our theory suggests how to choose a key hyperparameter. ICLR 2021. [<a href="http://arxiv.org/abs/2011.08909">paper</a>, <a href="https://ben-eysenbach.github.io/c_learning">website</a>, <a href="https://github.com/google-research/google-research/tree/master/c_learning">code</a>, <a href="https://slideslive.com/38941367/clearning-learning-to-achieve-goals-via-recursive-classification?ref=account-folder-62083-folders">talk</a>]'
    },
    // {
    //   img: 'images/darc.gif',
    //   title: 'Off-Dynamics Reinforcement Learning: Training for Transfer with Domain Classifiers',
    //   authors: 'Benjamin Eysenbach*, Swapnil Asawa*, Shreyas Chaudhari*, Sergey Levine, Ruslan Salakhutdinov',
    //   text: 'If the training and testing environments have different dynamics, compensate for that difference by modifying the reward function using a learned classifier. ICLR 2021, ICML BIG Workshop (oral), NeurIPS Real World RL Workshop (spotlight). [<a href="https://arxiv.org/abs/2006.13916">paper</a>, <a href="https://github.com/google-research/google-research/tree/master/darc">code</a>, <a href="https://blog.ml.cmu.edu/2020/07/31/maintaining-the-illusion-of-reality-transfer-in-rl-by-keeping-agents-in-the-darc/">blog</a>, <a href="https://slideslive.com/38941276/offdynamics-reinforcement-learning-training-for-transfer-with-domain-classifiers?ref=account-folder-62083-folders">talk</a>]'
    // },
        {
            img: 'images/hipi.png',
            title: 'Rewriting History with Inverse RL: Hindsight Inference for Policy Improvement',
	    authors: 'Benjamin Eysenbach*, Young Geng*, Sergey Levine, Ruslan Salakhutdinov',
            text: 'We show that <i>hindsight relabeling is inverse RL</i>, an observation that suggests that we can use inverse RL in tandem for RL algorithms to efficiently solve many tasks. NeurIPS 2020 (oral, 1%) [<a href="https://arxiv.org/abs/2002.11089">paper</a>, <a href="https://github.com/google-research/google-research/tree/master/hipi">code</a>, <a href="https://bair.berkeley.edu/blog/2020/10/13/supervised-rl/">blog</a>, <a href="https://neurips.cc/virtual/2020/public/session_oral_21090.html">talk (oral @ NeurIPS)</a>]',
        },
        {
            img: 'images/sorb.png',
            title: 'Search on the Replay Buffer: Bridging Motion Planning and Reinforcement Learning',
	    authors: 'Benjamin Eysenbach, Ruslan Salakhutdinov, Sergey Levine',
            text: 'Combining RL with non-parametric planning improves performance by 10x - 100x, without requiring any additional training. NeurIPS 2020. [<a href="https://arxiv.org/pdf/1906.05253.pdf">paper</a>, <a href="http://bit.ly/rl_search">code (runs in your browser!)</a>, <a href="https://blog.ml.cmu.edu/2020/02/13/rl-for-planning-and-planning-for-rl/">blog post</a>]',
        },
        {
            img: 'images/smm_ant.png',
            title: 'Efficient Exploration via State Marginal Matching',
	    authors: 'Lisa Lee*, Benjamin Eysenbach*, Emilio Parisotto*, Eric Xing, Sergey Levine, Ruslan Salakhutdinov',
            text: 'Maximizing marginal state entropy is a good way to do exploration; many prior exploration methods are approximations of this. ICLR 2019, Workshop on Structures and Priors in RL (oral) and Workshop on Task Agnostic RL (oral). [<a href="https://arxiv.org/pdf/1906.05274.pdf">paper</a>, <a href="https://sites.google.com/view/state-marginal-matching">website</a>, <a href="https://github.com/RLAgent/state-marginal-matching">code</a>]',
        },
	// {
        //     img: 'images/unknown_rewards.png',
        //     title: 'Reinforcement Learning with Unknown Reward Functions',
	//     authors: 'Benjamin Eysenbach*, Jacob Tyo*, Shixiang Gu, Ruslan Salakhutdinov, Sergey Levine',
        //     text: 'In this project, we propose a method for learning useful skills without a reward function. Our simple objective results in the unsupervised emergence of diverse skills, such as walking and jumping. ICLR 2019 Workshop on Structures and Priors in RL (oral) and Workshop on Task Agnostic RL. [<a href="https://spirl.info/2019/camera-ready/spirl_camera-ready_26.pdf">paper</a>]',
        // },
        {
            img: 'images/diayn.gif',
            title: 'Diversity Is All You Need: Learning Diverse Skills Without a Reward Function',
	    authors: 'Benjamin Eysenbach, Abhishek Gupta, Julian Ibarz, Sergey Levine',
            text: 'Maximizing mutual information results in the (unsupervised) emergence of diverse skills, such as walking and jumping. ICLR 2019. [<a href="https://arxiv.org/pdf/1802.06070">paper</a>, <a href="https://sites.google.com/view/diayn/home">website</a>, <a href="https://github.com/ben-eysenbach/sac">code</a>]',
        },
        // {
        //     img: 'images/lnt.gif',
        //     title: 'Leave No Trace: Learning to Reset for Safe and Autonomous Reinforcement Learning',
	//     authors: 'Benjamin Eysenbach, Shixiang Gu, Julian Ibarz, Sergey Levine',
        //     text: 'We teach agents how to reset themselves. ICLR 2018. [<a href="https://arxiv.org/abs/1711.06782">paper</a>, <a href="https://sites.google.com/site/mlleavenotrace/">website</a>, <a href="https://github.com/brain-research/LeaveNoTrace">code</a>]<br><a href="https://www.technologyreview.com/the-download/609562/robots-get-an-undo-button-that-could-help-them-learn-faster/"><img src="images/tr.png" width=50px></a>',
        // },
    // {
    //     img: 'images/clustervision.png',
    //     title: 'Clustervision: Visual Supervision of Unsupervised Clustering',
    //     authors: 'Bum Chul Kwon, Ben Eysenbach, Janu Verma, Kenney Ng, Christopher De Filippi, Walter F Stewart, Adam Perer',
    //     text: 'Designed algorithms for Clustervision, a visual analytics tool that helps ensure data scientists find the right clustering among the large amount of techniques and parameters available. Accepted at IEEE Transactions on Visualization and Computer Graphics. [<a href="http://perer.org/papers/adamPerer-Clustervision-VAST2017.pdf">paper</a>]',
    // },
    //     {
    //         img: 'images/segment.png',
    //         title: 'Video Segmentation',
    //         text: 'Applied deep learning to video segmentation, and implemented image segmentation in JS.  I gave a talk about this project at EECScon 2015, an MIT undergrad conference [2nd place]. [<a href="http://web.mit.edu/bce/www/segment/">demo</a>, <a href="http://web.mit.edu/bce/www/segment_poster.pdf">poster</a>, <a href="http://web.mit.edu/bce/www/segment_slides.pdf">slides</a>, <a href="http://people.csail.mit.edu/bce/readme.html">code</a>]'
    //     },
    //     {
    //         img: 'images/uav_small.jpg',
    //         title: 'Autonomous Quadcopters for Aerial Imaging',
    //         text: 'Worked on image analysis and system integration for a research project in the <a href="http://senseable.mit.edu/">Sensible City Lab</a>. [<a href="http://www.dynsyslab.org/portfolio/waterfly/">site</a>, <a href="https://www.youtube.com/watch?v=a0ec5aS_NeA">video</a>]'
    //     }
    ],
    "projects": [
        {
            img: 'images/6882.png',
            title: 'Topic Modeling of Academic Papers at MIT',
            text: 'For Bayesian Modeling (<a href="http://www.tamarabroderick.com/course_6_882.html">6.882</a>), applied LDA to a new dataset of 100,000+ academic papers written by MIT affiliates. [<a href="http://web.mit.edu/bce/www/lda.pdf">paper</a>, <a href="https://github.com/ben-eysenbach/6.882-LDA">code</a>, <a href="https://github.com/ben-eysenbach/6.882-LDA/blob/master/datasets/dspace.tar.gz?raw=true">data</a>]'
        },
        {
            img: 'images/mmbm.png',
            title: 'Presentations on Gaussian Processes and Mixed Membership Block Models',
            text: 'For a seminar on Bayesian Modeling (<a href="http://www.tamarabroderick.com/course_6_882.html">6.882</a>), taught classes on Gaussian Processes and Mixed Membership Block Models. [<a href="https://docs.google.com/presentation/d/1V_rzvHggMqnTNOKzjUvs6EMmaH4qVhYLcRv4CbqHrLI/edit?usp=sharing">GP slides</a>, <a href="https://docs.google.com/presentation/d/1zWM9a_uAeBR_72m4hPkyQOxXoYV_i1FZhfKvE5_5jt8/edit?usp=sharing">MMBM slides</a>]'
        },
        {
            img: 'images/6854_small.jpg',
            title: 'Exact Recovery of Stochastic Block Models',
            text: 'Wrote a survey paper on exact recovery for Advanced Algorithms (<a href="http://people.csail.mit.edu/moitra/854.html">6.854</a>). [<a href="http://web.mit.edu/bce/www/sbm.pdf">paper</a>]'
        },
        {
            img: 'images/dna.png',
            title: 'DNA Compression with Graphical Models',
            text: 'For Algorithms for Inference (6.438), I implemented developed a model for compressing shotgun DNA sequences using LDPC codes. [<a href="http://web.mit.edu/bce/www/6.438_project.pdf">paper</a>, <a href="http://web.mit.edu/bce/www/6.438_project.zip">code</a>]'
        },
        {
            img: 'images/cipher.jpg',
            title: 'Cipher Breaking using MCMC',
            text: 'For Inference and Information (6.437), I implemented a model for breaking substitution ciphers using the Metropolis Hastings algorithm. [<a href="http://web.mit.edu/bce/www/6.437_project.pdf">paper</a>, <a href="http://web.mit.edu/bce/www/6.437_project.zip">code</a>]'
        },
        {
            img: 'images/6856.jpg',
            title: 'Randomized Splay Trees',
            text: 'For Randomized Algorithms (<a href="https://courses.csail.mit.edu/6.856/current/">6.856</a>), implemented and analyzed randomized splay trees. Collaborated with Robi Bhattacharjee. [<a href="http://web.mit.edu/bce/www/6856_paper.pdf">paper</a>, <a href="http://web.mit.edu/bce/www/6856_code.zip">code</a>]'
        },
        {
            img: 'images/6819.png',
            title: 'Visualizing 3D Reconstruction',
            text: 'For Computer Vision (<a href="http://6.869.csail.mit.edu/fa14/">6.819</a>), used an Oculus Rift to visualize algorithms which reconstruct a 3D scene from images. Collaborated with <a href="https://github.com/andrewmo2014">Andrew Moran</a>. [<a href="http://web.mit.edu/bce/www/6819_paper.pdf">paper</a>, <a href="http://web.mit.edu/bce/www/6819_slides.pdf">slides</a>, <a href="http://web.mit.edu/bce/www/6819_video.mov">video</a>]'
        },
        {
            img: 'images/hubway_small.jpg',
            title: 'Biking in Boston',
            text: 'Warped maps to reflect distances according to cyclists. Part of a data visualization project on how Hubway for Applying Media Technologies (CMS.622). [<a href="http://people.csail.mit.edu/bce/hubway">site</a>, <a href="http://web.mit.edu/bce/www/cms622_hubway.html">code</a>]'
        }],
    "teaching": [
       {
           img: 'images/rl.jpg',
           title: '<a href="https://cmudeeprl.github.io/703website/">10-703: Deep Reinforcement Learning</a>',
           text: 'Head TA in Fall 2019, Fall 2020.',
       },
     
       {
           img: 'images/stockholm.jpg',
           title: 'Exploration in Reinforcement Learning: Workshop @ ICML 2018, ICML 2019',
           text: '<a href="https://github.com/suryabhupa">Surya Bhupatiraju</a> and I co-organized a workshop on Exploration in Reinforcement Learning at <a href=""https://icml.cc/">ICML 2018 and ICML 2019</a>.',
       },
       {
            img: 'images/6008.jpg',
            title: '<a href="http://web.mit.edu/6.008/www/">6.008: Introduction to Inference</a>',
            text: 'TA in Fall 2016'
        },
        {
            img: 'images/6042.jpg',
            title: '<a href="http://mit.edu/6.042/">6.042: Math for Computer Science</a>',
            text: 'TA in Spring 2015'
        }],
    "blog": [
       {
           img: 'images/stockholm.jpg',
           title: '<a href="https://medium.com/@erl.leads/hitchhikers-guide-to-organizing-an-academic-workshop-cc9a5b1c32c9">Hitchhiker\'s Guide to Organizing an Academic Workshop</a>',
           text: 'Surya Bhupatiraju and I discuss what went well at our Workshop on Exploration in RL, and what we learned.'
       },
       {
           img: 'images/residency.jpg',
           title: '<a href="https://colinraffel.com/blog/writing-a-google-ai-residency-cover-letter.html">Writing a Google AI Residency Cover Letter</a>',
           text: 'Katherine Lee and I explain how to write a cover letter for AI residency programs.'
        }],
    "news": [
    ],
};

$('document').ready(function() {

    // Add teaching
    // for (var i = 0; i < data.teaching.length; i++) {
    //     var proj = data.teaching[i];
    //     var html = getProjectHTML(proj);
    //     $('table#teaching-table').append(html);
    // }


    // Add research
    for (var i = 0; i < data.research.length; i++) {
        var proj = data.research[i];
        var html = getProjectHTML(proj);
        $('table#research-table').append(html);
    }

    // Add blog
    // for (var i = 0; i < data.blog.length; i++) {
    //     var proj = data.blog[i];
    //     var html = getProjectHTML(proj);
    //     $('table#blog-table').append(html);
    // }

});


function getProjectHTML(proj) {
    var html = '<tr>';
    // Add image
    html += '<td class="image-td"><img class="project-img" src="' + proj.img + '"></td>';
    // Add title and description
    html += '<td class="description-td"><p><em>' + proj.title + '</em>. ';
    if ('authors' in proj) {
        html += '<small>' + proj.authors + '</small>';
    }
    html += '<br>' + proj.text + '</p></td>';
    html += '</tr>';
    return html;
}
