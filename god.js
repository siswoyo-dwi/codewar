class God{
    static create() {
        const Adam = new Man()
        const Eve = new Woman()
        return [Adam,Eve];
                    }
        }
class human{
    constructor() {}
  }

class Man extends human {
    constructor() {
        super()
      }
    }
class Woman extends human {
    constructor() {
        super();
          }
        }

  

let humans = God.create()
console.log(humans[0] instanceof Man, true, 'Expected Adam to be a Man');
