
const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age:number) => {
    return age > 90
}

const oldAges = [100]
type CourseType = {
    title: string
    price:number
}

const courses = [
    {title: "CSS", price: 100},
    {title: "JS", price: 200},
    {title: "React0", price: 150}
]

const chipPredicate = (course:CourseType) => {
    return course.price < 160
}
const chipCorses = [
    {title: "CSS", price: 100},
    {title: "React", price: 150}
]
