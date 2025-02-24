const page = 2; 
const postsPerPage = 10;

const skipCount = (page - 1) * postsPerPage;


db.posts.find().skip(skipCount).limit(postsPerPage);