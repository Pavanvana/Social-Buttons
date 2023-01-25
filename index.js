const Button = (props) => {
  //  Write your code here.
  const { text, style } = props;
  return <button className={style}>{text}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="btn-card">
      <Button text="Like" style="like-btn" />
      <Button text="Comment" style="comment-btn" />
      <Button text="Share" style="share-btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
