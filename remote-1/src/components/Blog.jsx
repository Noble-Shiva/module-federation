import React from "react";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}


// <div>
  //   <div  class="py-12">
  //     <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
  //       <div class="mb-12 space-y-2 text-center">
  //         <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Sharing is Caring</h2>
  //         <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
  //           Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia
  //           aliquid explicabo? Excepturi, voluptate?
  //         </p>
  //       </div>
  //       <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  //         <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
  //           <div class="relative overflow-hidden rounded-xl">
  //             <img src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  //             alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
  //           </div>
  //           <div class="mt-6 relative">
  //             <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
  //               De fuga fugiat lorem ispum laboriosam expedita.
  //             </h3>
  //             <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
  //               Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
  //             </p>
  //             <a class="inline-block" href="#">
  //               <span class="text-primary">Read more</span>
  //             </a>
  //           </div>
  //         </div>
  //         <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
  //           <div class="relative overflow-hidden rounded-xl">
  //             <img src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
  //             alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
  //           </div>
  //           <div class="mt-6 relative">
  //             <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
  //               De fuga fugiat lorem ispum laboriosam expedita.
  //             </h3>
  //             <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
  //               Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
  //             </p>
  //             <a class="inline-block" href="#">
  //               <span class="text-primary">Read more</span>
  //             </a>
  //           </div>
  //         </div>
  //         <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
  //           <div class="relative overflow-hidden rounded-xl">
  //             <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
  //             alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
  //           </div>
  //           <div class="mt-6 relative">
  //             <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
  //               De fuga fugiat lorem ispum laboriosam expedita.
  //             </h3>
  //             <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
  //               Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
  //             </p>
  //             <a class="inline-block" href="#">
  //               <span class="text-primary">Read more</span>
  //             </a>
  //           </div>
            
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div> 