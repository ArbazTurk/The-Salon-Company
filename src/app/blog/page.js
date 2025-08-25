import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section id="section-blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h2>Blog</h2>
                  <div className="small-border"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
