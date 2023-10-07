/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	     ],
        navigationText: false
    });


	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


	/*----------------------------------------------------- */
	/* Stat Counter
  	------------------------------------------------------- */
   var statSection = $("#stats"),
       stats = $(".stat-count");

   statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {       		

			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});

       	} 

       	// trigger once only
       	this.destroy();      	

		},
			
		offset: "90%"
	
	});	


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {		  
		  	itemSelector: '.folio-item',
		  	resize: true 
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
   $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });

	
	/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});

/*-----------------------------------------------------*/
  	/* Navigation - right Menu
   ------------------------------------------------------ */  
   var toggleButtonright = $('.menu-toggle-right'),
       navright = $('.main-navigation-right');

   // toggle button
   toggleButtonright.on('click', function(e) {

		e.preventDefault();
		toggleButtonright.toggleClass('is-clicked');
		navright.slideToggle();

	});

   // nav items
   navright.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButtonright.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	navright.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links_right = $("#main-nav-wrap-right li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap-right a[href="#' + active_section.attr("id") + '"]');			

			navigation_links_right.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});
	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */ 
	$('input, textarea, select').placeholder()  


  	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	// $('#contactForm').validate({

	// 	/* submit via ajax */
	// 	submitHandler: function(form) {

	// 		var sLoader = $('#submit-loader');

	// 		$.ajax({      	

	// 	      type: "POST",
	// 	      url: "inc/sendEmail.php",
	// 	    //   url: "https://formsubmit.co/fromentquentin@gmail.com",
	// 	      data: $(form).serialize(),
	// 	      beforeSend: function() { 

	// 	      	sLoader.fadeIn(); 

	// 	      },
	// 	      success: function(msg) {

	//             // Message was sent
	//             if (msg == 'OK') {
	//             	sLoader.fadeOut(); 
	//                $('#message-warning').hide();
	//                $('#contactForm').fadeOut();
	//                $('#message-success').fadeIn();   
	//             }
	//             // There was an error
	//             else {
	//             	sLoader.fadeOut(); 
	//                $('#message-warning').html(msg);
	// 	            $('#message-warning').fadeIn();
	//             }

	// 	      },
	// 	      error: function() {

	// 	      	sLoader.fadeOut(); 
	// 	      	$('#message-warning').html("Something went wrong. Please try again.");
	// 	         $('#message-warning').fadeIn();
	// 			console.log($(form	));
	// 	      }

	//       });     		
  	// 	}

	// });

	//KEEP THIS FOR HOSTING OUTSIDE GITHUB 
	// $("#contactForm").validate({
	// 	/* submit via ajax */
	// 	submitHandler: function (form) {
	// 	   var sLoader = $('#submit-loader');
  
	// 	   // Serialize the form data
	// 	   var formData = $(form).serialize();
  
	// 	   $.ajax({
	// 		  type: "POST",
	// 		  url: "https://formspree.io/f/xdorpbak", // Your Formspree endpoint
	// 		  data: formData,
	// 		  beforeSend: function () {
	// 			 sLoader.fadeIn();
	// 		  },
	// 		  success: function (response) {
	// 			 // Check if the response contains the word "error"
	// 			 if (response.toLowerCase().indexOf("error") === -1) {
	// 				sLoader.fadeOut();
	// 				$('#message-warning').hide();
	// 				$('#contactForm').fadeOut();
	// 				$('#message-success').fadeIn();
	// 			 } else {
	// 				sLoader.fadeOut();
	// 				$('#message-warning').html(response);
	// 				$('#message-warning').fadeIn();
	// 			 }
	// 		  },
	// 		  error: function () {
	// 			 sLoader.fadeOut();
	// 			 $('#message-warning').html("Something went wrong. Please try again.");
	// 			 $('#message-warning').fadeIn();
	// 		  }
	// 	   });
	// 	}
	//  });


 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});	
	const en = {
		"intro-content-h5":"Top of the morning to you",
		"intro-content-h1":"I'm Quentin Froment",
		"intro-position1":"System Engineer",
		"intro-position2":"Software Engineer",
		"aboutlink":"More About Me",
		"about-h5":"About",
		"about-h1":"Let me introduce myself",
		"intro-info-p":"I am "+(getAge("1991/12/10"))+" years old man, living near the wonderful city of Toulouse in the south west of France, known for its incredible rugby team among other things :).  I've worked here for "+(getYears("2015/11/25",""))+" years, "+(getYears("2017/02/01",""))+" in a small company, located in the south of Toulouse, as a System Engineer. As the only IT people of the company when I started, I worked as network administrator, sysadmin and also sofware engineer. My role is to support all my company business units from creating APIs, working in frontend/backend developments to installing servers or softwares and so on.",
		"about-content-h3":"Profile",
		"about-content-p":"I have "+(getYears("2015/11/25",""))+" years of experience in IT domain as software and system engineer. I'm a very sociable and nice person to work with. I'm also fast to adapt to a new environment/technology",
		"skills-h3":"Skills",
		"skills-p":"I've worked with lots of different programming languages in backend and frontend devleopment",
		"info-list-fullname":"Fullname:",
		"info-list-birth":"Birth Date:",
		"info-list-birth-span":"December, 1991",
		"info-list-job-span":"System/Software Engineer",
		"contact-me-button":"Contact Me",
		"download-cv-button": "Download Resume",
		"resumeMenu":"Resume",
		"aboutMenu":"About",
		"contactMenu":"Contact",
		"servicesMenu":"Services",
		"hobbiesMenu":"Hobbies",
		"resume-h5":"Resume",
		"resume-h1":"More of my credentials.",
		"resume-p":"I am open to new experiences to expand my management skills.",
		"timeline-work-experience-h2":"Work Experience",
		"timeline-work-experience-job1":"System/Software Engineer",
		"timeline-work-experience-job1-period":"February 2017 - Present",
		"timeline-work-experience-job1-location":"TerraNIS",
		"timeline-work-experience-job1-role":"My role at TerraNIS is to help all its business units to develop new features, to maintain all existing systems (servers, computers, apps,api,backends and frontends, docker containers) and new ones to come. I also have the role of network administrator.Since the beginning of the year I started learning DevOps skills and working in the Google Cloud environment.",
		"timeline-work-experience-job2":"Software Engineer",
		"timeline-work-experience-job2-period":"November 2015 - February 2017",
		"timeline-work-experience-job2-location":"Astek",
		"timeline-work-experience-job2-role":"As a consultant I've done several missions for  different companies such as CIMPA in which I created a KPI management console application in C#, for the Airbus Fundation I've migrating its Joomla website to a new version and completed its missing features (in PHP), and participated in internals projects in NodeJS,Xamarin ",
		"timeline-education-h2":"Education",
		"timeline-education-edu1":"Specialize Master Degree",
		"timeline-education-edu1-period":"September 2014 - September 2015",
		"timeline-education-edu1-location":"IMT Atlantique Brest",
		"timeline-education-edu1-role":"Year of specialization in web technology : System Services and Security, validated by an internship in Thales Brest",
		"timeline-education-edu2":"Master Degree",
		"timeline-education-edu2-period":"September 2011 - July 2014",
		"timeline-education-edu2-location":"ENIB - Brest National School of Engineering",
		"timeline-education-edu2-role":"Master’s Degree in Engineering majored in Computer sciences",
		"timeline-education-edu3":"Two year Degree",
		"timeline-education-edu3-period":"September 2009 - July 2011",
		"timeline-education-edu3-location":"IUT Blagnac - Blagnac Institute of Technology",
		"timeline-education-edu3-role":"Two year degree majored in Network and Telecommunications",
		"timeline-internship-h2":"Internships",
		"timeline-internship-i1":"Brest",
		"timeline-internship-i1-period":"April 2015 - September 2015",
		"timeline-internship-i1-location":"Thales Airbourne Systems",
		"timeline-internship-i1-role":"Test Driven Development on a Test Library developed in JAVA",
		"timeline-internship-i2":"Toulouse",
		"timeline-internship-i2-period":"July 2013 - December 2013",
		"timeline-internship-i2-location":"CNES - French Space Agency",
		"timeline-internship-i2-role":"Study and creation of tutorials about Obeo Designer to create dynamic schemas of satelite systems",
		"timeline-internship-i3":"Toulouse",
		"timeline-internship-i3-period":"September 2012 - December 2012",
		"timeline-internship-i3-location":"Delair",
		"timeline-internship-i3-role":"Creation of new windows in a QT/C++ desktop App which was used to follow a drone and store pictures from its flight in real time",
		"timeline-internship-i4":"Kourou, Galiot Station, French Guyana",
		"timeline-internship-i4-period":"June 2012 - August 2012",
		"timeline-internship-i4-location":"CNES - French Space Agency",
		"timeline-internship-i4-role":"Creation of a small desktop App in C/GTK to display statistics from Arianne telemetry",
		"timeline-internship-i5":"Tallaght, Ireland",
		"timeline-internship-i5-period":"April 2011 - July 2011",
		"timeline-internship-i5-location":"Institute of Technology Tallaght, Dublin",
		"timeline-internship-i5-role":"Creation of an interactive tool for student to calculate electronic low pass filter transfer function",
		"hobbies":"Hobbies",
		"hobbies-h1":"What I do outside",
		"hobbies-p":"Since a while I was interesting in music, I started learning guitar, was also interesting in learning the piano and ,even if it's not related to music, began some week ago a photography course. I love penguins, cooking (not cooking penguins) and history.",
		"modal-01-p":"The hights of Ramonville city by night, trying to test photos on a phone  (Oppo Find X2 Pro)",
		"modal-02-p":"A pic of a beautiful mimosa, who doesn't love a bit of spring colors",
		"modal-03-p":"Sunlight on the city",
		"modal-04-p":"The renown \"Canal du Midi\" created by Pierre-Paul Riquet",
		"modal-05-p":"Have I told you that I love my bike ? Really ? I didn't think so",
		"modal-06-p":"The strange colors of the sky when the sun hits the clouds",
		"services-h5":"Services",
		"services-h1":"What I do at work",
		"services-p":"A short list of my main subjects at work",
		"services-s1-h3":"Server Management",
		"services-s1-p":"I install and manage all my company servers, from system to its security (setup fail2ban,firewall,webservers, apache modsecurity and so on), deploy our backend containers, setup databases...",
		"services-s2-h3":"Backend development",
		"services-s2-p":"Working with the different product lines teams to create/make evolve their backends, integrate weather data to ingest them into our backends...",
		"services-s3-h3":"API",
		"services-s3-p":"I created APIs in PHP , NodeJS and Python for several projects ",
		"services-s4-h3":"FrontEnd Development",
		"services-s4-p":"I created several website for my company services, using Angular Framework",
		"stat-ideas":"Crazy Ideas",
		"stat-coffee":"Coffee Cups Per Day",
		"stat-hours":"Hours",
		"contact-h1":"I'd Love To Hear From You.",
		"contact-p":"Leave me a message, I'll answer as soon as possible :)",
		"submitform":"Submit",
		"submitform-sending":"Sending...",
		"contactSubject":"Subject",
		"contactName":"Your Name",
		"message-success":"Your message was sent, thank you!",
		"contact-form-location":"Where to find me",
		"contact-form-email":"Email Me At",
		"contact-form-phone":"Call Me At"
	}
	const fr = {
		"intro-content-h5":"Bonjour",
		"intro-content-h1":"Je suis Quentin Froment",
		"intro-position1":"Ingénieur Système",
		"intro-position2":"Ingénieur Logiciel",
		"aboutlink":"En savoir plus",
		"about-h5":"A propos",
		"about-h1":"Je me présente",
		"intro-info-p":"J'ai "+(getAge("1991/12/10"))+" ans et je vis près de la splendide ville de  Toulouse dans le Sud-Ouest de la France, très connue pour son incroyable équipe de rugby entre autres choses :).  J'ai travaillé pendant "+(getYears("2015/11/25",""))+" ans, dont "+(getYears("2017/02/01",""))+" dans une petite entreprise située dans le sud de Toulouse, comme ingénieur système. En temps que seul informaticien lors de mes début dans l'entreprise, j'ai tenu le rôle d'administrateur réseau, administrateur système et ingénieur logiciel. Mon rôle est de soutenir tous les différents services de l'entreprise en faisant par exemple de la création d'APIs, du développement frontend/backend, en installant des logiciels, en manageant des serveurs etc.",
		"about-content-h3":"Profil",
		"about-content-p":"Je travaille dans le domaine informatique depuis "+(getYears("2015/11/25",""))+" ans en tant qu'ingénieur logiciel et système. Je suis quelqu'un de très sociable et agréable. Je m'adapte rapidement à de nouveaux environnements/de nouvelles technologies",
		"skills-h3":"Compétences",
		"skills-p":"J'ai travaillé avec quelques différents langages de programmation en développement backend ou frontend",
		"info-list-fullname":"Nom:",
		"info-list-birth":"Naissance:",
		"info-list-birth-span":"Décembre, 1991",
		"info-list-job-span":"Ingénieur Système/Logiciel",
		"contact-me-button":"Contactez Moi",
		"download-cv-button": "Obtenir mon CV",
		"resumeMenu":"Mon CV",
		"aboutMenu":"A propos",
		"contactMenu":"Contactez-Moi",
		"servicesMenu":"Mes Services",
		"hobbiesMenu":"Mes Hobbies",
		"resume-h5":"CV",
		"resume-h1":"Mon parcours et experiences professionnelles",
		"resume-p":"Je suis ouvert à de nouvelles expériences pour développer mes compétences managériales",
		"timeline-work-experience-h2":"Experience Professionnelle",
		"timeline-work-experience-job1":"Ingénieur Système/Logiciel",
		"timeline-work-experience-job1-period":"Février 2017 - Présent",
		"timeline-work-experience-job1-location":"TerraNIS",
		"timeline-work-experience-job1-role":"My role at TerraNIS is to help all its business units to develop new features, to maintain all existing systems (servers, computers, apps,api,backends and frontends, docker containers) and new ones to come. I also have the role of network administrator.Since the beginning of the year I started learning DevOps skills and working in the Google Cloud environment.",
		"timeline-work-experience-job2":"Ingénieur Logiciel",
		"timeline-work-experience-job2-period":"Novembre 2015 - Février 2017",
		"timeline-work-experience-job2-location":"Astek",
		"timeline-work-experience-job2-role":"As a consultant I've done several missions for  different companies such as CIMPA in which I created a KPI management console application in C#, for the Airbus Fundation I've migrating its Joomla website to a new version and completed its missing features (in PHP), and participated in internals projects in NodeJS,Xamarin ",
		"timeline-education-h2":"Parcours Scolaire",
		"timeline-education-edu1":"Mastère Spécialisé",
		"timeline-education-edu1-period":"Septembre 2014 - Septembre 2015",
		"timeline-education-edu1-location":"IMT Atlantique Brest",
		"timeline-education-edu1-role":"Année de spécialisation en technologies du web : Système Services et Sécurité, validé par un stage à Thales Brest",
		"timeline-education-edu2":"Diplôme d'ingénieur",
		"timeline-education-edu2-period":"Septembre 2011 - Juillet 2014",
		"timeline-education-edu2-location":"ENIB - Ecole Nationale d'Ingénieurs de Brest",
		"timeline-education-edu2-role":"Diplôme d'ingénieur généraliste spécialisé en informatique",
		"timeline-education-edu3":"DUT",
		"timeline-education-edu3-period":"Septembre 2009 - Juillet 2011",
		"timeline-education-edu3-location":"IUT Blagnac - Institut Universitaire de Blagnac",
		"timeline-education-edu3-role":"DUT en Réseau et Télécommunications",
		"timeline-internship-h2":"Stages",
		"timeline-internship-i1":"Brest",
		"timeline-internship-i1-period":"Avril 2015 - Septembre 2015",
		"timeline-internship-i1-location":"Thales Systèmes Aéroportés",
		"timeline-internship-i1-role":"Développements dirigés par les tests TDD sur une librairie de tests développée en JAVA",
		"timeline-internship-i2":"Toulouse",
		"timeline-internship-i2-period":"Juillet 2013 - Décembre 2013",
		"timeline-internship-i2-location":"CNES - Centre National d'Etudes Spatiales",
		"timeline-internship-i2-role":"Etude et création d'un tutoriel sur l'utilisation d'Obeo Designer dans le but de créer des schémas dynamiques de systèmes satellitaires",
		"timeline-internship-i3":"Toulouse",
		"timeline-internship-i3-period":"Septembre 2012 - Décembre 2012",
		"timeline-internship-i3-location":"Delair",
		"timeline-internship-i3-role":"Création de nouvelles fenêtres sur une application Bureau développée en QT/C++ , application utilisée pour suivre le vol d'un drône civil et enregistrer les images de son vol en temps réel.",
		"timeline-internship-i4":"Kourou, Station Galiot, Guyane Française",
		"timeline-internship-i4-period":"Juin 2012 - Août 2012",
		"timeline-internship-i4-location":"CNES - Centre National d'Etudes Spatiales",
		"timeline-internship-i4-role":"Création d'une application bureau en C/GTK permettant d'afficher des données de télémesures d'Arianne",
		"timeline-internship-i5":"Tallaght, Irlande",
		"timeline-internship-i5-period":"Avril 2011 - Juillet 2011",
		"timeline-internship-i5-location":"Institut de Technologie de Tallaght, Dublin",
		"timeline-internship-i5-role":"Création d'un outil intéractif, à destination des étudiants de l'ITT, permettant le calcul de fonctions de transferts de files électroniques passe-bas",
		"hobbies":"Mes Hobbies",
		"hobbies-h1":"Ce que je fais en dehors du travail",
		"hobbies-p":"Depuis un moment je m'intéresse à la musique, j'ai commencé à apprendre la guitare et j'étais également intéressé par l'apprentissage du piano et, même si ce n'est pas lié à la musique, j'ai commencé il y a quelques semaines un cours de photographie. Le pingouin est mon animal totem, j'aime la cuisine (pas cuisiner des pingouins) et l'histoire de France.",
		"modal-01-p":"Les hauts de Ramonville de nuit, essai de photos sur smartphone (Oppo Find X2 Pro)",
		"modal-02-p":"Image d'un beau mimosa, qui n'aime pas un peu de couleurs printanières",
		"modal-03-p":"Lever de soleil sur la ville",
		"modal-04-p":"Le très connu \"Canal du Midi\" créé par Pierre-Paul Riquet",
		"modal-05-p":"Est-ce que je vous ai déjà dit que j'aimais beaucoup ma moto ? Vraiment ? Je ne pensais pas pourtant ^^' ",
		"modal-06-p":"Les étranges couleurs du ciel quand le soleil passe sur les nuages",
		"services-h5":"Services",
		"services-h1":"Ce que je fais au travail",
		"services-p":"Un bref aperçu des différents sujets sur lesquels j'interviens",
		"services-s1-h3":"Management de Serveurs",
		"services-s1-p":"J'installe et gère tous les serveurs de mon entreprise, du système à sa sécurité (configuration fail2ban, pare-feu, serveurs web, apache modsecurity, etc.), déploie nos conteneurs backend, configure les bases de données...",
		"services-s2-h3":"Développement Backend",
		"services-s2-p":"Travailler avec les équipes des différents services pour créer/faire évoluer leurs backends, par exemple intégrer des données météorologiques pour les ingérer dans nos backends...",
		"services-s3-h3":"API",
		"services-s3-p":"J'ai créé des APIs en PHP,NodeJS et Python pour plusieurs projets et services utilisés en production",
		"services-s4-h3":"Développement FrontEnd",
		"services-s4-p":"J'ai créé plusieurs interface/plateformes web pour mon entreprise, en utilisant principalement le framework Angular",
		"stat-ideas":"Idées Folles",
		"stat-coffee":"Tasses de café par jour",
		"stat-hours":"Heures",
		"contact-h1":"Donnez des nouvelles",
		"contact-p":"Envoyez moi un message, je vous répondrai dès que possible :)",
		"submitform":"Envoi",
		"submitform-sending":"Envoi en cours...",
		"contactSubject":"Object du message",
		"contactName":"Votre Nom",
		"message-success":"Votre message a bien été envoyé, merci !",
		"contact-form-location":"Où me trouver",
		"contact-form-email":"Envoyez moi un mail ici ",
		"contact-form-phone":"Appelez-moi au",


	}
	
	// var language = document.getElementById("language");
	// var translate_intro = document.getElementById('intro-content-h5');
	// language.addEventListener("click", function() {
	// 	change(language);
	// 	}, false
	// );
	
	// function change(lang){
	// 	if (language.firstChild.innerHTML=='French'){
	// 		for (let key in fr) {
	// 			document.getElementById(key).textContent = fr[key]
	// 		  }
	// 		document.getElementById("contactSubject").placeholder = fr['contactSubject']
	// 		document.getElementById("contactName").placeholder = fr['contactName']
	// 		language.firstChild.innerHTML = "Anglais";
	// 	}
	// 	else if (language.firstChild.innerHTML=='Anglais'){
	// 		for (let key in en) {
	// 			document.getElementById(key).textContent = en[key]
	// 		  }
	// 		language.firstChild.innerHTML = "French"
	// 	}
	// }
	var language = document.getElementById("language-switch");
	var translate_intro = document.getElementById('intro-content-h5');
	var downloadButton = document.getElementById('download-cv-button');

	var isEnglish = true;

language.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the link from navigating
    changeLanguage();
}, false);

function changeLanguage() {
    if (isEnglish) {
        // Switch to French
        for (let key in fr) {
            document.getElementById(key).textContent = fr[key];
        }
		document.getElementById("contactSubject").placeholder = fr['contactSubject']
		document.getElementById("contactName").placeholder = fr['contactName']
		downloadButton.href = 'images/resume/CV_FROMENT_2023.pdf';
        language.textContent = "Switch to English";
    } else {
        // Switch to English
        for (let key in en) {
            document.getElementById(key).textContent = en[key];
        }
		document.getElementById("contactSubject").placeholder = en['contactSubject']
		document.getElementById("contactName").placeholder = en['contactName']
		downloadButton.href = 'images/resume/RESUME_FROMENT_2023.pdf';
        language.textContent = "Passer en Français";
    }

    // Toggle the language flag
    isEnglish = !isEnglish;
}


})(jQuery);

