// class DeleteUserAction {
//     constructor() {
//         this.type = 'DELETE-USER';
//         this.payload = {
//             userId: userId,
//         }
//     }
// }


class User {
    #name = ''
    constructor(name, site, dob) {
        this.#name = name;
        this.site = site;
        this.dateOfBirth = dob;
        this.counter = 0
    }

    // getName() {
    //     return this.#name;
    // }
    //
    // setName(value) {
    //     if (value === 'Igor') throw new Error('Igor is not allowed name')
    //     this.#name = value
    //
    // }

    get name() {
        return this.#name;
    }

    set name(value) {
        if (value === 'Igor') throw new Error('Igor is not allowed name')
        this.#name = value
    }

    hello() {
        this.counter++
        console.log(`I am ${this.name} from ${this.site}`)
    }
}

const u1 = new User('Dimych', 'it-incubator', new Date(1988, 1, 2));
const u2 = new User('Artem', 'it-incubator', new Date(1988, 1, 1));

// console.log(u1.hello === User.prototype.hello)

// u1.hello()
// u2.hello()

// console.log(u1.getName());

// u1.setName('Igor')
// console.log(u1.getName())

u1.name = 'Andrew';
// console.log(u1.name)

// const users = [u1, u2]
// users.forEach(user => user.hello())

class Coder extends User {
    constructor(name, site, dob, tech) {
        super(name, site, dob)
        this.tech = tech
    }

    code () {
        console.log(`I am ${this.name}, here is my code ${this.tech} ....`)
    }

    hello () {
        super.hello();
        console.log('Go away')
    }
}

const coder1 = new Coder('Andrew Ingener', 'it-incubator', new Date(1991, 2, 25), 'c#');
coder1.code()
coder1.hello()









