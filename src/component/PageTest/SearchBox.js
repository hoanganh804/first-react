import React from "react";

export default function SearchBox(props) {
  return (
    <form action="">
      <input type="text" onChange={(e) => props.onChangeText(e.target.value)} />
    </form>
  );
}
