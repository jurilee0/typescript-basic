class Post {
  constructor(private id: number = 0, protected title: string = "") {}
  getPost() {
    return `postId ${this.id}, postTitle ${this.title}`;
  }
}

class PostB extends Post {
  getPost() {
    return this.title;
  }
}

const post = new Post(1, "title 1");
