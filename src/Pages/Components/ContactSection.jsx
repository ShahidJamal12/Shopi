const ContactSection = () => {
  return (
    <section className="contact-section w-screen h-full relative top-20 py-20 px-5 max-sm:px-0">
      <div className="flex justify-center items-center w-full h-full max-sm:flex-wrap gap-5 max-sm:gap-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d236.6058760975424!2d79.9069079441048!3d27.868637370379997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1735401088413!5m2!1sen!2sin"
          className="w-full h-96"
        ></iframe>
        <form
          className="form flex justify-center items-center flex-col w-full"
          action="https://formspree.io/f/xlddbqva"
          method="POST"
        >
          <div className="flex justify-center items-start flex-col gap-4">
            <input
              type="text"
              placeholder="USERNAME"
              name="username"
              className="px-3 py-1.5 w-80 border-2 border-slate-500 text-slate-500 transition-all focus:text-white focus:outline-violet-600 2xl:w-96 2xl:px-5 2xl:py-3.5 focus:bg-violet-600"
              required
            />
            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              className="px-3 py-1.5 w-80 border-2 border-slate-500 text-slate-500 transition-all focus:text-white focus:outline-violet-600 2xl:w-96 2xl:px-5 2xl:py-3.5 focus:bg-violet-600"
              required
            />
            <textarea
              placeholder="MESSAGE..."
              name="message"
              className="px-3 py-1.5 w-80 h-40 border-2 border-slate-500 text-slate-500 transition-all focus:text-white focus:outline-violet-600 2xl:w-96 2xl:px-5 2xl:py-3.5 2xl:h-56 focus:bg-violet-600"
              required
            ></textarea>
            <button
              type="submit"
              className="uppercase py-2 px-7 border-2 border-violet-700 text-xl bg-transparent text-violet-700 transition-all hover:bg-violet-700 hover:text-white hover:rounded-md"
            >
              send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
