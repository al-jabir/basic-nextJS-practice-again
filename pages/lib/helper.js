export const getAllPost = () => {
  const postData = [
    {
      id: 1,
      title: 'new Post',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa sint quis porro molestias tempora maxime!',
    },
    {
      id: 2,
      title: 'second Post',
      des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa sint quis porro molestias tempora maxime!',
    },
  ];
  /* if (id) {
    return postData.filter((post) => post.id === id);
  }
 */
  return postData;
};
