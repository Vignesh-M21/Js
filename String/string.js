export const reverseString = (str) => str.split("").reverse().join("");

export const countOccurrences = (str, char) =>
  [...str].filter((c) => c === char).length;
// console.log(countOccurrences("banana", "a")); // 3

export const removeDuplicates = (str) => [...new Set(str)].join("");

export const capitalizeWords = (str) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

export const containsSubstring = (str, substring) => str.includes(substring);

export const repeatString = (str, times) => str.repeat(times);

export const truncateString = (str, maxLength) =>
  str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;
// console.log(truncateString("JavaScript is amazing", 10)); // 'JavaScript...'

export const trimAll = (str) => str.replace(/\s+/g, "");
// console.log(trimAll(" hello world ")); // 'helloworld'

export const extractNumbers = (str) => str.match(/\d+/g)?.map(Number) || [];
// console.log(extractNumbers("abc123xyz456")); // [123, 456]

export const randomString = (length) =>
  Array.from({ length }, () => Math.random().toString(36)[2]).join("");
// console.log(randomString(8)); // Random 8-character string

export const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
// console.log(toCamelCase("hello-world_example")); // 'helloWorldExample'

export const removeSubstring = (str, sub) =>
  str.replace(new RegExp(sub, "g"), "");
// console.log(removeSubstring("hello world", "l")); // 'heo word'

export const sortString = (str) => str.split("").sort().join("");
// console.log(sortString("dcba")); // 'abcd'

export const removeNonAlphanumeric = (str) => str.replace(/[^a-zA-Z0-9]/g, "");
// console.log(removeNonAlphanumeric("hello@world!")); // 'helloworld'

export const countWords = (str) => str.trim().split(/\s+/).length;

export const format = (template, values) =>
  template.replace(/\{(\w+)\}/g, (_, key) => values[key] || "");
// console.log(format("Hello, {name}!", { name: "Alice" })); // 'Hello, Alice!'
