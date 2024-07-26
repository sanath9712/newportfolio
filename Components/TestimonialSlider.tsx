import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CodeBracketSquareIcon } from '@heroicons/react/20/solid';
import ClientReview from './ClientReview';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const projects = [
  {
    icon: <CodeBracketSquareIcon className="w-8 h-8 text-[#55e6a5]" />,
    title: "AlumniConnect Portal",
    description: "AlumniConnect Portal is a feature-rich platform designed to facilitate seamless communication and interaction among alumni. It includes email verification, password management, LinkedIn profile updates, and alumni-staff messaging. Alumni can post jobs, share experiences through blogs, and contribute via the donation page. The portal ensures security with Google reCAPTCHA and is accessible on all devices.",
    skills: "HTML5, CSS3, JavaScript, Bootstrap4, JQuery, AJAX, Python3, Django2, Cron, Sqlite3",
    githubLink: "https://github.com/manju1201/Alumni-portal"
  },
  {
    icon: <CodeBracketSquareIcon className="w-8 h-8 text-[#55e6a5]" />,
    title: "FlipkartAI: Smart Product Categorization",
    description: "Using Flipkart product data, this project builds a model to predict product categories based on descriptions. The process involves data analysis, visualization, cleaning, and preprocessing. Various models like Multinomial Naive Bayes, Decision Tree, Random Forest, and a CNN model are implemented to improve prediction accuracy. The project achieves high accuracy and suggests further improvements using advanced models like transformer-based models.",
    skills: "Python, Pandas, NumPy, Scikit-learn, NLTK, TensorFlow, Keras, Data Analysis, Machine Learning, NLP, Deep Learning",
    githubLink: "https://github.com/manju1201/Flipkart_Data_Classification_using_Description"
  },
  {
    icon: <CodeBracketSquareIcon className="w-8 h-8 text-[#55e6a5]" />,
    title: "VisionEnhance: Face Detection",
    description: "VisionEnhance utilizes the YOLOv3 algorithm for advanced face detection, even under challenging conditions. Leveraging the WIDER dataset, it offers a pre-trained model with image processing techniques to handle low-light, noisy, and blurred images. The system includes capabilities for both image and video inputs, ensuring robust performance. Users can also train their own models for customized applications. VisionEnhance aims to provide accurate and reliable face detection for a variety of environments.",
    skills: "Python, TensorFlow, OpenCV, Keras, Numpy, Matplotlib, Pillow, Image Processing, Deep Learning, YOLOv3",
    githubLink: "https://github.com/manju1201/FaceDetection"
  },
  {
    icon: <CodeBracketSquareIcon className="w-8 h-8 text-[#55e6a5]" />,
    title: "TweetRanker: Tweet Classification and Search",
    description: "TweetRanker uses advanced machine learning to classify and rank tweets from diverse domains like World Cup, US Elections, and Food Reviews. It employs TF-IDF and N-gram TF-IDF for term weighting and Multinomial Naive Bayes for classification. The system preprocesses data with lemmatization and tokenization, and builds an inverted index for ranked retrieval using a trie data structure. This ensures accurate and efficient search and classification for large tweet datasets.",
    skills: "Python, Pandas, NumPy, Scikit-learn, NLTK, Data Analysis, Machine Learning, TF-IDF, N-gram, Information Retrieval, Trie Data Structure",
    githubLink: "https://github.com/manju1201/IR_Project_Ranked_Retrieval"
  },
  {
    icon: <CodeBracketSquareIcon className="w-8 h-8 text-[#55e6a5]" />,
    title: "AgriGuard: AI-Driven Plant Disease Detection",
    description: "AgriGuard utilizes deep learning to detect plant diseases using the PlantVillage dataset. With over 54,000 images across 14 species and 38 disease classes, this project leverages the power of convolutional neural networks (CNNs) for accurate classification. The model, trained on Google Colab’s TPU instances, helps farmers identify plant diseases early, improving crop yield and quality. By automating disease detection, AgriGuard aids in proactive agricultural management, ensuring healthier crops and better productivity.",
    skills: "Python, Keras, TensorFlow, Jupyter Notebook, Deep Learning, CNNs, Image Processing, Data Augmentation",
    githubLink: "https://github.com/manju1201/plant-disease-detection"
  },
  {
    icon: <CodeBracketSquareIcon className="w-8 h-8 text-[#55e6a5]" />,
    title: "TwitSent: Sentiment Analysis",
    description: "TwitSent leverages the Natural Language Toolkit (NLTK) to perform sentiment analysis on Twitter data. Using the NaiveBayesClassifier, the model is trained on a dataset split with 70% for training and 30% for testing, achieving an accuracy of 99.7%. The project includes preprocessing steps such as noise removal, lemmatization, and tokenization. It identifies positive and negative sentiments in tweets, making it a powerful tool for social media analysis and opinion mining.",
    skills: "Python, NLTK, NaiveBayesClassifier, Text Processing, Tokenization, Lemmatization, Stop Words Removal, Frequency Distribution",
    githubLink: "https://github.com/manju1201/Sentiment-Analysis"
  },
];

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {projects.map((project, index) => (
        <ClientReview
          key={index}
          icon={project.icon}
          title={project.title}
          description={project.description}
          skills={project.skills}
          githubLink={project.githubLink}
        />
      ))}
    </Carousel>
  );
};

export default TestimonialSlider;
