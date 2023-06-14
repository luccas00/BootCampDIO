
function Fatorial(n) {
    if(n <= 1) {
        return 1;
    } else {
        return Fatorial(n - 1) * n;
    }
}

function Head() {
    console.log("Head");
}

module.exports = {Fatorial, Head};