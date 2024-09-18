def max_end3(nums):
  m = nums[0]
  if nums[2] > m:
    m = nums[2]
  return [m,m,m]