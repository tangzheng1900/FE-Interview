/**
 * @Name: testondev.js
 * @Author: zhengzheng.tang
 * @Update: 06/08/2018
 * @Desc:
 */

class Parent{
    constructor(Props){
        this.siteId = '100000001';
        this.name = 'Parent'
    }

    render(){
        let x=10000;
        console.log(x);
        console.log(this);
    }
}


class Child extends Parent{
    constructor(Props){
        super(Props);
        this.name = 'child';
        this.prop = Props;
    }

}

var p= new Parent();
p.render();

var c = new Child({'age': 28});
c.render();