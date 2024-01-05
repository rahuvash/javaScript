// For Loop
for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log('5 is the best');
  }
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`outer loop ${i}`);
  for (let j = 1; j < 10; j++) {
    // console.log(`inner loop ${j} and outer loop ${i}`);
    // console.log(i + `*` + j + ` = ` + i * j);
  }
}

const my_array = ["flash", "batman", "superman"];
for (let i = 0; i < my_array.length; i++) {
  const element = my_array[i];
  console.log(`my heroes ${element}`);
}

// Break
for (let i = 0; i < 20; i++) {
    const element = i;
    console.log(`${element}`);
    if (i==5) {
        console.log(`break to 5`);
        break;
    }   
}

// Continue
for (let i = 0; i < 20; i++) {
    const element = i;

    if (i==5) {

        console.log(`Skip 5`);
        continue;
    }   
    console.log(`${element}`);
}

//while loop after this