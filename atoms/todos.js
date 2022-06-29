import { atom } from "recoil";

export const todos = atom({
  key: "todoList",
  default: [
    {
      id: 0,
      text: "안무 과제",
      done: true,
    },
    {
      id: 1,
      text: "멋사 제출",
      done: true,
    },
    {
      id: 2,
      text: "js 공부",
      done: true,
    },
    {
        id:3,
        text:"독서" ,
        done: true,
    }
  ],
});