const sum_to_n_a = (n) => {
  return (n * (n + 1))/2
}

const sum_to_n_b = (n) => {
  copy = n
  sum = 0
  while (copy > 0) {
    sum += copy
    copy--
  }
  return sum
}

const sum_to_n_c = (n) => {
  sum = 0
  for (i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

const sum_to_n_d = (n) => {
  if (n == 0) return 0
  else return sum_to_n_d(n - 1) + n
}

const sum_to_n_e = (n) => {
  const helper = (n, acc) => {
    if (n == 0) return acc
    else return helper(n - 1, acc + n)
  }
  return helper(n, 0)
}

// Test
console.log(sum_to_n_a(0))
console.log(sum_to_n_a(10))
console.log(sum_to_n_b(0))
console.log(sum_to_n_b(10))
console.log(sum_to_n_c(0))
console.log(sum_to_n_c(10))
console.log(sum_to_n_d(0))
console.log(sum_to_n_d(10))
console.log(sum_to_n_e(0))
console.log(sum_to_n_e(10))
