/**
 * @Name: checkCircle.js
 * @Author: zhengzheng.tang
 * @Update: 17/05/2018
 * @Desc:
 */


function cycleDetector(obj) {

    var hasCircle = false,            //  定义一个变量，标志是否有环
        cache = [];                   //  定义一个数组，来保存对象类型的属性值

    (function(obj) {
        var keys = Object.keys(obj);              //获取当前对象的属性数组
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = obj[key];
            if (typeof value == 'object' && value !== null) {
                var index = cache.indexOf(value)
                if (index !== -1) {
                    hasCircle = true
                    break
                } else {
                    cache.push(value)
                    arguments.callee(value)
                    cache.pop()      //  注意：这里要推出数据，因为递归返回，后面遍历的属性不是这个数据的子属性
                }
            }
        }
    })(obj)

    return hasCircle
}






function checkCircle(obj) {
    let hasCircle = false;
    let valueArr = [];
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = obj[key];
        if (typeof value === 'object' && value !== null && value !== undefined) {
            if (valueArr.indexOf(value) > -1) {
                hasCircle = true;
                break;
            } else {
                valueArr.push(value);
                checkCircle(value);
                valueArr.pop();
            }
        }
    }
    return hasCircle;
}

const obj = {
    foo: {
        name: 'foo',
        bar: {
            name: 'bar'
            'baz': {
                name: 'baz',
                aChild: null  //待会让它指向obj.foo
            }
        }
    }
}
obj.foo.bar.baz.aChild = obj.foo // foo->bar->baz->aChild->foo 形成环

// var obj = {
//     foo: {
//         name: 'foo',
//         bar: {
//             name: 'bar',
//             baz: {
//                 name: 'baz',
//                 aChild: null
//             }
//         }
//     },
//     aaa: {
//         name: "test",
//         bbb: null
//     }
// }
// obj.aaa.bbb = obj.foo;   //  aaa->bbb->bar->baz->aChild->null 不形成环

console.log(checkCircle(obj));


export default class Person extends Component() {
    constructor(props) {
        super(props);
        this.state = {
            name: "Frank"
        };
        this._handleClick = this._handleClick.bind(this);

    }

    _handleClick(e) {
        console.log(e);
    }

    render() {
        return
        <div>{this.state.name}</div>
    }

}


export default class  extends Component {
    constructor(props){
        super(props)
        this._handleClick=this._handleClick.bind(this) // 改成这样，直接在constructor中把时间绑定好
    }
    render() {
        const {name,age} =this.state;
        return (
            <div>
                <Person name={name} age={age} onClick={this._handleClick}></Person>
            </div>
        )
    }
}

// render中如果有 bind(this)   bind会让函数引用每次都会改变，导致子组件重新渲染    pure render（纯render，提高性能）