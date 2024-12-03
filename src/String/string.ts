export const reverseString = (str: string) => str.split("").reverse().join("");

export const countOccurrences = (str: string, char: string) =>
  [...str].filter((c) => c === char).length;
// console.log(countOccurrences("banana", "a")); // 3

export const removeDuplicates = (str: string) => [...new Set(str)].join("");

export const capitalizeWords = (str: string) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());

export const containsSubstring = (str: string, substring: string) =>
  str.includes(substring);

export const repeatString = (str: string, times: number) => str.repeat(times);

export const truncateString = (str: string, maxLength: number) =>
  str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;
// console.log(truncateString("JavaScript is amazing", 10)); // 'JavaScript...'

export const trimAll = (str: string) => str.replace(/\s+/g, "");
// console.log(trimAll(" hello world ")); // 'helloworld'

export const extractNumbers = (str: string) =>
  str.match(/\d+/g)?.map(Number) || [];
// console.log(extractNumbers("abc123xyz456")); // [123, 456]

export const randomString = (length: number) =>
  Array.from({ length }, () => Math.random().toString(36)[2]).join("");
// console.log(randomString(8)); // Random 8-character string

export const toCamelCase = (str: string) =>
  str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
// console.log(toCamelCase("hello-world_example")); // 'helloWorldExample'

export const removeSubstring = (str: string, sub: string) =>
  str.replace(new RegExp(sub, "g"), "");
// console.log(removeSubstring("hello world", "l")); // 'heo word'

export const sortString = (str: string) => str.split("").sort().join("");
// console.log(sortString("dcba")); // 'abcd'

export const removeNonAlphanumeric = (str: string) =>
  str.replace(/[^a-zA-Z0-9]/g, "");
// console.log(removeNonAlphanumeric("hello@world!")); // 'helloworld'

export const countWords = (str: string) => str.trim().split(/\s+/).length;

export const format = (template: string, values: string) =>
  template.replace(/\{(\w+)\}/g, (_, key) => values[key] || "");
// console.log(format("Hello, {name}!", { name: "Alice" })); // 'Hello, Alice!'
