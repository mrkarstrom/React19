import { use, Suspense } from 'react';

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const PostItems = () => {
  const posts = use(fetchData());
  return (
    <ul>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-gradient-to-r from-blue-100 to-blue-200 shadow-lg p-4 my-6 rounded-lg"
        >
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </ul>
  );
};

const Posts = () => {
  return (
    <Suspense
      fallback={<h1 className="font-bold text-center  ">Loading...</h1>}
    >
      <PostItems />;
    </Suspense>
  );
};

export { Posts as UseExample2 };
