export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="text-lg leading-6 my-4 mx-2">
       Hi there, my name is Nick, and I am a Fullstack developer. I specialize in building web applications using .NET React and Azure.
        With over 4 years of experience in the industry, I have worked with a variety of clients and businesses, from small startups to large corporations. My goal is to help my clients achieve their vision by building efficient, scalable, and user-friendly applications that meet their unique needs.        
        </p>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        As a fullstack developer, I have a deep understanding of both frontend and backend development. I am experienced in working with databases, APIs, and third-party integrations to ensure that my applications are secure, reliable, and performant.
      </p>

      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        In addition to my technical skills, I am also a great communicator and collaborator. I understand the importance of working closely with my clients to ensure that their needs are met and their expectations are exceeded. I am always open to feedback and strive to maintain a positive working relationship with my clients.
        If you're interested in working with me on your next project, feel free to get in touch. I look forward to hearing from you!
      </p>
      <div className="flex flex-col items-center my-12">
      <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
      <p className="mb-4">Contact me by email:</p>
      <a
        href="mailto:youremail@example.com"
        className="text-yellow-500 hover:text-yellow-600 font-bold transition-colors"
      >
        nicolas.rouge777@gmail.com
      </a>
    </div>
    </section>
  );
}
