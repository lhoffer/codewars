// Never solved
function index(array, n) {
if (array.length < n) {
        return -1
    }  else if (array.length >= n ) { 
        for (let i = 0; i < array.length; i++) {
            if (array.indexOf(i) === n) {
            return i**n
            } 
        }
    }
}   
// codewars solution 1
function index( array, n ) {
    return (array.length) > n ? Math.pow(array[n], n) : -1;
}

// codewars solution 2
function index(array, n){
    //your code here
    return array[n] ** n || -1;
  }
