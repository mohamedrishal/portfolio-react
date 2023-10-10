import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-green-800 to-black text-white'>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500  '>About</p>
            </div>
            <p className='text-xl mt-20 '>
           My Name is Mohamed Rishal.M .I'm a skilled and passionate full-stack web developer who possesses a wealth of knowledge and experience in the world of web development. With a strong foundation in both front-end and back-end technologies, he is a versatile and valuable asset in the ever-evolving field of web development.
            </p>
    
            <br />
    
            <p className='text-xl'>
            In addition to his technical skills ,a proactive problem solver who enjoys taking on new challenges. He stays updated with the latest trends and best practices in web development, keeping his skills sharp and relevant. His dedication to continuous learning and improvement makes him a valuable asset to any development team or project.
            </p>
        </div>
       </div>
  )
}

export default About