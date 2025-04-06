export const allCourses = [
    // Web Development (6 courses)
    {
      id: 1,
      title: 'React Fundamentals',
      difficulty: 'beginner',
      tags: ['React', 'JavaScript', 'Frontend'],
      description: 'Master the fundamentals of React including components, state, and props.',
      instructor: 'Sarah Johnson',
      duration: '6 weeks',
      level: 'Beginner',
      roadmap: [
        {
          title: 'Introduction to React',
          videoUrl: 'https://www.youtube.com/embed/w7ejDZ8SWv8',
          duration: '5:52',
          type: 'youtube',
          description: 'Learn what React is and why it has become so popular for building user interfaces'
        },
        {
          title: 'JSX Syntax',
          videoUrl: 'https://www.youtube.com/embed/7fPXI_MnBOY',
          duration: '12:58',
          type: 'youtube',
          description: 'Understand JSX syntax and how it differs from regular HTML'
        },
        {
          title: 'Components and Props',
          videoUrl: 'https://www.youtube.com/embed/bMknfKXIFA8',
          duration: '15:45',
          type: 'youtube',
          description: 'Learn how to create reusable components and pass data between them using props'
        },
        {
          title: 'State and Lifecycle',
          videoUrl: 'https://www.youtube.com/embed/4ORZ1GmjaMc',
          duration: '18:22',
          type: 'youtube',
          description: 'Understand component state and lifecycle methods in React'
        },
        {
          title: 'Handling Events',
          videoUrl: 'https://www.youtube.com/embed/XuFDcZABiDQ',
          duration: '13:36',
          type: 'youtube',
          description: 'Learn how to handle user events in React applications'
        },
        {
          title: 'Conditional Rendering',
          videoUrl: 'https://www.youtube.com/embed/7o5FPaVA9m0',
          duration: '8:45',
          type: 'youtube',
          description: 'Different ways to conditionally render components and elements in React'
        },
        {
          title: 'Lists and Keys',
          videoUrl: 'https://www.youtube.com/embed/0sSYmRImgRY',
          duration: '10:15',
          type: 'youtube',
          description: 'Render lists of data efficiently and understand the importance of keys'
        },
        {
          title: 'Forms',
          videoUrl: 'https://www.youtube.com/embed/6Dh-RDL__ok',
          duration: '20:33',
          type: 'youtube',
          description: 'Create controlled components and handle form submissions in React'
        },
        {
          title: 'Composition vs Inheritance',
          videoUrl: 'https://www.youtube.com/embed/6VQZb6J4MtA',
          duration: '14:12',
          type: 'youtube',
          description: 'Understand React composition model and when to use it instead of inheritance'
        }
      ]
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      difficulty: 'advanced',
      tags: ['React', 'Performance', 'Hooks'],
      description: 'Learn advanced React patterns and performance optimization techniques.',
      instructor: 'Mike Chen',
      duration: '8 weeks',
      level: 'Advanced',
      roadmap: [
        {
          title: 'React Hooks Deep Dive',
          videoUrl: 'https://www.youtube.com/embed/dpw9EHDh2bM',
          duration: '1:28:42',
          type: 'youtube',
          description: 'Comprehensive guide to all React hooks and their advanced usage patterns'
        },
        {
          title: 'Context API',
          videoUrl: 'https://www.youtube.com/embed/5LrDIWkK_Bc',
          duration: '22:05',
          type: 'youtube',
          description: 'Learn how to use Context API for state management without external libraries'
        },
        {
          title: 'Render Props',
          videoUrl: 'https://www.youtube.com/embed/EZil2OTyB4w',
          duration: '15:30',
          type: 'youtube',
          description: 'Understand the render props pattern for component composition'
        },
        {
          title: 'Higher-Order Components',
          videoUrl: 'https://www.youtube.com/embed/rsBQj6X7UK8',
          duration: '18:45',
          type: 'youtube',
          description: 'Learn how to create and use HOCs to reuse component logic'
        },
        {
          title: 'Performance Optimization',
          videoUrl: 'https://www.youtube.com/embed/0U9Xd0qalY8',
          duration: '25:12',
          type: 'youtube',
          description: 'Techniques to optimize React application performance'
        },
        {
          title: 'Code Splitting',
          videoUrl: 'https://www.youtube.com/embed/bbI5JxRHg58',
          duration: '12:40',
          type: 'youtube',
          description: 'Implement code splitting to improve your application load time'
        },
        {
          title: 'Error Boundaries',
          videoUrl: 'https://www.youtube.com/embed/AWmBcH3Ehts',
          duration: '10:55',
          type: 'youtube',
          description: 'Learn how to gracefully handle JavaScript errors in React components'
        },
        {
          title: 'Portals',
          videoUrl: 'https://www.youtube.com/embed/HpHLa-5Wdys',
          duration: '14:20',
          type: 'youtube',
          description: 'Render children into a DOM node that exists outside the DOM hierarchy'
        },
        {
          title: 'Profiler API',
          videoUrl: 'https://www.youtube.com/embed/00RoZflFE34',
          duration: '16:45',
          type: 'youtube',
          description: 'Measure how often a React application renders and what costs'
        }
      ]
    },
    {
      id: 3,
      title: 'Node.js Backend Mastery',
      difficulty: 'intermediate',
      tags: ['Node.js', 'JavaScript', 'Backend'],
      description: 'Build scalable backend applications with Node.js and Express.',
      instructor: 'David Wilson',
      duration: '10 weeks',
      level: 'Intermediate',
      roadmap: [
        {
          title: 'Node.js Fundamentals',
          videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4',
          duration: '1:02:35',
          type: 'youtube',
          description: 'Core concepts of Node.js including event loop and non-blocking I/O'
        },
        {
          title: 'Modules and NPM',
          videoUrl: 'https://www.youtube.com/embed/1LqW3pZOkU0',
          duration: '18:22',
          type: 'youtube',
          description: 'Working with Node modules and NPM package manager'
        },
        {
          title: 'File System Operations',
          videoUrl: 'https://www.youtube.com/embed/UYEa7xpw0Q0',
          duration: '22:15',
          type: 'youtube',
          description: 'Reading and writing files using Node.js fs module'
        },
        {
          title: 'Express Framework',
          videoUrl: 'https://www.youtube.com/embed/L72fhGm1tfE',
          duration: '35:40',
          type: 'youtube',
          description: 'Building web applications with Express.js framework'
        },
        {
          title: 'Middleware',
          videoUrl: 'https://www.youtube.com/embed/lY6icfhap2o',
          duration: '15:30',
          type: 'youtube',
          description: 'Understanding and creating Express middleware functions'
        },
        {
          title: 'Routing',
          videoUrl: 'https://www.youtube.com/embed/voDummz1gO0',
          duration: '20:45',
          type: 'youtube',
          description: 'Implementing different routing techniques in Express'
        },
        {
          title: 'Database Integration',
          videoUrl: 'https://www.youtube.com/embed/2jqok-WgelI',
          duration: '28:12',
          type: 'youtube',
          description: 'Connecting Node.js applications to databases'
        },
        {
          title: 'Authentication',
          videoUrl: 'https://www.youtube.com/embed/2jqok-WgelI',
          duration: '32:20',
          type: 'youtube',
          description: 'Implementing user authentication in Node.js applications'
        },
        {
          title: 'Error Handling',
          videoUrl: 'https://www.youtube.com/embed/DyqVqaf1KnA',
          duration: '18:30',
          type: 'youtube',
          description: 'Proper error handling patterns in Node.js applications'
        },
        {
          title: 'Deployment',
          videoUrl: 'https://www.youtube.com/embed/oykl1Ih9pMg',
          duration: '25:45',
          type: 'youtube',
          description: 'Deploying Node.js applications to production environments'
        }
      ]
    },
    {
      id: 4,
      title: 'Modern JavaScript ES6+',
      difficulty: 'intermediate',
      tags: ['JavaScript', 'ES6', 'Frontend'],
      description: 'Master modern JavaScript features from ES6 and beyond.',
      instructor: 'Emma Davis',
      duration: '5 weeks',
      level: 'Intermediate',
      roadmap: [
        {
          title: 'Arrow Functions',
          videoUrl: 'https://www.youtube.com/embed/h33Srr5J9nY',
          duration: '8:12',
          type: 'youtube',
          description: 'Learn arrow function syntax and lexical this binding'
        },
        {
          title: 'Template Literals',
          videoUrl: 'https://www.youtube.com/embed/4oVJVglLLns',
          duration: '6:45',
          type: 'youtube',
          description: 'String interpolation and multi-line strings with template literals'
        },
        {
          title: 'Destructuring',
          videoUrl: 'https://www.youtube.com/embed/NIq3qLaHCIs',
          duration: '10:30',
          type: 'youtube',
          description: 'Extract values from arrays and objects using destructuring'
        },
        {
          title: 'Spread/Rest Operators',
          videoUrl: 'https://www.youtube.com/embed/iLx4ma8ZqvQ',
          duration: '9:15',
          type: 'youtube',
          description: 'Using spread and rest operators for arrays and function parameters'
        },
        {
          title: 'Modules',
          videoUrl: 'https://www.youtube.com/embed/cRHQNNcYf6s',
          duration: '12:40',
          type: 'youtube',
          description: 'ES6 module system for organizing and sharing code'
        },
        {
          title: 'Promises',
          videoUrl: 'https://www.youtube.com/embed/DHvZLI7Db8E',
          duration: '16:25',
          type: 'youtube',
          description: 'Asynchronous programming with Promises'
        },
        {
          title: 'Async/Await',
          videoUrl: 'https://www.youtube.com/embed/V_Kr9OSfDeU',
          duration: '14:50',
          type: 'youtube',
          description: 'Modern asynchronous JavaScript with async/await syntax'
        },
        {
          title: 'Classes',
          videoUrl: 'https://www.youtube.com/embed/2ZphE5HcQPQ',
          duration: '18:30',
          type: 'youtube',
          description: 'Object-oriented programming with ES6 classes'
        },
        {
          title: 'Iterators/Generators',
          videoUrl: 'https://www.youtube.com/embed/IJ6EgdiI_wU',
          duration: '15:20',
          type: 'youtube',
          description: 'Working with iterators and generator functions'
        }
      ]
    },
    {
      id: 5,
      title: 'HTML & CSS Mastery',
      difficulty: 'beginner',
      tags: ['HTML', 'CSS', 'Frontend'],
      description: 'Build beautiful, responsive websites with modern HTML and CSS.',
      instructor: 'James Miller',
      duration: '4 weeks',
      level: 'Beginner',
      roadmap: [
        {
          title: 'HTML5 Semantic Elements',
          videoUrl: 'https://www.youtube.com/embed/kGW8Al_cga4',
          duration: '12:15',
          type: 'youtube',
          description: 'Proper use of semantic HTML5 elements for accessibility and SEO'
        },
        {
          title: 'CSS Flexbox',
          videoUrl: 'https://www.youtube.com/embed/JJSoEo8JSnc',
          duration: '20:30',
          type: 'youtube',
          description: 'Complete guide to CSS Flexbox layout system'
        },
        {
          title: 'CSS Grid',
          videoUrl: 'https://www.youtube.com/embed/9zBsdzdE4sM',
          duration: '22:45',
          type: 'youtube',
          description: 'Mastering the CSS Grid layout system'
        },
        {
          title: 'Responsive Design',
          videoUrl: 'https://www.youtube.com/embed/srvUrASNj0s',
          duration: '18:20',
          type: 'youtube',
          description: 'Creating responsive layouts that work on all devices'
        },
        {
          title: 'CSS Variables',
          videoUrl: 'https://www.youtube.com/embed/PHO6TBq_auI',
          duration: '10:45',
          type: 'youtube',
          description: 'Using CSS custom properties for maintainable styles'
        },
        {
          title: 'Animations',
          videoUrl: 'https://www.youtube.com/embed/YszONjKpgg4',
          duration: '15:30',
          type: 'youtube',
          description: 'Creating smooth animations and transitions with CSS'
        },
        {
          title: 'Transforms',
          videoUrl: 'https://www.youtube.com/embed/Nloq6uzF8RQ',
          duration: '12:15',
          type: 'youtube',
          description: 'Transforming elements with CSS translate, rotate, scale and skew'
        },
        {
          title: 'Accessibility',
          videoUrl: 'https://www.youtube.com/embed/20SHvU2PKsM',
          duration: '25:40',
          type: 'youtube',
          description: 'Building accessible web interfaces that work for everyone'
        },
        {
          title: 'Performance Optimization',
          videoUrl: 'https://www.youtube.com/embed/5fEMTxpA2f4',
          duration: '19:15',
          type: 'youtube',
          description: 'Techniques to optimize CSS performance and loading'
        }
      ]
    },
    {
      id: 6,
      title: 'Full-Stack Development',
      difficulty: 'advanced',
      tags: ['React', 'Node.js', 'MongoDB'],
      description: 'Build complete full-stack applications with React, Node.js and MongoDB.',
      instructor: 'Lisa Wong',
      duration: '12 weeks',
      level: 'Advanced',
      roadmap: [
        {
          title: 'Project Setup',
          videoUrl: 'https://www.youtube.com/embed/7CqJlxBYj-M',
          duration: '15:20',
          type: 'youtube',
          description: 'Setting up a full-stack project with React and Node.js'
        },
        {
          title: 'API Development',
          videoUrl: 'https://www.youtube.com/embed/fgTGADljAeg',
          duration: '32:45',
          type: 'youtube',
          description: 'Building RESTful APIs with Node.js and Express'
        },
        {
          title: 'Database Design',
          videoUrl: 'https://www.youtube.com/embed/KKyag6t98g8',
          duration: '28:30',
          type: 'youtube',
          description: 'Designing and implementing MongoDB database schemas'
        },
        {
          title: 'Authentication',
          videoUrl: 'https://www.youtube.com/embed/2jqok-WgelI',
          duration: '35:15',
          type: 'youtube',
          description: 'Implementing JWT authentication for full-stack applications'
        },
        {
          title: 'State Management',
          videoUrl: 'https://www.youtube.com/embed/35lXWvCuM8o',
          duration: '25:40',
          type: 'youtube',
          description: 'Managing application state across frontend and backend'
        },
        {
          title: 'Deployment',
          videoUrl: 'https://www.youtube.com/embed/ZJxUOOND5_A',
          duration: '22:15',
          type: 'youtube',
          description: 'Deploying full-stack applications to production'
        },
        {
          title: 'Testing',
          videoUrl: 'https://www.youtube.com/embed/3e1GHCA3GP0',
          duration: '30:45',
          type: 'youtube',
          description: 'Writing tests for both frontend and backend code'
        },
        {
          title: 'Performance Optimization',
          videoUrl: 'https://www.youtube.com/embed/EsV6rbmB17U',
          duration: '28:20',
          type: 'youtube',
          description: 'Optimizing full-stack application performance'
        },
        {
          title: 'Security Best Practices',
          videoUrl: 'https://www.youtube.com/embed/2kH5C0o8j5k',
          duration: '35:10',
          type: 'youtube',
          description: 'Implementing security measures for full-stack applications'
        }
      ]
    },
  
    // Data Science (6 courses)
    {
      id: 7,
      title: 'Python for Data Science',
      difficulty: 'beginner',
      tags: ['Python', 'Data Analysis', 'Pandas'],
      description: 'Learn Python programming for data analysis and visualization.',
      instructor: 'Robert Taylor',
      duration: '6 weeks',
      level: 'Beginner',
      roadmap: [
        {
          title: 'Python Basics',
          videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
          duration: '4:26:52',
          type: 'youtube',
          description: 'Python fundamentals for data science applications'
        },
        {
          title: 'NumPy Fundamentals',
          videoUrl: 'https://www.youtube.com/embed/GB9ByFAIAH4',
          duration: '1:06:25',
          type: 'youtube',
          description: 'Numerical computing with NumPy arrays'
        },
        {
          title: 'Pandas DataFrames',
          videoUrl: 'https://www.youtube.com/embed/dcqPhpY7tWk',
          duration: '32:35',
          type: 'youtube',
          description: 'Data manipulation and analysis with Pandas'
        },
        {
          title: 'Data Cleaning',
          videoUrl: 'https://www.youtube.com/embed/KdmPHEnPJPs',
          duration: '21:45',
          type: 'youtube',
          description: 'Techniques for cleaning and preprocessing data'
        },
        {
          title: 'Data Visualization',
          videoUrl: 'https://www.youtube.com/embed/3m7BgIvC-uQ',
          duration: '53:30',
          type: 'youtube',
          description: 'Creating effective data visualizations with Matplotlib and Seaborn'
        },
        {
          title: 'Statistical Analysis',
          videoUrl: 'https://www.youtube.com/embed/r-uOLxNrNk8',
          duration: '1:12:45',
          type: 'youtube',
          description: 'Performing statistical analysis with Python'
        },
        {
          title: 'Working with APIs',
          videoUrl: 'https://www.youtube.com/embed/pxofwuWTs7c',
          duration: '24:20',
          type: 'youtube',
          description: 'Accessing and processing data from web APIs'
        },
        {
          title: 'Machine Learning Intro',
          videoUrl: 'https://www.youtube.com/embed/7eh4d6sabA0',
          duration: '18:45',
          type: 'youtube',
          description: 'Introduction to machine learning concepts and algorithms'
        }
      ]
    },
    {
      id: 8,
      title: 'Machine Learning Basics',
      difficulty: 'intermediate',
      tags: ['Python', 'ML', 'Scikit-learn'],
      description: 'Introduction to machine learning algorithms and implementation.',
      instructor: 'Sophia Lee',
      duration: '8 weeks',
      level: 'Intermediate',
      roadmap: [
        {
          title: 'ML Concepts',
          videoUrl: 'https://www.youtube.com/embed/KNAWp2S3w94',
          duration: '15:30',
          type: 'youtube',
          description: 'Core concepts and terminology in machine learning'
        },
        {
          title: 'Supervised vs Unsupervised',
          videoUrl: 'https://www.youtube.com/embed/7eh4d6sabA0',
          duration: '18:45',
          type: 'youtube',
          description: 'Understanding different types of machine learning'
        },
        {
          title: 'Regression Models',
          videoUrl: 'https://www.youtube.com/embed/8jazNUpO3lQ',
          duration: '22:15',
          type: 'youtube',
          description: 'Implementing linear and logistic regression models'
        },
        {
          title: 'Classification Models',
          videoUrl: 'https://www.youtube.com/embed/Zx2TguRHrJE',
          duration: '25:40',
          type: 'youtube',
          description: 'Building classification models with scikit-learn'
        },
        {
          title: 'Model Evaluation',
          videoUrl: 'https://www.youtube.com/embed/HdlDYng8g9s',
          duration: '20:15',
          type: 'youtube',
          description: 'Evaluating model performance with metrics'
        },
        {
          title: 'Feature Engineering',
          videoUrl: 'https://www.youtube.com/embed/pi1PvMD90t8',
          duration: '28:30',
          type: 'youtube',
          description: 'Techniques for feature selection and engineering'
        },
        {
          title: 'Hyperparameter Tuning',
          videoUrl: 'https://www.youtube.com/embed/D0efHEJsfHo',
          duration: '19:45',
          type: 'youtube',
          description: 'Optimizing model performance through hyperparameter tuning'
        },
        {
          title: 'Model Deployment',
          videoUrl: 'https://www.youtube.com/embed/fw6NMQrY4nE',
          duration: '32:20',
          type: 'youtube',
          description: 'Deploying machine learning models to production'
        }
      ]
    },
    {
      id: 9,
      title: 'Deep Learning with TensorFlow',
      difficulty: 'advanced',
      tags: ['Python', 'TensorFlow', 'Neural Networks'],
      description: 'Build and train neural networks using TensorFlow and Keras.',
      instructor: 'Daniel Kim',
      duration: '10 weeks',
      level: 'Advanced',
      roadmap: [
        {
          title: 'Neural Network Basics',
          videoUrl: 'https://www.youtube.com/embed/aircAruvnKk',
          duration: '19:13',
          type: 'youtube',
          description: 'Fundamentals of neural networks and deep learning'
        },
        {
          title: 'TensorFlow Fundamentals',
          videoUrl: 'https://www.youtube.com/embed/tPYj3fFJGjk',
          duration: '2:10:55',
          type: 'youtube',
          description: 'Introduction to TensorFlow framework and its components'
        },
        {
          title: 'Convolutional Networks',
          videoUrl: 'https://www.youtube.com/embed/YRhxdVk_sIs',
          duration: '1:15:30',
          type: 'youtube',
          description: 'Building CNN models for image recognition'
        },
        {
          title: 'Recurrent Networks',
          videoUrl: 'https://www.youtube.com/embed/8HyCNIVRbSU',
          duration: '1:22:45',
          type: 'youtube',
          description: 'Working with RNNs and LSTMs for sequence data'
        },
        {
          title: 'Transfer Learning',
          videoUrl: 'https://www.youtube.com/embed/4pIuWjz7ZX0',
          duration: '45:20',
          type: 'youtube',
          description: 'Leveraging pre-trained models with transfer learning'
        },
        {
          title: 'Natural Language Processing',
          videoUrl: 'https://www.youtube.com/embed/B2q5cRJvqI8',
          duration: '1:08:15',
          type: 'youtube',
          description: 'NLP techniques with deep learning models'
        },
        {
          title: 'Computer Vision',
          videoUrl: 'https://www.youtube.com/embed/6g4O5UOH304',
          duration: '52:40',
          type: 'youtube',
          description: 'Implementing computer vision applications'
        },
        {
          title: 'Model Optimization',
          videoUrl: 'https://www.youtube.com/embed/7sB052Pz0sQ',
          duration: '38:25',
          type: 'youtube',
          description: 'Techniques for optimizing deep learning models'
        }
      ]
    },
    {
      id: 10,
      title: 'Data Visualization Mastery',
      difficulty: 'intermediate',
      tags: ['Python', 'Matplotlib', 'Seaborn'],
      description: 'Create stunning data visualizations with Python libraries.',
      instructor: 'Olivia Martin',
      duration: '5 weeks',
      level: 'Intermediate',
      roadmap: [
        {
          title: 'Matplotlib Fundamentals',
          videoUrl: 'https://www.youtube.com/embed/3Xc3CA655Y4',
          duration: '35:20',
          type: 'youtube',
          description: 'Core plotting techniques with Matplotlib'
        },
        {
          title: 'Seaborn for Statistical Viz',
          videoUrl: 'https://www.youtube.com/embed/6GUZXDef2U0',
          duration: '42:15',
          type: 'youtube',
          description: 'Statistical visualization with Seaborn'
        },
        {
          title: 'Plotly Interactive Charts',
          videoUrl: 'https://www.youtube.com/embed/GGL6U0k8WYA',
          duration: '28:45',
          type: 'youtube',
          description: 'Creating interactive visualizations with Plotly'
        },
        {
          title: 'Geospatial Visualization',
          videoUrl: 'https://www.youtube.com/embed/J9To6kYq-xU',
          duration: '33:30',
          type: 'youtube',
          description: 'Visualizing geographic and spatial data'
        },
        {
          title: 'Dashboard Creation',
          videoUrl: 'https://www.youtube.com/embed/0mfIK8zxUds',
          duration: '45:15',
          type: 'youtube',
          description: 'Building interactive dashboards for data exploration'
        },
        {
          title: 'Storytelling with Data',
          videoUrl: 'https://www.youtube.com/embed/p8dZ3gGg-0c',
          duration: '25:40',
          type: 'youtube',
          description: 'Effective data storytelling techniques'
        },
        {
          title: 'Visualization Best Practices',
          videoUrl: 'https://www.youtube.com/embed/SLJV0bt66C0',
          duration: '22:15',
          type: 'youtube',
          description: 'Design principles for effective data visualization'
        }
      ]
    },
    {
      id: 11,
      title: 'Big Data with PySpark',
      difficulty: 'advanced',
      tags: ['Python', 'Spark', 'Big Data'],
      description: 'Process large datasets using PySpark and distributed computing.',
      instructor: 'William Brown',
      duration: '8 weeks',
      level: 'Advanced',
      roadmap: [
        {
          title: 'Spark Architecture',
          videoUrl: 'https://www.youtube.com/embed/9mELEARcxJo',
          duration: '18:45',
          type: 'youtube',
          description: 'Understanding Spark distributed computing model'
        },
        {
          title: 'RDDs and DataFrames',
          videoUrl: 'https://www.youtube.com/embed/8Tr2wR9nZ3E',
          duration: '25:30',
          type: 'youtube',
          description: 'Working with Resilient Distributed Datasets (RDDs)'
        },
        {
          title: 'Spark SQL',
          videoUrl: 'https://www.youtube.com/embed/Aq5YkQ2OJhI',
          duration: '32:15',
          type: 'youtube',
          description: 'Querying structured data with Spark SQL'
        },
        {
          title: 'Stream Processing',
          videoUrl: 'https://www.youtube.com/embed/il0gD1zJbBQ',
          duration: '28:40',
          type: 'youtube',
          description: 'Real-time data processing with Spark Streaming'
        },
        {
          title: 'Machine Learning with Spark',
          videoUrl: 'https://www.youtube.com/embed/edT3AmYJk4k',
          duration: '35:20',
          type: 'youtube',
          description: 'Building ML pipelines with Spark MLlib'
        },
        {
          title: 'Performance Tuning',
          videoUrl: 'https://www.youtube.com/embed/1P7O8T0PKpg',
          duration: '22:45',
          type: 'youtube',
          description: 'Optimizing Spark job performance'
        },
        {
          title: 'Cluster Management',
          videoUrl: 'https://www.youtube.com/embed/5JD8IeflZ4g',
          duration: '30:15',
          type: 'youtube',
          description: 'Managing Spark clusters and resources'
        }
      ]
    },
    {
      id: 12,
      title: 'Natural Language Processing',
      difficulty: 'advanced',
      tags: ['Python', 'NLP', 'Text Processing'],
      description: 'Process and analyze text data using NLP techniques.',
      instructor: 'Emily Wilson',
      duration: '7 weeks',
      level: 'Advanced',
      roadmap: [
        {
          title: 'Text Preprocessing',
          videoUrl: 'https://www.youtube.com/embed/X2vAabgKiuM',
          duration: '25:40',
          type: 'youtube',
          description: 'Cleaning and preparing text data for analysis'
        },
        {
          title: 'Word Embeddings',
          videoUrl: 'https://www.youtube.com/embed/viZrOnJclY0',
          duration: '18:30',
          type: 'youtube',
          description: 'Understanding word2vec and other embedding techniques'
        },
        {
          title: 'Sentiment Analysis',
          videoUrl: 'https://www.youtube.com/embed/Y_hzMnRXjhI',
          duration: '22:15',
          type: 'youtube',
          description: 'Analyzing sentiment in text data'
        },
        {
          title: 'Topic Modeling',
          videoUrl: 'https://www.youtube.com/embed/T05t-SqKArY',
          duration: '28:45',
          type: 'youtube',
          description: 'Extracting topics from text collections'
        },
        {
          title: 'Text Classification',
          videoUrl: 'https://www.youtube.com/embed/BcpB-5W6aU0',
          duration: '35:20',
          type: 'youtube',
          description: 'Building classifiers for text data'
        },
        {
          title: 'Transformer Models',
          videoUrl: 'https://www.youtube.com/embed/xBRLI5hDl6Q',
          duration: '42:30',
          type: 'youtube',
          description: 'Working with BERT and other transformer models'
        },
        {
          title: 'Chatbot Development',
          videoUrl: 'https://www.youtube.com/embed/RpWeNzfSUHw',
          duration: '38:15',
          type: 'youtube',
          description: 'Building conversational AI with NLP'
        }
      ]
    },
  
    // Blockchain (6 courses)
    {
      id: 13,
      title: 'Blockchain Fundamentals',
      difficulty: 'beginner',
      tags: ['Blockchain', 'Cryptography', 'Decentralization'],
      description: 'Understand blockchain technology and its applications.',
      instructor: 'Michael Clark',
      duration: '4 weeks',
      level: 'Beginner',
      roadmap: [
        {
          title: 'Blockchain Basics',
          videoUrl: 'https://www.youtube.com/embed/SSo_EIwHSd4',
          duration: '14:22',
          type: 'youtube',
          description: 'Introduction to blockchain concepts and architecture'
        },
        {
          title: 'Cryptography Fundamentals',
          videoUrl: 'https://www.youtube.com/embed/jzY4UWeWkq4',
          duration: '18:45',
          type: 'youtube',
          description: 'Cryptographic principles behind blockchain'
        },
        {
          title: 'Consensus Mechanisms',
          videoUrl: 'https://www.youtube.com/embed/2oRDPt2WXKs',
          duration: '22:30',
          type: 'youtube',
          description: 'Understanding PoW, PoS and other consensus algorithms'
        },
        {
          title: 'Smart Contracts Intro',
          videoUrl: 'https://www.youtube.com/embed/pWGLtjG-F5c',
          duration: '15:20',
          type: 'youtube',
          description: 'Introduction to smart contract concepts'
        },
        {
          title: 'Ethereum Basics',
          videoUrl: 'https://www.youtube.com/embed/IsXvoYeJxKA',
          duration: '28:45',
          type: 'youtube',
          description: 'Ethereum blockchain and its ecosystem'
        },
        {
          title: 'Wallets and Transactions',
          videoUrl: 'https://www.youtube.com/embed/GCDLZzWUjds',
          duration: '19:30',
          type: 'youtube',
          description: 'Working with crypto wallets and transactions'
        },
        {
          title: 'DApps Overview',
          videoUrl: 'https://www.youtube.com/embed/F50OrwV6Uk8',
          duration: '25:15',
          type: 'youtube',
          description: 'Introduction to decentralized applications'
        },
        {
          title: 'Use Cases',
          videoUrl: 'https://www.youtube.com/embed/yubzJw0uiE4',
          duration: '32:20',
          type: 'youtube',
          description: 'Real-world blockchain applications and use cases'
        }
      ]
    },
    {
      id: 14,
      title: 'Smart Contract Development',
      difficulty: 'intermediate',
      tags: ['Solidity', 'Ethereum', 'Smart Contracts'],
      description: 'Learn to develop and deploy smart contracts on Ethereum.',
      instructor: 'Jessica Adams',
      duration: '6 weeks',
      level: 'Intermediate',
      roadmap: [
        {
          title: 'Solidity Syntax',
          videoUrl: 'https://www.youtube.com/embed/ipwxYa-F1uY',
          duration: '1:12:45',
          type: 'youtube',
          description: 'Solidity programming language fundamentals'
        },
        {
          title: 'Smart Contract Structure',
          videoUrl: 'https://www.youtube.com/embed/8FmX2JIL5-E',
          duration: '25:30',
          type: 'youtube',
          description: 'Anatomy of a smart contract'
        },
        {
          title: 'Testing Contracts',
          videoUrl: 'https://www.youtube.com/embed/3i822ZJwJbA',
          duration: '32:15',
          type: 'youtube',
          description: 'Writing tests for smart contracts'
        },
        {
          title: 'Deployment',
          videoUrl: 'https://www.youtube.com/embed/8FBDXfGk7x8',
          duration: '28:40',
          type: 'youtube',
          description: 'Deploying contracts to Ethereum networks'
        },
        {
          title: 'Interacting with Contracts',
          videoUrl: 'https://www.youtube.com/embed/yk7nVp5HTCk',
          duration: '35:20',
          type: 'youtube',
          description: 'Interacting with deployed contracts'
        },
        {
          title: 'Security Best Practices',
          videoUrl: 'https://www.youtube.com/embed/4WfN6r1m5Tw',
          duration: '42:45',
          type: 'youtube',
          description: 'Writing secure smart contracts'
        },
        {
          title: 'Upgrade Patterns',
          videoUrl: 'https://www.youtube.com/embed/bdXJmWqvZt8',
          duration: '22:30',
          type: 'youtube',
          description: 'Strategies for upgrading smart contracts'
        },
        {
          title: 'Gas Optimization',
          videoUrl: 'https://www.youtube.com/embed/6VIb_-kSYk8',
          duration: '18:15',
          type: 'youtube',
          description: 'Optimizing gas usage in smart contracts'
        }
      ]
    },
    {
      id: 15,
      title: 'DeFi Development',
      difficulty: 'advanced',
      tags: ['DeFi', 'Smart Contracts', 'Web3'],
      description: 'Build decentralized finance applications on Ethereum.',
      instructor: 'Kevin White',
      duration: '8 weeks',
      level: 'Advanced',
      roadmap: [
        {
          title: 'DeFi Concepts',
          videoUrl: 'https://www.youtube.com/embed/17QRFlml4pA',
          duration: '25:40',
          type: 'youtube',
          description: 'Introduction to decentralized finance'
        },
        {
          title: 'Token Standards',
          videoUrl: 'https://www.youtube.com/embed/cWQ3NXh5tUE',
          duration: '32:15',
          type: 'youtube',
          description: 'ERC-20, ERC-721 and other token standards'
        },
        {
          title: 'Lending Protocols',
          videoUrl: 'https://www.youtube.com/embed/M576WGiDBdQ',
          duration: '28:45',
          type: 'youtube',
          description: 'Building lending platforms like Compound'
        },
        {
          title: 'DEX Development',
          videoUrl: 'https://www.youtube.com/embed/c98KY_fAplg',
          duration: '35:20',
          type: 'youtube',
          description: 'Creating decentralized exchanges'
        },
        {
          title: 'Yield Farming',
          videoUrl: 'https://www.youtube.com/embed/8PA1wR9WjF8',
          duration: '22:30',
          type: 'youtube',
          description: 'Implementing yield farming strategies'
        },
        {
          title: 'Oracles',
          videoUrl: 'https://www.youtube.com/embed/8LcEG9j1fQ0',
          duration: '18:45',
          type: 'youtube',
          description: 'Integrating price feeds and external data'
        },
        {
          title: 'Security Auditing',
          videoUrl: 'https://www.youtube.com/embed/4WfN6r1m5Tw',
          duration: '42:15',
          type: 'youtube',
          description: 'Auditing DeFi applications for vulnerabilities'
        }
      ]
    },
    {
      id: 16,
      title: 'NFT Development',
      difficulty: 'intermediate',
      tags: ['NFTs', 'ERC-721', 'Digital Assets'],
      description: 'Create and deploy NFT collections on Ethereum.',
      instructor: 'Rachel Green',
      duration: '5 weeks',
      level: 'Intermediate',
      roadmap: [
        {
          title: 'NFT Standards',
          videoUrl: 'https://www.youtube.com/embed/YaVdvDZRk6M',
          duration: '18:30',
          type: 'youtube',
          description: 'ERC-721 and ERC-1155 standards for NFTs'
        },
        {
          title: 'Metadata Standards',
          videoUrl: 'https://www.youtube.com/embed/9oERTH9Bkw0',
          duration: '15:45',
          type: 'youtube',
          description: 'Designing NFT metadata structures'
        },
        {
          title: 'Minting Contracts',
          videoUrl: 'https://www.youtube.com/embed/meTpMP0J5E8',
          duration: '22:20',
          type: 'youtube',
          description: 'Creating NFT minting smart contracts'
        },
        {
          title: 'Marketplace Integration',
          videoUrl: 'https://www.youtube.com/embed/gfUUe6P4n_w',
          duration: '28:45',
          type: 'youtube',
          description: 'Integrating with NFT marketplaces'
        },
        {
          title: 'Royalty Systems',
          videoUrl: 'https://www.youtube.com/embed/6viFzE8m0QQ',
          duration: '15:30',
          type: 'youtube',
          description: 'Implementing royalty payments for creators'
        },
        {
          title: 'Gas Optimization',
          videoUrl: 'https://www.youtube.com/embed/6VIb_-kSYk8',
          duration: '20:15',
          type: 'youtube',
          description: 'Reducing gas costs for NFT transactions'
        },
        {
          title: 'IPFS Storage',
          videoUrl: 'https://www.youtube.com/embed/5Uj6uR3fp-U',
          duration: '18:40',
          type: 'youtube',
          description: 'Storing NFT assets on decentralized storage'
        }
      ]
    },
    {
      id: 17,
      title: 'Web3.js and Ethers.js',
      difficulty: 'intermediate',
      tags: ['Web3', 'JavaScript', 'Blockchain'],
      description: 'Interact with blockchain networks using JavaScript libraries.',
      instructor: 'Thomas Lee',
      duration: '4 weeks',
      level: 'Intermediate',
      roadmap: [
        {
          title: 'Web3.js Fundamentals',
          videoUrl: 'https://www.youtube.com/embed/t3wM1vkr8R8',
          duration: '25:40',
          type: 'youtube',
          description: 'Introduction to Web3.js library'
        },
        {
          title: 'Ethers.js Basics',
          videoUrl: 'https://www.youtube.com/embed/cqdAQK7WOlE',
          duration: '32:15',
          type: 'youtube',
          description: 'Working with Ethers.js library'
        },
        {
          title: 'Wallet Integration',
          videoUrl: 'https://www.youtube.com/embed/yk7nVp5HTCk',
          duration: '28:45',
          type: 'youtube',
          description: 'Connecting web3 applications to wallets'
        },
        {
          title: 'Contract Interaction',
          videoUrl: 'https://www.youtube.com/embed/5Qh5ZjNHn9k',
          duration: '35:20',
          type: 'youtube',
          description: 'Interacting with smart contracts from frontend'
        },
        {
          title: 'Event Listening',
          videoUrl: 'https://www.youtube.com/embed/3qLdJWNolR4',
          duration: '22:30',
          type: 'youtube',
          description: 'Listening to blockchain events'
        },
        {
          title: 'Transaction Building',
          videoUrl: 'https://www.youtube.com/embed/5Qh5ZjNHn9k',
          duration: '18:45',
          type: 'youtube',
          description: 'Constructing and sending transactions'
        },
        {
          title: 'Error Handling',
          videoUrl: 'https://www.youtube.com/embed/3qLdJWNolR4',
          duration: '15:20',
          type: 'youtube',
          description: 'Handling errors in web3 applications'
        }
      ]
    },
    {
      id: 18,
      title: 'Blockchain Security',
      difficulty: 'advanced',
      tags: ['Security', 'Auditing', 'Smart Contracts'],
      description: 'Learn to audit and secure blockchain applications.',
      instructor: 'Amanda Scott',
      duration: '6 weeks',
      level: 'Advanced',
      roadmap: [
        {
          title: 'Common Vulnerabilities',
          videoUrl: 'https://www.youtube.com/embed/4WfN6r1m5Tw',
          duration: '42:15',
          type: 'youtube',
          description: 'Most common smart contract vulnerabilities'
        },
        {
          title: 'Reentrancy Attacks',
          videoUrl: 'https://www.youtube.com/embed/4Mm3BCyHtDY',
          duration: '25:30',
          type: 'youtube',
          description: 'Understanding and preventing reentrancy attacks'
        },
        {
          title: 'Front-running',
          videoUrl: 'https://www.youtube.com/embed/zPxf2QKyS2g',
          duration: '18:45',
          type: 'youtube',
          description: 'Mitigating front-running in DeFi applications'
        },
        {
          title: 'Audit Tools',
          videoUrl: 'https://www.youtube.com/embed/3i822ZJwJbA',
          duration: '32:20',
          type: 'youtube',
          description: 'Tools for smart contract auditing'
        },
        {
          title: 'Formal Verification',
          videoUrl: 'https://www.youtube.com/embed/3qLdJWNolR4',
          duration: '28:15',
          type: 'youtube',
          description: 'Mathematically verifying contract correctness'
        },
        {
          title: 'Security Patterns',
          videoUrl: 'https://www.youtube.com/embed/4WfN6r1m5Tw',
          duration: '35:40',
          type: 'youtube',
          description: 'Secure design patterns for smart contracts'
        },
        {
          title: 'Bug Bounty Programs',
          videoUrl: 'https://www.youtube.com/embed/3i822ZJwJbA',
          duration: '22:45',
          type: 'youtube',
          description: 'Participating in blockchain security bounties'
        }
      ]
    },
  
    // DevOps (6 courses)
    {
      id: 19,
      title: 'DevOps Essentials',
      difficulty: 'beginner',
      tags: ['Docker', 'CI/CD', 'AWS'],
      description: 'Learn essential DevOps practices and tools.',
      instructor: 'Brian Hall',
      duration: '6 weeks',
      level: 'Beginner',
      roadmap: [
        {
          title: 'DevOps Culture',
          videoUrl: 'https://www.youtube.com/embed/_I94-tJlovg',
          duration: '18:45',
          type: 'youtube',
          description: 'Understanding DevOps principles and culture'
        },
        {
          title: 'Version Control',
          videoUrl: 'https://www.youtube.com/embed/USjZcfj8yxE',
          duration: '1:15:30',
          type: 'youtube',
          description: 'Git workflows for DevOps teams'
        },
        {
          title: 'CI/CD Pipelines',
          videoUrl: 'https://www.youtube.com/embed/1er2cjUq1UI',
          duration: '22:45',
          type: 'youtube',
          description: 'Building continuous integration and delivery pipelines'
        },
        {
          title: 'Containerization',
          videoUrl: 'https://www.youtube.com/embed/3c-iBn73dDE',
          duration: '19:20',
          type: 'youtube',
          description: 'Introduction to Docker and container concepts'
        },
        {
          title: 'Orchestration',
          videoUrl: 'https://www.youtube.com/embed/h0NCZbHjIpY',
          duration: '25:30',
          type: 'youtube',
          description: 'Container orchestration with Kubernetes'
        },
        {
          title: 'Infrastructure as Code',
          videoUrl: 'https://www.youtube.com/embed/SO8lBVWF2Y4',
          duration: '28:45',
          type: 'youtube',
          description: 'Managing infrastructure with Terraform'
        },
        {
          title: 'Monitoring',
          videoUrl: 'https://www.youtube.com/embed/ZemNg9GYvOA',
          duration: '32:15',
          type: 'youtube',
          description: 'Application and infrastructure monitoring'
        },
        {
          title: 'Cloud Deployment',
          videoUrl: 'https://www.youtube.com/embed/RrKRN9zRBWs',
          duration: '35:20',
          type: 'youtube',
          description: 'Deploying applications to cloud platforms'
        }
      ]
    },
    {
      id: 20,
      title: 'Docker Mastery',
      difficulty: 'intermediate',
      tags: ['Docker', 'Containers', 'Microservices'],
      description: 'Master containerization with Docker and Docker Compose.',
      instructor: 'Nancy Adams',
      duration: '5 weeks',
      level: 'Intermediate',
      roadmap: [
        {
          title: 'Container Basics',
          videoUrl: 'https://www.youtube.com/embed/gAkwW2tuIqE',
          duration: '15:30',
          type: 'youtube',
          description: 'Core concepts of containerization'
        },
        {
          title: 'Dockerfiles',
          videoUrl: 'https://www.youtube.com/embed/WmcdMiyqfZs',
          duration: '22:45',
          type: 'youtube',
          description: 'Writing effective Dockerfiles'
        },
        {
          title: 'Docker Compose',
          videoUrl: 'https://www.youtube.com/embed/DM65_JyGxCo',
          duration: '18:20',
          type: 'youtube',
          description: 'Managing multi-container applications'
        },
        {
          title: 'Networking',
          videoUrl: 'https://www.youtube.com/embed/bKFMS5C4CG0',
          duration: '25:40',
          type: 'youtube',
          description: 'Docker networking concepts'
        },
        {
          title: 'Storage',
          videoUrl: 'https://www.youtube.com/embed/3RTvoIx1Y3Y',
          duration: '19:15',
          type: 'youtube',
          description: 'Managing persistent data in containers'
        },
        {
          title: 'Security',
          videoUrl: 'https://www.youtube.com/embed/KINjI1tlo2Q',
          duration: '28:30',
          type: 'youtube',
          description: 'Securing Docker containers'
        },
        {
          title: 'Optimization',
          videoUrl: 'https://www.youtube.com/embed/s5QTr_rWlDk',
          duration: '22:45',
          type: 'youtube',
          description: 'Optimizing Docker images and containers'
        },
        {
          title: 'Production Deployment',
          videoUrl: 'https://www.youtube.com/embed/7S73WERRqO4',
          duration: '35:20',
          type: 'youtube',
          description: 'Deploying containers to production'
        }
      ]
    },
    {
      id: 21,
      title: 'Kubernetes in Production',
      difficulty: 'advanced',
      tags: ['Kubernetes', 'Cloud', 'Scaling'],
      description: 'Deploy and manage applications at scale with Kubernetes.',
      instructor: 'Paul Wilson',
      duration: '8 weeks',
      level: 'Advanced',
      roadmap: [
        {
          title: 'K8s Architecture',
          videoUrl: 'https://www.youtube.com/embed/UMaaiwr1kUQ',
          duration: '25:40',
          type: 'youtube',
          description: 'Kubernetes cluster architecture'
        },
        {
          title: 'Pods and Services',
          videoUrl: 'https://www.youtube.com/embed/WwBdNXt6wO4',
          duration: '32:15',
          type: 'youtube',
          description: 'Working with pods and services'
        },
        {
          title: 'Deployments',
          videoUrl: 'https://www.youtube.com/embed/QJ4fODH5DDU',
          duration: '28:45',
          type: 'youtube',
          description: 'Managing application deployments'
        },
        {
          title: 'Scaling',
          videoUrl: 'https://www.youtube.com/embed/xjpHggHKm78',
          duration: '35:20',
          type: 'youtube',
          description: 'Horizontal and vertical scaling'
        },
        {
          title: 'Monitoring',
          videoUrl: 'https://www.youtube.com/embed/hksuK1Bf5so',
          duration: '22:30',
          type: 'youtube',
          description: 'Monitoring Kubernetes clusters'
        },
        {
          title: 'Security',
          videoUrl: 'https://www.youtube.com/embed/4ht22ReBjno',
          duration: '42:15',
          type: 'youtube',
          description: 'Kubernetes security best practices'
        },
        {
          title: 'Helm Charts',
          videoUrl: 'https://www.youtube.com/embed/-ykwb1d0DXU',
          duration: '28:30',
          type: 'youtube',
          description: 'Package management with Helm'
        },
        {
          title: 'Troubleshooting',
          videoUrl: 'https://www.youtube.com/embed/7S73WERRqO4',
          duration: '35:20',
          type: 'youtube',
          description: 'Debugging Kubernetes applications'
        }
      ]
    },
    {
      id: 22,
      title: 'AWS Certified Solutions Architect',
      difficulty: 'advanced',
      tags: ['AWS', 'Cloud', 'Architecture'],
      description: 'Prepare for the AWS Solutions Architect certification.',
      instructor: 'Laura King',
      duration: '10 weeks',
      level: 'Advanced',
      roadmap: [
        {
          title: 'EC2 and VPC',
          videoUrl: 'https://www.youtube.com/embed/ITN5eY2QuYI',
          duration: '1:12:45',
          type: 'youtube',
          description: 'AWS compute and networking services'
        },
        {
          title: 'S3 and Storage',
          videoUrl: 'https://www.youtube.com/embed/77lMCiiMilo',
          duration: '45:30',
          type: 'youtube',
          description: 'AWS storage services and options'
        },
        {
          title: 'Databases',
          videoUrl: 'https://www.youtube.com/embed/eMzCI7S1P9M',
          duration: '52:15',
          type: 'youtube',
          description: 'AWS database services overview'
        },
        {
          title: 'Networking',
          videoUrl: 'https://www.youtube.com/embed/hKrYfhC7IOw',
          duration: '38:40',
          type: 'youtube',
          description: 'AWS networking concepts and services'
        },
        {
          title: 'Security',
          videoUrl: 'https://www.youtube.com/embed/ITN5eY2QuYI',
          duration: '42:15',
          type: 'youtube',
          description: 'AWS security best practices'
        },
        {
          title: 'Serverless',
          videoUrl: 'https://www.youtube.com/embed/EKLbullV0OM',
          duration: '35:20',
          type: 'youtube',
          description: 'Building serverless applications on AWS'
        },
        {
          title: 'Migration',
          videoUrl: 'https://www.youtube.com/embed/ITN5eY2QuYI',
          duration: '28:45',
          type: 'youtube',
          description: 'Migration strategies to AWS cloud'
        },
        {
          title: 'Cost Optimization',
          videoUrl: 'https://www.youtube.com/embed/ITN5eY2QuYI',
          duration: '22:30',
          type: 'youtube',
          description: 'Cost management and optimization on AWS'
        }
      ]
    },
    {
      id: 23,
      title: 'Terraform for Infrastructure',
      difficulty: 'intermediate',
      tags: ['Terraform', 'IaC', 'Cloud'],
      description: 'Manage infrastructure as code with Terraform.',
      instructor: 'Mark Davis',
      duration: '6 weeks',
      level: 'Intermediate',
      roadmap: [
        {
          title: 'Terraform Basics',
          videoUrl: 'https://www.youtube.com/embed/SLB_c_ayRMo',
          duration: '25:40',
          type: 'youtube',
          description: 'Introduction to Terraform and infrastructure as code'
        },
        {
          title: 'State Management',
          videoUrl: 'https://www.youtube.com/embed/JO2bY7OBykA',
          duration: '32:15',
          type: 'youtube',
          description: 'Managing Terraform state files'
        },
        {
          title: 'Modules',
          videoUrl: 'https://www.youtube.com/embed/3a2lYJZ6XvU',
          duration: '28:45',
          type: 'youtube',
          description: 'Creating and using Terraform modules'
        },
        {
          title: 'Provisioners',
          videoUrl: 'https://www.youtube.com/embed/JO2bY7OBykA',
          duration: '22:30',
          type: 'youtube',
          description: 'Using provisioners for configuration management'
        },
        {
          title: 'Workspaces',
          videoUrl: 'https://www.youtube.com/embed/3a2lYJZ6XvU',
          duration: '18:45',
          type: 'youtube',
          description: 'Managing environments with workspaces'
        },
        {
          title: 'CI/CD Integration',
          videoUrl: 'https://www.youtube.com/embed/SLB_c_ayRMo',
          duration: '35:20',
          type: 'youtube',
          description: 'Integrating Terraform with CI/CD pipelines'
        },
        {
          title: 'Best Practices',
          videoUrl: 'https://www.youtube.com/embed/JO2bY7OBykA',
          duration: '42:15',
          type: 'youtube',
          description: 'Terraform coding and workflow best practices'
        }
      ]
    },
    {
      id: 24,
      title: 'GitOps with ArgoCD',
      difficulty: 'advanced',
      tags: ['GitOps', 'Kubernetes', 'CI/CD'],
      description: 'Implement GitOps workflows with ArgoCD.',
      instructor: 'Samantha Brown',
      duration: '5 weeks',
      level: 'Advanced',
      roadmap: [
        {
          title: 'GitOps Principles',
          videoUrl: 'https://www.youtube.com/embed/fcZYD5Dq0vo',
          duration: '25:40',
          type: 'youtube',
          description: 'Understanding GitOps methodology'
        },
        {
          title: 'ArgoCD Setup',
          videoUrl: 'https://www.youtube.com/embed/2WSJF7d8dUg',
          duration: '32:15',
          type: 'youtube',
          description: 'Installing and configuring ArgoCD'
        },
        {
          title: 'Application Patterns',
          videoUrl: 'https://www.youtube.com/embed/2WSJF7d8dUg',
          duration: '28:45',
          type: 'youtube',
          description: 'Application deployment patterns with ArgoCD'
        },
        {
          title: 'Sync Strategies',
          videoUrl: 'https://www.youtube.com/embed/fcZYD5Dq0vo',
          duration: '22:30',
          type: 'youtube',
          description: 'Different synchronization strategies'
        },
        {
          title: 'RBAC',
          videoUrl: 'https://www.youtube.com/embed/2WSJF7d8dUg',
          duration: '18:45',
          type: 'youtube',
          description: 'Role-based access control in ArgoCD'
        },
        {
          title: 'Troubleshooting',
          videoUrl: 'https://www.youtube.com/embed/fcZYD5Dq0vo',
          duration: '35:20',
          type: 'youtube',
          description: 'Debugging common ArgoCD issues'
        },
        {
          title: 'Multi-cluster',
          videoUrl: 'https://www.youtube.com/embed/2WSJF7d8dUg',
          duration: '42:15',
          type: 'youtube',
          description: 'Managing multiple clusters with ArgoCD'
        }
      ]
    }
  ];