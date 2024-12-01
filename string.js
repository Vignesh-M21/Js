const reverseString = (str) => str.split("").reverse().join("");

const countOccurrences = (str, char) =>
  [...str].filter((c) => c === char).length;
console.log(countOccurrences("banana", "a")); // 3

const removeDuplicates = (str) => [...new Set(str)].join("");

const capitalizeWords = (str) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

const containsSubstring = (str, substring) => str.includes(substring);

const repeatString = (str, times) => str.repeat(times);

const truncateString = (str, maxLength) =>
  str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;
console.log(truncateString("JavaScript is amazing", 10)); // 'JavaScript...'

const trimAll = (str) => str.replace(/\s+/g, "");
console.log(trimAll(" hello world ")); // 'helloworld'

const extractNumbers = (str) => str.match(/\d+/g)?.map(Number) || [];
console.log(extractNumbers("abc123xyz456")); // [123, 456]

const randomString = (length) =>
  Array.from({ length }, () => Math.random().toString(36)[2]).join("");
console.log(randomString(8)); // Random 8-character string

const toCamelCase = (str) =>
  str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
console.log(toCamelCase("hello-world_example")); // 'helloWorldExample'

const removeSubstring = (str, sub) => str.replace(new RegExp(sub, "g"), "");
console.log(removeSubstring("hello world", "l")); // 'heo word'

const sortString = (str) => str.split("").sort().join("");
console.log(sortString("dcba")); // 'abcd'

const removeNonAlphanumeric = (str) => str.replace(/[^a-zA-Z0-9]/g, "");
console.log(removeNonAlphanumeric("hello@world!")); // 'helloworld'

const countWords = (str) => str.trim().split(/\s+/).length;

const format = (template, values) =>
  template.replace(/\{(\w+)\}/g, (_, key) => values[key] || "");
console.log(format("Hello, {name}!", { name: "Alice" })); // 'Hello, Alice!'
