function groupAnagrams(strs) {
  const map = new Map();

  strs.forEach((str) => {
    const sortedStr = str.split("").sort().join("");

    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    map.get(sortedStr).push(str);
  });

  return Array.from(map.values());
}

// Example usage
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = groupAnagrams(input);
console.log(output);
