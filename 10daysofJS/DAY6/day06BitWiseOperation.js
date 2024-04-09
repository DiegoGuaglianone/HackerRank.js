function getMaxLessThanK(n,k){
    let maxBitwise = 0;
    for (let a = 1; a < n; a++) {
            for (let b = a + 1; b <= n; b++) {
                const bitwiseAnd = a & b;
                if (bitwiseAnd < k && bitwiseAnd > maxBitwise) {
                    maxBitwise = bitwiseAnd;
                }
            }
        }
    return maxBitwise;
}