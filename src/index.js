module.exports = function solveEquation(equation) {
    equation = equation.replace(/\s+/g, "");
    var coefficient = equation.match(/(-?\d+)/gi);
    coefficient.splice(1, 1);
    var discriminant = Math.round((Math.pow(coefficient[1], 2)) - 4 * coefficient[0] * coefficient[2]);
    if (discriminant>0){
        return [Math.round(-coefficient[1] / ( 2 * coefficient[0] ) - Math.sqrt( discriminant ) / ( 2 * coefficient[0] )),
            Math.round(-coefficient[1] / ( 2 * coefficient[0] ) + Math.sqrt( discriminant ) / ( 2 * coefficient[0] ))]
            .sort(function (a, b) {
                if (a > b){
                    return 1;
                }
                else if (a == b){
                    return 0;
                }
                else {
                    return -1;
                }
            });
    }
    else if (discriminant == 0){
        return[Math.round(-coefficient[1] / (2*coefficient[0])), Math.round(-coefficient[1]  / (2*coefficient[0]))]
            .sort(function (a, b) {
                if (a > b){
                    return 1;
                }
                else if (a == b){
                    return 0;
                }
                else {
                    return -1;
                }
            });
    }
    else {
        return [Math.round(-coefficient[1] / (2 * coefficient[0])), Math.round(-Math.sqrt(-discriminant) / (2 * coefficient[0]))]
            .sort(function (a, b) {
            if (a > b){
                return 1;
            }
            else if (a == b){
                return 0;
            }
            else {
                return -1;
            }
        });
    }
}
