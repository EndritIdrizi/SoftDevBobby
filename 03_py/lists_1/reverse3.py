def reverse3(nums):
  temp = nums[0]
  nums[0] = nums[2]
  nums[2] = temp
  return nums