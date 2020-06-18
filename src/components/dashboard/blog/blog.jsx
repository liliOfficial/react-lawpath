import React from "react";
import "./blog.scss";

const RecentlyBlog = () => {
  const blogs = [
    {
      img: require("./img/1.png"),
      title: "COVID-19: Resources for Businesses"
    },
    {
      img: require("./img/2.png"),
      title:
        "What Are the Differences Between the JobKeeper and JobSeeker Payment Schemes?"
    },
    {
      img: require("./img/3.png"),
      title: "Can My Business Remain Open During COVID-19?"
    },
    {
      img: require("./img/4.png"),
      title: "Court Responses to COVID-19"
    }
  ];
  return (
    <div className="card">
      <div className="card-header">
        <div>Recently on our blog</div>
        <div className="card-action">Read more</div>
      </div>
      <div>
        {blogs.map((blog, index) => {
          return (
            <div className="blog">
              <div className="img-box">
                <img src={blog.img} alt="blog.title" />
              </div>
              <div className="blog-title">{blog.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentlyBlog;
