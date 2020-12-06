fetch('https://adventofcode.com/2020/day/6/input')
.then(function(response) {
    response.text().then(input => {
        answers = input.split("\n\n")
        .map( r => r.split("\n"))
        .map( r => r.filter( r => r != ""))

        let parseAnswer = (a) => [... new Set(a.join("").split(""))]

        // part 1
        console.log(
            answers.map(a => parseAnswer(a).length).reduce( (s, c) => s+c)
        )

        // part 2
        console.log(
            answers.map(a => parseAnswer(a)
                .map( v => a.join("").split("").filter(i => i==v).length)
                .filter( v => v >= a.length)
            ).map(a => a.length).reduce( (s,i) => s+i)
        )
    });
});