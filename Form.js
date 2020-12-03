class Form{

    constructor(){

        this.greeting = createElement('h2');
        this.input = createInput("");
        this.email = createInput("");
        this.email1 = createElement('h3');
        this.button = createButton('submit');
        this.title = createElement('h2');
        this.name = createElement('h3');
        this.reset = createButton('reset');

        this.input.position(650,120);
        this.email.position(650,150);
        this.input.style('width', '160px');
        this.email.style('width', '160px');
        this.button.style('width', '100px');
        this.button.style('height', '40px');
        this.button.style('background', 'yellow');
        this.reset.style('width', '70px');
        this.reset.style('height', '40px');
        this.reset.style('background','red');
        

        //question1
        this.question1 = createElement('h4',"1. Does the school have the basic necessities required for the student?")
        this.radio1 = createRadio('h5');
        this.radio1.option('YES');
        this.radio1.option('NO');
        this.radio1.style('width','1500px');

         //question2
         this.question2 = createElement('h4',"2. Do you like school?")
         this.radio2 = createRadio('h5');
         this.radio2.option('YES');
         this.radio2.option('NO');
         this.radio2.style('width','1500px');
        
          //question3
        this.question3 = createElement('h4',"3. Do you like Math?")
        this.radio3 = createRadio('h5');
        this.radio3.option('YES');
        this.radio3.option('NO');
        this.radio3.style('width','1500px');
        
         //question4
         this.question4 = createElement('h4',"4. Do you like school sports?")
         this.radio4 = createRadio('h5');
         this.radio4.option('YES');
         this.radio4.option('NO');
         this.radio4.style('width','1500px');
        
          //question5
        this.question5 = createElement('h4',"5. Do you like online school more than regular school?")
        this.radio5 = createRadio('h5');
        this.radio5.option('YES');
        this.radio5.option('NO');
        this.radio5.style('width','1500px');
        

    }


}