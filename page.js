var data = {
    "research": [
        {
            img: 'images/mistaken.png',
            title: 'Who is Mistaken?',
            text: 'In this project, I studied the beliefs of people in videos. Using a dataset I collected on Mechanical Turk, I created a representation of characters\' beliefs for recognizing mistaken characters. Diagnostics on my model suggest it learns important cues for recognizing mistaken beliefs, such as gaze and the arrow of time. [<a href="http://people.csail.mit.edu/bce/mistaken/">website</a>, <a href="https://arxiv.org/pdf/1612.01175v1.pdf">paper</a>]'
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
            img: 'images/6008.jpg',
            title: '<a href="http://web.mit.edu/6.008/www/">6.008: Introduction to Inference</a>',
            text: 'TA in Fall 2016'
        },
        {
            img: 'images/6042.jpg',
            title: '<a href="http://mit.edu/6.042/">6.042: Math for Computer Science</a>',
            text: 'TA in Spring 2015'
        }]
}

$('document').ready(function() {
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

    // Change photo on hover
    
    var serious_img = 'images/me/ben eysenbach_0139.jpg';
    var goofy_img = 'images/me/mustache.jpg';
        
    $('img#profile-img').attr('src', serious_img);
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
    html += '<td class="description-td"><h3>' + proj.title + '</h3><p>' + proj.text + '</p></td>';
    html += '</tr>';
    return html;
}
