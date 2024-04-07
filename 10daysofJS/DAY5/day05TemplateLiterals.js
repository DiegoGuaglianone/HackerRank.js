function sides(literals, ...expressions) {
    const P = expressions[1];
    const A = expressions[0];
    const s1 = (P+Math.sqrt(P*P - 16 * A))/4;
    const s2 = (P-Math.sqrt(P*P - 16 * A))/4;
    let sortedString = [s1,s2].sort((a,b) => a - b);
    return sortedString;
}