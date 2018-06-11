## Bit Blog
<App>
  <CreatePost> <!-- on page posts/new -->
     <Header>
      <h1 /> <!-- BIT BLOG-->
      <nav /> <!-- Home | Authors | Blog -->
    </Header>
    <MainContentCreatePost>
      <h2 />
      <h3 />
      <input />
      <h3 />
      <textarea />
      <button /> <!-- Cancel - redirect on Home -->
      <button /> <!-- Save - redirect on Home -->
    </MainContentCreatePost>
    <Footer /> <!-- Copyrigth (C) BIT 2018 -->
  </CreatePost>
  </App>


  <App>
  <Home>
    <Header>
      <h1 /> <!-- BIT BLOG-->
      <nav /> <!-- Home | Authors | Blog -->
    </Header>
    <MainHome>
      <h2 /> <!-- POSTS -->
      <Posts> <!-- Iteration of posts -->
        <h1 /> <!-- Link to Single Post Page -->
        <p />
      </Posts>
    </MainHome>
    <Footer /> <!-- Copyrigth (C) BIT 2018 -->
  </Home>
  <Authors>
    <Header>
      <h1 /> <!-- BIT BLOG-->
      <nav /> <!-- Home | Authors | Blog -->
    </Header>
    <MainAuthors>
      <MainHeader>
        <h2 {Num}/> <!-- Authors --><!-- Number of Authors -->
      </MainHeader>
      <MainContent>
        <card> <!-- Iteration of Authors -->
          <h2 {Name}{Surname}{Num_of_Posts} /> 
        </card>
      </MainContent>
    </MainAuthors>
    <Footer /> <!-- Copyrigth (C) BIT 2018 -->
  </Authors>
  <About>
    <Header>
      <h1 /> <!-- BIT BLOG-->
      <nav /> <!-- Home | Authors | Blog -->
    </Header>
    <MainContentAbout>
      <h2 />
      <p />
    </MainContentAbout>
    <Footer /> <!-- Copyrigth (C) BIT 2018 -->
  </About>
</App>
  
  
  <Author>
    <Header>
      <h1 /> <!-- BIT BLOG-->
      <nav /> <!-- Home | Authors | Blog -->
    </Header>
    <MainContentAuthor>
      <MainContentAuthorHeader>
      <h2 /> <!-- Single Author-->
      <link /> <!-- back to authors -->
      </MainContentAuthorHeader>
      <NameCard>
        <img />
        <h2 {Name}{Surname} />
        <p {username} />
        <p {email} />
        <p {phone} />
      </NameCard>
      <AddressCard>
        <h2 /> <!-- Address -->
        <p /> <!-- Street -->
        <p /> <!-- City -->
        <p /> <!-- ZipCode -->
        <embedded map /> <!-- Google Map -->
      </AddressCard>
      <CompanyCard>
        <h2 /> <!-- Company-->
        <p /> <!-- Company name -->
        <p /> <!-- companyID -->
      </CompanyCard>
    </MainContentAuthor>
    <Footer /> <!-- Copyrigth (C) BIT 2018 -->
  </Author>


  <SinglePost>
      <Header>
        <h1 /> <!-- BIT BLOG-->
        <nav /> <!-- Home | Authors | Blog -->
      </Header>
      <MainContentSinglePost>
        <MainContentSinglePostBody>
          <h2 /> <!--Post Title-->
          <h3 {authorName} />
          <p /> <!-- Post tetx -->
        </MainContenetSinglePostBody>
        <MainContentSinglePostFooter>
          <p />
          <a /> <!-- three more posts from same author -->
        </MainContentSinglePostFooter>
      </MainContentSinglePost>
      <Footer /> <!-- Copyrigth (C) BIT 2018 -->
  </SinglePost>

  