function isPrime(number) {
	if (number <= 1) return false;
	if (number <= 3) return true;

	if (number % 2 === 0 || number % 3 === 0) return false;

	let i = 5;

	while (i * i <= number) {
	  if (number % i === 0 || number % (i + 2) === 0) return false;
	  i += 6;
	}

	return true;
}
  
function countPrimeNumbers() {
	const startTime = performance.now();
	let count = 0;

	for (let i = 2; i <= 100; i++) {
	  if (isPrime(i)) {
		count++;
	  }
	}

	const endTime = performance.now();
	const executionTime = endTime - startTime;

	console.log(`Execution time of counting prime numbers was ${executionTime} milliseconds.`);

	return count;
}
  
const primeCount = countPrimeNumbers();
console.log(`Number of prime numbers from 2 to 100: ${primeCount}`);
  