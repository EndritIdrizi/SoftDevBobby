def big_diff(nums):
  mx = nums[0]
  mn = nums[0]
  for x in nums:
    if x < mn:
      mn = x
    if x > mx:
      mx = x
  return mx - mn