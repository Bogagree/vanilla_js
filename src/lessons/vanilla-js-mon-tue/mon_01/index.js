console.log('yo')

const user = {
    name: "Bob",
    age: 26,
    isMarried: true,
    friends: ["Alex", "Bob", "John"],
    address: {
        city: "Boborujsk",
        street: "Lenina"
    }
}

const students = [
    {name: "Bob"},
    {name: "Alex"},
    {name: "Ann"}
]



const copyUSer = user; //не копия

const realCopyUser = {... user};


copyUSer.friends.push('Anne')

// const deepCopyUser = {...user, friends:[...user.friends]}

const deepCopyUser = {...user, friends:[...user.friends], address: {...user.address}}

const shallowCopyStudent = {... students};

const deepCopyStudents = students.map( student => ({... student}));
// либо второй вариант написания с return
const deepCopyStudents1 = students.map(student => {
   return {... student}
});