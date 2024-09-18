def centered_average(nums):
  mx = nums[0]
  mn = nums[0]
  total = 0
  for x in nums:
    if x < mn:
      mn = x
    if x > mx:
      mx = x
    total = (total + x)
  return (total - mx - mn)/(len(nums)-2)