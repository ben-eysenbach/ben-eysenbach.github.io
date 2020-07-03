var data = {
    "research": [
    {
      img: 'images/darc.gif',
      title: 'Off-Dynamics Reinforcement Learning: Training for Transfer with Domain Classifiers',
      authors: 'Benjamin Eysenbach*, Swapnil Asawa*, Shreyas Chaudhari*, Ruslan Salakhutdinov, Sergey Levine',
      text: 'We propose a simple, practical, and intuitive approach for domain adaptation in RL. We show how to compensate for the difference in dynamics by modifying the reward function. This modified reward function is simple to estimate by learning auxiliary classifiers that distinguish source-domain transitions from target-domain transitions. Intuitively, the modified reward function penalizes the agent for visiting states and taking actions in the source domain which are not possible in the target domain. Said another way, the agent is penalized for transitions that would indicate that the agent is interacting with the source domain, rather than the target domain. ICML BIG Workshop (oral). [<a href="https://arxiv.org/abs/2006.13916">paper</a>, <a href="https://github.com/google-research/google-research/tree/master/darc">code</a>]'
    },
        {
            img: 'images/hipi.png',
            title: 'Rewriting History with Inverse RL: Hindsight Inference for Policy Improvement',
	    authors: 'Benjamin Eysenbach*, Young Geng*, Sergey Levine, Ruslan Salakhutdinov',
            text: 'We show that <i>hindsight relabeling is inverse RL</i>, an observation that suggests that we can use inverse RL in tandem for RL algorithms to efficiently solve many tasks. We use this idea to generalize goal-relabeling techniques from prior work to general multi-task settings, including goal-reaching, domains with discrete sets of rewards, and those with linear reward functions. [<a href="https://arxiv.org/abs/2002.11089">paper</a>]',
        },
       {
            img: 'images/maxent.png',
            title: 'If MaxEnt RL is the Answer, What is the Question?',
	    authors: 'Benjamin Eysenbach and Sergey Levine',
            text: 'Experimentally, humans and animals seem to perform MaxEnt RL. However, MaxEnt RL does not optimize expected utility. In this paper, we formally show that MaxEnt RL does optimally solve certain classes of control problems with variability in the reward function. These results suggest a deeper connection between MaxEnt RL, robust control, and POMDPs. [<a href="https://arxiv.org/abs/1910.01913">paper</a>]',
        },
        {
            img: 'images/sorb.png',
            title: 'Search on the Replay Buffer: Bridging Motion Planning and Reinforcement Learning',
	    authors: 'Benjamin Eysenbach, Ruslan Salakhutdinov, Sergey Levine',
            text: 'The history of learning for control has been an exciting back and forth between two broad classes of algorithms: planning and reinforcement learning. We introduce a general-purpose control algorithm that combines the strengths of planning and reinforcement learning to solve long-horizon, sparse-reward tasks. Using graph search over our replay buffer, we can automatically generate a sequence of subgoals, even in image-based environments. Our algorithm, search on the replay buffer (SoRB), enables agents to solve sparse reward tasks over one hundred steps, and generalizes substantially better than standard RL algorithms. NeurIPS 2020. [<a href="https://arxiv.org/pdf/1906.05253.pdf">paper</a>, <a href="http://bit.ly/rl_search">code (runs in your browser!)</a>, <a href="https://blog.ml.cmu.edu/2020/02/13/rl-for-planning-and-planning-for-rl/">blog post</a>]',
        },
        {
            img: 'images/smm_ant.png',
            title: 'Efficient Exploration via State Marginal Matching',
	    authors: 'Lisa Lee*, Benjamin Eysenbach*, Emilio Parisotto*, Eric Xing, Sergey Levine, Ruslan Salakhutdinov',
            text: 'We suggest that the goal of exploration should be to maximize entropy over states, and show that this method works well on simulated robotic tasks. We also discuss how prior work on explorationcan almost maximizes some entropy, but omits a crucial historical averaging step. ICLR 2019 Workshop on Structures and Priors in RL (oral) and Workshop on Task Agnostic RL (oral). [<a href="https://arxiv.org/pdf/1906.05274.pdf">paper</a>, <a href="https://sites.google.com/view/state-marginal-matching">website</a>, <a href="https://github.com/RLAgent/state-marginal-matching">code</a>]',
        },
	{
            img: 'images/unknown_rewards.png',
            title: 'Reinforcement Learning with Unknown Reward Functions',
	    authors: 'Benjamin Eysenbach*, Jacob Tyo*, Shixiang Gu, Ruslan Salakhutdinov, Sergey Levine',
            text: 'In this project, we propose a method for learning useful skills without a reward function. Our simple objective results in the unsupervised emergence of diverse skills, such as walking and jumping. ICLR 2019 Workshop on Structures and Priors in RL (oral) and Workshop on Task Agnostic RL. [<a href="https://spirl.info/2019/camera-ready/spirl_camera-ready_26.pdf">paper</a>]',
        },
        {
            img: 'images/diayn.gif',
            title: 'Diversity Is All You Need: Learning Diverse Skills Without a Reward Function',
	    authors: 'Benjamin Eysenbach, Abhishek Gupta, Julian Ibarz, Sergey Levine',
            text: 'In this project, we propose a method for learning useful skills without a reward function. Our simple objective results in the unsupervised emergence of diverse skills, such as walking and jumping. Accepted to ICLR 2019. [<a href="https://arxiv.org/pdf/1802.06070">paper</a>, <a href="https://sites.google.com/view/diayn/home">website</a>, <a href="https://github.com/ben-eysenbach/sac">code</a>]',
        },
	 {
            img: 'images/sectar.png',
            title: 'Self-Consistent Trajectory Autoencoder: Hierarchical Reinforcement Learning with Trajectory Embeddings',
	    authors: 'John D Co-Reyes, YuXuan Liu, Abhishek Gupta, Benjamin Eysenbach, Pieter Abbeel, Sergey Levine',
            text: 'We take a representation learning perspective on hierarchical reinforcement learning, where the problem of learning lower layers in a hierarchy is transformed into the problem of learning trajectory-level generative models. We show that we can learn continuous latent representations of trajectories, which are effective in solving temporally extended and multi-stage problems. Accepted to ICML 2018. [<a href="http://proceedings.mlr.press/v80/co-reyes18a.html">paper</a>]',
        },
		
        {
            img: 'images/lnt.gif',
            title: 'Leave No Trace: Learning to Reset for Safe and Autonomous Reinforcement Learning',
	    authors: 'Benjamin Eysenbach, Shixiang Gu, Julian Ibarz, Sergey Levine',
            text: 'In this work, we propose an autonomous method for safe and efficient reinforcement learning that simultaneously learns a forward and reset policy, with the reset policy resetting the environment for a subsequent attempt. The reset policy can avoid manual resets, can reduce the number of unsafe actions, and can automatically induce a curriculum. Accepted to ICLR 2018. [<a href="https://arxiv.org/abs/1711.06782">paper</a>, <a href="https://sites.google.com/site/mlleavenotrace/">website</a>, <a href="https://github.com/brain-research/LeaveNoTrace">code</a>]<br><a href="https://www.technologyreview.com/the-download/609562/robots-get-an-undo-button-that-could-help-them-learn-faster/"><img src="images/tr.png" width=50px></a>',
        },
        {
            img: 'images/mistaken.png',
            title: 'Who is Mistaken?',
	    authors: 'Benjamin Eysenbach, Carl Vondrick, Antonio Torralba',
            text: 'In this project, I studied the beliefs of people in videos. Using a dataset I collected on Mechanical Turk, I created a representation of characters\' beliefs for recognizing mistaken characters. Diagnostics on my model suggest it learns important cues for recognizing mistaken beliefs, such as gaze and the arrow of time. [<a href="http://people.csail.mit.edu/bce/mistaken/">website</a>, <a href="https://arxiv.org/pdf/1612.01175v1.pdf">paper</a>]'
	},
    {
        img: 'images/clustervision.png',
        title: 'Clustervision: Visual Supervision of Unsupervised Clustering',
	authors: 'Bum Chul Kwon, Ben Eysenbach, Janu Verma, Kenney Ng, Christopher De Filippi, Walter F Stewart, Adam Perer',
        text: 'Designed algorithms for Clustervision, a visual analytics tool that helps ensure data scientists find the right clustering among the large amount of techniques and parameters available. Accepted at IEEE Transactions on Visualization and Computer Graphics. [<a href="http://perer.org/papers/adamPerer-Clustervision-VAST2017.pdf">paper</a>]',
    },
	{
            img: 'images/segment.png',
            title: 'Video Segmentation',
            text: 'Applied deep learning to video segmentation, and implemented image segmentation in JS.  I gave a talk about this project at EECScon 2015, an MIT undergrad conference [2nd place]. [<a href="http://web.mit.edu/bce/www/segment/">demo</a>, <a href="http://web.mit.edu/bce/www/segment_poster.pdf">poster</a>, <a href="http://web.mit.edu/bce/www/segment_slides.pdf">slides</a>, <a href="http://people.csail.mit.edu/bce/readme.html">code</a>]'
        },
        {
            img: 'images/uav_small.jpg',
            title: 'Autonomous Quadcopters for Aerial Imaging',
            text: 'Worked on image analysis and system integration for a research project in the <a href="http://senseable.mit.edu/">Sensible City Lab</a>. [<a href="http://www.dynsyslab.org/portfolio/waterfly/">site</a>, <a href="https://www.youtube.com/watch?v=a0ec5aS_NeA">video</a>]'
        }],
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
           text: 'Head TA in Fall 2019.',
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
}

$('document').ready(function() {
    // Add news
    // for (var i = 0; i < data.news.length; i++) {
    //     var proj = data.news[i];
    //     var html = '<tr><td>&#8594; ' + proj + '</td></tr>';
    //     $('table#news-table').append(html);
    // }


    // Add projects
    for (var i = 0; i < data.projects.length; i++) {
        var proj = data.projects[i];
        var html = getProjectHTML(proj);
        $('table#projects-table').append(html);
    }

    // Add teaching
    for (var i = 0; i < data.teaching.length; i++) {
        var proj = data.teaching[i];
        var html = getProjectHTML(proj);
        $('table#teaching-table').append(html);
    }


    // Add research
    for (var i = 0; i < data.research.length; i++) {
        var proj = data.research[i];
        var html = getProjectHTML(proj);
        $('table#research-table').append(html);
    }

    // Add blog
    for (var i = 0; i < data.blog.length; i++) {
        var proj = data.blog[i];
        var html = getProjectHTML(proj);
        $('table#blog-table').append(html);
    }

    // Change photo on hover
    
    // var serious_img = 'images/me/ben eysenbach_0139.jpg';
    // var goofy_img = 'images/me/mustache.jpg';
        
    // $('img#profile-img').attr('src', serious_img);
    //$('td#profile-img-td').hover(
    //    function() {
    //        $('img#profile-img').attr('src', goofy_img);
    //    },
    //
    //    function() {
    //        $('img#profile-img').attr('src', serious_img);
    //    });

});


function getProjectHTML(proj) {
    var html = '<tr>';
    // Add image
    html += '<td class="image-td"><img class="project-img" src="' + proj.img + '"></td>';
    // Add title and description
    html += '<td class="description-td"><h3>' + proj.title + '</h3>'
    if ('authors' in proj) {
        html += '<p><i>' + proj.authors + '</i></p>'
    }
    html += '<p>' + proj.text + '</p></td>';
    html += '</tr>';
    return html;
}
