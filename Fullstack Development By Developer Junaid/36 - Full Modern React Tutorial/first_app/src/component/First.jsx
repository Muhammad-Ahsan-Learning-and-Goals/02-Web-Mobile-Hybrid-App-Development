const First = () => {
  const title = "React is Library";
  const age = 49;
  const link = "https://www.facebook.com/";
  return (
    <>
      <nav className="navbar">
        <h2> Blog</h2>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create">New Blog</a>
        </div>
      </nav>

      <div>First Component</div>
      <h3> {title}</h3>

      <h3> he is {age} yaers old</h3>
      <h3>{Math.random() * 3}</h3>

      <h3>
        <a href={link}> Link </a>
      </h3>
    </>
  );
};

export default First;
