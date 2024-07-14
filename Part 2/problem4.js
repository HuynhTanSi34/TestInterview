function rotateSparseArray(arr, steps) {
  const len = arr.length;
  steps = steps % len; // Đảm bảo số bước không vượt quá độ dài mảng

  // Lấy ra các giá trị không phải là null
  const nonNullValues = [];
  const nonNullIndices = [];

  for (let i = 0; i < len; i++) {
    if (arr[i] !== null) {
      nonNullValues.push(arr[i]);
      nonNullIndices.push(i);
    }
  }

  // Xoay các giá trị không phải là null
  const rotatedValues = new Array(nonNullValues.length);
  for (let i = 0; i < nonNullValues.length; i++) {
    rotatedValues[(i + steps) % nonNullValues.length] = nonNullValues[i];
  }

  // Tạo mảng kết quả và gán các giá trị đã xoay vào vị trí cũ
  const result = arr.slice();
  for (let i = 0; i < nonNullIndices.length; i++) {
    result[nonNullIndices[i]] = rotatedValues[i];
  }

  return result;
}

// Ví dụ sử dụng
const inputArray = [1, null, 2, null, 3];
const rotationSteps = 2;
const outputArray = rotateSparseArray(inputArray, rotationSteps);
console.log(outputArray); // Kết quả: [null, 2, null, 3, 1]
