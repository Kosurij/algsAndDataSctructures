function twoSum (nums, target) {
    const object = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (diff in object) {
            return [i, object[diff]]
        }

        object[nums[i]] = i
    }
};
