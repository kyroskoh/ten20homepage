
/*
 * GET home page.
 */

var model = {
    "pageTitle": "ten20 GPS tracking platform",

    "sections": [
        {
            "type": "nav-bar",
            "logo": "logo.png",
            "navLinks": [
                {
                    "text": "Supported hardware",
                    "link": "#hardware"
                },
                {
                    "text": "Pricing",
                    "link": "#pricing"
                },
                {
                    "text": "Partner",
                    "link": "http://partner.com",
                    "status": "active"
                }
            ]

        },
        {
            "type": "call-to-action",
            "text": ["Monitor all your trackers in one place!", "We support an ever growing list of trackers.", "1st tracker free"],
            "button": {
                "text": "GET STARTED NOW",
                "link": "/register"
            },
            "banner": "banner.png",
            "map": {
                "lat": "51.74",
                "lng": "-4.55",
                "zoomLevel": "12",
                "numberOfTrackers": 5

            }
        },
        {
            "type": "benefits",
            "items": [
                {
                    "icon": "secure.png",
                    "title": "Secure",
                    "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                },
                {
                    "icon": "simple.png",
                    "title": "Simple",
                    "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                },
                {
                    "icon": "universal.png",
                    "title": "Universal",
                    "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                },
                {
                    "icon": "trusted.png",
                    "title": "Trusted",
                    "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                }
            ]

        },
        {
            "_comment": "See wireframes shared on gliffy.com",
            "title": "- KEY FEATURES -",
            "type": "features",
            "items": [
                {
                    "title": "Real time updates",
                    "image": "map1.png",
                    "text": "See your trackers move around the map in realtime, no need to refresh the page.",
                    "status": "active"
                },
                {
                    "title": "Trip History",
                    "image": "map2.jpg",
                    "text": "Trip history is stored by Ten20. It's up to you how long you keep your trips for."
                },
                {
                    "title": "Set your own virtual fence",
                    "image": "map3.png",
                    "text": "Get alerts via SMS, email, Facebook or Twitter when tracker enters an area you draw on the map."
                }
            ]

        },
        {
            "_comment": "See design https://fd-files-production.s3.amazonaws.com/27875/orJmR0ngObfaREwpUzVVOg?AWSAccessKeyId=AKIAJLUIK775YAQI2POA&Signature=fhzPaivnMcOCqwyq%2FduTeCHKA8Y%3D&Expires=1370893813",
            "title": "- SUPPORTED TRACKERS -",
            "type": "slideshow",
            "items": [
                {
                    "title": "GOTOP-206",
                    "image": "gotop-206.png",
                    "text": "Portable GPS tracker from GOTOP Limited",
                    "link": "http://gotop.cc/index.php/product/Personal%20GPS%20tracker%20TL-206.html"
                },
                {
                    "title": "Xenun TK201-2",
                    "image": "map2.png",
                    "text": "Portable GPS tracker from Xenun",
                    "link": "http://www.gpstrackerchina.com/p107/GPS-Portable-Tracker-TK201-2/"
                }
            ]

        }
    ]
};


exports.index = function(req, res){
  res.render('index.html', model);
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};
