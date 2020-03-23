let Shark = []
for (let i = 0; i < 30; i++) {
    Shark.push(Math.sqrt(i)*5 + 10)
}

for (let i = 10; i < 40; i++) {
    Shark.push((-(i*2.6) - 110))
}

for (let i = 50; i >= 7; i--) {
    Shark.push(Math.sqrt(i)*4 + 15)
}

export default Shark;