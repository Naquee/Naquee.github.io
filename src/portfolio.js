const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Naquee',
  // title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Md Naquee Alam',
  role: 'Full Stack devloper',
  description:
  ' A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.',
  
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/naquee-alam-431b53208/',
    github: 'https://github.com/Naquee',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Ssence Clone',
    url:"https://miro.medium.com/max/700/1*q-LfNRQ0meWo7UeW4W1gvQ.png",
    description:
      'Sscence is a Ecommerce webisite which is basically for garments',
      
    stack: ['React',"Nodejs","CSS","Bootstrap","Chakra Ui"],
    sourceCode: 'https://github.com/Naquee/economic-development-2719/tree/main/economic-devlopment',
    livePreview: 'https://naquee-ssense-clone.netlify.app/',
  },
  {
    name: 'GeekBuying Clone',
    url:"https://miro.medium.com/max/700/1*2CEuhvWPmHV8qgE2yLqkYQ.png",
    description:'GeekBuying is Ecommerce website exclusive forther elecronics devices',
    stack: ['HTML','CSS', 'JAVASCRIPT'],
    sourceCode: 'https://github.com/manojkumar968/Geekbuying-clone',
    livePreview: 'https://cute-shortbread-9d187d.netlify.app/',
  },

  {
    name: 'DOT & KEY Clone',
    url:"https://miro.medium.com/max/700/1*3KjWIrqEGEqlF5WhMxlhDQ.png",
    description:
      'Dot & Key is a Ecommerce webisite which is basically for lotion and body care medicine',
    stack: ['HTML',"CSS", 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Naquee/Dot_and_key_project',
    livePreview: 'https://cozy-meerkat-b5809b.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  // {
  //   id:1,
  //   name:"REACT",
  //   url:"https://hamna.dev/static/media/react.7098e2714733fed1ce8cdb90d51c4289.svg"
  // },
  // {
  //   id:1,
  //   name:"REDUX",
  //   url:"https://hamna.dev/static/media/redux.0093fdee00ecf5136c9f7660ebe5e197.svg"
  // },
  // {
  //   id:1,
  //   name:"JAVASCRIPT",
  //   url:"https://hamna.dev/static/media/javascript.eb9d2cb6a3b49394e8e20873cb00479e.svg"
  // },

  // {
  //   id:1,
  //   name:"HTML",
  //   url:"https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg"
  // },

  // {
  //   id:1,
  //   name:"HTML",
  //   url:"https://hamna.dev/static/media/html.8c11e1a8364b520a311ac9bf8b5d2fbf.svg"
  // },

  // {
  //   id:1,
  //   name:"API",
  //   url:"https://hamna.dev/static/media/api.dfa7afca97451dea786b1c8395dbf6ff.svg"
  // },

  // {
  //   id:1,
  //   name:"CSS",
  //   url:"https://hamna.dev/static/media/css.b3c0acbf83dd5d6e5ab455b9de967ab9.svg"
  // },

  // {
  //   id:1,
  //   name:"GIT",
  //   url:"https://hamna.dev/static/media/git.45c85edfccc9a3b6bedd9badfac27e7c.svg"
  // },

  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'Chakra UI',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'naqueealam99@gmail.com',
  cont:"8962241451",
 
}

export { header, about, projects, skills, contact }
