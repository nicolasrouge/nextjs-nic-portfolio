export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>

      <p className="text-lg leading-6 my-4 mx-2 text-neutral-800 dark:text-neutral-200">
        Hi again 😃, I'm Nick, a Fullstack developer, I ensure that my applications are secure, reliable, and performant.
      </p>

      <p className="text-lg leading-6 my-4 mx-2 text-neutral-800 dark:text-neutral-200">
        Also a great communicator and collaborator. 
        I understand the importance of working closely with my clients to ensure that their needs are met. 
        I am always open to feedback and strive to maintain a positive working relationship.
      </p>

      <p className="text-lg leading-6 my-4 mx-2 text-neutral-800 dark:text-neutral-200">
        If you're interested in working with me on your next project, feel free to get in touch. I look forward to hearing from you!
      </p>

      <div className="flex flex-col items-center my-12">
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <p className="mb-4">Contact me 📧</p>
        <a
          href="mailto:nicolas.rouge777@gmail.com"
          className="text-orange-800 hover:text-orange-600 font-bold transition-colors"
        >
          nicolas.rouge***@gmail.com
        </a>
      </div>
      
    </section>
  );
}
