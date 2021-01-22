 // parameter list: a list of sorted value
  // parameter target: the value to search for

  // if the list has zero length, then return false

  // determine the slice point:
  // if the list has an even number of elements,
  //   the slice point is the number of elements
  //   divided by two
  // if the list has an odd number of elements,
  //   the slice point is the number of elements
  //   minus one divided by two

  // create an list of the elements from 0 to the
  //   slice point, not including the slice point,
  //   which is known as the "left half"
  // create an list of the elements from the
  //   slice point to the end of the list which is
  //   known as the "right half"

  // if the target is less than the value in the
  //   original array at the slice point, then
  //   return the binary search of the "left half"
  //   and the target

  // if the target is greater than the value in the
  //   original array at the slice point, then
  //   return the binary search of the "right half"
  //   and the target

  // if neither of those is true, return true

function binarySearch(list, target) {
  if (list.length ===  0) return false;

  let slicePoint = Math.floor(list.length/2);

  let firstHalf = list.slice(0,slicePoint);
  let secondHalf = list.slice(slicePoint + 1); //maybe + 1

  if(target < list[slicePoint]) {
    return binarySearch(firstHalf, target);
  } else if (target > list[slicePoint]) {
    return binarySearch(secondHalf, target);
  } else {
    return true;
  }
}



 // parameter list: a list of sorted value
  // parameter target: the value to search for
  // parameter low: the lower index for the search
  // parameter high: the upper index for the search

  // if low is equal to high, then return -1 to indicate
  //   that the value was not found

  // determine the slice point:
  //   if the list between the high index and the low index
  //   has an even number of elements,
  //     the slice point is the number of elements
  //     between high and low divided by two
  //   if the list between the high index and the low index
  //   has an odd number of elements,
  //     the slice point is the number of elements
  //     between high and low minus one, divided by two

  // if the target is less than the value in the
  //   original array at the slice point, then
  //   return the binary search of the array,
  //   the target, low, and the slice point
  // if the target is greater than the value in the
  //   original array at the slice point, then return
  //   the binary search of the array, the target,
  //   the slice point plus one, and high
  // if neither of those is true, return the slice point

function binarySearchIndex(list, target, low = 0, high = list.length - 1) {
  if (low === high) return -1;

  let slicePoint = Math.floor((high + low)/2);

  if (target < list[slicePoint]) {
    return binarySearchIndex(list, target, low, slicePoint);
  } else if (target > list[slicePoint]) {
    return binarySearchIndex(list, target, slicePoint + 1, high);
  } else {
    return slicePoint;
  }
}

//[5, 10, 12, 15, 20, 30, 70], Target 12
//

module.exports = {
  binarySearch,
  binarySearchIndex
};
