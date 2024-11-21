// 호출 시그니처
interface getLikeNumber {
  (like: number): number;
}

interface Post {
  id: number;
  title: string;
  // getLikeNumber: (like: number) => number;
  getLikeNumber: getLikeNumber;
}

const post1: Post = {
  id: 1,
  title: "post1",
  getLikeNumber(like: number) {
    return like;
  },
};

post1.getLikeNumber(1);

// 인덱스 시그니처
interface PostB {
  [key: string]: unknown;
  id: number;
  title: string;
}

const post2: PostB = {
  id: 1,
  title: "post2",
};

post2["desc"] = "decs~";

// 배열 인덱스 시그니처
interface Names {
  [item: number]: string;
}
const userNames: Names = ["kim", "lee"];
userNames[0];
