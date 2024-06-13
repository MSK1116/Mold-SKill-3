import React from "react";

const Aboutus_banner1 = () => {
  return (
    <>
      <div className="max-w-screen-2xl my-4  container mx-auto md:px-20px px-4 flex flex-col">
        <section className="overflow-hidden rounded-md bg-[url(https://www.nea.org/sites/default/files/styles/1920wide/public/2021-01/Free-Book.jpg?itok=A0UCklYk)] bg-fit bg-top bg-no-repeat">
          <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="text-center ">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">About us</h2>

              <p className="text-white mt-10">
                Creating a website dedicated to sharing educational resources is an excellent initiative. To maximize its impact and utility, it's crucial to have a well-organized content structure. Organize resources into clear categories like
                notes, practice questions, and past exam papers, and use tags for specific subjects or topics to make navigation easier. Incorporating a robust search functionality will also help users find the specific materials they need quickly.{" "}
              </p>
              <p className="text-white mt-10">
                Enhancing user interaction and engagement can significantly improve the website's community feel. Enabling comment sections allows users to ask questions and provide feedback, while discussion forums can facilitate broader
                conversations and peer support. Implementing a rating system for resources can help highlight the most valuable materials.
              </p>
              <p className="text-white mt-10">
                Regularly updating the website with new content is vital to keep users engaged. Consider sending out a newsletter to inform users about new additions and updates. Additionally, maintaining a blog with study tips, educational news, and
                interviews with educators can provide additional value and keep the community engaged.
              </p>
              <div className="mt-4 sm:mt-8">
                <a href="#" className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                  Have a feedback?
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Aboutus_banner1;
