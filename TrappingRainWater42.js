function trap(height) {
  let leftArray = [],
    rightArray = [],
    maxLeft = height[0],
    maxRight = height[height.length - 1];

  for (let i = 0; i < height.length; i++) {
    maxLeft = Math.max(maxLeft, height[i]);
    leftArray[i] = maxLeft;
  }

  for (let j = height.length - 1; j >= 0; j--) {
    maxRight = Math.max(maxRight, height[j]);
    rightArray[j] = maxRight;
  }

  let ans = 0;

  for (let k = 0; k < height.length; k++) {
    ans += Math.min(leftArray[k], rightArray[k]) - height[k];
  }

  console.log(ans);
}

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
