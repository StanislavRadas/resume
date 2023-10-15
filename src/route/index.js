
const express = require('express')
const router = express.Router()

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },

  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Hamburger Strasse 101',
};
var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
};



router.get('/', function (req, res) {
  res.render('index', {})
})


router.get('/summary', function (req, res) {
  res.render('summary', {

    page: {
      title: 'Resume | Summary',
    },

    header,

    position: 'Junior Fullstack JS Developer',
    salary: '600$ в місяць',

    main: {
      summary: {
      title: 'Summary',
      text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
    },

    experience: {
      title: 'Other experience',
      text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
    },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },

    header,

    position: 'Junior Fullstack JS Developer',
    salary: '600$ в місяць',

    main: {
       hobbies: [
        {
          name: 'Skiing',
          isMain: true,
        },
        {
          name: 'Swimming',
          isMain: true,
        },
        {
          name: 'Running',
          isMain: false,
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: 8,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handelbars',
          point: 6,
          isTop: false,
        },
        {
          name: 'GIT',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      certificates: [
        {
          name: 'Front',
          id: 7,
        },
        {
          name: 'Back',
          id: 9,
        },
        {
          name: 'UI',
          id: 8,
        },
      ],
      educations: [
        {
          name: 'DHH',
          isEnd: true,
        },
         {
           name: 'HAM',
           isEnd: true,
        },
          {
            name: 'BER',
            isEnd: false,
        },
           {
             name: 'HAW',
             isEnd: false,
        },
      ], 
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Airbnb competitor',
              stackAmount: 3,
              awardAmount: 2,
              stacks: [
                {
                name: 'React.js',
                },
                {
                name: 'HTML/CSS',
                },
                {
                name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Background verification',
                },
                {
                  name: 'Preparing SEO',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})



module.exports = router
