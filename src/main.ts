let hello = "hello world";

if (typeof hello === "string") {
  console.log(hello.toUpperCase());
} else if (typeof hello === "number") {
  let result = hello * 2;
  console.log(result);
} else if (typeof hello === "boolean") {
  console.log(hello ? "si" : "no");
} else {
  console.log("tipo non supportato");
}
