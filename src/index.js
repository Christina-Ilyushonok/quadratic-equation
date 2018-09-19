module.exports = function solveEquation(equation) {
    let arrValues = equation.replace(/\s/g, '').match(/[\d+-]\d+/g);
    const a = +(arrValues[0]);
    const b = +(arrValues[1]);
    const c = +(arrValues[2]);
    const D = Math.pow(b,2) - 4*a*c;
    const x1 = Math.round((-1)*b + Math.sqrt(D)) / (2*a);
    const x2 = Math.round((-1)*b - Math.sqrt(D)) / (2*a);
    let res = [];
    return res.concat(x1, x2).sort((a, b) => a - b);
}