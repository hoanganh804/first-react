import React, { useState, useEffect } from "react";
import ListTitle from "./ListTitle";
import PageControl from "./PageControl";
import querryString from "query-string";
import SearchBox from "./SearchBox";

export default function PageTest() {
  const [listPosts, setListPosts] = useState([{ id: 1, title: "hello" }]);
  const [pageControl, setPageControl] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });
  const { _page } = pageControl;
  const stringApi = querryString.stringify(pageControl);
  const apiPosts = `http://js-post-api.herokuapp.com/api/posts?${stringApi}`;

  useEffect(() => {
    fetch(apiPosts)
      .then(async (res) => {
        const posts = await res.json();
        const { data, pagination } = posts;
        const { _totalRows } = pagination;
        setListPosts(data);
        setPageControl({ ...pageControl, _totalRows: _totalRows });
      })
      .catch((err) => console.log(err));
  }, [apiPosts]);

  const handleButton = (page) => {
    setPageControl({
      ...pageControl,
      _page: page,
    });
  };

  const handleSearch = (filter) => {
    setPageControl({
      ...pageControl,
      _page: 1,
      title_like: filter,
    });
  };
  return (
    <>
      <h2>Posts</h2>
      <SearchBox onChangeText={handleSearch} />
      <ul>
        {listPosts.map((post) => {
          return <ListTitle key={post.id} postTitle={post.title} />;
        })}
      </ul>
      <span>{_page}</span>
      <div>
        <PageControl
          dieukien={false}
          pageControl={pageControl}
          onClickButton={handleButton}
        />
        <PageControl
          dieukien={true}
          pageControl={pageControl}
          onClickButton={handleButton}
        />
      </div>
    </>
  );
}
