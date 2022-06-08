const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What's your name? ", (answer) => {
    rl.question("What's an activity you like doing? ", (answer1) => {
        rl.question("What do you listen to while doing that? ", (answer2) => {
            rl.question("Which meal is your favorite? (eg: dinner, brunch, etc) ", (answer3) => {
                rl.question("What's your favorite thing to eat for that meal? ", (answer4) => {
                    rl.question("Which sport is your favorite? ", (answer5) => {
                        rl.question("What is your super power? ", (answer6) => {
                            console.log(`${answer} likes doing ${answer1} while listening to ${answer2}. His/her favorite meal is ${answer3}. His/her favorite thing to eat is ${answer4}. His/her favorite sport is ${answer5}. His/her super power is ${answer6}`);
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});
