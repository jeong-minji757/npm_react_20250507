import React from "react";
function LinkCp(props){
  console.log('전달받을 속성값들 :', props);
  console.log('전달받을 속성값들 hrefpr :', props.hrefpr);
  return(
    <a href={props.hrefpr}>{props.textpr}</a>
  );
};

//f(x) = x+1

export default LinkCp;

