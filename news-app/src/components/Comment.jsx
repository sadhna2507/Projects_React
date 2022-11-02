import React, { useState } from "react";
import "./Comment.css";
export default function Comments() {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const handleComment = (e) => {
    setComment(e.target.value);
    // console.log(e.target.value);
  };

  const addComment = () => {
    if (comment.length <= 0) alert("no comment");
    else {
      setCommentList([...commentList, comment]);
      setComment("");
    }
  };

  return (
    // <div className="comment_section">
    //   <div className="comment_wrapper">
    //     <div className="comment_box">
    //       <input
    //         type="text"
    //         placeholder="Share your Comments..."
    //         value={comment}
    //         onChange={handleComment}
    //       />
    //     </div>
    //     <button className="comment_btn" onClick={addComment}>
    //       Send
    //     </button>
    //     <div className="Comment cta_btn">
    //       <i className="fa-solid fa-comment"></i>All Comments{" "}
    //       {commentlist.length}
    //     </div>
    //   </div>
    //   <div className="comments_area">
    //     {commentlist.map((item) => {
    //       return (
    //         <div className="each_comment">
    //           <button
    //             className="del_comment"
    //             onClick={() => {
    //               let afterDel = commentlist.filter((value) => value !== item);
    //               setCommentlist([...afterDel]);
    //             }}
    //           >
    //             <i class="fa-regular fa-trash-can"></i>
    //           </button>
    //           <p>{item}</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>

    <>
      <div className="commentBox">
        <input
          type="text"
          name=""
          id=""
          placeholder="write here..."
          value={comment}
          onChange={handleComment}
        />
        <button className="commentBtn" onClick={addComment}>
          comment
        </button>
      </div>
      <div className="commentList_area">
        {commentList.map((item) => {
          return (
            <div className="commentPart">
              <p>{item}</p>

              <button
                className="detetion"
                onClick={() => {
                  let afterDeletion = commentList.filter(
                    (value) => value !== item
                  );
                  setCommentList([...afterDeletion]);
                }}
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
