//
// function DeleteUserAction (userId) {
//     // this = {}
//     this.type = 'DELETE-USER';
//     this.payload = {
//         userId: userId,
//     }
// }
//
// const action1 = new DeleteUserAction(12121)
// const action2 = new DeleteUserAction(335656)
// console.log(action1)
// console.log(action2)


function User (name, site, dob) {
    this.name = name
    this.site = dob
    this.dateOfBirth = dob
}

User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User('Dimych', 'it-incubator', new Date(1988, 1, 1))
const u2 = new User('Artem', 'it-incubator', new Date(1988, 1, 1));

u1.hello()
u2.hello()