


test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]

    /*const predicate = (age:number) => {
        return age > 90
    }
    const oldAges = ages.filter(predicate)*/

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})


test("should take courses chipper 160", () => {
    const courses = [
        {title: "CSS", price: 100},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]
    /*const chipPredicate = (course:CourseType) => {
        return course.price < 160
    }
    const chipCorses = courses.filter(chipPredicate)*/


    const chipCorses = courses.filter(course => course.price < 160)

    expect(chipCorses.length).toBe(2)
    expect(chipCorses[0].title).toBe("CSS")
    expect(chipCorses[1].title).toBe("React")
})

test("get only completed tasks", () => {
    const tasks = [
        {id:1, title: "Bread", isDone: false},
        {id:2, title: "Milk", isDone: true},
        {id:3, title: "Salt", isDone: false},
        {id:4, title: "Sugar", isDone: true}
    ]

     const completedTasks = tasks.filter(tasks => tasks.isDone)
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id:1, title: "Bread", isDone: false},
        {id:2, title: "Milk", isDone: true},
        {id:3, title: "Salt", isDone: false},
        {id:4, title: "Sugar", isDone: true}
    ]

    const unCompletedTasks = tasks.filter(tasks => tasks.isDone === false)
    expect(unCompletedTasks.length).toBe(2)
    expect(unCompletedTasks[0].id).toBe(1)
    expect(unCompletedTasks[1].id).toBe(3)
})