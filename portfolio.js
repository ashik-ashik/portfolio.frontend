const portfolios = [
  {
    title:"By Cycle Online Store", 
    shortDesc:"By Cycle Online Store Website is a full stack website. This is a website where an user can buy a cycle, can give a review, and he/she can delete his/her ordered cycle.",
    bullet:["User can login by email & password and google account;", 
      "After login user can buy any cycle, without login user cannot buy cycle", 
      "User can delete hir/her brougth/ ordered cycle",
      "User can write review and these reviews will save to MongoDB database",
      "Admin can manage orders like - change order status, delete order",
      "Admin can manage product/cycle such as- add new cycle, delete previous cycle",
    ],
    thumbnail:"https://i.postimg.cc/0NjW8TC5/bike-02.jpg",
    projectSS:[
      "https://i.postimg.cc/K846k8QM/by-cycle-home-min.png",
      "https://i.postimg.cc/vTtsz26x/by-cycle-shop-min.png",
      "https://i.ibb.co/q97dYW3/by-cyle-manage-order.png"
    ],
    clientSideCode:"https://github.com/ashik-ashik/by-cycle",
    serverSideCode:"https://github.com/ashik-ashik/by-cycle-server",
    liveView:"https://bi-bike-online-store.web.app/",
    technologies:['ReactJs', 'Material UI', "NodeJS", 'Express', 'MongoDB', 'Firebase Auth.'],
},
  {
    title:"Room Booking Service", 
    shortDesc:"Room Booking Service Website is a full stack website. This is a website where an user can book a room, and can see his/her booked rooms and can manage their order.",
    bullet:["User can login by email & password and google account", 
      "After login user can view room details", 
      "User can manage their booked rooms like - change booking status, delete booking",
      "User can update booking information",
      "User can add new room for booking",
    ],
    thumbnail:"https://i.ibb.co/t2GprYj/hotel-6.jpg",
    projectSS:[
      "https://i.postimg.cc/y6Zs7tRL/room-booking-home.png",
      "https://i.postimg.cc/8PgDc4BN/room-booking-rooms.png",
      "https://i.postimg.cc/W4530t6G/room-booking-manage.png"
    ],
    clientSideCode:"https://github.com/ashik-ashik/room-booking",
    serverSideCode:"https://github.com/ashik-ashik/room-booking-server",
    liveView:"",
    technologies:['ReactJs', 'Material UI', "NodeJS", 'Express', 'MongoDB', 'Firebase Auth.'],
},
  {
    title:"World Leading University", 
    shortDesc:"World Leading University is an Educational Website. It's a react application. This website is built by React, React Bootstrap, and this is responsive website",
    bullet:["User can view course details", 
      "Fully responsive website", 
      "Single page application using react router dom",
    ],
    thumbnail:"https://i.postimg.cc/7ZbGvkVV/home-banner.jpg",
    projectSS:[
      "https://i.postimg.cc/D0CmSj6F/world-leading-uv-home.png",
      "https://i.postimg.cc/nzGXJcQX/world-leading-uv-courses.png",
      "https://i.postimg.cc/rmkD3tz6/world-leading-uv-events.png"
    ],
    clientSideCode:"https://github.com/ashik-ashik/world-leading-university",
    serverSideCode:"null",
    liveView:"https://world-leading-university.netlify.app/",
    technologies:['ReactJs', 'React Bootstrap'],
},

];
console.log(portfolios);
