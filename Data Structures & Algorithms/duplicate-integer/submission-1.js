class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let s = new Set();
        for (let x of nums) {
            if (s.has(x)) {
                return true;
            }
            s.add(x);
        }
        return false;
    }
}
