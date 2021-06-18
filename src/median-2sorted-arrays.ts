var findMedianSortedArrays = function (nums1, nums2) {
  let newArr = []
  while (nums1.length > 0 && nums2.length > 0) {
    if (nums1[0] < nums2[0]) {
      newArr.push(nums1.shift())
    } else {
      newArr.push(nums2.shift())
    }
  }
  newArr = [...newArr, ...nums1, ...nums2]
  console.log(newArr)
  let med = newArr.length / 2
  console.log(med)
  if (Number.isInteger(med)) {
    console.log(newArr[med - 1], newArr[med])
    return (newArr[med - 1] + newArr[med]) / 2
  } else {
    return newArr[Math.ceil(med) - 1]
  }
};